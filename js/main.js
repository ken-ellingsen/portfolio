//Header menu dropdown
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const header = document.querySelector(".header-info");
const main = document.querySelector("main");

dropdown.addEventListener("mouseover", function () {
    dropdownContent.classList.add('show');
    dropdownContent.classList.remove('hide');
});

window.onclick = function (e) {
    if (!e.target.matches('.dropdown')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
            dropdownContent.classList.add('hide');
        }
    }
}

header.onmouseover = function (e) {
    if (!e.target.matches('.dropdown')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
            dropdownContent.classList.add('hide');
        }
    }
}
main.onmouseover = function (e) {
    if (!e.target.matches('.dropdown')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
            dropdownContent.classList.add('hide');
        }
    }
}

//Clear contact form
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }