
  document.addEventListener("DOMContentLoaded", function () {
    const animatedNumbers = document.querySelectorAll(".animated-number");

    const animateNumber = (element, target) => {
      let start = 0;
      const duration = 1500; 
      const increment = target / (duration / 16); 

      const updateNumber = () => {
        start += increment;
        if (start >= target) {
          element.textContent = target.toFixed(1); 
        } else {
          element.textContent = start.toFixed(1); 
          requestAnimationFrame(updateNumber);
        }
      };

      requestAnimationFrame(updateNumber);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetNumber = parseFloat(entry.target.getAttribute("data-number"));
            animateNumber(entry.target, targetNumber);
          }
        });
      },
      { threshold: 0.5 } 
    );

    animatedNumbers.forEach((number) => observer.observe(number));
  });

