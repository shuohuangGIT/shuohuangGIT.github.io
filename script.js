const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
// const image2 = document.getElementById('image2');
// const image3 = document.getElementById('image3');
// const textBox = document.getElementById('text-box');
// const textBox2 = document.getElementById('text-box-trappist');
// const textBox3 = document.getElementById('text-box-lamost');
// const textBox4 = document.getElementById('text-box-statistic');

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/me_${color}.jpg`;
    // image2.src = `img/undraw_feeling_proud_${color}.svg`;
    // image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

function toggleDarkLightMode(isDark) {
    // nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    // textBox.style.backgroundColor = isDark ? 'rgb(0 0 0 / 75%)' : 'rgb(255 255 255 / 75%)' ;
    // textBox2.style.backgroundColor = isDark ? 'rgb(0 0 0 / 75%)' : 'rgb(255 255 255 / 75%)' ;
    // textBox3.style.backgroundColor = isDark ? 'rgb(0 0 0 / 75%)' : 'rgb(255 255 255 / 75%)' ;
    // textBox4.style.backgroundColor = isDark ? 'rgb(0 0 0 / 75%)' : 'rgb(255 255 255 / 75%)' ;

    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');;
    isDark ? imageMode('dark') : imageMode('light');
};

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
};

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// const currentHour = new Date().getHours();
// if (currentHour >= 19 || currentHour < 7) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     toggleSwitch.checked = true;
//     localStorage.setItem('theme', 'dark');
//     toggleDarkLightMode(true);
// } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     toggleSwitch.checked = false;
//     localStorage.setItem('theme', 'light');
//     toggleDarkLightMode(false);
// }

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}


// my script

function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("toggleButton");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Show less";
        moreText.style.display = "inline";
    }
}

function toggleText_trappist() {
    var dots = document.getElementById("dots_trappist");
    var moreText = document.getElementById("moreText_trappist");
    var btnText = document.getElementById("toggleButton_trappist");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Show less";
        moreText.style.display = "inline";
    }
}

function toggleText_statistics() {
    var dots = document.getElementById("dots_statistics");
    var moreText = document.getElementById("moreText_statistics");
    var btnText = document.getElementById("toggleButton_statistics");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Show less";
        moreText.style.display = "inline";
    }
}

function toggleText_paper0() {
    var dots = document.getElementById("dots_paper0");
    var moreText = document.getElementById("moreText_paper0");
    var btnText = document.getElementById("toggleButton_paper0");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Show less";
        moreText.style.display = "inline";
    }
}

function toggleText_transitiondisk() {
    var dots = document.getElementById("dots_transitiondisk");
    var moreText = document.getElementById("moreText_transitiondisk");
    var btnText = document.getElementById("toggleButton_transitiondisk");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Show less";
        moreText.style.display = "inline";
    }
}