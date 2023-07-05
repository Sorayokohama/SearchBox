/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== SHOW MENU =====*/
navToggle.addEventListener("click", () => {
	navMenu.classList.add("show-menu");
});

/*===== HIDE MENU =====*/
navClose.addEventListener("click", () => {
	navMenu.classList.remove("show-menu");
});

/*==================== REMOVE MENU ON MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");

	navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));


/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/*const sections = document.querySelectorAll("section[id");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((section) => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 50;
		sectionId = section.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);(WHEN SCROL ON MOBILE MENU THE ORANGE BAR MOVES TO THE PAGE)*/

// ============= SWIPER JS FOR PRODUCT SECTION ====================

// ================ WHY US SECTION ===============

/*==================== VIDEO ====================*/

// ============= SCROLLUP ============

// ============= DARK LIGHT THEME ============

// ============= SCROLLREVEAL JS ==========
