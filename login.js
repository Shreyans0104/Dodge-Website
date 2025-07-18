
    const passwordInput = document.getElementById("signupPassword");
    const passwordStrength = document.getElementById("passwordStrength");
    const passwordFeedback = document.getElementById("passwordFeedback");

    passwordInput.addEventListener("input", () => {
      const password = passwordInput.value;
      let strength = 0;

      if (password.length >= 8) strength += 1;
      if (/[A-Z]/.test(password)) strength += 1;
      if (/[a-z]/.test(password)) strength += 1;
      if (/\d/.test(password)) strength += 1;
      if (/[@$!%*?&#]/.test(password)) strength += 1;

      // Update the progress bar
      const colors = ["danger", "warning", "success"];
      passwordStrength.className = `progress-bar bg-${colors[Math.min(strength, colors.length - 1)]}`;
      passwordStrength.style.width = `${(strength / 5) * 100}%`;

      // Update feedback
      const feedback = [
        "Too weak",
        "Weak",
        "Moderate",
        "Strong",
        "Very strong"
      ];
      passwordFeedback.textContent = feedback[strength];
    });
  