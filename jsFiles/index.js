const bodyContainer = document.getElementById("body-container");
const footer = document.getElementById("footer");
const nav = document.getElementById("navigation");
const downIcon = document.getElementById("down");
const theEvent = document.getElementById("nav1");
const register = document.getElementById("nav2");
const memos = document.getElementById("nav3");
const locateUs = document.getElementById("nav4");
const contactUs = document.getElementById("nav5");
const theEventPage = document.getElementById("the-event");
const memosPage = document.getElementById("memories");
const locateUsPage = document.getElementById("locate-us");
const contactUsPage = document.getElementById("contact-us");

AOS.init();

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
    .type(`The All Round College Fest! </span>`)
    .break()
    .type(`<img id="down" src="images/down.png" alt="">`)
    .destroy();

function formEvent() {
    const win = window.open('https://goo.gl/forms/kpcTU4AUaoKSZoDm2', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
}

function gmapLink() {
    const win = window.open('https://goo.gl/forms/kpcTU4AUaoKSZoDm2', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
}

$("#intro-text").click(function() {
    $('html,body').animate({
        scrollTop: $("#events").offset().top},
        'slow');
});

$("#nav2").click(function() {
    $('html,body').animate({
        scrollTop: $("#registration").offset().top},
        'slow');
});

$("#nav1").click(function() {
    $('html,body').animate({
        scrollTop: $("#events").offset().top},
        'slow');
});

$("#nav3").click(function() {
    $('html,body').animate({
        scrollTop: $("#memories").offset().top},
        'slow');
});

$("#nav4").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-us").offset().top},
        'slow');
});

// var mymap = L.map('mapid').setView([18.653000, 73.762356], 16);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoidGVqYXNtb3JrYXIiLCJhIjoiY2pvNnE5d25yMGp0djNxb2F4bTl2MnRhaSJ9.aGAGg5ZR85LE-0DVpqNDsg'
// }).addTo(mymap);

// var markerClg = L.marker([18.653000, 73.762356]).addTo(mymap);

// var popup = L.popup()
// .setLatLng([18.648900, 73.764699])
// .setContent("<b>Akurdi Railway Station</b>")
// .openOn(mymap);


particlesJS.load('particles-js', '../particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});
