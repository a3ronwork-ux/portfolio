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

  const observerOptions = {
  root: null,
  threshold: 0.2 // Triggers when 20% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const rocket = entry.target.querySelector('.rocket');
    
    if (entry.isIntersecting) {
      
      rocket.classList.add('animate');
    } else {
      
      rocket.classList.remove('animate');
    }
  });
}, observerOptions);


const section = document.querySelector('.interests-section');
observer.observe(section);

