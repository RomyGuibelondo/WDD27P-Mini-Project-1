document.addEventListener("DOMContentLoaded", function (event) {
    const dataText = ["Web Developer", "Romy J. Guibelondo"];
    function typeWrite(text, i, fnCallback) {
        if (i < text.length) {
            document.querySelector(".nameText").innerHTML = text.substring(0, i + 1) + "<span aria-hidden='true'></span>";

            setTimeout(function () {
                typeWrite(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback == "function") {
            setTimeout(fnCallback, 1000);
        }
    }
    function StartTextAnimation(i) {
        if (typeof dataText[i] === "undefined" || dataText[i] === null) {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 2000)
        } else {
            if (i < dataText[i].length) {
                typeWrite(dataText[i], 0, function () {
                    StartTextAnimation(i + 1);
                });
            }
        }
    }
    StartTextAnimation(0);
});

// ------------------------------------------------------------------------------
goTo = (keyword) => {
    const identifier = '.' + keyword;
    const portfolio = document.querySelector(identifier);
    portfolio.scrollIntoView({behavior: 'smooth'});
}
// ----------------------------------------------------
let darkMode = localStorage.getItem('darkMode')

const darkModeToggle = document.querySelector('#dark-mode-toggle')

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
    enableDarkMode();  
}
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// --------------------------------------------
