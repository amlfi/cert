const templateElement = document.getElementById("templateDesign");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHTML = template(context);

document.getElementById('information').innerHTML = compiledHTML;

const context = {
	course: [
		{
			courseID: 'Adobe InDesign - Essentials Course',
			courseLink: 'https://skl.sh/2UNR2ZZ',
			courseLogoSrc: 'assets/img/Adobe-InDesign-CC-01.svg',
			courseLogoAlt: 'Adobe Logo',
			certLink: 'https://www.skillshare.com/user/amlfitzgerald',
			programText: 'Adobe InDesign',
			specificText: 'Essentials Course',
			hrs: '6.5hrs',
			date: 'June, 2020',
			certLink: 'https://www.skillshare.com/user/amlfitzgerald',
			providerLogoSrc: 'assets/img/Skillshare-logo-header-logged-in-2020.svg',
			providerLogoAlt: 'SkillShare Logo',
		},
		{
			courseID: 'Adobe InDesign - Essentials Course',
			courseLink: 'https://skl.sh/2UNR2ZZ',
			courseLogoSrc: 'assets/img/Adobe-InDesign-CC-01.svg',
			courseLogoAlt: 'Adobe Logo',
			certLink: 'https://www.skillshare.com/user/amlfitzgerald',
			programText: 'Adobe InDesign',
			specificText: 'Essentials Course',
			hrs: '6.5hrs',
			date: 'June, 2020',
			certLink: 'https://www.skillshare.com/user/amlfitzgerald',
			providerLogoSrc: 'assets/img/Skillshare-logo-header-logged-in-2020.svg',
			providerLogoAlt: 'SkillShare Logo',
		}
	]
}