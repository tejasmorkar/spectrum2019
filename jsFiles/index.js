const bodyContainer = document.getElementById("body-container");
const footer = document.getElementById("footer");
const nav = document.getElementById("navigation");
const downIcon = document.getElementById("down");
const crossIcon = document.getElementById("cross");
const theEvent = document.getElementById("nav1");
const register = document.getElementById("nav2");
const memos = document.getElementById("nav3");
const locateUs = document.getElementById("nav4");
const contactUs = document.getElementById("nav5");
const theEventPage = document.getElementById("the-event");
const registrationPage = document.getElementById("registration-form");
const memosPage = document.getElementById("memories");
const locateUsPage = document.getElementById("locate-us");
const contactUsPage = document.getElementById("contact-us");

AOS.init();

crossIcon.classList.add("no-display");
nav.classList.add("no-display");
registrationPage.classList.add("no-display");
memosPage.classList.add("no-display");
locateUsPage.classList.add("no-display");
contactUsPage.classList.add("no-display");


downIcon.addEventListener("click", () => {
    downIcon.classList.add("no-display");
    bodyContainer.classList.add("no-display");
    theEventPage.classList.add("no-display");
    registrationPage.classList.add("no-display");
    memosPage.classList.add("no-display");
    locateUsPage.classList.add("no-display");
    contactUsPage.classList.add("no-display");
    crossIcon.classList.remove("no-display");
    nav.classList.remove("no-display");
})

crossIcon.addEventListener("click", () => {
    crossIcon.classList.add("no-display");
    nav.classList.add("no-display");
    downIcon.classList.remove("no-display");
    bodyContainer.classList.remove("no-display");

})

theEvent.addEventListener("click", () => {
    crossIcon.classList.add("no-display");
    nav.classList.add("no-display");
    downIcon.classList.remove("no-display");
    bodyContainer.classList.remove("no-display"); 
    theEventPage.classList.remove("no-display");
})

register.addEventListener("click", () => {
    crossIcon.classList.add("no-display");
    nav.classList.add("no-display");
    theEventPage.classList.add("no-display");
    downIcon.classList.remove("no-display");
    bodyContainer.classList.remove("no-display");
    registrationPage.classList.remove("no-display");
})

memos.addEventListener("click", () => {
    crossIcon.classList.add("no-display");
    nav.classList.add("no-display");
    theEventPage.classList.add("no-display");
    downIcon.classList.remove("no-display");
    bodyContainer.classList.remove("no-display");
    memosPage.classList.remove("no-display");
})

locateUs.addEventListener("click", () => {
    crossIcon.classList.add("no-display");
    nav.classList.add("no-display");
    theEventPage.classList.add("no-display");
    downIcon.classList.remove("no-display");
    bodyContainer.classList.remove("no-display");
    locateUsPage.classList.remove("no-display");
})

contactUs.addEventListener("click", () => {
    crossIcon.classList.add("no-display");
    nav.classList.add("no-display");
    theEventPage.classList.add("no-display");
    downIcon.classList.remove("no-display");
    bodyContainer.classList.remove("no-display");
    contactUsPage.classList.remove("no-display");
})

new TypeIt('#intro-text', {
    speed: 100,
    startDelay: 2000,
    cursorSpeed: 800,
})
    .type(`Welcome To`)
    .break()
    .type(`The Spectrum 2019`)
    .break()
    .type(`<span id="sub-intro-text">  Hackathon`)
    .pause(1000)
    .delete(9)
    .type(`Tech Hub`)
    .pause(1000)
    .delete(8)
    .type(`Treasure Hunt`)
    .pause(1000)
    .delete(13)
    .type(`And Much More`)
    .pause(1000)
    .delete(13)
    .type(`The All Round College Fest! </span>`);


particlesJS.load('particles-js', '../particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});