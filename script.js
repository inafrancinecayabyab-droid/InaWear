const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const response = document.getElementById("response");
const form = document.getElementById("contactForm");

nameInput.addEventListener("input", updateMessage);
messageInput.addEventListener("input", updateMessage);

function updateMessage() {
    if (nameInput.value || messageInput.value) {
        response.textContent =
            "Typing preview: " +
            nameInput.value +
            " says, \"" +
            messageInput.value +
            "\"";
    } else {
        response.textContent = "";
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    response.textContent =
        "Thank you, " +
        nameInput.value +
        "! Your message has been received.";


    nameInput.value = "";
    messageInput.value = "";
});
