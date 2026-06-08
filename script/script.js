const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const track = document.querySelector(".carousel-track");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", () => {
  track.scrollBy({
    left: 380,
    behavior: "smooth"
  });
});

prevBtn.addEventListener("click", () => {
  track.scrollBy({
    left: -380,
    behavior: "smooth"
  });
});

emailjs.init("enhw_LZtFOPoyzNJD");

  const form = document.getElementById("contact-form");
  const statusMessage = document.getElementById("status-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusMessage.textContent = "Sending...";

    emailjs.sendForm(
      "service_eltm2jr",
      "template_glt903b",
      this
    )
    .then(() => {
      statusMessage.textContent = "Message sent successfully!";
      form.reset();
    })
    .catch((error) => {
      console.log(error);

      statusMessage.textContent = "Failed to send message.";
    });
  });

  document
  .getElementById("btn-resume")
  .addEventListener("click", () => {

    const link = document.createElement("a");

    link.href =
      "assets/Mark-Aaron-Domingo-Resume.pdf";

    link.download =
      "Mark-Aaron-Domingo-Resume.pdf";

    link.click();

});


