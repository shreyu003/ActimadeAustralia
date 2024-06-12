// $("#header").load("header.html");
// $("#footer").load("footer.html");
document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => {
        console.error("Error loading header:", error);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => {
        console.error("Error loading footer:", error);
    });
});