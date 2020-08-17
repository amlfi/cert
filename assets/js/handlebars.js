//! URL Links
//#region (URLs)

//* ATEC URLs
//#region (ATEC URLs)
/// Test and Tag
const courseLinkATEC =
  "https://training.atec.asn.au/training-courses/electrotechnology/test-and-tag-non-accredited-305-inc-gst-pp.cfm";
//#endregion (ATEC URLs)

//* CITC URLs
//#region (CITC URLs)
/// Rigging - Intermediate
const courseLinkCITC_RI =
  "https://www.citc.com.au/index.php/courses-available/?course=6326&type=w";
/// Mobile Non-Slewing Crane
const courseLinkCITC_CN =
  "https://www.citc.com.au/index.php/courses-available/?course=58600&type=w";
/// Rigging - Basic
const courseLinkCITC_RB =
  "https://www.citc.com.au/index.php/courses-available/?course=4658&type=w";
/// Telescopic Materials Handler
const courseLinkCITC_TMH =
  "https://www.citc.com.au/index.php/courses-available/?course=62627&type=w";
/// Elevating Work Platforms
const courseLinkCITC_EWP =
  "https://www.citc.com.au/index.php/courses-available/?course=58598&type=w";
/// Dogging
const courseLinkCITC_DG =
  "https://www.citc.com.au/index.php/courses-available/?course=6324&type=w";
/// Working at Heights
const courseLinkCITC_WH =
  "https://www.citc.com.au/index.php/courses-available/?course=5941&type=w";
/// Forklift
const courseLinkCITC_FL =
  "https://www.citc.com.au/index.php/courses-available/?course=58595&type=w";
/// White Card
const courseLinkCITC_WC =
  "https://www.citc.com.au/index.php/courses-available/?course=34624&type=w";
//#endregion (CITC URLs)

//* Codecademy URLs
//#region (Codecademy URLs)
/// Course Transcript
const certTranscriptCC = "https://www.codecademy.com/profiles/AMLFI";
//#endregion (Codecademy URLs)

//* HIA URLs
//#region (HIA URLs)
/// Food Safety Supervisor Lv.1
const courseLinkHIA_FSS1 =
  "http://hia.edu.au/hospitality-and-retail/food-safety-supervisor/";
/// Food Safety Supervisor Lv.2
const courseLinkHIA_FSS2 =
  "http://hia.edu.au/hospitality-and-retail/food-safety-supervisor/";
/// Responsible Service of Alcohol
const courseLinkHIA_RSA =
  "http://www.hia.edu.au/responsible-service-of-alcohol/queensland/";
//#endregion (HIA URLs)

//* SkillShare URLs
//#region (SkillShare URLs)
/// Course Transcript
const certTranscriptSS = "https://www.skillshare.com/user/amlfitzgerald";
//#endregion (SkillShare URLs)

//* StJohn URLs
//#region (StJohn URLs)
/// Occupational First Aid
const courseLinkStJohn =
  "https://one.stjohnsa.com.au/classBookings.aspx?webcat=COMM2&couid=OFA14";
//#endregion (StJohn URLs)

//* Vectorworks URLs
//#region (Vectorworks URLs)
/// Course Transcript
const courseTranscriptVW =
  "https://university.vectorworks.net/local/vectscript/s.php/26oCCO";

/// Certificate Transcript
const certTranscriptVW =
  "https://university.vectorworks.net/local/vectscript/s.php/TzFJdz";
//#endregion (Vectorworks URLs)

//* Xero URLs
//#region (Xero URLs)
/// Course Description
const courseLinkXERO =
  "https://www.xero.com/au/partner-programs/partners/partner-education/";
//#endregion (Xero URLs)

//#endregion (URLs)

//! Modals
//#region (Modals)

//* Modal Function (Template)
const modalSrc = (certImage, captionText) => {
  $(".imagepreview").attr("src", certImage); // Certificate Image Src
  $("#imagemodal").modal("show");
  document.getElementById("modal-caption").innerHTML = captionText; // Caption Text
};

//* ATEC (Modals)
// #region (ATEC) //
/// ATEC - Test and Tag
const certATEC = () => {
  modalSrc(certImageATEC, certAltATEC);
};
const certATEC_Modal = "javascript:certATEC()";
// #endregion (ATEC) //

//* CITC (Modals)
// #region (CITC) //

/// CITC - Rigging (Intermediate)
const certCITC_RI = () => {
  modalSrc(certImageCITC_RI, certAltCITC_RI);
};
const certCITC_RI_Modal = "javascript:certCITC_RI()";

/// CITC - Mobile Non-Slewing Crane
const certCITC_CN = () => {
  modalSrc(certImageCITC_CN, certAltCITC_CN);
};
const certCITC_CN_Modal = "javascript:certCITC_CN()";

/// CITC - Rigging (Basic)
const certCITC_RB = () => {
  modalSrc(certImageCITC_RB, certAltCITC_RB);
};
const certCITC_RB_Modal = "javascript:certCITC_RB()";

/// CITC - Telescopic Materials Handler
const certCITC_TMH = () => {
  modalSrc(certImageCITC_TMH, certAltCITC_TMH);
};
const certCITC_TMH_Modal = "javascript:certCITC_TMH()";

/// CITC - Elevating Work Platforms
const certCITC_EWP = () => {
  modalSrc(certImageCITC_EWP, certAltCITC_EWP);
};
const certCITC_EWP_Modal = "javascript:certCITC_EWP()";

/// CITC - Dogging
const certCITC_DG = () => {
  modalSrc(certImageCITC_DG, certAltCITC_DG);
};
const certCITC_DG_Modal = "javascript:certCITC_DG()";

/// CITC - Working at Heights
const certCITC_WH = () => {
  modalSrc(certImageCITC_WH, certAltCITC_WH);
};
const certCITC_WH_Modal = "javascript:certCITC_WH()";

/// CITC - Forklift
const certCITC_FL = () => {
  modalSrc(certImageCITC_FL, certAltCITC_FL);
};
const certCITC_FL_Modal = "javascript:certCITC_FL()";

/// CITC - White Card
const certCITC_WC = () => {
  modalSrc(certImageCITC_WC, certAltCITC_WC);
};
const certCITC_WC_Modal = "javascript:certCITC_WC()";

// #endregion (CITC) //

//* HIA (Modals)
// #region (HIA) //
/// HIA - Food Safety Supervisor Lv. 1
const certHIA_FSS1 = () => {
  modalSrc(certImageHIA_FSS1, certAltHIA_FSS1);
};
const certHIA_FSS1_Modal = "javascript:certHIA_FSS1()";
/// HIA - Food Safety Supervisor Lv. 2
const certHIA_FSS2 = () => {
  modalSrc(certImageHIA_FSS2, certAltHIA_FSS2);
};
const certHIA_FSS2_Modal = "javascript:certHIA_FSS2()";
/// HIA - Responsible Service of Alcohol
const certHIA_RSA = () => {
  modalSrc(certImageHIA_RSA, certAltHIA_RSA);
};
const certHIA_RSA_Modal = "javascript:certHIA_RSA()";
// #endregion (HIA) //

//* NCASS (Modals)
// #region (NCASS)
/// Food Hygeine Training Lv 1
const certNCASS_FH1 = () => {
  modalSrc(certImageNCASS_FH1, certAltNCASS_FH1);
};
const certNCASS_FH1_Modal = "javascript:certNCASS_FH1()";
/// Food Hygeine Training Lv 2
const certNCASS_FH2 = () => {
  modalSrc(certImageNCASS_FH2, certAltNCASS_FH2);
};
const certNCASS_FH2_Modal = "javascript:certNCASS_FH2()";
/// HACCP Certification Lv 1 & 2
const certNCASS_HACCP = () => {
  modalSrc(certImageNCASS_HACCP, certAltNCASS_HACCP);
};
const certNCASS_HACCP_Modal = "javascript:certNCASS_HACCP()";
// #endregion (NCASS)

//* NCRQ (Modals)
// #region (NCRQ) //
/// Safety for Managers
const certNCRQ = () => {
  modalSrc(certImageNCRQ, certAltNCRQ);
};
const certNCRQ_Modal = "javascript:certNCRQ()";
// #endregion (NCRQ) //

//* StJohn (Modals)
// #region (StJohn) //
/// StJohn - Occupational First Aid
const certStJohn = () => {
  modalSrc(certImageStJohn, certAltStJohn);
};
const certStJohn_Modal = "javascript:certStJohn()";
// #endregion (StJohn) //

//* TafeSA (Modals)
// #region (TafeSA) //
/// TafeSA Certificate II Electrotechnology
const certTafeSA = () => {
  modalSrc(certImageTafeSA, certAltTafeSA);
};
const certTafeSA_Modal = "javascript:certTafeSA()";
// #endregion (TafeSA) //

//* The Open University (Modals)
// #region (TOU) //
/// Discovering Cisco Computer Networks
const certTOU_compNet = () => {
  modalSrc(certImageTOU_compNet, certAltTOU_compNet);
};
const certTOU_compNet_Modal = "javascript:certTOU_compNet()";
// #endregion (TOU) //

//* Vectorworks (Modals)
// #region (Vectorworks) //
/// VW - Core Concepts Training
const certVW_Core = () => {
  modalSrc(certImageVW_Core, certAltVW_Core);
};
const certVW_Core_Modal = "javascript:certVW_Core()";

/// VW - Intermediate Concepts Training
const certVW_Inter = () => {
  modalSrc(certImageVW_Inter, certAltVW_Inter);
};
const certVW_Inter_Modal = "javascript:certVW_Inter()";

/// VW - BIM for Landscape Design
const certVW_BIM = () => {
  modalSrc(certImageVW_BIM, certAltVW_BIM);
};
const certVW_BIM_Modal = "javascript:certVW_BIM()";

/// VW - DWG File Exchange
const certVW_DWG = () => {
  modalSrc(certImageVW_DWG, certAltVW_DWG);
};
const certVW_DWG_Modal = "javascript:certVW_DWG()";
// #endregion (Vectorworks) //

//* Xero (Modals)
// #region (XERO) //
/// Xero Advisor Certified 
const certXERO_advisor = () => {
  modalSrc(certImageXERO_advisor, certAltXERO_advisor);
};
const certXERO_advisor_Modal = "javascript:certXERO_advisor()";

/// Xero Payroll Certified 
const certXERO_payroll = () => {
  modalSrc(certImageXERO_payroll, certAltXERO_payroll);
};
const certXERO_payroll_Modal = "javascript:certXERO_payroll()";
// #endregion (XERO) //

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

//* ATEC (Src)
// #region (ATEC)
/// ATEC - Generic
const providerNameATEC = "Adelaide Training & Employment Centre";
const providerNameShortATEC = "ATEC";
const providerLogoATEC = "assets/img/ATEC-logo.svg";
const providerAltATEC = "ATEC Logo";
/// ATEC - Rigging (Intermediate)
const courseLogoATEC = "assets/img/ATEC-logo_meter.svg";
const courseAltATEC = "Test & Tag";
const certNameATEC = "License to Conduct Electrical Equipment Testing";
const certImageATEC = "assets/img/ATEC-cert.jpg";
const certAltATEC = providerNameATEC + emDash + certNameATEC;
const certLengthATEC = "8hrs";
const certDateATEC = "Nov, 2015";
// #endregion (ATEC)

//* CITC (Src)
// #region (CITC)
/// CITC - Generic
const providerNameCITC = "Construction Industry Training Centre";
const providerNameShortCITC = "CITC";
const providerLogoCITC = "assets/img/CITC-logo.svg";
const providerAltCITC = "CITC Logo";
/// CITC - Rigging (Intermediate)
const courseLogoCITC_RI = "assets/img/CITC-icon_RI.svg";
const courseAltCITC_RI = "Rigging - Intermediate";
const certNameCITC_RI = "Licence to Perform Rigging - Intermediate";
const certImageCITC_RI = "assets/img/CITC-RI-cert.jpg";
const certAltCITC_RI = providerNameCITC + emDash + certNameCITC_RI;
const certLengthCITC_RI = "40hrs";
const certDateCITC_RI = "Feb, 2019";
/// CITC - CN Crane
const courseLogoCITC_CN = "assets/img/CITC-icon_CN.svg";
const courseAltCITC_CN = "CN Crane";
const certNameCITC_CN = "Licence to Operate Non-Slewing Mobile Crane";
const certImageCITC_CN = "assets/img/CITC-CN-cert.jpg";
const certAltCITC_CN = providerNameCITC + emDash + certNameCITC_CN;
const certLengthCITC_CN = "32hrs";
const certDateCITC_CN = "Feb, 2019";
/// CITC - Rigging (Basic)
const courseLogoCITC_RB = "assets/img/CITC-icon_RB.svg";
const courseAltCITC_RB = "Rigging - Basic";
const certNameCITC_RB = "Licence to Perform Rigging - Basic";
const certImageCITC_RB = "assets/img/CITC-RB-cert.jpg";
const certAltCITC_RB = providerNameCITC + emDash + certNameCITC_RB;
const certLengthCITC_RB = "40hrs";
const certDateCITC_RB = "Dec, 2015";
/// CITC - Telescopic Materials Handler
const courseLogoCITC_TMH = "assets/img/CITC-icon_TMH.svg";
const courseAltCITC_TMH = "Telehandler";
const certNameCITC_TMH = "Licence to Operate Telescopic Materials Handler";
const certImageCITC_TMH = "assets/img/CITC-TMH-cert.jpg";
const certAltCITC_TMH = providerNameCITC + emDash + certNameCITC_TMH;
const certLengthCITC_TMH = "10hrs";
const certDateCITC_TMH = "Dec, 2012";
/// CITC - Elevating Work Platforms
const courseLogoCITC_EWP = "assets/img/CITC-icon_EWP.svg";
const courseAltCITC_EWP = "Rigging - Intermediate";
const certNameCITC_EWP = "Licence to Operate 11m+ Elevating Work Platform";
const certImageCITC_EWP = "assets/img/CITC-EWP-cert.jpg";
const certAltCITC_EWP = providerNameCITC + emDash + certNameCITC_EWP;
const certLengthCITC_EWP = "16hrs";
const certDateCITC_EWP = "Dec, 2012";
/// CITC - Dogging
const courseLogoCITC_DG = "assets/img/CITC-icon_DG.svg";
const courseAltCITC_DG = "Dogging";
const certNameCITC_DG = "Licence to Perform Dogging";
const certImageCITC_DG = "assets/img/CITC-DG-cert.jpg";
const certAltCITC_DG = providerNameCITC + emDash + certNameCITC_DG;
const certLengthCITC_DG = "40hrs";
const certDateCITC_DG = "Dec, 2012";
/// CITC - Working at Heights
const courseLogoCITC_WH = "assets/img/CITC-icon_WH.svg";
const courseAltCITC_WH = "Working at Heights";
const certNameCITC_WH = "Work Safely at Heights";
const certImageCITC_WH = "assets/img/CITC-WH-cert.jpg";
const certAltCITC_WH = providerNameCITC + emDash + certNameCITC_WH;
const certLengthCITC_WH = "8hrs";
const certDateCITC_WH = "Dec, 2012";
/// CITC - Forklift
const courseLogoCITC_FL = "assets/img/CITC-icon_FL.svg";
const courseAltCITC_FL = "Forklift";
const certNameCITC_FL = "Licence to Operate Forklift";
const certImageCITC_FL = "assets/img/img_locked.svg";
const certAltCITC_FL = providerNameCITC + emDash + certNameCITC_FL;
const certLengthCITC_FL = "16hrs";
const certDateCITC_FL = "Nov, 2011";
/// CITC - White Card
const courseLogoCITC_WC = "assets/img/CITC-icon_WC.svg";
const courseAltCITC_WC = "White Card";
const certNameCITC_WC = "Construction Industry Safety Induction";
const certImageCITC_WC = "assets/img/img_locked.svg";
const certAltCITC_WC = providerNameCITC + emDash + certNameCITC_WC;
const certLengthCITC_WC = "8hrs";
const certDateCITC_WC = "Feb, 2011";
// #endregion (CITC)

//* Codecademy (Src)
// #region (CC)
/// Codecademy - Generic
const providerNameCC = "Codecademy";
const providerLogoCC = "assets/img/codecademy_onBlack.svg";
const providerAltCC = "Codecademy Logo";
// #endregion (CC)

//* HIA (Src)
// #region (HIA)
/// CITC - Generic
const providerNameHIA = "Hospitality Institute of Australasia";
const providerLogoHIA = "assets/img/HIA-logo_short.svg";
const providerAltHIA = "HIA Logo";
/// HIA - Food Safety Supervisor Lv. 1
const courseLogoHIA_FSS1 = "assets/img/HIA-FSS1-logo.png";
const courseAltHIA_FSS1 = "FSS1 logo";
const certNameHIA_FSS1 = "Food Safety Supervisor Lv. 1";
const certImageHIA_FSS1 = "assets/img/HIA-FSS1-cert.jpg";
const certAltHIA_FSS1 = providerNameHIA + emDash + certNameHIA_FSS1;
const certLengthHIA_FSS1 = "8hrs";
const certDateHIA_FSS1 = "Jan, 2015";
/// HIA - Food Safety Supervisor Lv. 2
const courseLogoHIA_FSS2 = "assets/img/HIA-FSS2-logo.png";
const courseAltHIA_FSS2 = "FSS2 logo";
const certNameHIA_FSS2 = "Food Safety Supervisor Lv. 2";
const certImageHIA_FSS2 = "assets/img/HIA-FSS2-cert.jpg";
const certAltHIA_FSS2 = providerNameHIA + emDash + certNameHIA_FSS2;
const certLengthHIA_FSS2 = "8hrs";
const certDateHIA_FSS2 = "Jan, 2015";
/// HIA - Responsible Service of Alcohol
const courseLogoHIA_RSA = "assets/img/HIA-RSA-logo.svg";
const courseAltHIA_RSA = "RSA logo";
const certNameHIA_RSA = "Responsible Service of Alcohol";
const certImageHIA_RSA = "assets/img/HIA-RSA-cert.jpg";
const certAltHIA_RSA = providerNameHIA + emDash + certNameHIA_RSA;
const certLengthHIA_RSA = "4hrs";
const certDateHIA_RSA = "Feb, 2016";
// #endregion (HIA)

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
const courseAltNCRQ = "Safety for Managers";
const certNameNCRQ_SFM = "Safety for Managers";
const certImageNCRQ = "assets/img/NCRQ-Safety_for_Managers-cert.jpg";
const certAltNCRQ = providerNameNCRQ + emDash + certNameNCRQ_SFM;
const certLengthNCRQ = "12hrs + Oral Assessments";
const certDateNCRQ = "June, 2020";
//#endregion (NCRQ)

//* SkillShare (Src)
//#region (SS)
const providerLogoSS = "assets/img/Skillshare-logo.svg";
const providerAltSS = "SkillShare Logo";
//#endregion (SS)

//* StJohn (Src)
// #region (StJohn)
/// StJohn - Generic
const providerNameStJohn = "St. John Ambulance";
const providerLogoStJohn = "assets/img/StJohn-horiz-logo.png";
const providerAltStJohn = "StJohn Logo";
/// StJohn - Occupational First Aid
const courseLogoStJohn = "assets/img/StJohn-logo_firstAid.svg";
const courseAltStJohn = "Occupational First Aid";
const certNameStJohn = "Occupational First Aid";
const certImageStJohn = "assets/img/StJohn-cert.jpg";
const certAltStJohn = providerNameStJohn + emDash + certNameStJohn;
const certLengthStJohn = "30hrs";
const certDateStJohn = "Dec, 2013";
// #endregion (StJohn)

//* TafeSA (Src)
// #region (TafeSA)
/// TafeSA - Generic
const providerNameTafeSA = "TAFE South Australia";
const providerLogoTafeSA = "assets/img/TafeSA_whiteOnRed.svg";
const providerAltTafeSA = "TafeSA Logo";
/// XERO - Xero Advisor Certified
const courseLogoTafeSA = "assets/img/TafeSA-electricLogo.svg";
const courseAltTafeSA = "Certificate II Electrotechnology";
const certNameTafeSA = "Certificate II Electrotechnology";
const certImageTafeSA = "assets/img/TafeSA-Electrotechnology-Cert.jpg";
const certAltTafeSA = providerNameTafeSA + emDash + certNameTafeSA;
const certLengthTafeSA = "3 months";
const certDateTafeSA = "July, 2013";
// #endregion (TafeSA)

//* The Open University (Src)
// #region (TOU) - Generic
const providerNameTOU = "The Open University";
const providerLogoTOU = "assets/img/the-open-uni-logo.svg";
const providerAltTOU = "The Open University Logo";
/// TOU - Discovering Cisco Computer Networks
const courseLogoTOU_compNet = "assets/img/compNet.svg";
const courseAltTOU_compNet = "Discovering Cisco Computer Networks";
const certNameTOU_compNet = "Discovering Cisco Computer Networks";
const certImageTOU_compNet =
  "https://i.ibb.co/kQ504sm/Cisco-Computer-Networks.jpg";
const certAltTOU_compNet = providerNameTOU + emDash + certNameTOU_compNet;
//#endregion (TOU)

//* Vectorworks (Src)
// #region (VW)
/// VW - Generic
const providerNameVW = "Vectorworks";
const providerLogoVW = "assets/img/VW-logo-long_on_black.svg";
const providerAltVW = "Vectorworks University";
const courseLogoVW = "assets/img/VW-logo-monogram_on_white.svg";
const courseAltVW = "Vectorworks Logo";
/// VW - BIM
const courseLogoBIM = "assets/img/bsi.svg";
const courseAltBIM = "BIM Logo";
/// VW - DWG
const courseLogoDWG = "assets/img/dwg.svg";
const courseAltDWG = "DWG Logo";
/// VW - Core Concepts Training
const certNameVW_Core = "Core Concepts Training";
const certImageVW_Core = "assets/img/VW_Core-Concepts.jpg";
const certAltVW_Core = providerNameVW + emDash + certNameVW_Core;
/// VW - Intermediate Concepts Training
const certNameVW_Inter = "Intermediate Concepts Training";
const certImageVW_Inter = "assets/img/VW_Intermediate-Concepts.jpg";
const certAltVW_Inter = providerNameVW + emDash + certNameVW_Inter;
/// VW - BIM for Landscape Design
const certNameVW_BIM = "BIM for Landscape Design";
const certImageVW_BIM = "assets/img/VW_BIM_Cert.jpg";
const certAltVW_BIM = providerNameVW + emDash + certNameVW_BIM;
/// VW - Intermediate Concepts Training
const certNameVW_DWG = "DWG File Exchange";
const certImageVW_DWG = "assets/img/VW_DWG_Cert.jpg";
const certAltVW_DWG = providerNameVW + emDash + certNameVW_DWG;
//#endregion (VW)

//* Xero (Src)
// #region (Xero)
/// Xero - Generic
const providerNameXERO = "Xero";
const providerLogoXERO = "assets/img/xero-logo.svg";
const providerAltXERO = "Xero Logo";

/// XERO - Xero Advisor Certified
const courseLogoXERO_advisor =
  "assets/img/xero-advisor-certified_onBlack_lgText.svg";
const courseAltXERO_advisor = "Xero Advisor Certified";
const certNameXERO_advisor = "Xero Advisor Certified";
const certImageXERO_advisor = "assets/img/xero-Xero_Advisor_Certified-cert.jpg";
const certAltXERO_advisor = providerNameXERO + emDash + certNameXERO_advisor;
const certLengthXERO_advisor = "17hrs";
const certDateXERO_advisor = "Aug, 2020";

/// XERO - Xero Payroll Certified
const courseLogoXERO_payroll =
  "assets/img/xero-payroll-certified_long_onBlack.svg";
const courseAltXERO_payroll = "Xero Payroll Certified";
const certNameXERO_payroll = "Xero Payroll Certified";
const certImageXERO_payroll = "assets/img/xero-Xero_Payroll_Certified-cert.jpg";
const certAltXERO_payroll = providerNameXERO + emDash + certNameXERO_payroll;
const certLengthXERO_payroll = "11hrs";
const certDateXERO_payroll = "Aug, 2020";
// #endregion (Xero)

// #endregion (Src)

//! Handlebars Template - HB Context
//#region (HB Context)

//* Design Section - HB Context
const designContext = {
  course: [
    // Adobe Illustrator - Advanced Course
    {
      courseLink: "https://skl.sh/2C5GIpP",
      courseLogoSrc: courseLogoAI,
      courseLogoAlt: courseAltAdobe,
      certLink: certTranscriptSS,
      programText: "Adobe Illustrator",
      specificText: "Advanced Training Course",
      hrs: "8hrs",
      date: "July, 2020",
      providerLogoSrc: providerLogoSS,
      providerLogoAlt: providerAltSS,
    },
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
    // Web Development - Career Path
    {
      courseLink: "https://www.codecademy.com/learn/paths/web-development",
      courseLogoSrc: "assets/img/logo_webDev_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: providerNameCC,
      specificText: "Career Path - Web Development",
      hrs: "6 Months",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // JavaScript Back-End Apps - Skill Path
    {
      courseLink:
        "https://www.codecademy.com/learn/paths/create-a-back-end-app-with-javascript",
      courseLogoSrc: "assets/img/logo_js_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "JavaScript",
      specificText: "Create Back-End Apps",
      hrs: "8 weeks",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // React Front-End Apps - Skill Path
    {
      courseLink:
        "https://www.codecademy.com/learn/paths/build-web-apps-with-react",
      courseLogoSrc: "assets/img/logo_react_blue.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "React",
      specificText: "Create Front-End Apps",
      hrs: "8 weeks",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Learn CSS - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-css",
      courseLogoSrc: "assets/img/logo_css_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "CSS",
      specificText: "Learn CSS3 Design",
      hrs: "15hrs",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Learn Command Line - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-the-command-line",
      courseLogoSrc: "assets/img/logo_commandLine_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "BASH",
      specificText: "Learn the Command Line",
      hrs: "10hrs",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Learn Git - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-git",
      courseLogoSrc: "assets/img/logo_git_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "Git",
      specificText: "Learn Git Fundamentals",
      hrs: "7hrs",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Learn SQL - Course
    {
      courseLink: "https://www.codecademy.com/learn/deploy-a-website",
      courseLogoSrc: "assets/img/logo_sql_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "SQL",
      specificText: "Build and Query SQL Databases",
      hrs: "7hrs",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Learn Express - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-express",
      courseLogoSrc: "assets/img/logo_express_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "Express",
      specificText: "Build CRUD API's",
      hrs: "4hrs",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Learn Responsive Design - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-responsive-design",
      courseLogoSrc: "assets/img/logo_responsiveDesign_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "CSS3",
      specificText: "Learn Responsive Design",
      hrs: "2hrs",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Deploy Jekyll Websites - Course
    {
      courseLink: "https://www.codecademy.com/learn/deploy-a-website",
      courseLogoSrc: "assets/img/logo_deployingJekyll_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "Jekyll",
      specificText: "Deploying Static Sites",
      hrs: "2hrs",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Learn Node-SQLite - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-node-sqlite",
      courseLogoSrc: "assets/img/logo_nodeSQLite_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "Node-SQLite",
      specificText: "Connecting JS Apps with SQL Databases",
      hrs: "1hrs",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Learn Node.js - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-node-js",
      courseLogoSrc: "assets/img/logo_nodeJS_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "Node.js",
      specificText: "Server-Side Development",
      hrs: "1hrs",
      date: "July, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Code Foundations - Career Path
    {
      courseLink: "https://www.codecademy.com/learn/paths/code-foundations",
      courseLogoSrc: "assets/img/logo_codeFoundations_color.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: providerNameCC,
      specificText: "Career Path - Code Foundations",
      hrs: "2 weeks",
      date: "June, 2020",
      providerLogoSrc: providerLogoCC,
      providerLogoAlt: providerAltCC,
    },
    // Build a Website with GitHub - Skill Path
    {
      courseLink:
        "https://www.codecademy.com/learn/paths/learn-how-to-build-websites",
      courseLogoSrc: "assets/img/logo_GitHub_onBlack.svg",
      courseLogoAlt: providerAltCC,
      certLink: certTranscriptCC,
      programText: "GitHub",
      specificText: "Create HTML5 Websites",
      hrs: "10 weeks",
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

    // Learn Bootstrap - Course
    {
      courseLink: "https://www.codecademy.com/learn/learn-bootstrap",
      courseLogoSrc: "assets/img/bootstrap_icon.svg",
      courseLogoAlt: "Bootstrap Logo",
      certLink: certTranscriptCC,
      programText: "Bootstrap",
      specificText: "Learn Bootstrap 4",
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
      programText: "HTML",
      specificText: "Learn HTML5",
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
    // The Open University - Discovering Cisco Computer Networks
    {
      courseLink:
        "https://www.open.edu/openlearn/science-maths-technology/computing-ict/discovering-computer-networks-hands-on-the-open-networking-lab/content-section-overview",
      courseLogoSrc: courseLogoTOU_compNet,
      courseLogoAlt: courseAltTOU_compNet,
      certLink: certTOU_compNet_Modal,
      programText: providerNameTOU,
      specificText: courseAltTOU_compNet,
      hrs: "8 weeks",
      date: "July, 2020",
      providerLogoSrc: providerLogoTOU,
      providerLogoAlt: providerAltTOU,
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
      certLink: certNCRQ_Modal,
      programText: providerNameNCRQ,
      specificText: certNameNCRQ_SFM,
      hrs: certLengthNCRQ,
      date: certDateNCRQ,
      providerLogoSrc: providerLogoNCRQ,
      providerLogoAlt: providerAltNCRQ,
    },
    // NCASS - HACCP Training - Lvl 1 & 2
    {
      courseLink:
        "https://www.ncass.org.uk/training/health-safety-courses/haccp-training/",
      courseLogoSrc: courseLogoFSA,
      courseLogoAlt: courseAltFSA,
      certLink: certNCASS_HACCP_Modal,
      programText: providerNameNCASS,
      specificText: certNameNCASS_HACCP,
      hrs: "20hrs + exam",
      date: "June, 2020",
      providerLogoSrc: providerLogoNCASS,
      providerLogoAlt: providerAltNCASS,
    },
    // NCASS - Food Hygiene Training - Lvl 2
    {
      courseLink: "https://www.ncass.org.uk/training/food-hygiene/level-2/",
      courseLogoSrc: courseLogoFSA,
      courseLogoAlt: courseAltFSA,
      certLink: certNCASS_FH2_Modal,
      programText: providerNameNCASS,
      specificText: certNameNCASS_FH2,
      hrs: "10hrs + exam",
      date: "June, 2020",
      providerLogoSrc: providerLogoNCASS,
      providerLogoAlt: providerAltNCASS,
    },
    // NCASS - Food Hygiene Training - Lvl 1
    {
      courseLink: "https://www.ncass.org.uk/training/food-hygiene/level-1/",
      courseLogoSrc: courseLogoFSA,
      courseLogoAlt: courseAltFSA,
      certLink: certNCASS_FH1_Modal,
      programText: providerNameNCASS,
      specificText: certNameNCASS_FH1,
      hrs: "10hrs + exam",
      date: "June, 2019",
      providerLogoSrc: providerLogoNCASS,
      providerLogoAlt: providerAltNCASS,
    },
    // HIA - Responsible Service of Alcohol //
    {
      courseLink: courseLinkHIA_RSA,
      courseLogoSrc: courseLogoHIA_RSA,
      courseLogoAlt: courseAltHIA_RSA,
      certLink: certHIA_RSA_Modal,
      programText: providerNameHIA,
      specificText: certNameHIA_RSA,
      hrs: certLengthHIA_RSA,
      date: certDateHIA_RSA,
      providerLogoSrc: providerLogoHIA,
      providerLogoAlt: providerAltHIA,
    },
    // HIA - Food Safety Supervisor Lv. 1 //
    {
      courseLink: courseLinkHIA_FSS1,
      courseLogoSrc: courseLogoHIA_FSS1,
      courseLogoAlt: courseAltHIA_FSS1,
      certLink: certHIA_FSS1_Modal,
      programText: providerNameHIA,
      specificText: certNameHIA_FSS1,
      hrs: certLengthHIA_FSS1,
      date: certDateHIA_FSS1,
      providerLogoSrc: providerLogoHIA,
      providerLogoAlt: providerAltHIA,
    },
    // HIA - Food Safety Supervisor Lv. 2 //
    {
      courseLink: courseLinkHIA_FSS2,
      courseLogoSrc: courseLogoHIA_FSS2,
      courseLogoAlt: courseAltHIA_FSS2,
      certLink: certHIA_FSS2_Modal,
      programText: providerNameHIA,
      specificText: certNameHIA_FSS2,
      hrs: certLengthHIA_FSS2,
      date: certDateHIA_FSS2,
      providerLogoSrc: providerLogoHIA,
      providerLogoAlt: providerAltHIA,
    },
    // StJohn - Occupational First Aid
    {
      courseLink: courseLinkStJohn,
      courseLogoSrc: courseLogoStJohn,
      courseLogoAlt: courseAltStJohn,
      certLink: certStJohn_Modal,
      programText: providerNameStJohn,
      specificText: certNameStJohn,
      hrs: certLengthStJohn,
      date: certDateStJohn,
      providerLogoSrc: providerLogoStJohn,
      providerLogoAlt: providerAltStJohn,
    },
  ],
};

//* Business Section - HB Context
const businessContext = {
  course: [
    // Xero - Xero Advisor Certified
    {
      courseLink: courseLinkXERO,
      courseLogoSrc: courseLogoXERO_advisor,
      courseLogoAlt: courseAltXERO_advisor,
      certLink: certXERO_advisor_Modal,
      programText: providerNameXERO,
      specificText: courseAltXERO_advisor,
      hrs: certLengthXERO_advisor,
      date: certDateXERO_advisor,
      providerLogoSrc: providerLogoXERO,
      providerLogoAlt: providerAltXERO,
    },
    // Xero - Xero Payroll Certified
    {
      courseLink: courseLinkXERO,
      courseLogoSrc: courseLogoXERO_payroll,
      courseLogoAlt: courseAltXERO_payroll,
      certLink: certXERO_payroll_Modal,
      programText: providerNameXERO,
      specificText: courseAltXERO_payroll,
      hrs: certLengthXERO_payroll,
      date: certDateXERO_payroll,
      providerLogoSrc: providerLogoXERO,
      providerLogoAlt: providerAltXERO,
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
      certLink: certVW_Inter_Modal,
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
      certLink: certVW_Core_Modal,
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
    // Vectorworks Architect - Essentials Seminar
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=236",
      courseLogoSrc: courseLogoVW,
      courseLogoAlt: courseAltVW,
      certLink: courseTranscriptVW,
      programText: providerNameVW,
      specificText: "Architect - Essentials Seminar",
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
      certLink: certVW_BIM_Modal,
      programText: providerNameVW,
      specificText: certNameVW_BIM,
      hrs: "1hr + exam",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: courseAltVW,
    },
    // Vectorworks - DWG File Exchange
    {
      courseLink: "https://university.vectorworks.net/course/view.php?id=181",
      courseLogoSrc: courseLogoDWG,
      courseLogoAlt: courseAltDWG,
      certLink: certVW_DWG_Modal,
      programText: providerNameVW,
      specificText: certNameVW_DWG,
      hrs: "1hr + exam",
      date: "May, 2020",
      providerLogoSrc: providerLogoVW,
      providerLogoAlt: courseAltVW,
    },
    // TafeSA - Certificate II Electrotechnology
    {
      courseLink: "http://www.tafesa.edu.au/xml/course/aw/aw_TP00420.aspx",
      courseLogoSrc: courseLogoTafeSA,
      courseLogoAlt: courseAltTafeSA,
      certLink: certTafeSA_Modal,
      programText: providerNameTafeSA,
      specificText: certNameTafeSA,
      hrs: certLengthTafeSA,
      date: certDateTafeSA,
      providerLogoSrc: providerLogoTafeSA,
      providerLogoAlt: courseAltTafeSA,
    },
  ],
};

//* Licenses Section - HB Context
const licensesContext = {
  course: [
    // CITC - Rigging (Intermediate)
    {
      courseLink: courseLinkCITC_RI,
      courseLogoSrc: courseLogoCITC_RI,
      courseLogoAlt: courseAltCITC_RI,
      certLink: certCITC_RI_Modal,
      programText: providerNameShortCITC,
      specificText: certNameCITC_RI,
      hrs: certLengthCITC_RI,
      date: certDateCITC_RI,
      providerLogoSrc: providerLogoCITC,
      providerLogoAlt: providerAltCITC,
    },
    // CITC - CN Crane
    {
      courseLink: courseLinkCITC_CN,
      courseLogoSrc: courseLogoCITC_CN,
      courseLogoAlt: courseAltCITC_CN,
      certLink: certCITC_CN_Modal,
      programText: providerNameShortCITC,
      specificText: certNameCITC_CN,
      hrs: certLengthCITC_CN,
      date: certDateCITC_CN,
      providerLogoSrc: providerLogoCITC,
      providerLogoAlt: providerAltCITC,
    },
    // CITC - Rigging (Basic)
    {
      courseLink: courseLinkCITC_RB,
      courseLogoSrc: courseLogoCITC_RB,
      courseLogoAlt: courseAltCITC_RB,
      certLink: certCITC_RB_Modal,
      programText: providerNameShortCITC,
      specificText: certNameCITC_RB,
      hrs: certLengthCITC_RB,
      date: certDateCITC_RB,
      providerLogoSrc: providerLogoCITC,
      providerLogoAlt: providerAltCITC,
    },
    // ATEC - Test & Tag
    {
      courseLink: courseLinkATEC,
      courseLogoSrc: courseLogoATEC,
      courseLogoAlt: courseAltATEC,
      certLink: certATEC_Modal,
      programText: providerNameShortATEC,
      specificText: certNameATEC,
      hrs: certLengthATEC,
      date: certDateATEC,
      providerLogoSrc: providerLogoATEC,
      providerLogoAlt: providerAltATEC,
    },
    // CITC - Telescopic Materials Handler
    {
      courseLink: courseLinkCITC_TMH,
      courseLogoSrc: courseLogoCITC_TMH,
      courseLogoAlt: courseAltCITC_TMH,
      certLink: certCITC_TMH_Modal,
      programText: providerNameShortCITC,
      specificText: certNameCITC_TMH,
      hrs: certLengthCITC_TMH,
      date: certDateCITC_TMH,
      providerLogoSrc: providerLogoCITC,
      providerLogoAlt: providerAltCITC,
    },
    // CITC - Elevating Work Platforms
    {
      courseLink: courseLinkCITC_EWP,
      courseLogoSrc: courseLogoCITC_EWP,
      courseLogoAlt: courseAltCITC_EWP,
      certLink: certCITC_EWP_Modal,
      programText: providerNameShortCITC,
      specificText: certNameCITC_EWP,
      hrs: certLengthCITC_EWP,
      date: certDateCITC_EWP,
      providerLogoSrc: providerLogoCITC,
      providerLogoAlt: providerAltCITC,
    },
    // CITC - Dogging
    {
      courseLink: courseLinkCITC_DG,
      courseLogoSrc: courseLogoCITC_DG,
      courseLogoAlt: courseAltCITC_DG,
      certLink: certCITC_DG_Modal,
      programText: providerNameShortCITC,
      specificText: certNameCITC_DG,
      hrs: certLengthCITC_DG,
      date: certDateCITC_DG,
      providerLogoSrc: providerLogoCITC,
      providerLogoAlt: providerAltCITC,
    },
    // CITC - Working at Heights
    {
      courseLink: courseLinkCITC_WH,
      courseLogoSrc: courseLogoCITC_WH,
      courseLogoAlt: courseAltCITC_WH,
      certLink: certCITC_WH_Modal,
      programText: providerNameShortCITC,
      specificText: certNameCITC_WH,
      hrs: certLengthCITC_WH,
      date: certDateCITC_WH,
      providerLogoSrc: providerLogoCITC,
      providerLogoAlt: providerAltCITC,
    },
    // CITC - Forklift
    {
      courseLink: courseLinkCITC_FL,
      courseLogoSrc: courseLogoCITC_FL,
      courseLogoAlt: courseAltCITC_FL,
      certLink: certCITC_FL_Modal,
      programText: providerNameShortCITC,
      specificText: certNameCITC_FL,
      hrs: certLengthCITC_FL,
      date: certDateCITC_FL,
      providerLogoSrc: providerLogoCITC,
      providerLogoAlt: providerAltCITC,
    },
    // CITC - White Card
    {
      courseLink: courseLinkCITC_WC,
      courseLogoSrc: courseLogoCITC_WC,
      courseLogoAlt: courseAltCITC_WC,
      certLink: certCITC_WC_Modal,
      programText: providerNameShortCITC,
      specificText: certNameCITC_WC,
      hrs: certLengthCITC_WC,
      date: certDateCITC_WC,
      providerLogoSrc: providerLogoCITC,
      providerLogoAlt: providerAltCITC,
    },
  ],
};

//* Cert Section - HB Context
const certContext = {
  // Xero - Xero Advisor Certified
  certXEROAdvisor: {
    certImage: certImageXERO_advisor,
    certAlt: courseAltXERO_advisor,
    certName: certNameXERO_advisor,
    certLength: certLengthXERO_advisor,
    certDate: certDateXERO_advisor,
  },
  // NCRQ - Safety for Managers
  certNCRQSafety: {
    certImage: certImageNCRQ,
    certAlt: courseAltNCRQ,
    certName: certNameNCRQ_SFM,
    certLength: certLengthNCRQ,
    certDate: certDateNCRQ,
  },
};

//#endregion (HB Context)

//! Handlebars - HB Expressions
// #region (Standard HB Expressions)

//* Standard HB Expressions
const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);

// //* HB Expressions - By Section
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
// Licenses Section - HB Expressions
const licensesCompiledHTML = template(licensesContext);
document.getElementById("licensesHB").innerHTML = licensesCompiledHTML;

// #endregion (standard HB Expressions)

// #region (Cert HB Expressions)
//* Cert HB Expressions
const templateElementCert = document.getElementById("templateHBCert");
const templateSourceCert = templateElementCert.innerHTML;
const templateCert = Handlebars.compile(templateSourceCert);
const certCompiledHTML = templateCert(certContext);
document.getElementById("certHB").innerHTML = certCompiledHTML;

// #endregion (standard HB Expressions)
