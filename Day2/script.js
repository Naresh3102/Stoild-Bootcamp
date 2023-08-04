document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const messageBox = document.getElementById("messageBox");

    messageBox.innerHTML = "Nothing will happen. Just for fun🤣";
    messageBox.classList.add("show");

    setTimeout(function () {
        messageBox.classList.remove("show");
    }, 5000);
});