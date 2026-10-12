(function(){
  'use strict';
  document.documentElement.classList.add('js');
  const en = {
    skip:'Skip to content',brandSubtitle:'BACKEND ENGINEER',navAbout:'About',navExpertise:'Expertise',navWork:'Projects',navExperience:'Experience',navContact:'Contact',
    heroAvailability:'OPEN TO REMOTE BACKEND OPPORTUNITIES',heroIntro:"Hello, I'm Mohammadreza Gohari.",heroTitleA:'I build what',heroTitleB:'powers the ',heroTitleC:'product.',
    heroDescription:'Senior Backend Engineer with 9+ years in software development. I design scalable Laravel APIs, shape maintainable architectures, and make complex systems feel simple.',
    ctaProjects:'Explore my work',ctaContact:"Let's talk",statYears:'Years of experience',statSpecialty:'Core specialization',statApproach:'Architecture mindset',
    portraitName:'MOHAMMADREZA GOHARI',portraitRole:'SENIOR BACKEND ENGINEER',floatingTitle:'Built for production',scrollLabel:'SCROLL TO DISCOVER',
    aboutEyebrow:'A LITTLE ABOUT ME',aboutHeading:"Good software is invisible. Great engineering isn't.",
    aboutBody1:"I'm a backend-focused engineer who enjoys the challenging parts: designing clear APIs, reducing database bottlenecks, untangling complex business logic, and building systems teams can confidently maintain.",
    aboutBody2:'My approach combines clean architecture and pragmatic delivery. From Laravel and relational databases to Redis, queues, Docker and observability, I care about how software behaves in the real world — not just in a local environment.',
    value1:'Think in systems',value2:'Optimize with evidence',value3:'Build for maintainability',
    expertiseEyebrow:'/ 02 — THE TOOLKIT',expertiseHeading:'My kind of engineering.',expertiseIntro:'Thoughtful architecture. Measurable performance. Reliable production systems.',
    skill1Title:'Backend architecture',skill1Body:'Clean code, SOLID principles, modular design, service boundaries and scalable API architecture.',
    skill2Title:'Data & performance',skill2Body:'SQL profiling, indexes, query refactoring, caching strategies and concurrency-aware data flows.',
    skill3Title:'Infrastructure & delivery',skill3Body:'Containerized workflows, deployment pipelines, Linux operations, reliable queues and production readiness.',
    skill4Title:'Quality & reliability',skill4Body:'Automated testing, static analysis, consistent conventions, debugging and production observability.',
    projectsEyebrow:'/ 03 — SELECTED WORK',projectsHeading:'Code that tells a story.',projectsAll:'All GitHub repositories',
    project1Type:'OPEN SOURCE / LARAVEL PACKAGE',project1Desc:'An open-source Laravel package that generates repositories, contracts, services and DTOs to help teams ship consistent, maintainable code.',
    project2Type:'API PLATFORM / MONITORING',project2Desc:'A modular Laravel API for infrastructure monitoring, sensor measurements, alert thresholds, role-based access and documented endpoints.',
    project3Type:'WEB PLATFORM / DELIVERY',project3Desc:'Production-facing web engineering with Next.js, deployment workflows, Nginx reverse proxying and Cloudflare infrastructure.',
    packageLabel:'OPEN-SOURCE TOOL',packageText:'Using Laravel? Take a look at my RepositoryPattern package.',packageAction:'Read the documentation',
    expEyebrow:'THE JOURNEY',expHeading:'A track record of making things better.',exp1Role:'Senior Backend Developer',exp1Desc:'Simplified a multi-application backend landscape, introduced code quality tooling and improved engineering workflows and observability.',exp1Meta:'BACKEND ENGINEERING',
    exp2Role:'Senior Backend Developer',exp2Desc:'Improved SQL query efficiency through indexing and JOIN refactors; strengthened caching and performance with Redis.',
    exp3Role:'Backend Developer',exp3Desc:'Built and maintained Laravel backend services and business APIs as part of a professional software engineering team.',expEnd:'And still learning, building and improving every day.',
    contactEyebrow:'/ 05 — WHAT\'S NEXT?',contactHeading1:"Let's build something",contactHeading2:'that matters.',contactDescription:"Whether it's backend architecture, a complex API, or the next great engineering team — I'd love to hear about it.",contactCta:'Get in touch',copyEmail:'Copy email',copied:'Email copied!',copyFailed:'Please copy: eng.mr.gohari@gmail.com',footerMessage:'Thoughtfully designed. Built to last.',backTop:'BACK TO TOP ↑'
  };
  const fa = {
    skip:'رفتن به محتوای اصلی',brandSubtitle:'مهندس بک‌اند',navAbout:'درباره من',navExpertise:'تخصص‌ها',navWork:'پروژه‌ها',navExperience:'سوابق',navContact:'ارتباط',
    heroAvailability:'آماده همکاری ریموت در حوزه بک‌اند',heroIntro:'سلام، من محمدرضا گوهری هستم.',heroTitleA:'پشتِ هر محصول',heroTitleB:'خوب، یک بک‌اند ',heroTitleC:'قدرتمنده.',
    heroDescription:'مهندس ارشد بک‌اند با بیش از ۹ سال تجربه توسعه نرم‌افزار. APIهای مقیاس‌پذیر لاراول طراحی می‌کنم، معماری‌های قابل نگهداری می‌سازم و مسائل پیچیده را ساده می‌کنم.',
    ctaProjects:'مشاهده پروژه‌ها',ctaContact:'با من در ارتباط باش',statYears:'سال تجربه حرفه‌ای',statSpecialty:'تخصص اصلی',statApproach:'نگاه معماری‌محور',
    portraitName:'محمدرضا گوهری',portraitRole:'مهندس ارشد بک‌اند',floatingTitle:'آماده محیط پروداکشن',scrollLabel:'برای آشنایی بیشتر اسکرول کن',
    aboutEyebrow:'کمی درباره من',aboutHeading:'نرم‌افزار خوب دیده نمی‌شود؛ مهندسی خوب چرا.',
    aboutBody1:'مهندس بک‌اند هستم و از بخش‌های چالش‌برانگیز کار لذت می‌برم؛ از طراحی APIهای شفاف و بهینه‌سازی دیتابیس تا ساده‌سازی منطق پیچیده کسب‌وکار و ساخت سیستم‌هایی که تیم‌ها بتوانند با خیال راحت توسعه‌شان دهند.',
    aboutBody2:'روش کار من ترکیبی از معماری تمیز و تحویل عمل‌گرایانه است. از لاراول و دیتابیس‌های رابطه‌ای تا Redis، صف‌ها، Docker و مانیتورینگ، آنچه برایم اهمیت دارد عملکرد واقعی نرم‌افزار در محیط عملیاتی است.',
    value1:'تفکر سیستمی',value2:'بهینه‌سازی بر پایه شواهد',value3:'توسعه قابل نگهداری',
    expertiseEyebrow:'/ ۰۲ — جعبه ابزار',expertiseHeading:'تخصص من، ساخت سیستم‌های قابل اعتماد.',expertiseIntro:'معماری سنجیده، عملکرد قابل اندازه‌گیری و پایداری در محیط عملیاتی.',
    skill1Title:'معماری بک‌اند',skill1Body:'کدنویسی تمیز، اصول SOLID، طراحی ماژولار، مرزبندی سرویس‌ها و معماری API مقیاس‌پذیر.',
    skill2Title:'داده و کارایی',skill2Body:'پروفایل کوئری‌ها، ایندکس‌گذاری، بازنویسی SQL، استراتژی‌های کش و مدیریت هم‌زمانی.',
    skill3Title:'زیرساخت و استقرار',skill3Body:'محیط‌های کانتینری، پایپ‌لاین استقرار، مدیریت لینوکس، صف‌های پایدار و آماده‌سازی پروداکشن.',
    skill4Title:'کیفیت و پایداری',skill4Body:'تست خودکار، تحلیل استاتیک کد، استانداردهای کدنویسی، دیباگ و مشاهده‌پذیری سیستم.',
    projectsEyebrow:'/ ۰۳ — پروژه‌های منتخب',projectsHeading:'پروژه‌هایی که از تخصصم می‌گویند.',projectsAll:'همه ریپازیتوری‌های گیت‌هاب',
    project1Type:'متن‌باز / پکیج لاراول',project1Desc:'پکیج متن‌باز لاراول برای تولید Repository، Contract، Service و DTO؛ جهت یکپارچگی و نگهداری بهتر کد در تیم‌های توسعه.',
    project2Type:'پلتفرم API / مانیتورینگ',project2Desc:'API ماژولار لاراول برای پایش زیرساخت، اطلاعات سنسورها، آستانه هشدار، کنترل دسترسی نقش‌محور و مستندسازی.',
    project3Type:'پلتفرم وب / استقرار',project3Desc:'توسعه وب در محیط عملیاتی با Next.js، فرایند استقرار، Reverse Proxy با Nginx و زیرساخت Cloudflare.',
    packageLabel:'ابزار متن‌باز',packageText:'با لاراول کار می‌کنی؟ پکیج RepositoryPattern من رو ببین.',packageAction:'مستندات پکیج',
    expEyebrow:'مسیر حرفه‌ای',expHeading:'تجربه بهبود دادن سیستم‌ها و فرایندها.',exp1Role:'توسعه‌دهنده ارشد بک‌اند',exp1Desc:'یکپارچه‌سازی چند اپلیکیشن، افزودن ابزارهای کیفیت کد و بهبود فرایندهای مهندسی و مشاهده‌پذیری.',exp1Meta:'مهندسی بک‌اند',
    exp2Role:'توسعه‌دهنده ارشد بک‌اند',exp2Desc:'بهبود کارایی کوئری‌های SQL با ایندکس و بازنویسی JOINها، و تقویت لایه کش و عملکرد سیستم با Redis.',
    exp3Role:'توسعه‌دهنده بک‌اند',exp3Desc:'توسعه و نگهداری سرویس‌های بک‌اند و APIهای کسب‌وکار با لاراول در یک تیم حرفه‌ای.',expEnd:'و همچنان هر روز در حال یادگیری، ساختن و بهتر کردن.',
    contactEyebrow:'/ ۰۵ — قدم بعدی؟',contactHeading1:'بیاییم چیزی بسازیم',contactHeading2:'که ارزشمند باشد.',contactDescription:'از معماری بک‌اند و APIهای پیچیده تا همکاری با یک تیم مهندسی خوب؛ خوشحال می‌شم درباره‌ش صحبت کنیم.',contactCta:'ارسال ایمیل',copyEmail:'کپی ایمیل',copied:'ایمیل کپی شد!',copyFailed:'ایمیل را کپی کن: eng.mr.gohari@gmail.com',footerMessage:'با دقت طراحی شده، برای ماندگاری ساخته شده.',backTop:'بازگشت به بالا ↑'
  };
  const stored=(key)=>{try{return localStorage.getItem(key)}catch(_){return null}};
  const save=(key,value)=>{try{localStorage.setItem(key,value)}catch(_){}};
  const langButton=document.getElementById('language-toggle');
  const themeButton=document.getElementById('theme-toggle');
  const menuButton=document.getElementById('menu-button');
  const nav=document.getElementById('main-nav');
  const toast=document.getElementById('toast');
  let lang=stored('mg-lang')==='fa'?'fa':'en';
  function applyLang(){const dict=lang==='fa'?fa:en;document.documentElement.setAttribute('lang',lang);document.documentElement.setAttribute('dir',lang==='fa'?'rtl':'ltr');document.querySelectorAll('[data-i18n]').forEach(el=>{let key=el.getAttribute('data-i18n');if(Object.prototype.hasOwnProperty.call(dict,key))el.textContent=dict[key]});langButton.textContent=lang==='en'?'FA':'EN';langButton.setAttribute('aria-label',lang==='en'?'Switch to Persian':'تغییر زبان به انگلیسی');document.title=lang==='fa'?'محمدرضا گوهری | مهندس ارشد بک‌اند':'Mohammadreza Gohari — Senior Backend Engineer';document.querySelector('meta[name="description"]').setAttribute('content',lang==='fa'?'محمدرضا گوهری، مهندس ارشد بک‌اند متخصص PHP، Laravel، API، دیتابیس، Redis و معماری مقیاس‌پذیر.':'Mohammadreza Gohari — Senior Backend Engineer specializing in PHP, Laravel, high-performance APIs, database optimization, Redis, Docker and scalable software architecture.')}
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
