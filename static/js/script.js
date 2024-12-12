document.getElementById("chatForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const message = document.getElementById("message").value;

    // Send data to the backend
    const response = await fetch("/generate-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, message: message }),
    });

    const data = await response.json();

    // Display AI response
    document.getElementById("responseText").textContent = data.response;
});
