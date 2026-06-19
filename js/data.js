/* GLOBUS Edu — shared data (teachers, courses, i18n, reviews, icons).
   Extracted verbatim from the previous build so all functional content is preserved. */
window.GLOBUS_DATA = (() => {
  "use strict";

  const LEADS_ENDPOINT = "https://crm.globusedu.uz/api/public/leads";
  const TENANT_SLUG = "globusedu";
  const CONTACT_PHONE = "+998941055885";
  const CONTACT_PHONE_LABEL = "+998 94 105 58 85";
  const CONTACT_EMAIL = "globusedu@globusedu.uz";
  const INSTAGRAM_URL = "https://www.instagram.com/globus_talim/";
  const TELEGRAM_URL = "https://t.me/GlobusEdu";

  const TEACHERS = [
    {
      id: "teacher1", name: "Yusupov Numonjon", course: "english", image: "assets/teachers/teacher2.png",
      subject: { uz: "Ingliz tili / IELTS / CEFR", ru: "Английский / IELTS / CEFR", en: "English / IELTS / CEFR" },
      short: { uz: "IELTS va CEFR bo‘yicha natijaga yo‘naltirilgan tajribali o‘qituvchi.", ru: "Опытный преподаватель IELTS и CEFR с фокусом на результат.", en: "Experienced IELTS and CEFR teacher focused on real results." },
      bullets: {
        uz: ["IELTS va CEFR formatini chuqur biladi", "Speaking va writing bo‘yicha aniq feedback beradi", "Har bir o‘quvchiga individual reja tuzadi"],
        ru: ["Глубоко знает формат IELTS и CEFR", "Даёт точную обратную связь по speaking и writing", "Составляет индивидуальный план каждому ученику"],
        en: ["Knows the IELTS and CEFR format in depth", "Gives precise feedback on speaking and writing", "Builds an individual plan for every student"]
      }
    },
    {
      id: "teacher2", name: "Muattarxon Shavkatmirzayeva", course: "english", image: "assets/teachers/teacher1.png",
      subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" },
      short: { uz: "Ingliz tilini bosqichma-bosqich va amaliy o‘rgatadigan o‘qituvchi.", ru: "Преподаватель, который учит английскому пошагово и практично.", en: "Teacher who builds English step by step through real practice." },
      bullets: {
        uz: ["Grammatikani sodda tilda tushuntiradi", "So‘z boyligini amaliy mashqlar bilan oshiradi", "Boshlang‘ich darajadan ishonchli baza yaratadi"],
        ru: ["Объясняет грамматику простым языком", "Расширяет словарный запас через практику", "Создаёт уверенную базу с начального уровня"],
        en: ["Explains grammar in simple language", "Grows vocabulary through practical tasks", "Builds a confident base from the start level"]
      }
    },
    {
      id: "teacher3", name: "Mehribonu Nazirova", course: "english", image: "assets/teachers/teacher3.png",
      subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" },
      short: { uz: "Grammar va speaking bo‘yicha amaliy darslar olib boradigan o‘qituvchi.", ru: "Преподаватель практических уроков по grammar и speaking.", en: "Teacher who runs practical grammar and speaking lessons." },
      bullets: {
        uz: ["Speaking ko‘nikmasini muntazam mashq qildiradi", "Tipik xatolarni tezda aniqlab tuzatadi", "Darslarni qiziqarli va jonli tarzda o‘tadi"],
        ru: ["Регулярно отрабатывает навык speaking", "Быстро находит и исправляет типичные ошибки", "Делает уроки живыми и интересными"],
        en: ["Practises speaking skills regularly", "Quickly spots and fixes typical mistakes", "Keeps lessons lively and engaging"]
      }
    },
    {
      id: "teacher4", name: "Sirojiddin Tojiddinov", course: "math", image: "assets/teachers/teacher4.png",
      subject: { uz: "Matematika / SAT", ru: "Математика / SAT", en: "Mathematics / SAT" },
      short: { uz: "Matematika va SAT bo‘yicha tizimli tayyorlaydigan o‘qituvchi.", ru: "Преподаватель, системно готовящий по математике и SAT.", en: "Teacher who prepares for mathematics and SAT systematically." },
      bullets: {
        uz: ["SAT math formatini batafsil o‘rgatadi", "Mantiqiy fikrlash va tez hisoblashni rivojlantiradi", "Mavzularni sodda va tushunarli yetkazadi"],
        ru: ["Подробно разбирает формат SAT math", "Развивает логику и быстрый счёт", "Объясняет темы просто и понятно"],
        en: ["Teaches the SAT math format in detail", "Develops logic and fast calculation", "Explains topics in a clear, simple way"]
      }
    },
    {
      id: "teacher5", name: "Avazbekova Sarvinoz", course: "russian", image: "assets/teachers/teacher8.png",
      subject: { uz: "Rus tili", ru: "Русский язык", en: "Russian language" },
      short: { uz: "Rus tili bo‘yicha aniq va tushunarli dars beradigan o‘qituvchi.", ru: "Преподаватель русского языка с понятными, чёткими уроками.", en: "Russian teacher with clear and well-structured lessons." },
      bullets: {
        uz: ["Grammatika va savodxonlikni mustahkamlaydi", "So‘zlashuv nutqini ishonchli rivojlantiradi", "Imtihon va sertifikatga tizimli tayyorlaydi"],
        ru: ["Укрепляет грамматику и грамотность", "Уверенно развивает разговорную речь", "Системно готовит к экзамену и сертификату"],
        en: ["Strengthens grammar and literacy", "Builds confident speaking skills", "Prepares for exams and certificates systematically"]
      }
    },
    {
      id: "teacher6", name: "Asadbek Qobulov", course: "math", image: "assets/teachers/teacher5.png",
      subject: { uz: "Matematika", ru: "Математика", en: "Mathematics" },
      short: { uz: "Matematikani sodda va tizimli tushuntiradigan o‘qituvchi.", ru: "Преподаватель, объясняющий математику просто и системно.", en: "Teacher who explains mathematics simply and systematically." },
      bullets: {
        uz: ["Asosiy mavzularni mustahkam o‘rgatadi", "Misol yechishda aniq usullarni beradi", "O‘quvchining darajasiga moslashadi"],
        ru: ["Прочно объясняет базовые темы", "Даёт чёткие методы решения задач", "Подстраивается под уровень ученика"],
        en: ["Teaches core topics thoroughly", "Gives clear methods for solving problems", "Adapts to the student’s level"]
      }
    },
    {
      id: "teacher7", name: "Abdulvohidova Oydinoy", course: "native", image: "assets/teachers/teacher6.png",
      subject: { uz: "Ona tili", ru: "Родной язык", en: "Native language" },
      short: { uz: "Ona tili bo‘yicha savodxonlikni mustahkamlaydigan o‘qituvchi.", ru: "Преподаватель, укрепляющий грамотность по родному языку.", en: "Teacher who strengthens literacy in the native language." },
      bullets: {
        uz: ["Savodxonlik va test ko‘nikmasini oshiradi", "Imlo va matn tahlilini puxta o‘rgatadi", "Davlat sertifikatiga ishonchli tayyorlaydi"],
        ru: ["Повышает грамотность и тестовые навыки", "Учит орфографии и анализу текста", "Уверенно готовит к госсертификату"],
        en: ["Improves literacy and test skills", "Teaches spelling and text analysis well", "Prepares confidently for the state certificate"]
      }
    },
    {
      id: "teacher8", name: "Muhammadjon Sobirov", course: "native", image: "assets/teachers/teacher7.png",
      subject: { uz: "Ona tili", ru: "Родной язык", en: "Native language" },
      short: { uz: "Davlat sertifikati formatiga tayyorlaydigan tajribali o‘qituvchi.", ru: "Опытный преподаватель, готовящий к формату госсертификата.", en: "Experienced teacher preparing for the state certificate format." },
      bullets: {
        uz: ["Sertifikat formatini batafsil o‘rgatadi", "Test topshirish strategiyasini beradi", "Bilimni amaliy mashqlar bilan mustahkamlaydi"],
        ru: ["Подробно разбирает формат сертификата", "Даёт стратегию выполнения тестов", "Закрепляет знания практическими заданиями"],
        en: ["Teaches the certificate format in detail", "Gives a clear test-taking strategy", "Reinforces knowledge with practical tasks"]
      }
    },
    {
      id: "teacher9", name: "Mashura Mamasoliyeva", course: "german", image: "assets/teachers/teacher9.png",
      subject: { uz: "Nemis tili", ru: "Немецкий язык", en: "German" },
      short: { uz: "Nemis tilida mustahkam baza yaratishga yordam beradigan o‘qituvchi.", ru: "Преподаватель, помогающий создать крепкую базу в немецком.", en: "Teacher who helps build a strong foundation in German." },
      bullets: {
        uz: ["A1 dan yuqori darajalargacha o‘rgatadi", "Talaffuz va grammatikani puxta beradi", "Imtihon formatlariga bosqichma-bosqich tayyorlaydi"],
        ru: ["Учит с уровня A1 и выше", "Хорошо ставит произношение и грамматику", "Пошагово готовит к форматам экзаменов"],
        en: ["Teaches from A1 level and above", "Builds pronunciation and grammar well", "Prepares for exam formats step by step"]
      }
    },
    {
      id: "teacher10", name: "Abdusamatova Moxchexraxon", course: "korean", image: "assets/teachers/teacher10.png",
      subject: { uz: "Koreys tili", ru: "Корейский язык", en: "Korean" },
      short: { uz: "Koreys tilini amaliy va bosqichma-bosqich o‘rgatadigan o‘qituvchi.", ru: "Преподаватель корейского языка с практичным пошаговым подходом.", en: "Korean teacher with a practical, step-by-step approach." },
      bullets: {
        uz: ["Koreys alifbosi va grammatikani o‘rgatadi", "Kundalik muloqot nutqini rivojlantiradi", "TOPIK imtihoniga tizimli tayyorlaydi"],
        ru: ["Учит корейскому алфавиту и грамматике", "Развивает навыки повседневного общения", "Системно готовит к экзамену TOPIK"],
        en: ["Teaches the Korean alphabet and grammar", "Develops everyday communication skills", "Prepares for the TOPIK exam systematically"]
      }
    },
    {
      id: "teacher11", name: "Rasulberdiyev Abdulhoshim", course: "history", image: "assets/teachers/teacher11.png",
      subject: { uz: "Tarix", ru: "История", en: "History" },
      short: { uz: "Tarix fanidan tizimli va tushunarli tayyorlaydigan o‘qituvchi.", ru: "Преподаватель истории с системной и понятной подготовкой.", en: "History teacher with structured and clear preparation." },
      bullets: {
        uz: ["Sana va voqealarni tizimli o‘rgatadi", "Test topshiriqlarini puxta ishlaydi", "Mavzularni qiziqarli bog‘lab tushuntiradi"],
        ru: ["Системно объясняет даты и события", "Тщательно отрабатывает тестовые задания", "Связывает темы и объясняет интересно"],
        en: ["Teaches dates and events systematically", "Works through test tasks thoroughly", "Connects topics and explains them engagingly"]
      }
    },
    {
      id: "teacher12", name: "Rasulova Nodirabegim", course: "compit", image: "",
      subject: { uz: "Kompyuter / IT", ru: "Компьютер / IT", en: "Computer / IT" },
      short: { uz: "Kompyuter savodxonligi va IT asoslarini o‘rgatadigan o‘qituvchi.", ru: "Преподаватель компьютерной грамотности и основ IT.", en: "Teacher of computer literacy and the basics of IT." },
      bullets: {
        uz: ["Kompyuter savodxonligini noldan o‘rgatadi", "Dasturlash asoslarini amaliy ko‘rsatadi", "Zamonaviy IT vositalari bilan ishlatadi"],
        ru: ["Учит компьютерной грамотности с нуля", "Показывает основы программирования на практике", "Работает с современными IT-инструментами"],
        en: ["Teaches computer literacy from zero", "Shows programming basics through practice", "Works with modern IT tools"]
      }
    }
  ];

  const COURSES = {
    english: {
      order: 1,
      title: { uz: "Ingliz tili IELTS/CEFR", ru: "Английский IELTS/CEFR", en: "English IELTS/CEFR" },
      short: { uz: "General English, IELTS va CEFR tayyorgarligi.", ru: "General English, подготовка к IELTS и CEFR.", en: "General English, IELTS and CEFR preparation." },
      desc: { uz: "Ingliz tilini umumiy darajadan imtihon tayyorgarligigacha o‘rganing. Sinov darsida darajangiz aniqlanadi va mos yo‘nalish tavsiya qilinadi.", ru: "Изучайте английский от общего уровня до подготовки к экзаменам. На пробном уроке определим ваш уровень и подберём направление.", en: "Learn English from general level to exam preparation. A trial lesson identifies your level and the right direction." },
      features: {
        uz: ["IELTS va CEFR imtihonlariga tayyorgarlik", "Speaking, grammar, listening, reading va writing", "Darajaga qarab guruh yoki individual format"],
        ru: ["Подготовка к экзаменам IELTS и CEFR", "Speaking, grammar, listening, reading и writing", "Групповой или индивидуальный формат по уровню"],
        en: ["IELTS and CEFR exam preparation", "Speaking, grammar, listening, reading and writing", "Group or individual format based on your level"]
      }
    },
    russian: {
      order: 2,
      title: { uz: "Rus tili", ru: "Русский язык", en: "Russian language" },
      short: { uz: "Grammatika, so‘zlashuv va imtihon tayyorgarligi.", ru: "Грамматика, разговорная практика и подготовка к экзаменам.", en: "Grammar, speaking and exam preparation." },
      desc: { uz: "Rus tili kursida grammatika mustahkamlanadi, nutq rivojlanadi va kerakli imtihon yoki sertifikatga tayyorgarlik ko‘riladi.", ru: "Курс русского языка укрепляет грамматику, развивает речь и готовит к нужному экзамену или сертификату.", en: "The Russian course strengthens grammar, develops speaking and prepares for the required exam or certificate." },
      features: {
        uz: ["Grammatika va savodxonlik bo‘yicha tizimli darslar", "So‘zlashuv, o‘qish va yozish ko‘nikmalari", "Sinov darsi orqali darajani aniqlash"],
        ru: ["Системные уроки по грамматике и грамотности", "Навыки разговора, чтения и письма", "Определение уровня на пробном уроке"],
        en: ["Structured grammar and literacy lessons", "Speaking, reading and writing skills", "Level check through a trial lesson"]
      }
    },
    math: {
      order: 3,
      title: { uz: "Matematika SAT", ru: "Математика SAT", en: "Mathematics SAT" },
      short: { uz: "SAT va mental arifmetika.", ru: "SAT и ментальная арифметика.", en: "SAT and mental arithmetic." },
      desc: { uz: "Matematika yo‘nalishida SAT tayyorgarligi, mantiqiy fikrlash va mental arifmetika bo‘yicha darslar tashkil qilinadi.", ru: "Направление включает подготовку к SAT, развитие логики и занятия по ментальной арифметике.", en: "This direction includes SAT preparation, logical thinking and mental arithmetic lessons." },
      features: {
        uz: ["SAT math va asosiy matematik ko‘nikmalar", "Mental arifmetika va tez hisoblash", "Sinov darsi orqali darajani aniqlash"],
        ru: ["SAT math и базовые математические навыки", "Ментальная арифметика и быстрый счёт", "Определение уровня на пробном уроке"],
        en: ["SAT math and core mathematics skills", "Mental arithmetic and fast calculation", "Level check through a trial lesson"]
      }
    },
    german: {
      order: 4,
      title: { uz: "Nemis tili", ru: "Немецкий язык", en: "German" },
      short: { uz: "Imtihonlarga bosqichma-bosqich tayyorgarlik.", ru: "Пошаговая подготовка к экзаменам.", en: "Step-by-step exam preparation." },
      desc: { uz: "Nemis tili darslari imtihon va real muloqotga tayyorlashga yo‘naltiriladi. Dastur o‘quvchi darajasiga qarab tuziladi.", ru: "Уроки немецкого направлены на подготовку к экзаменам и реальному общению. Программа строится по уровню ученика.", en: "German lessons focus on exam preparation and real communication. The programme is built around the student’s level." },
      features: {
        uz: ["A1 dan yuqori darajalargacha o‘qitish", "Imtihon formatlari va amaliy topshiriqlar", "Talaffuz, grammatika va so‘z boyligi"],
        ru: ["Обучение от A1 и выше", "Экзаменационные форматы и практика", "Произношение, грамматика и лексика"],
        en: ["Learning from A1 level and above", "Exam formats and practical tasks", "Pronunciation, grammar and vocabulary"]
      }
    },
    korean: {
      order: 5,
      title: { uz: "Koreys tili", ru: "Корейский язык", en: "Korean" },
      short: { uz: "TOPIK va koreys tili imtihonlariga tayyorgarlik.", ru: "Подготовка к TOPIK и экзаменам по корейскому.", en: "TOPIK and Korean exam preparation." },
      desc: { uz: "Koreys tili kursida TOPIK tayyorgarligi, asosiy grammatika, lug‘at va kundalik muloqot ko‘nikmalari o‘rgatiladi.", ru: "Курс корейского включает подготовку к TOPIK, грамматику, лексику и навыки повседневного общения.", en: "The Korean course covers TOPIK preparation, grammar, vocabulary and everyday communication." },
      features: {
        uz: ["TOPIK imtihoniga tayyorgarlik", "Koreys alifbosi, grammatika va lug‘at", "Kundalik muloqot va amaliy mashqlar"],
        ru: ["Подготовка к экзамену TOPIK", "Корейский алфавит, грамматика и лексика", "Повседневное общение и практика"],
        en: ["TOPIK exam preparation", "Korean alphabet, grammar and vocabulary", "Everyday communication and practice"]
      }
    },
    native: {
      order: 6,
      title: { uz: "Ona tili", ru: "Родной язык", en: "Native language" },
      short: { uz: "Davlat sertifikati uchun tayyorgarlik.", ru: "Подготовка к государственному сертификату.", en: "Preparation for the state certificate." },
      desc: { uz: "Ona tili kursi davlat sertifikati uchun tayyorgarlik, savodxonlik va test ko‘nikmalarini rivojlantirishga qaratilgan.", ru: "Курс родного языка направлен на подготовку к госсертификату, грамотность и тестовые навыки.", en: "The native language course focuses on state certificate preparation, literacy and test skills." },
      features: {
        uz: ["Davlat sertifikati formatiga tayyorgarlik", "Grammatika, imlo va matn bilan ishlash", "Sinov darsi orqali darajani aniqlash"],
        ru: ["Подготовка по формату госсертификата", "Грамматика, орфография и работа с текстом", "Определение уровня на пробном уроке"],
        en: ["Preparation for the state certificate format", "Grammar, spelling and working with text", "Level check through a trial lesson"]
      }
    },
    compit: {
      order: 7,
      title: { uz: "Kompyuter / IT", ru: "Компьютер / IT", en: "Computer / IT" },
      short: { uz: "Kompyuter savodxonligi va dasturlash asoslari.", ru: "Компьютерная грамотность и основы программирования.", en: "Computer literacy and programming basics." },
      desc: { uz: "Kompyuter / IT yo‘nalishida kompyuter savodxonligi, dasturlash asoslari va zamonaviy IT vositalari bilan ishlash o‘rgatiladi.", ru: "Направление Компьютер / IT обучает компьютерной грамотности, основам программирования и работе с современными IT-инструментами.", en: "The Computer / IT direction teaches computer literacy, programming basics and working with modern IT tools." },
      features: {
        uz: ["Kompyuter savodxonligi noldan", "Dasturlash va mantiqiy fikrlash asoslari", "Zamonaviy dasturlar bilan amaliy ishlash"],
        ru: ["Компьютерная грамотность с нуля", "Основы программирования и логики", "Практика с современными программами"],
        en: ["Computer literacy from zero", "Programming and logic basics", "Hands-on work with modern software"]
      }
    },
    history: {
      order: 8,
      title: { uz: "Tarix", ru: "История", en: "History" },
      short: { uz: "Tarix fanidan imtihonlarga tayyorgarlik.", ru: "Подготовка к экзаменам по истории.", en: "History exam preparation." },
      desc: { uz: "Tarix yo‘nalishida sana, voqea va mavzular tizimli o‘rgatiladi hamda test topshiriqlari puxta ishlanadi.", ru: "В направлении истории системно изучаются даты, события и темы, тщательно отрабатываются тестовые задания.", en: "The history direction teaches dates, events and topics systematically and works through test tasks thoroughly." },
      features: {
        uz: ["Sana va voqealarni tizimli o‘rganish", "Test formatidagi topshiriqlar", "Mavzularni bog‘lab tushuntirish"],
        ru: ["Системное изучение дат и событий", "Задания в формате теста", "Связное объяснение тем"],
        en: ["Systematic study of dates and events", "Test-format tasks", "Connected explanation of topics"]
      }
    }
  };

  const I18N = {
    uz: {
      "common.more": "Batafsil", "course.more": "Batafsil",
      "nav.home": "Bosh sahifa", "nav.about": "Biz haqimizda", "nav.courses": "Kurslar",
      "nav.trial": "Sinov darsi", "nav.teachers": "O‘qituvchilar", "nav.contacts": "Kontaktlar",
      "header.cta": "Sinov darsiga yozilish",
      "hero.badge": "6 yildan beri Pakhtaabadda ta’lim beramiz",
      "hero.title": "GLOBUS — til va fan kurslari uchun ishonchli mahalliy o‘quv markazi",
      "hero.text": "Ingliz tili, IELTS/CEFR, rus tili, matematika, nemis, koreys, kompyuter/IT va ona tili. Sinov darsida darajangizni aniqlaymiz va mos yo‘nalishni tavsiya qilamiz.",
      "hero.primaryBtn": "Sinov darsiga yozilish", "hero.secondaryBtn": "Yo‘nalishlarni ko‘rish",
      "hero.statExperience": "yillik tajriba", "hero.statStudents": "o‘quvchi", "hero.statDirections": "asosiy yo‘nalish",
      "trust.localTitle": "Mahalliy markaz", "trust.localText": "Katta tarmoq emas, Pakhtaabaddagi real o‘quv markaz.",
      "trust.trialTitle": "Sinov darsi", "trust.trialText": "Avval darajani ko‘ramiz, keyin mos kursni tavsiya qilamiz.",
      "trust.flexTitle": "Moslashuvchan yondashuv", "trust.flexText": "Guruhlar, jadval va individual darslar maslahat orqali aniqlanadi.",
      "courses.eyebrow": "Mashhur kurslar", "courses.title": "Yo‘nalishni tanlang",
      "courses.subtitle": "Kursni aniq tanlash shart emas. Sinov darsida daraja, maqsad va qulay formatni aniqlab, sizga mos yo‘nalishni tavsiya qilamiz.",
      "individual.title": "Individual darslar",
      "individual.text": "Katta yoshdagi o‘quvchilar yoki maxsus maqsadlar uchun individual darslar alohida muhokama qilinadi. Jadval, o‘qituvchi va format telefon orqali yoki yozilishdan keyin kelishiladi.",
      "individual.button": "Maslahat olish",
      "trial.eyebrow": "Sinov darsi", "trial.title": "Qaysi kurs kerakligini bilmasangiz, sinov darsidan boshlang",
      "trial.text": "Biz avval o‘quvchining hozirgi darajasi, maqsadi va qulay vaqtini tushunamiz. Shundan keyin mos guruh, yo‘nalish yoki individual formatni tavsiya qilamiz.",
      "trial.button": "Sinov darsiga yozilish",
      "trial.step1Title": "Ariza qoldirasiz", "trial.step1Text": "Ism, telefon va qiziqayotgan yo‘nalishni yuborasiz.",
      "trial.step2Title": "Maqsadni aniqlaymiz", "trial.step2Text": "Imtihon, maktab, speaking, sertifikat yoki umumiy o‘rganish maqsadini tushunamiz.",
      "trial.step3Title": "Darajani tekshiramiz", "trial.step3Text": "Sinov darsi orqali boshlang‘ich daraja va kuchli/kuchsiz tomonlar ko‘rinadi.",
      "trial.step4Title": "Mos formatni tavsiya qilamiz", "trial.step4Text": "Guruh, jadval yoki individual darslar bo‘yicha aniq taklif beramiz.",
      "about.eyebrow": "Nima uchun GLOBUS?", "about.title": "6 yillik tajriba va oddiy, tushunarli yondashuv",
      "about.subtitle": "GLOBUS — bu mahalliy o‘quv markaz. Biz o‘quvchini tayyor kursga majburlamaymiz: avval vaziyatni tushunamiz, keyin mos yo‘lni taklif qilamiz.",
      "about.teachersTitle": "Tajribali o‘qituvchilar", "about.teachersText": "Darslar sodda, amaliy va o‘quvchi darajasiga mos tushuntiriladi.",
      "about.trialTitle": "Kursni tanlashda yordam", "about.trialText": "Sinov darsi orqali daraja va maqsadni aniqlab, mos yo‘nalishni tavsiya qilamiz.",
      "about.scheduleTitle": "Qulay jadval", "about.scheduleText": "Jadval, guruh va individual formatlar maslahatdan keyin aniqlashtiriladi.",
      "about.localTitle": "Yaqin va ishonchli", "about.localText": "Markazga kelib, joyni ko‘rish, savol berish va o‘qituvchi bilan maslahatlashish mumkin.",
      "teachers.eyebrow": "O‘qituvchilar", "teachers.title": "Bizning o‘qituvchilar",
      "teachers.subtitle": "Har bir o‘qituvchining yo‘nalishi, qisqa tavsifi va nima uchun aynan uni tanlash kerakligini ko‘ring.",
      "schedule.eyebrow": "Dars jadvali", "schedule.title": "Moslashuvchan dars jadvali",
      "schedule.text": "Aktual jadval guruh, o‘qituvchi va yo‘nalishga qarab belgilanadi. Sinov darsi yoki maslahatdan keyin sizga eng qulay vaqtni taklif qilamiz.",
      "schedule.point1": "Ertalabki va kunduzgi guruhlar", "schedule.point2": "Guruh yoki individual format", "schedule.point3": "Vaqt maslahatdan keyin kelishiladi",
      "reviews.eyebrow": "Fikrlar", "reviews.title": "O‘quvchilar fikri",
      "reviews.subtitle": "Real o‘quvchilarning natijalari va fikrlari. Bu yerga vaqt o‘tishi bilan yangi haqiqiy izohlar qo‘shiladi.",
      "stats.experience": "yillik tajriba", "stats.students": "o‘quvchilar", "stats.lessons": "darslar", "stats.directions": "yo‘nalish",
      "contacts.eyebrow": "Aloqa", "contacts.title": "Sinov darsiga yoziling",
      "contacts.text": "Ariza qoldiring. Biz siz bilan bog‘lanib, maqsadingizni aniqlaymiz va mos kurs, guruh yoki individual format bo‘yicha maslahat beramiz.",
      "contacts.address": "Pakhtaabad, O‘zbekiston", "contacts.hours": "Dushanba - Shanba: 08:30 - 18:30",
      "form.name": "Ismingiz", "form.namePlaceholder": "Ismingiz", "form.phone": "Telefon", "form.phonePlaceholder": "+998",
      "form.direction": "Qaysi yo‘nalish qiziqtiryapti?", "form.optionNotSure": "Aniq bilmayman, maslahat kerak",
      "form.optionIndividual": "Individual dars", "form.message": "Xabar", "form.messagePlaceholder": "Xabaringiz",
      "form.button": "Ariza yuborish",
      "footer.text": "GLOBUS — Pakhtaabaddagi o‘quv markaz. Ingliz tili, IELTS/CEFR, rus tili, matematika, nemis, koreys, kompyuter/IT va ona tili yo‘nalishlari.",
      "footer.navTitle": "Navigatsiya", "footer.coursesTitle": "Kurslar", "footer.contactsTitle": "Kontaktlar", "footer.rights": "Barcha huquqlar himoyalangan.",
      "modal.chooseTeacher": "O‘qituvchini tanlang", "modal.teacherLabel": "O‘qituvchi",
      "modal.trialNote": "Narxlar hozircha ko‘rsatilmaydi. Avval sinov darsi orqali darajangiz aniqlanadi, keyin sizga mos guruh tavsiya qilinadi.",
      "modal.trialButton": "Sinov darsiga yozilish", "modal.teachersButton": "O‘qituvchilarni ko‘rish", "modal.otherTeachers": "Boshqa o‘qituvchilar", "modal.close": "Yopish",
      "course.english.title": "Ingliz tili IELTS/CEFR", "course.russian.title": "Rus tili", "course.math.title": "Matematika SAT", "course.german.title": "Nemis tili", "course.korean.title": "Koreys tili", "course.native.title": "Ona tili", "course.compit.title": "Kompyuter / IT", "course.history.title": "Tarix"
    },
    ru: {
      "common.more": "Подробнее", "course.more": "Подробнее",
      "nav.home": "Главная", "nav.about": "О нас", "nav.courses": "Курсы",
      "nav.trial": "Пробный урок", "nav.teachers": "Преподаватели", "nav.contacts": "Контакты",
      "header.cta": "Записаться на пробный урок",
      "hero.badge": "6 лет работаем в Пахтаабаде",
      "hero.title": "GLOBUS — надёжный местный учебный центр для языков и предметов",
      "hero.text": "Английский, IELTS/CEFR, русский, математика, немецкий, корейский, компьютер/IT и родной язык. На пробном уроке определим уровень и предложим подходящее направление.",
      "hero.primaryBtn": "Записаться на пробный урок", "hero.secondaryBtn": "Посмотреть направления",
      "hero.statExperience": "лет опыта", "hero.statStudents": "учеников", "hero.statDirections": "основных направлений",
      "trust.localTitle": "Местный центр", "trust.localText": "Не крупная сеть, а реальный учебный центр в Пахтаабаде.",
      "trust.trialTitle": "Пробный урок", "trust.trialText": "Сначала смотрим уровень, затем рекомендуем подходящий курс.",
      "trust.flexTitle": "Гибкий подход", "trust.flexText": "Группы, расписание и индивидуальные занятия уточняются через консультацию.",
      "courses.eyebrow": "Популярные курсы", "courses.title": "Выберите направление",
      "courses.subtitle": "Не обязательно сразу точно выбирать курс. На пробном уроке мы определим уровень, цель и удобный формат, затем предложим подходящее направление.",
      "individual.title": "Индивидуальные занятия",
      "individual.text": "Для взрослых учеников или специальных целей индивидуальные занятия обсуждаются отдельно. Расписание, преподаватель и формат согласуются по телефону или после записи.",
      "individual.button": "Получить консультацию",
      "trial.eyebrow": "Пробный урок", "trial.title": "Если не знаете, какой курс нужен, начните с пробного урока",
      "trial.text": "Сначала мы понимаем текущий уровень ученика, цель и удобное время. После этого предлагаем подходящую группу, направление или индивидуальный формат.",
      "trial.button": "Записаться на пробный урок",
      "trial.step1Title": "Вы оставляете заявку", "trial.step1Text": "Отправляете имя, телефон и интересующее направление.",
      "trial.step2Title": "Уточняем цель", "trial.step2Text": "Понимаем: экзамен, школа, speaking, сертификат или общее изучение.",
      "trial.step3Title": "Проверяем уровень", "trial.step3Text": "Пробный урок показывает стартовый уровень, сильные и слабые стороны.",
      "trial.step4Title": "Рекомендуем формат", "trial.step4Text": "Предлагаем группу, расписание или индивидуальные занятия.",
      "about.eyebrow": "Почему GLOBUS?", "about.title": "6 лет опыта и простой, понятный подход",
      "about.subtitle": "GLOBUS — местный учебный центр. Мы не заставляем ученика выбирать готовый курс вслепую: сначала понимаем ситуацию, потом предлагаем подходящий путь.",
      "about.teachersTitle": "Опытные преподаватели", "about.teachersText": "Уроки объясняются просто, практично и с учётом уровня ученика.",
      "about.trialTitle": "Помощь с выбором курса", "about.trialText": "Через пробный урок определяем уровень и цель, затем рекомендуем подходящее направление.",
      "about.scheduleTitle": "Удобное расписание", "about.scheduleText": "Расписание, группа и индивидуальный формат уточняются после консультации.",
      "about.localTitle": "Рядом и надёжно", "about.localText": "Можно прийти в центр, посмотреть место, задать вопросы и получить консультацию.",
      "teachers.eyebrow": "Преподаватели", "teachers.title": "Наши преподаватели",
      "teachers.subtitle": "Посмотрите направление каждого преподавателя, краткое описание и причины выбрать именно его.",
      "schedule.eyebrow": "Расписание", "schedule.title": "Гибкое расписание занятий",
      "schedule.text": "Актуальное расписание зависит от группы, преподавателя и направления. После пробного урока или консультации мы предложим самое удобное время.",
      "schedule.point1": "Утренние и дневные группы", "schedule.point2": "Групповой или индивидуальный формат", "schedule.point3": "Время согласуется после консультации",
      "reviews.eyebrow": "Отзывы", "reviews.title": "Отзывы учеников",
      "reviews.subtitle": "Реальные результаты и отзывы учеников. Со временем сюда будут добавляться новые настоящие отзывы.",
      "stats.experience": "лет опыта", "stats.students": "учеников", "stats.lessons": "уроков", "stats.directions": "направлений",
      "contacts.eyebrow": "Контакты", "contacts.title": "Запишитесь на пробный урок",
      "contacts.text": "Оставьте заявку. Мы свяжемся с вами, уточним цель и подскажем подходящий курс, группу или индивидуальный формат.",
      "contacts.address": "Пахтаабад, Узбекистан", "contacts.hours": "Понедельник - Суббота: 08:30 - 18:30",
      "form.name": "Ваше имя", "form.namePlaceholder": "Ваше имя", "form.phone": "Телефон", "form.phonePlaceholder": "+998",
      "form.direction": "Какое направление интересует?", "form.optionNotSure": "Не знаю точно, нужна консультация",
      "form.optionIndividual": "Индивидуальное занятие", "form.message": "Сообщение", "form.messagePlaceholder": "Сообщение",
      "form.button": "Отправить заявку",
      "footer.text": "GLOBUS — учебный центр в Пахтаабаде. Английский, IELTS/CEFR, русский, математика, немецкий, корейский, компьютер/IT и родной язык.",
      "footer.navTitle": "Навигация", "footer.coursesTitle": "Курсы", "footer.contactsTitle": "Контакты", "footer.rights": "Все права защищены.",
      "modal.chooseTeacher": "Выберите преподавателя", "modal.teacherLabel": "Преподаватель",
      "modal.trialNote": "Цены пока не показываем. Сначала пробный урок, чтобы определить уровень, затем подберём подходящую группу.",
      "modal.trialButton": "Записаться на пробный урок", "modal.teachersButton": "Посмотреть преподавателей", "modal.otherTeachers": "Другие преподаватели", "modal.close": "Закрыть",
      "course.english.title": "Английский IELTS/CEFR", "course.russian.title": "Русский язык", "course.math.title": "Математика SAT", "course.german.title": "Немецкий язык", "course.korean.title": "Корейский язык", "course.native.title": "Родной язык", "course.compit.title": "Компьютер / IT", "course.history.title": "История"
    },
    en: {
      "common.more": "Learn more", "course.more": "Learn more",
      "nav.home": "Home", "nav.about": "About us", "nav.courses": "Courses",
      "nav.trial": "Trial lesson", "nav.teachers": "Teachers", "nav.contacts": "Contacts",
      "header.cta": "Book a trial lesson",
      "hero.badge": "6 years of teaching in Pakhtaabad",
      "hero.title": "GLOBUS — a reliable local learning centre for languages and subjects",
      "hero.text": "English, IELTS/CEFR, Russian, mathematics, German, Korean, Computer/IT and native language. During a trial lesson we check your level and recommend the right direction.",
      "hero.primaryBtn": "Book a trial lesson", "hero.secondaryBtn": "View directions",
      "hero.statExperience": "years of experience", "hero.statStudents": "students", "hero.statDirections": "main directions",
      "trust.localTitle": "Local centre", "trust.localText": "Not a large chain, but a real learning centre in Pakhtaabad.",
      "trust.trialTitle": "Trial lesson", "trust.trialText": "First we check the level, then recommend a suitable course.",
      "trust.flexTitle": "Flexible approach", "trust.flexText": "Groups, schedule and individual lessons are clarified through consultation.",
      "courses.eyebrow": "Popular courses", "courses.title": "Choose a direction",
      "courses.subtitle": "You do not have to choose the exact course immediately. During a trial lesson we identify the level, goal and suitable format, then recommend the right direction.",
      "individual.title": "Individual lessons",
      "individual.text": "For adult learners or special goals, individual lessons are discussed separately. Schedule, teacher and format are agreed by phone or after registration.",
      "individual.button": "Get consultation",
      "trial.eyebrow": "Trial lesson", "trial.title": "If you are not sure which course you need, start with a trial lesson",
      "trial.text": "First we understand the student’s current level, goal and convenient time. Then we recommend a suitable group, direction or individual format.",
      "trial.button": "Book a trial lesson",
      "trial.step1Title": "You leave a request", "trial.step1Text": "Send your name, phone number and the direction you are interested in.",
      "trial.step2Title": "We clarify the goal", "trial.step2Text": "We identify whether you need an exam, school support, speaking, a certificate or general learning.",
      "trial.step3Title": "We check the level", "trial.step3Text": "A trial lesson shows the starting level, strengths and weak points.",
      "trial.step4Title": "We recommend a format", "trial.step4Text": "We suggest a group, schedule or individual lessons.",
      "about.eyebrow": "Why GLOBUS?", "about.title": "6 years of experience and a clear, simple approach",
      "about.subtitle": "GLOBUS is a local learning centre. We do not force students to choose blindly: first we understand the situation, then suggest the right path.",
      "about.teachersTitle": "Experienced teachers", "about.teachersText": "Lessons are explained clearly, practically and according to the student’s level.",
      "about.trialTitle": "Help choosing a course", "about.trialText": "A trial lesson helps us identify the level and goal, then recommend the right direction.",
      "about.scheduleTitle": "Flexible schedule", "about.scheduleText": "Schedule, group and individual format are clarified after consultation.",
      "about.localTitle": "Close and reliable", "about.localText": "You can visit the centre, see the place, ask questions and get consultation.",
      "teachers.eyebrow": "Teachers", "teachers.title": "Our teachers",
      "teachers.subtitle": "See each teacher’s direction, a short description and the reasons to choose them.",
      "schedule.eyebrow": "Schedule", "schedule.title": "A flexible class schedule",
      "schedule.text": "The actual schedule depends on the group, teacher and direction. After the trial lesson or consultation we suggest the most convenient time.",
      "schedule.point1": "Morning and daytime groups", "schedule.point2": "Group or individual format", "schedule.point3": "Time agreed after consultation",
      "reviews.eyebrow": "Reviews", "reviews.title": "Student feedback",
      "reviews.subtitle": "Real results and feedback from students. New genuine reviews will be added here over time.",
      "stats.experience": "years of experience", "stats.students": "students", "stats.lessons": "lessons", "stats.directions": "directions",
      "contacts.eyebrow": "Contacts", "contacts.title": "Book a trial lesson",
      "contacts.text": "Leave a request. We will contact you, clarify your goal and suggest a suitable course, group or individual format.",
      "contacts.address": "Pakhtaabad, Uzbekistan", "contacts.hours": "Monday - Saturday: 08:30 - 18:30",
      "form.name": "Your name", "form.namePlaceholder": "Your name", "form.phone": "Phone", "form.phonePlaceholder": "+998",
      "form.direction": "Which direction are you interested in?", "form.optionNotSure": "Not sure, I need consultation",
      "form.optionIndividual": "Individual lesson", "form.message": "Message", "form.messagePlaceholder": "Message",
      "form.button": "Send request",
      "footer.text": "GLOBUS is a learning centre in Pakhtaabad. English, IELTS/CEFR, Russian, mathematics, German, Korean, Computer/IT and native language.",
      "footer.navTitle": "Navigation", "footer.coursesTitle": "Courses", "footer.contactsTitle": "Contacts", "footer.rights": "All rights reserved.",
      "modal.chooseTeacher": "Choose a teacher", "modal.teacherLabel": "Teacher",
      "modal.trialNote": "Prices are not shown yet. First a trial lesson to determine your level, then we recommend a suitable group.",
      "modal.trialButton": "Book a trial lesson", "modal.teachersButton": "View teachers", "modal.otherTeachers": "Other teachers", "modal.close": "Close",
      "course.english.title": "English IELTS/CEFR", "course.russian.title": "Russian language", "course.math.title": "Mathematics SAT", "course.german.title": "German", "course.korean.title": "Korean", "course.native.title": "Native language", "course.compit.title": "Computer / IT", "course.history.title": "History"
    }
  };

  const formMessages = {
    uz: { required: "Iltimos, ism va telefon raqamingizni kiriting.", sending: "Yuborilmoqda...", success: "Arizangiz yuborildi. Tez orada siz bilan bog‘lanamiz.", error: "Yuborishda xatolik. Iltimos, keyinroq qayta urinib ko‘ring.", button: "Ariza yuborish" },
    ru: { required: "Пожалуйста, введите имя и номер телефона.", sending: "Отправляем...", success: "Заявка отправлена. Мы скоро свяжемся с вами.", error: "Ошибка при отправке. Пожалуйста, попробуйте позже.", button: "Отправить заявку" },
    en: { required: "Please enter your name and phone number.", sending: "Sending...", success: "Your request has been sent. We will contact you soon.", error: "There was an error. Please try again later.", button: "Send request" }
  };

  const REVIEWS = [
    { name: "Sobirjon Akramov", result: { uz: "Matematika · SAT 1300", ru: "Математика · SAT 1300", en: "Mathematics · SAT 1300" }, stars: 5,
      text: { uz: "Aniq reja va muntazam mashqlar SAT natijamni sezilarli oshirdi.", ru: "Чёткий план и регулярная практика заметно подняли мой результат по SAT.", en: "A clear plan and regular practice noticeably improved my SAT score." } },
    { name: "Abdurahmanov Farhod", result: { uz: "Ingliz tili · IELTS 7.0", ru: "Английский · IELTS 7.0", en: "English · IELTS 7.0" }, stars: 5,
      text: { uz: "Speaking va writing bo‘yicha feedback IELTS tayyorgarligida juda foydali bo‘ldi.", ru: "Обратная связь по speaking и writing очень помогла в подготовке к IELTS.", en: "Feedback on speaking and writing was very useful for my IELTS preparation." } },
    { name: "Madina Yusupova", result: { uz: "Rus tili", ru: "Русский язык", en: "Russian language" }, stars: 5,
      text: { uz: "Grammatikani oson tushundim, nutqim ancha ishonchli bo‘ldi.", ru: "Грамматика стала понятной, речь — гораздо увереннее.", en: "Grammar became clear and my speaking is much more confident." } },
    { name: "Jasur Karimov", result: { uz: "Nemis tili · A2", ru: "Немецкий · A2", en: "German · A2" }, stars: 5,
      text: { uz: "Noldan boshlab qisqa vaqtda nemis tilida gapira boshladim.", ru: "С нуля за короткое время начал говорить по-немецки.", en: "Starting from zero, I began speaking German in a short time." } }
  ];

  const ICONS = {
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.61 21 3 13.39 3 4c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>',
    location: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.2 3.7 2.2-1 1.7-4.7-2.8V6h2v6.2Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm8.9 2.1a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 4.3 18.5 19c-.2 1-.8 1.2-1.6.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.4 12.8 1.7 11.3c-1-.3-1-1 .2-1.5l18.4-7.1c.9-.3 1.7.2 1.4 1.6Z"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.2 6.8.7-5.1 4.6 1.5 6.7L12 17.8 5.9 20.2l1.5-6.7L2.3 8.9l6.8-.7L12 2Z"/></svg>'
  };

  return { LEADS_ENDPOINT, TENANT_SLUG, CONTACT_PHONE, CONTACT_PHONE_LABEL, CONTACT_EMAIL,
           INSTAGRAM_URL, TELEGRAM_URL, TEACHERS, COURSES, I18N, formMessages, REVIEWS, ICONS };
})();
