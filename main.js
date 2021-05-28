// get current year
const year = new Date().getFullYear();

// go to previous page
const prevPage = `<a id="back-link" href="..">Back</a>`;

// repository title
const repoTitle = `<span>FreeCodeCamp Certification Projects</span>`;

// home page of github pages
const ghPages = `<a href="https://mikekamilos.github.io/free-code-camp" target="_blank">Home</a>`;

// link to my website
const wpUrl = `<a href="https://makstak.com" target="_blank">My Website</a>`;

// copyright tag
const copyright = `<span>&copy; ${year} Michael Kamilos</span>`;

// link to my github
const ghUrl = `<a href="https://github.com/mikekamilos" target="_blank">Go to GitHub</a>`;

/** Page Structure Variables and Functions */

// above-header div element
const aboveHeader = `${prevPage} | ${repoTitle} | ${ghPages}`;

// main-content div element
// const mainContent = `https://mikekamilos.github.io/free-code-camp/fcc1-resdes/tribute-page/index.html`;

// below-footer div element
const belowFooter = `${wpUrl} | ${copyright} | ${ghUrl}`;

// main script to run on page-load
const execute = () => {

	document.getElementById('above-header').innerHTML = aboveHeader;

	const backElem = document.getElementById('back-link');

	backElem.onclick = function() {
		history.back();
		return false;
	}


	// document.getElementById('main-content').setAttribute('src', mainContent);

	document.getElementById('below-footer').innerHTML = belowFooter;
}

document.onload(execute())