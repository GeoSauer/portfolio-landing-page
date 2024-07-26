document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("web3form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Your message has been sent successfully, I'll get back to you as soon as I can!");
      form.reset();
    } else {
      alert(
        "There was an issue sending your message. Please try again or email me directly at geo.sauer89@gmail.com"
      );
    }
  });
});
