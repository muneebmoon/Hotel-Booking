//Set Hero pages w.r.t different pages

const hero = document.getElementById('hero');
const header = document.getElementById('header');

// Check if the current page is 'index.html'
if (window.location.pathname.includes('index.html')) {
    // Set the background image for the hero section
    hero.style.backgroundImage = "url('/assets/images/home-banner.png')";
}else if (window.location.pathname.includes('facilities.html')) {
    hero.style.backgroundImage = "url('/assets/images/fac-banner.png')";
}
else if (window.location.pathname.includes('rooms.html')) {
    hero.style.backgroundImage = "url('/assets/images/room-banner.png')";
}
else if (window.location.pathname.includes('contact.html')) {
    hero.style.backgroundColor = "#14274A";
    header.style.height = "30vh";

}

// Show the button when scrolling down 200px
window.onscroll = function() {
    const topBtn = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block"; // Show the button
    } else {
        topBtn.style.display = "none";  // Hide the button
    }
};

// Scroll to the top of the document when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


