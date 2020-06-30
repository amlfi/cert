//! URL Links
//#region (URLs)

//* Codecademy URLs
/// Course Transcript
const certTranscriptCC = "https://www.codecademy.com/profiles/AMLFI";

//* SkillShare URLs
/// Course Transcript
const certTranscriptSS = "https://www.skillshare.com/user/amlfitzgerald";

//* Vectorworks URLs
/// Course Transcript
const courseTranscriptVW =
  "https://university.vectorworks.net/local/vectscript/s.php/26oCCO";

/// Certificate Transcript
const certTranscriptVW =
  "https://university.vectorworks.net/local/vectscript/s.php/TzFJdz";

//#endregion (URLs)


//! Modals
//#region (Modals)

//* Modal Function (Template)
const modalSrc = (certImage, captionText) => {
  $(".imagepreview").attr("src", certImage); // Certificate Image Src
  $("#imagemodal").modal("show");
  document.getElementById("modal-caption").innerHTML = captionText; // Caption Text
};

//* NCASS (Modals)
// #region (NCASS)
/// Food Hygeine Training Lv 1
const certNCASS_FH1 = () => {
  modalSrc(certImageNCASS_FH1, certAltNCASS_FH1);
};
const certNCASS_FH1_HB = "javascript:certNCASS_FH1()";
/// Food Hygeine Training Lv 2
const certNCASS_FH2 = () => {
  modalSrc(certImageNCASS_FH2, certAltNCASS_FH2);
};
const certNCASS_FH2_HB = "javascript:certNCASS_FH2()";
/// HACCP Certification Lv 1 & 2
const certNCASS_HACCP = () => {
  modalSrc(certImageNCASS_HACCP, certAltNCASS_HACCP);
};
const certNCASS_HACCP_HB = "javascript:certNCASS_HACCP()";
// #endregion (NCASS)

//* NCRQ (Modals)
/// Safety for Managers
const certNCRQ = () => {
  modalSrc(certImageNCRQ, certAltNCRQ);
};
const certNCRQ_HB = "javascript:certNCRQ()";

//* Vectorworks (Modals)
/// VW - Core Concepts Training
const certVW_Core = () => {
  modalSrc(certImageVW_Core, certAltVW_Core);
};
const certVW_Core_HB = "javascript:certVW_Core()";

/// VW - Intermediate Concepts Training
const certVW_Inter = () => {
  modalSrc(certImageVW_Inter, certAltVW_Inter);
};
const certVW_Inter_HB = "javascript:certVW_Inter()";

/// VW - BIM for Landscape Design
const certVW_BIM = () => {
  modalSrc(certImageVW_BIM, certAltVW_BIM);
};
const certVW_BIM_HB = "javascript:certVW_BIM()";

/// VW - DWG File Exchange
const certVW_DWG = () => {
  modalSrc(certImageVW_DWG, certAltVW_DWG);
};
const certVW_DWG_HB = "javascript:certVW_DWG()";

//#endregion (Modals)


//! Images, Logos & Captions (Src)
// #region (Src)

//* Generic (Src)
// #region (Generic)
const genLogoLocked = "assets/img/img_locked.svg";
const emDash = "&nbsp &mdash; &nbsp";
//#endregion (Generic)

//* Adobe (Src)
// #region (Adobe)
const courseLogoAI = "assets/img/Adobe-Illustrator.svg";
const courseLogoAN = "assets/img/Adobe-Animate.svg";
const courseLogoID = "assets/img/Adobe-InDesign.svg";
const courseLogoPS = "assets/img/Adobe-Photoshop.svg";
const courseLogoXD = "assets/img/Adobe-XD.svg";
const courseAltAdobe = "Adobe Logo";
//#endregion (Adobe)

//* Codecademy (Src)
// #region (CC)
/// Codecademy - Generic
const providerNameCC = "Codecademy";
const providerLogoCC = "assets/img/codecademy_onBlack.svg";
const providerAltCC = "Codecademy Logo";
// #endregion (CC)

//* NCASS (Src)
// #region (NCASS)
/// NCASS - Generic
const providerNameNCASS = "NCASS";
const providerLogoNCASS = "assets/img/NCASS_Logo.svg";
const providerAltNCASS = "NCASS Logo";
const courseLogoFSA = "assets/img/FoodStdsAgency_monogram.svg";
const courseAltFSA = "Food Standards Authority Logo";
/// Food Hygiene Training - Lvl 1
const certNameNCASS_FH1 = "Food Hygiene Training Lvl 1";
const certImageNCASS_FH1 = "https://i.ibb.co/BPZs5pq/190603-FS1-NCASS.jpg";
const certAltNCASS_FH1 = providerNameNCASS + emDash + certNameNCASS_FH1;
/// Food Hygiene Training - Lvl 2
const certNameNCASS_FH2 = "Food Hygiene Training Lvl 2";
const certImageNCASS_FH2 = "https://i.ibb.co/BKnzQKm/200627-FS2-NCASS.jpg";
const certAltNCASS_FH2 = providerNameNCASS + emDash + certNameNCASS_FH2;
/// HACCP Training - Lvl 1 & 2
const certNameNCASS_HACCP = "HACCP Training Lvl 1 & 2";
const certImageNCASS_HACCP = "https://i.ibb.co/vDB0YB3/200627-HACCP-NCASS.jpg";
const certAltNCASS_HACCP = providerNameNCASS + emDash + certNameNCASS_HACCP;
//#endregion (NCASS)

//* NCRQ (Src)
// #region (NCRQ) - Generic
const providerNameNCRQ = "NCRQ";
const providerLogoNCRQ = "assets/img/NCRQ.svg";
const providerAltNCRQ = "NCRQ Logo";
// NCRQ - Safety for Managers
const courseLogoSafety = "assets/img/generic_safety.svg";
const courseAltSafety = "Generic Safety Logo";
const certNameNCRQ_SFM = "Safety for Managers";
const certImageNCRQ = "assets/img/img_locked.svg";
const certAltNCRQ = providerNameNCRQ + emDash + certNameNCRQ_SFM;
//#endregion (NCRQ)

//* SkillShare (Src)
//#region (SS)
const providerLogoSS = "assets/img/Skillshare-logo.svg";
const providerAltSS = "SkillShare Logo";
//#endregion (SS)

//* Vectorworks (Src)
// #region (VW)
/// VW - Generic
const providerNameVW = "Vectorworks"
const providerLogoVW = "assets/img/VW-logo-long_on_black.svg";
const providerAltVW = "Vectorworks University"
const courseLogoVW = "assets/img/VW-logo-monogram_on_white.svg";
const courseAltVW = "Vectorworks Logo";
/// VW - BIM
const courseLogoBIM = "assets/img/bsi.svg";
const courseAltBIM = "BIM Logo";
/// VW - DWG
const courseLogoDWG = "assets/img/dwg.svg";
const courseAltDWG = "DWG Logo";
/// VW - Core Concepts Training
const certNameVW_Core = "Core Concepts Training"
const certImageVW_Core = "assets/img/VW_Core-Concepts.jpg";
const certAltVW_Core = providerNameVW + emDash + certNameVW_Core;
/// VW - Intermediate Concepts Training
const certNameVW_Inter = "Intermediate Concepts Training"
const certImageVW_Inter = "assets/img/VW_Intermediate-Concepts.jpg";
const certAltVW_Inter = providerNameVW + emDash + certNameVW_Inter;
/// VW - BIM for Landscape Design
const certNameVW_BIM = "BIM for Landscape Design"
const certImageVW_BIM = "assets/img/VW_BIM_Cert.jpg";
const certAltVW_BIM = providerNameVW + emDash + certNameVW_BIM;
/// VW - Intermediate Concepts Training
const certNameVW_DWG = "DWG File Exchange"
const certImageVW_DWG = "assets/img/VW_DWG_Cert.jpg";
const certAltVW_DWG = providerNameVW + emDash + certNameVW_DWG;
//#endregion (VW)

// #endregion (Src)


//! Handlebars Template - HB Context
//#region (HB Context)

//* Design Section - HB Context
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

//* Web Dev Section - HB Context
const webDevContext = {
  course: [
    // Code Foundations - Career Path
    {
      courseLink: "https://www.codecademy.com/learn/paths/code-foundations",
      courseLogoSrc: "assets/img/codeFoundations_onWhite.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: providerNameCC,
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
      programText: providerNameCC,
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
      programText: providerNameCC,
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
      programText: providerNameCC,
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
      programText: providerNameCC,
      specificText: "Course - Learn HTML",
      hrs: "9hrs",
      date: "May, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
  ],
};

//* Networking Section - HB Context
const networkingContext = {
  course: [
    // Program - Specific
    {
      courseLink: "https://skl.sh/2UNR2ZZ",
      courseLogoSrc: "assets/img/Adobe-InDesign.svg",
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe InDesign",
      specificText: "Essentials Course",
      hrs: "6.5hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
  ],
};

//* Safety Section - HB Context
const safetyContext = {
  course: [
    // NCRQ - Safety for Managers //
    {
      courseLink: "https://www.imtraininguk.com/health-and-safety-courses/",
      courseLogoSrc: courseLogoSafety,
      courseLogoAlt: courseAltSafety,
      certLink: certNCRQ_HB,
      programText: providerNameNCRQ,
      specificText: certNameNCRQ_SFM,
      hrs: "12hrs + Oral Assessments",
      date: "June, 2020",
      providerLogoSrc: providerLogoNCRQ,
      providerLogoAlt: providerAltNCRQ,
    },
    // NCASS - HACCP Training - Lvl 1 & 2
    {
      courseLink:
        "https://www.ncass.org.uk/training/health-safety-courses/haccp-training/",
      courseLogoSrc: courseLogoFSA,
      courseLogoAlt: courseAltFSA,
      certLink: certNCASS_HACCP_HB,
      programText: providerNameNCASS,
      specificText: certNameNCASS_HACCP,
      hrs: "20hrs + Exam",
      date: "June, 2020",
      providerLogoSrc: providerLogoNCASS,
      providerLogoAlt: providerAltNCASS,
    },
    // NCASS - Food Hygiene Training - Lvl 2
    {
      courseLink: "https://www.ncass.org.uk/training/food-hygiene/level-2/",
      courseLogoSrc: courseLogoFSA,
      courseLogoAlt: courseAltFSA,
      certLink: certNCASS_FH2_HB,
      programText: providerNameNCASS,
      specificText: certNameNCASS_FH2,
      hrs: "10hrs + Exam",
      date: "June, 2020",
      providerLogoSrc: providerLogoNCASS,
      providerLogoAlt: providerAltNCASS,
    },
    // NCASS - Food Hygiene Training - Lvl 1
    {
      courseLink: "https://www.ncass.org.uk/training/food-hygiene/level-1/",
      courseLogoSrc: courseLogoFSA,
      courseLogoAlt: courseAltFSA,
      certLink: certNCASS_FH1_HB,
      programText: providerNameNCASS,
      specificText: certNameNCASS_FH1,
      hrs: "10hrs + Exam",
      date: "June, 2019",
      providerLogoSrc: providerLogoNCASS,
      providerLogoAlt: providerAltNCASS,
    },
  ],
};

//* Business Section - HB Context
const businessContext = {
  course: [
    // Program - Specific
    {
      courseLink: "https://skl.sh/2UNR2ZZ",
      courseLogoSrc: "assets/img/Adobe-InDesign.svg",
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe InDesign",
      specificText: "Essentials Course",
      hrs: "6.5hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
  ],
};

//* Engineering Section - HB Context
const engineeringContext = {
  course: [
    // Vectorworks - Intermediate Concepts Classes
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=234",
      courseLogoSrc: courseLogoVW,
      courseLogoAlt: courseAltVW,
      certLink: certVW_Inter_HB,
      programText: providerNameVW,
      specificText: certNameVW_Inter,
      hrs: "16hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: courseAltVW,
    },
    // Vectorworks - Core Concepts Classes
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=76",
      courseLogoSrc: courseLogoVW,
      courseLogoAlt: courseAltVW,
      certLink: certVW_Core_HB,
      programText: providerNameVW,
      specificText: certNameVW_Core,
      hrs: "16hrs",
      date: "June, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: courseAltVW,
    },
    // Vectorworks Spotlight - Essentials Seminar
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=292",
      courseLogoSrc: courseLogoVW,
      courseLogoAlt: courseAltVW,
      certLink: courseTranscriptVW,
      programText: providerNameVW,
      specificText: "Spotlight - Essentials Seminar",
      hrs: "4hrs",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: courseAltVW,
    },
    // Vectorworks Landmark - Essentials Seminar
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=217",
      courseLogoSrc: courseLogoVW,
      courseLogoAlt: courseAltVW,
      certLink: courseTranscriptVW,
      programText: providerNameVW,
      specificText: "Landmark - Essentials Seminar",
      hrs: "4hrs",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: courseAltVW,
    },
    // Vectorworks Architecht - Essentials Seminar
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=236",
      courseLogoSrc: courseLogoVW,
      courseLogoAlt: courseAltVW,
      certLink: courseTranscriptVW,
      programText: providerNameVW,
      specificText: "Architecht - Essentials Seminar",
      hrs: "2hrs",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: courseAltVW,
    },
    // Vectorworks - BIM for Landscape
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=73",
      courseLogoSrc: courseLogoBIM,
      courseLogoAlt: courseAltBIM,
      certLink: certVW_BIM_HB,
      programText: providerNameVW,
      specificText: certNameVW_BIM,
      hrs: "1hr + Exam",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: courseAltVW,
    },
    // Vectorworks - DWG File Exchange
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=181",
      courseLogoSrc: courseLogoDWG,
      courseLogoAlt: courseAltDWG,
      certLink: certVW_DWG_HB,
      programText: providerNameVW,
      specificText: certNameVW_DWG,
      hrs: "1hr + Exam",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: courseAltVW,
    },
  ],
};

//#endregion (HB Context)

//! Handlebars - HB Expressions
// #region (HB Expressions)

//* Standard HB Expressions
const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);

//* HB Expressions - By Section
// Design Section - HB Expressions
const designCompiledHTML = template(designContext);
document.getElementById("designHB").innerHTML = designCompiledHTML;
// Web Dev Section - HB Expressions
const webDevCompiledHTML = template(webDevContext);
document.getElementById("webDevHB").innerHTML = webDevCompiledHTML;
// Networking Section - HB Expressions
const networkingCompiledHTML = template(networkingContext);
document.getElementById("networkingHB").innerHTML = networkingCompiledHTML;
// Safety Section - HB Expressions
const safetyCompiledHTML = template(safetyContext);
document.getElementById("safetyHB").innerHTML = safetyCompiledHTML;
// Business Section - HB Expressions
const businessCompiledHTML = template(businessContext);
document.getElementById("businessHB").innerHTML = businessCompiledHTML;
// Engineering Section - HB Expressions
const engineeringCompiledHTML = template(engineeringContext);
document.getElementById("engineeringHB").innerHTML = engineeringCompiledHTML;

// #endregion (HB Expressions)
