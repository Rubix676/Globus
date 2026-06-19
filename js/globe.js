/* GLOBUS Edu — live rotating globe (D3 orthographic, canvas).
   Real country borders (contours) + dotted land + great-circle arcs
   from Tashkent to Berlin, London, New York, Tokyo, St. Petersburg.
   Spins left, one revolution per 60s. Requires global `d3`. */
(() => {
  "use strict";

  const canvas = document.getElementById("globeCanvas");
  if (!canvas || typeof d3 === "undefined") return;
  const ctx = canvas.getContext("2d");

  const TASHKENT = [69.24, 41.31];
  const CITIES = [
    [13.40, 52.52],   // Berlin
    [-0.13, 51.51],   // London
    [-74.00, 40.71],  // New York
    [139.69, 35.69],  // Tokyo
    [30.31, 59.94]    // St. Petersburg
  ];

  const COL = {
    sphere: "rgba(219,234,254,0.45)",
    grat: "rgba(147,197,253,0.30)",
    dot: "59,130,246",        // #3B82F6
    border: "rgba(29,78,216,0.55)", // #1D4ED8
    rim: "rgba(37,99,235,0.55)",
    arc: "rgba(34,211,238,0.95)",   // cyan
    glow: "rgba(56,189,248,0.9)"
  };

  let countries = null, landDots = [], width = 0, height = 0, dpr = 1;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const projection = d3.geoOrthographic().clipAngle(90).precision(0.4);
  const path = d3.geoPath(projection, ctx);
  const graticule = d3.geoGraticule10();

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const r = Math.min(width, height) / 2 - 2;
    projection.scale(r).translate([width / 2, height / 2]);
  }

  function visible(point, center) {
    return d3.geoDistance(point, center) < Math.PI / 2 - 0.01;
  }

  function draw(lambda) {
    projection.rotate([lambda, -18]);
    const center = [-lambda, 18];
    ctx.clearRect(0, 0, width, height);

    // sphere fill
    ctx.beginPath(); path({ type: "Sphere" });
    ctx.fillStyle = COL.sphere; ctx.fill();

    // graticule
    ctx.beginPath(); path(graticule);
    ctx.lineWidth = 0.6; ctx.strokeStyle = COL.grat; ctx.stroke();

    // dotted land
    for (let i = 0; i < landDots.length; i++) {
      const p = landDots[i];
      if (!visible(p, center)) continue;
      const xy = projection(p);
      if (!xy) continue;
      const c = d3.geoDistance(p, center);
      const a = 0.85 * (0.45 + 0.55 * Math.cos(c));
      ctx.beginPath();
      ctx.arc(xy[0], xy[1], 1.15, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${COL.dot},${a.toFixed(3)})`;
      ctx.fill();
    }

    // country contours
    if (countries) {
      ctx.beginPath(); path(countries);
      ctx.lineWidth = 0.7; ctx.strokeStyle = COL.border; ctx.stroke();
    }

    // rim
    ctx.beginPath(); path({ type: "Sphere" });
    ctx.lineWidth = 1.4; ctx.strokeStyle = COL.rim; ctx.stroke();

    // connection arcs
    ctx.save();
    ctx.shadowColor = COL.glow; ctx.shadowBlur = 8;
    ctx.lineWidth = 1.6; ctx.strokeStyle = COL.arc;
    CITIES.forEach((c) => {
      ctx.beginPath();
      path({ type: "LineString", coordinates: arcPoints(TASHKENT, c) });
      ctx.stroke();
    });
    ctx.restore();

    // moving pulses
    const t = (Date.now() % 3000) / 3000;
    ctx.save();
    ctx.shadowColor = "#fff"; ctx.shadowBlur = 8;
    CITIES.forEach((c, idx) => {
      const f = (t + idx * 0.18) % 1;
      const pp = d3.geoInterpolate(TASHKENT, c)(f);
      if (!visible(pp, center)) return;
      const xy = projection(pp);
      if (!xy) return;
      ctx.beginPath(); ctx.arc(xy[0], xy[1], 2.1, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff"; ctx.fill();
    });
    ctx.restore();

    // endpoints
    CITIES.forEach((c) => node(c, center, 2.6, "#ffffff"));
    node(TASHKENT, center, 4, "#22d3ee");
    node(TASHKENT, center, 1.8, "#ffffff");
  }

  function node(point, center, r, color) {
    if (!visible(point, center)) return;
    const xy = projection(point);
    if (!xy) return;
    ctx.save();
    ctx.shadowColor = color; ctx.shadowBlur = 10;
    ctx.beginPath(); ctx.arc(xy[0], xy[1], r, 0, 2 * Math.PI);
    ctx.fillStyle = color; ctx.fill();
    ctx.restore();
  }

  function arcPoints(a, b) {
    const interp = d3.geoInterpolate(a, b);
    const out = [];
    for (let i = 0; i <= 48; i++) out.push(interp(i / 48));
    return out;
  }

  let start = null, raf = null, last = -1;
  function frame(ts) {
    if (start === null) start = ts;
    const elapsed = (ts - start) / 1000;
    const lambda = -(elapsed * (360 / 60));   // left spin, 60s / revolution
    // ~30fps cap
    if (ts - last > 32) { draw(lambda); last = ts; }
    raf = requestAnimationFrame(frame);
  }

  function startGlobe() {
    resize();
    if (reduce) { draw(-35); return; }
    cancelAnimationFrame(raf);
    start = null; last = -1;
    raf = requestAnimationFrame(frame);
  }

  Promise.all([
    fetch("assets/countries-110m.min.json").then((r) => r.json()),
    fetch("assets/land-dots.json").then((r) => r.json())
  ]).then(([c, dots]) => {
    countries = c;
    landDots = dots;
    startGlobe();
  }).catch(() => { /* keep hero usable even if data fails */ });

  let rt;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => { resize(); if (reduce) draw(-35); }, 150);
  });

  // pause when offscreen to save battery
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { if (!reduce && raf == null) { start = null; raf = requestAnimationFrame(frame); } }
        else { cancelAnimationFrame(raf); raf = null; }
      });
    }, { threshold: 0.01 });
    io.observe(canvas);
  }
})();
