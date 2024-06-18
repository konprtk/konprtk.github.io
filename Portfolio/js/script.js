// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active sections for animation on
      sec.classList.add("show-animate");
    }
    // if want to use animation that repeats on scroll us this
    else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //   remove toggle icon and navbar when click on navbar links (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const mobileNumber = document.getElementById("mobileNumber");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  let count = mobileNumber.value;
  if (count.length < 10 || count.length > 10) {
    alert("Please ensure the Mobile number contains exactly 10 digits.");
  }
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // this prevent default form submission
    const form = event.target;
    const formData = new FormData(form);

    // Send form data using fetch
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset(); // Clear the form fields
          window.location.href = "https://konprtk.me/thankyou.html"; // Redirect to thank-you page
        } else {
          alert("There was a problem with the submission.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was a problem with the submission.");
      });
  });
