document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollContainer.clientWidth * 0.8, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollContainer.clientWidth * 0.8, behavior: "smooth" });
  });
});

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        });
    }, { threshold: 0.2 });

    sections.forEach(sec => observer.observe(sec));
