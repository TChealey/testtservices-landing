document.getElementById("contact-form").addEventListener("submit", function(e) {e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  fetch("https://script.google.com/macros/s/AKfycbz8EniGpZ2feaXJ0a_o-amDKdlMnC1WcqnHJqaRkXcfDYDQhFP2tH6RGopcsN4RDwdA/exec", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {Content-Type": "application/json"}
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById("response").textContent = "Your request was sent successfully!";
    document.getElementById("contact-form").reset();
   })
   .catch(error => {
     document.getElementById("response").textContent = "Error sending request. Please try again.";
   });
});
