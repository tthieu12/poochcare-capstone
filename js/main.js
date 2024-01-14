// THEME
document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
    document.getElementById("myHTML").classList.toggle("dark");
};

//
let changeIcon = function() {
    document.getElementById('icon-bars').classList.toggle('d-none');
    document.getElementById('icon-xmark').classList.toggle('d-block');
}