(function(){
  'use strict';
  document.documentElement.classList.add('js');
  const en = {
    skip:'Skip to content',brandSubtitle:"SOFTWARE ENGINEER",navAbout:'About',navExpertise:'Expertise',navWork:'Projects',navExperience:'Experience',navContact:'Contact',
    heroAvailability:"OPEN TO REMOTE SOFTWARE ENGINEERING OPPORTUNITIES",heroIntro:"Hello, I'm Mohammadreza Gohari.",heroTitleA:'I build what',heroTitleB:'powers the ',heroTitleC:'product.',
    heroDescription:"Software Engineer with 9+ years in software development. I build backend services and frontend experiences, design systems and algorithms, optimize databases, and containerize applications with Docker.",
    ctaProjects:'Explore my work',ctaContact:"Let's talk",statYears:'Years of experience',statSpecialty:'Core specialization',statApproach:'Architecture mindset',
    portraitName:'MOHAMMADREZA GOHARI',portraitRole:"SOFTWARE ENGINEER",floatingTitle:'Built for production',scrollLabel:'SCROLL TO DISCOVER',
    aboutEyebrow:'A LITTLE ABOUT ME',aboutHeading:"Good software is invisible. Great engineering isn't.",
    aboutBody1:"I work across backend and frontend development, connecting reliable APIs with practical user experiences. I enjoy system design, algorithm design, and turning complex requirements into maintainable software.",
    aboutBody2:"My toolkit spans PHP, Laravel, Next.js, relational databases, Redis and Docker. From data modeling and query optimization to containerization and deployment, I care about the whole path from an idea to a running product.",
    value1:'Think in systems',value2:'Optimize with evidence',value3:'Build for maintainability',
    expertiseEyebrow:'/ 02 — THE TOOLKIT',expertiseHeading:'My kind of engineering.',expertiseIntro:'Thoughtful architecture. Measurable performance. Reliable production systems.',
    skill1Title:'Backend architecture',skill1Body:'Clean code, SOLID principles, modular design, service boundaries and scalable API architecture.',
    skill2Title:'Data & performance',skill2Body:'SQL profiling, indexes, query refactoring, caching strategies and concurrency-aware data flows.',
    skill3Title:'Infrastructure & DevOps',skill3Body:'Dockerizing applications, self-hosting GitLab and Plane in isolated environments, configuring Nginx, and setting up VPN access for teams to source code and databases.',
    skill4Title:'Quality & reliability',skill4Body:'Automated testing, static analysis, consistent conventions, debugging and production observability.',
    projectsEyebrow:'/ 03 — SELECTED WORK',projectsHeading:'Code that tells a story.',projectsAll:'All GitHub repositories',
    project1Type:'OPEN SOURCE / LARAVEL PACKAGE',project1Desc:'An open-source Laravel package that generates repositories, contracts, services and DTOs to help teams ship consistent, maintainable code.',
    project2Type:'API PLATFORM / MONITORING',project2Desc:'A modular Laravel API for infrastructure monitoring, sensor measurements, alert thresholds, role-based access and documented endpoints.',
    project3Type:'WEB PLATFORM / DELIVERY',project3Desc:'Production-facing web engineering with Next.js, deployment workflows, Nginx reverse proxying and Cloudflare infrastructure.',
    packageLabel:'OPEN-SOURCE TOOL',packageText:'Using Laravel? Take a look at my RepositoryPattern package.',packageAction:'Read the documentation',
    expEyebrow:'THE JOURNEY',expHeading:'A track record of making things better.',exp1Role:"Independent / Freelance Backend Engineer",exp1Desc:"Delivering Laravel/PHP and Node.js/TypeScript projects: identity verification and business workflows, warehouse frontend workflows and API integrations, and project and contract management. Developing AI-assisted trading automation with GPT and exchange APIs, alongside IoT telemetry processing and analytics.",exp1Meta:"Jun 2025 — Present",
    exp2Role:"Senior Backend Developer",exp2Desc:"Developed appointment scheduling and pharmacy services with Laravel, Redis, Elasticsearch and Docker. Consolidated seller, admin and customer workflows while preserving frontend integrations. Introduced PHPStan and Laravel Pint, optimized queries and caching, and improved structured logging and production troubleshooting.",
    exp3Role:"Backend PHP/Laravel Engineer",exp3Desc:"Optimized slow queries, indexes and join strategies across Laravel modules, and replaced file-based caching with Redis. Led core backend modules and REST APIs with reusable service/repository patterns and dependency injection. Coordinated Nginx releases, Docker-ready workflows, rollback planning and post-release monitoring.",expEnd:'And still learning, building and improving every day.',
    contactEyebrow:'/ 05 — WHAT\'S NEXT?',contactHeading1:"Let's build something",contactHeading2:'that matters.',contactDescription:"From backend services and frontend experiences to system design, databases and Docker deployments — let’s build reliable software together.",contactCta:'Get in touch',copyEmail:'Copy email',copied:'Email copied!',copyFailed:'Please copy: eng.mr.gohari@gmail.com',footerMessage:'Thoughtfully designed. Built to last.',backTop:'BACK TO TOP ↑',
    skill5Title:"Frontend development",
    skill5Body:"Building web interfaces with Next.js, integrating APIs and connecting frontend experiences to backend services.",
    skill6Title:"System & algorithm design",
    skill6Body:"Designing system boundaries, choosing data structures and algorithms, analyzing complexity and balancing scalability with maintainability.",
    project5Type:'E-COMMERCE / SOURCE CODE',project5Desc:'A Laravel e-commerce API with Sanctum authentication, customer and seller roles, product discovery, shopping baskets, support tickets, invoice notifications and a Postman collection.',
    project4Type:"HEALTHTECH / WEB PLATFORM",
    project4Desc:"Engineering contributions at Doktordoktor: simplifying backend applications and improving code quality tooling, engineering workflows and observability.",
    exp1Company:"Independent / Freelance",
    exp1Location:"Software Engineering · Remote / Project-based",
    exp2Company:"DrDr.ir (Doctor Doctor)",
    exp2Location:"Tehran, Iran",
    exp2Meta:"Nov 2024 — Jun 2025",
    exp3Company:"Gandom Engineering Group",
    exp3Location:"Iran",
    exp3Meta:"Feb 2023 — Nov 2024",
    exp4Company:"Simorgh Software Development",
    exp4Location:"Tehran, Iran",
    exp4Role:"Backend PHP/Laravel Developer",
    exp4Meta:"Sep 2020 — Feb 2023",
    exp4Desc:"Designed Laravel REST APIs for asset management, reporting, role-based access and external integrations. Implemented e-commerce authentication with JWT, order/payment modules and OpenAPI/Swagger documentation. Supported online-player endpoints, data access, caching and modular architecture.",
    exp5Company:"Steel Industries AmirAbad Company",
    exp5Location:"Behshahr, Iran",
    exp5Role:"Backend PHP/Laravel Engineer",
    exp5Meta:"Aug 2019 — Jul 2020",
    exp5Desc:"Built internal administrative automation with Laravel, role-based access, workflow steps, operational reports and multilingual content management. Digitized manual requests to improve transparency, traceability and consistency.",
    exp6Company:"System Afzar Shomal",
    exp6Location:"Iran",
    exp6Role:"Backend PHP/Laravel Developer",
    exp6Meta:"Oct 2016 — Jun 2019",
    exp6Desc:"Developed Laravel modules for user management, roles and permissions, business workflows and account operations. Integrated Saman Bank and ZarinPal payments with transaction validation, failure handling and event logging.",
    exp7Company:"Dadeh Kav 21",
    exp7Location:"Sari, Iran",
    exp7Role:"Backend PHP/Laravel Developer",
    exp7Meta:"May 2016 — Oct 2016",
    exp7Desc:"Contributed to production Laravel projects and shared knowledge on backend development and Laravel fundamentals.",
  };
  const fa = {
    skip:'رفتن به محتوای اصلی',brandSubtitle:"مهندس نرم‌افزار",navAbout:'درباره من',navExpertise:'تخصص‌ها',navWork:'پروژه‌ها',navExperience:'سوابق',navContact:'ارتباط',
    heroAvailability:"آماده همکاری ریموت در مهندسی نرم‌افزار",heroIntro:'سلام، من محمدرضا گوهری هستم.',heroTitleA:"از ایده تا محصول،",heroTitleB:"نرم‌افزار می‌سازم؛ ",heroTitleC:"قابل اعتماد.",
    heroDescription:"مهندس نرم‌افزار با بیش از ۹ سال تجربه توسعه. بک‌اند و فرانت‌اند می‌سازم، سیستم و الگوریتم طراحی می‌کنم، دیتابیس را بهینه می‌کنم و اپلیکیشن‌ها را با Docker کانتینری می‌کنم.",
    ctaProjects:'مشاهده پروژه‌ها',ctaContact:'با من در ارتباط باش',statYears:'سال تجربه حرفه‌ای',statSpecialty:'تخصص اصلی',statApproach:'نگاه معماری‌محور',
    portraitName:'محمدرضا گوهری',portraitRole:"مهندس نرم‌افزار",floatingTitle:'آماده محیط پروداکشن',scrollLabel:'برای آشنایی بیشتر اسکرول کن',
    aboutEyebrow:'کمی درباره من',aboutHeading:'نرم‌افزار خوب دیده نمی‌شود؛ مهندسی خوب چرا.',
    aboutBody1:"در بک‌اند و فرانت‌اند کار می‌کنم و APIهای قابل اعتماد را به تجربه کاربری کاربردی وصل می‌کنم. از طراحی سیستم و الگوریتم تا تبدیل نیازهای پیچیده به نرم‌افزار قابل نگهداری، حل مسئله بخش اصلی کار من است.",
    aboutBody2:"ابزارهای من از PHP، Laravel و Next.js تا دیتابیس‌های رابطه‌ای، Redis و Docker را در بر می‌گیرند. از مدل‌سازی داده و بهینه‌سازی کوئری تا داکرایز کردن و استقرار، به تمام مسیر ایده تا محصول اهمیت می‌دهم.",
    value1:'تفکر سیستمی',value2:'بهینه‌سازی بر پایه شواهد',value3:'توسعه قابل نگهداری',
    expertiseEyebrow:'/ ۰۲ — جعبه ابزار',expertiseHeading:'تخصص من، ساخت سیستم‌های قابل اعتماد.',expertiseIntro:'معماری سنجیده، عملکرد قابل اندازه‌گیری و پایداری در محیط عملیاتی.',
    skill1Title:'معماری بک‌اند',skill1Body:'کدنویسی تمیز، اصول SOLID، طراحی ماژولار، مرزبندی سرویس‌ها و معماری API مقیاس‌پذیر.',
    skill2Title:'داده و کارایی',skill2Body:'پروفایل کوئری‌ها، ایندکس‌گذاری، بازنویسی SQL، استراتژی‌های کش و مدیریت هم‌زمانی.',
    skill3Title:'زیرساخت و DevOps',skill3Body:'داکرایز کردن اپلیکیشن‌ها، راه‌اندازی GitLab و Plane روی سرور در محیط‌های ایزوله، پیکربندی Nginx و راه‌اندازی VPN برای دسترسی تیم به سورس کد و دیتابیس.',
    skill4Title:'کیفیت و پایداری',skill4Body:'تست خودکار، تحلیل استاتیک کد، استانداردهای کدنویسی، دیباگ و مشاهده‌پذیری سیستم.',
    projectsEyebrow:'/ ۰۳ — پروژه‌های منتخب',projectsHeading:'پروژه‌هایی که از تخصصم می‌گویند.',projectsAll:'همه ریپازیتوری‌های گیت‌هاب',
    project1Type:'متن‌باز / پکیج لاراول',project1Desc:'پکیج متن‌باز لاراول برای تولید Repository، Contract، Service و DTO؛ جهت یکپارچگی و نگهداری بهتر کد در تیم‌های توسعه.',
    project2Type:'پلتفرم API / مانیتورینگ',project2Desc:'API ماژولار لاراول برای پایش زیرساخت، اطلاعات سنسورها، آستانه هشدار، کنترل دسترسی نقش‌محور و مستندسازی.',
    project3Type:'پلتفرم وب / استقرار',project3Desc:'توسعه وب در محیط عملیاتی با Next.js، فرایند استقرار، Reverse Proxy با Nginx و زیرساخت Cloudflare.',
    packageLabel:'ابزار متن‌باز',packageText:'با لاراول کار می‌کنی؟ پکیج RepositoryPattern من رو ببین.',packageAction:'مستندات پکیج',
    expEyebrow:'مسیر حرفه‌ای',expHeading:'تجربه بهبود دادن سیستم‌ها و فرایندها.',exp1Role:"مهندس بک‌اند مستقل / فریلنسر",exp1Desc:"توسعه پروژه‌ها با Laravel/PHP و Node.js/TypeScript؛ از احراز هویت و فرایندهای کسب‌وکار تا فرانت‌اند و اتصال API سرویس انبارداری و مدیریت پروژه و قرارداد. در حال توسعه اتوماسیون معاملات با GPT و API صرافی‌ها و پردازش و تحلیل داده‌های IoT.",exp1Meta:"ژوئن ۲۰۲۵ — اکنون",
    exp2Role:"توسعه‌دهنده ارشد بک‌اند",exp2Desc:"توسعه سرویس‌های نوبت‌دهی و داروخانه با Laravel، Redis، Elasticsearch و Docker. یکپارچه‌سازی فرایندهای فروشنده، مدیر و مشتری با حفظ اتصال فرانت‌اند؛ افزودن PHPStan و Laravel Pint، بهینه‌سازی کوئری‌ها و کش و بهبود لاگ ساختاریافته و عیب‌یابی محیط عملیاتی.",
    exp3Role:"مهندس بک‌اند PHP/Laravel",exp3Desc:"بهینه‌سازی کوئری‌های کند، ایندکس‌ها و JOINها در ماژول‌های لاراول و جایگزینی کش فایل با Redis. راهبری توسعه ماژول‌های بک‌اند و REST API با الگوهای Service/Repository و تزریق وابستگی؛ هماهنگی انتشار با Nginx، فرایندهای آماده Docker، برنامه بازگشت نسخه و پایش پس از انتشار.",expEnd:'و همچنان هر روز در حال یادگیری، ساختن و بهتر کردن.',
    contactEyebrow:'/ ۰۵ — قدم بعدی؟',contactHeading1:'بیاییم چیزی بسازیم',contactHeading2:'که ارزشمند باشد.',contactDescription:"از توسعه بک‌اند و فرانت‌اند تا طراحی سیستم، دیتابیس و استقرار با Docker؛ بیایید با هم نرم‌افزار قابل اعتماد بسازیم.",contactCta:'ارسال ایمیل',copyEmail:'کپی ایمیل',copied:'ایمیل کپی شد!',copyFailed:'ایمیل را کپی کن: eng.mr.gohari@gmail.com',footerMessage:'با دقت طراحی شده، برای ماندگاری ساخته شده.',backTop:'بازگشت به بالا ↑',
    skill5Title:"توسعه فرانت‌اند",
    skill5Body:"ساخت رابط‌های وب با Next.js، اتصال به API و یکپارچه‌سازی تجربه کاربری با سرویس‌های بک‌اند.",
    skill6Title:"طراحی سیستم و الگوریتم",
    skill6Body:"طراحی مرزهای سیستم، انتخاب ساختار داده و الگوریتم، تحلیل پیچیدگی و ایجاد تعادل میان مقیاس‌پذیری و قابلیت نگهداری.",
    project5Type:'فروشگاه اینترنتی / سورس کد',project5Desc:'API فروشگاهی لاراول با احراز هویت Sanctum، نقش‌های مشتری و فروشنده، فهرست محصولات، سبد خرید، تیکت پشتیبانی، اعلان فاکتور و کالکشن Postman.',
    project4Type:"سلامت دیجیتال / پلتفرم وب",
    project4Desc:"مشارکت مهندسی در دکتردکتر؛ ساده‌سازی اپلیکیشن‌های بک‌اند و بهبود ابزارهای کیفیت کد، فرایندهای توسعه و مشاهده‌پذیری.",
    exp1Company:"Independent / Freelance",
    exp1Location:"مهندسی نرم‌افزار · ریموت / پروژه‌ای",
    exp2Company:"DrDr.ir (Doctor Doctor)",
    exp2Location:"تهران، ایران",
    exp2Meta:"نوامبر ۲۰۲۴ — ژوئن ۲۰۲۵",
    exp3Company:"Gandom Engineering Group",
    exp3Location:"ایران",
    exp3Meta:"فوریه ۲۰۲۳ — نوامبر ۲۰۲۴",
    exp4Company:"Simorgh Software Development",
    exp4Location:"تهران، ایران",
    exp4Role:"توسعه‌دهنده بک‌اند PHP/Laravel",
    exp4Meta:"سپتامبر ۲۰۲۰ — فوریه ۲۰۲۳",
    exp4Desc:"طراحی REST API با لاراول برای مدیریت دارایی، گزارش‌گیری، دسترسی نقش‌محور و اتصال سرویس‌های خارجی. پیاده‌سازی احراز هویت JWT، ماژول‌های سفارش و پرداخت و مستندات OpenAPI/Swagger برای فروشگاه؛ توسعه API، دسترسی داده و کش پلتفرم پخش آنلاین و بهبود معماری ماژولار.",
    exp5Company:"Steel Industries AmirAbad Company",
    exp5Location:"بهشهر، ایران",
    exp5Role:"مهندس بک‌اند PHP/Laravel",
    exp5Meta:"اوت ۲۰۱۹ — ژوئیه ۲۰۲۰",
    exp5Desc:"طراحی اتوماسیون اداری داخلی با Laravel، دسترسی نقش‌محور، مراحل گردش کار، گزارش‌های عملیاتی و مدیریت محتوای چندزبانه. دیجیتالی‌کردن درخواست‌های دستی برای افزایش شفافیت، قابلیت پیگیری و یکپارچگی فرایندها.",
    exp6Company:"System Afzar Shomal",
    exp6Location:"ایران",
    exp6Role:"توسعه‌دهنده بک‌اند PHP/Laravel",
    exp6Meta:"اکتبر ۲۰۱۶ — ژوئن ۲۰۱۹",
    exp6Desc:"توسعه ماژول‌های لاراول برای مدیریت کاربران، نقش‌ها و مجوزها، گردش کار و عملیات حساب. اتصال درگاه‌های بانک سامان و زرین‌پال با اعتبارسنجی تراکنش، مدیریت خطا و ثبت رویدادها.",
    exp7Company:"Dadeh Kav 21",
    exp7Location:"ساری، ایران",
    exp7Role:"توسعه‌دهنده بک‌اند PHP/Laravel",
    exp7Meta:"مه ۲۰۱۶ — اکتبر ۲۰۱۶",
    exp7Desc:"مشارکت در پروژه‌های عملیاتی لاراول و انتقال دانش در زمینه توسعه بک‌اند و مبانی Laravel.",
  };
  const stored=(key)=>{try{return localStorage.getItem(key)}catch(_){return null}};
  const save=(key,value)=>{try{localStorage.setItem(key,value)}catch(_){}};
  const langButton=document.getElementById('language-toggle');
  const themeButton=document.getElementById('theme-toggle');
  const menuButton=document.getElementById('menu-button');
  const nav=document.getElementById('main-nav');
  const toast=document.getElementById('toast');
  let lang=stored('mg-lang')==='fa'?'fa':'en';
  function applyLang(){const dict=lang==='fa'?fa:en;document.documentElement.setAttribute('lang',lang);document.documentElement.setAttribute('dir',lang==='fa'?'rtl':'ltr');document.querySelectorAll('[data-i18n]').forEach(el=>{let key=el.getAttribute('data-i18n');if(Object.prototype.hasOwnProperty.call(dict,key))el.textContent=dict[key]});langButton.textContent=lang==='en'?'FA':'EN';langButton.setAttribute('aria-label',lang==='en'?'Switch to Persian':'تغییر زبان به انگلیسی');document.title=lang==='fa'?'محمدرضا گوهری | مهندس نرم‌افزار':'Mohammadreza Gohari — Software Engineer';document.querySelector('meta[name="description"]').setAttribute('content',lang==='fa'?'محمدرضا گوهری، مهندس نرم‌افزار؛ توسعه بک‌اند و فرانت‌اند، دیتابیس، Docker، طراحی سیستم و الگوریتم.':'Mohammadreza Gohari — Software Engineer working across backend, frontend, databases, Docker, system design and algorithm design.')}
  langButton.addEventListener('click',()=>{lang=lang==='en'?'fa':'en';save('mg-lang',lang);applyLang()});
  applyLang();
  const theme=stored('mg-theme')==='light'?'light':'dark';document.documentElement.setAttribute('data-theme',theme);
  themeButton.addEventListener('click',()=>{const next=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',next);save('mg-theme',next)});
  menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu')});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false')}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false')}});
  document.getElementById('footer-year').textContent=String(new Date().getFullYear());
  let toastTimeout;function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toast.classList.remove('show'),2900)}
  document.getElementById('copy-email').addEventListener('click',async()=>{try{if(!navigator.clipboard||!window.isSecureContext)throw new Error('clipboard not available');await navigator.clipboard.writeText('eng.mr.gohari@gmail.com');showToast(lang==='fa'?fa.copied:en.copied)}catch(_){showToast(lang==='fa'?fa.copyFailed:en.copyFailed)}});
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver((entries)=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}},{threshold:.08,rootMargin:'0px 0px -28px 0px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'))}
})();
