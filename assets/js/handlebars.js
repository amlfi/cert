//* URL Links
// Codecademy
const certTranscriptCC = "https://www.codecademy.com/profiles/AMLFI";

//SkillShare
const certTranscriptSS = "https://www.skillshare.com/user/amlfitzgerald";

// Vectorworks
const courseTranscriptVW = "https://university.vectorworks.net/local/vectscript/s.php/GMtBPU";
const certTranscriptVW = "https://university.vectorworks.net/local/vectscript/s.php/4ZsDqc";


//* Logos
// Adobe
const courseLogoAI = "assets/img/Adobe-Illustrator-CC-01.svg";
const courseLogoAN = "assets/img/Adobe-Animate-CC-01.svg";
const courseLogoID = "assets/img/Adobe-InDesign-CC-01.svg";
const courseLogoPS = "assets/img/Adobe-Photoshop-CC-01.svg";
const courseLogoXD = "assets/img/adobe-experience-design-1.svg";
const courseAltAdobe = "Adobe Logo";

// Codecademy
const providerLogoCC = "assets/img/codecademy_onBlack.svg";
const providerAltCC = "Codecademy Logo";

// SkillShare
const providerLogoSS = "assets/img/Skillshare-logo-header-logged-in-2020.svg";
const providerAltSS = "SkillShare Logo";

// Vectorworks
const courseLogoBIM = "assets/img/bsi.svg";
const courseAltBIM = "BIM Logo";
const courseLogoDWG = "assets/img/dwg.svg";
const courseAltDWG = "DWG Logo";
const courseLogoVW = "assets/img/VW-logo-monogram_on_white.svg";
const providerLogoVW = "assets/img/VW-logo-long_on_black_long.svg";
const altVW = "Vectorworks Logo";

//NCASS
const courseLogoFSA = ""
const providerLogoNCASS = ""
const providerAltNCASS = ""

//* Handlebars(HB) Template Context 
// Design Section Context
const designContext = {
  course: [
    // Adobe InDesign - Essentials Course
    {
      courseLink: "https://skl.sh/2UNR2ZZ",
      courseLogoSrc: courseLogoID,
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe InDesign",
      specificText: "Essentials Course",
      hrs: "6.5hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
    // Adobe Photoshop - Essentials Course
    {
      courseLink: "https://skl.sh/2B95NQ3",
      courseLogoSrc: courseLogoPS,
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe Photoshop",
      specificText: "Essentials Course",
      hrs: "8.5hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
    // Adobe Animate - HTML5 Banners
    {
      courseLink: "https://skl.sh/30GpKbT",
      courseLogoSrc: courseLogoAN,
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe Animate",
      specificText: "HTML5 Animation",
      hrs: "5hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
    // Adobe Illustrator - Essentials
    {
      courseLink: "https://skl.sh/2TBbaxQ",
      courseLogoSrc: courseLogoAI,
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe Illustrator",
      specificText: "Essentials Course",
      hrs: "6hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
    // Adobe XD - UI/UX
    {
      courseLink: "https://skl.sh/2Yjz821",
      courseLogoSrc: courseLogoXD,
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe XD",
      specificText: "UI/UX Design",
      hrs: "11hrs",
      date: "May, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
  ],
};

// Web Dev Section
const webDevContext = {
  course: [
    // Code Foundations - Career Path
    {
      courseLink: "https://www.codecademy.com/learn/paths/code-foundations",
      courseLogoSrc: "assets/img/codeFoundations_onWhite.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "Codecademy",
      specificText: "Career Path - Code Foundations",
      hrs: "2 Weeks",
      date: "June, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Build a Website - Skill Path
    {
      courseLink:
        "https://www.codecademy.com/learn/paths/learn-how-to-build-websites",
      courseLogoSrc: "assets/img/buildWebsite.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "Codecademy",
      specificText: "Skill Path - HTML5 Websites with Github",
      hrs: "10 Weeks",
      date: "June, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Responsive Web Design
    {
      courseLink: "https://skl.sh/2Y8ianr",
      courseLogoSrc: "assets/img/visual-studio-code-1.svg",
      courseLogoAlt: "VS Code Logo",
      certLink: certTranscriptSS,
      programText: "VS Code",
      specificText: "Responsive Web Design with Bootstrap",
      hrs: "17hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
    // Learn How To Code - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-how-to-code",
      courseLogoSrc: "assets/img/code_onWhite.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "Codecademy",
      specificText: "Course - Learn How To Code",
      hrs: "6hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Learn Bootstrap - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-bootstrap",
      courseLogoSrc: "assets/img/bootstrap_icon.svg",
      courseLogoAlt: "Bootstrap Logo",
      certLink: certTranscriptCC,
      programText: "Codecademy",
      specificText: "Course - Learn Bootstrap",
      hrs: "3hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Learn HTML - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-html",
      courseLogoSrc: "assets/img/html-5-notext.svg",
      courseLogoAlt: "HTML Logo",
      certLink: certTranscriptCC,
      programText: "Codecademy",
      specificText: "Course - Learn HTML",
      hrs: "9hrs",
      date: "May, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
  ]
};

// Networking Section
const networkingContext = {
  course: [
    // Program - Specific
    {
      courseLink: "https://skl.sh/2UNR2ZZ",
      courseLogoSrc: "assets/img/Adobe-InDesign-CC-01.svg",
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe InDesign",
      specificText: "Essentials Course",
      hrs: "6.5hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
  ]
};

// Safety Section
const safetyContext = {
  course: [
    // NCASS - Lvl 1 Food Hygiene Training 
    {
      courseLink: "https://www.ncass.org.uk/training/food-hygiene/level-1/",
      courseLogoSrc: "assets/img/Adobe-InDesign-CC-01.svg",
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe InDesign",
      specificText: "Essentials Course",
      hrs: "6.5hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
  ]
};

// Business Section
const businessContext = {
  course: [
    // Program - Specific
    {
      courseLink: "https://skl.sh/2UNR2ZZ",
      courseLogoSrc: "assets/img/Adobe-InDesign-CC-01.svg",
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe InDesign",
      specificText: "Essentials Course",
      hrs: "6.5hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
  ]
};

// Engineering Section
const engineeringContext = {
  course: [
    // Vectorworks - Core Concepts Classes
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=76",
      courseLogoSrc: courseLogoVW,
      courseLogoAlt: altVW,
      certLink: certTranscriptVW,
      programText: "Vectorworks",
      specificText: "Core Concepts Classes",
      hrs: "16hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: altVW,
    },
    // Vectorworks Spotlight - Essentials Seminar
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=292",
      courseLogoSrc: courseLogoVW,
      courseLogoAlt: altVW,
      certLink: courseTranscriptVW,
      programText: "Vectorworks Spotlight",
      specificText: "Essentials Seminar",
      hrs: "4hrs",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: altVW,
    },
    // Vectorworks Landmark - Essentials Seminar
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=217",
      courseLogoSrc: courseLogoVW,
      courseLogoAlt: altVW,
      certLink: courseTranscriptVW,
      programText: "Vectorworks Landmark",
      specificText: "Essentials Seminar",
      hrs: "4hrs",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: altVW,
    },
    // Vectorworks Architecht - Essentials Seminar
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=236",
      courseLogoSrc: courseLogoVW,
      courseLogoAlt: altVW,
      certLink: courseTranscriptVW,
      programText: "Vectorworks Architecht",
      specificText: "Essentials Seminar",
      hrs: "2hrs",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: altVW,
    },
    // Vectorworks - BIM for Landscape
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=73",
      courseLogoSrc: courseLogoBIM,
      courseLogoAlt: courseAltBIM,
      certLink: certTranscriptVW,
      programText: "Vectorworks",
      specificText: "BIM for Landscape",
      hrs: "1hr + Exam",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: altVW,
    },
    // Vectorworks - DWG File Exchange
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=181",
      courseLogoSrc: courseLogoDWG,
      courseLogoAlt: courseAltDWG,
      certLink: certTranscriptVW,
      programText: "Vectorworks",
      specificText: "DWG File Exchange",
      hrs: "1hr + Exam",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: altVW,
    },
  ]
};


//* Handlebars(HB) Expressions
// Standard Expressions
const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);

// Design Section Expressions
const designCompiledHTML = template(designContext);
document.getElementById("designHB").innerHTML = designCompiledHTML;
// Web Dev Section Expressions
const webDevCompiledHTML = template(webDevContext);
document.getElementById("webDevHB").innerHTML = webDevCompiledHTML;
// Networking Section Expressions
const networkingCompiledHTML = template(networkingContext);
document.getElementById("networkingHB").innerHTML = networkingCompiledHTML;
// Safety Section Expressions
const safetyCompiledHTML = template(safetyContext);
document.getElementById("safetyHB").innerHTML = safetyCompiledHTML;
// Business Section Expressions
const businessCompiledHTML = template(businessContext);
document.getElementById("businessHB").innerHTML = businessCompiledHTML;
// Engineering Section Expressions
const engineeringCompiledHTML = template(engineeringContext);
document.getElementById("engineeringHB").innerHTML = engineeringCompiledHTML;
