//  Our services Section Start
document.querySelectorAll('.services-tab li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.services-tab .active').classList.remove('active');
    item.classList.add('active');
    document.querySelector('.card-area.active').classList.remove('active');
    document.getElementById(item.getAttribute('data-target')).classList.add('active');
  });
});
//  Our services Section End
/*=============== Contact form Start ===============*/
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Get form values
      let fullName = document.getElementById("form-floating-1").value.trim();
      let email = document.getElementById("form-floating-2").value.trim();
      let subject = document.getElementById("form-floating-3").value.trim();
      let message = document.getElementById("form-floating-4").value.trim();

      // Check if all fields are filled
      if (fullName === "" || email === "" || subject === "" || message === "") {
          alert("Please fill all the fields.");
          return;
      }

      // Format the message for WhatsApp
      let whatsappMessage = `Hello, I have a query:\n\n Name: ${fullName}\n Email: ${email}\n Subject: ${subject}\n Message: ${message}`;

      // Your WhatsApp number (with country code, without + sign)
      let whatsappNumber = "13479698733"; // Change this to your WhatsApp number

      // Create the WhatsApp URL
      let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Open WhatsApp chat
      window.open(whatsappURL, "_blank");
  });
});
/*=============== Contact form End ===============*/
