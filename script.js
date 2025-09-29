// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // animate skill bars
                if (entry.target.classList.contains("skills")) {
                    entry.target.querySelectorAll(".bar i").forEach((bar) => {
                        bar.style.width = bar
                            .getAttribute("style")
                            .match(/width:\s*([^;]+)/)[1];
                    });
                }
            }
        });
    }, { threshold: 0.2 }
);

reveals.forEach((el) => observer.observe(el));

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
});

// Contact form with EmailJS
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMsg").textContent = "Sending...";

    emailjs
        .sendForm("service_gjvt0cd", "template_xnu293d", this, "9QAYY2rBnF0vf-UEO")
        .then(
            () => {
                document.getElementById("formMsg").textContent =
                    "✅ Message sent successfully!";
                this.reset();
            },
            (err) => {
                document.getElementById("formMsg").textContent =
                    "❌ Error sending message.";
                console.error(err);
            }
        );
});