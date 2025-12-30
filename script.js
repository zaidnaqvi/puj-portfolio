const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".nav");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((r) => observer.observe(r));
