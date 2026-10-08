/* =========================================
   GADGET WEBSITE - COMPLETE JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE NAVIGATION
       ========================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.classList.toggle("active", isOpen);
    menuBtn.setAttribute("aria-expanded", isOpen);
});

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll("a");

        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuBtn.classList.remove("active");
            });
        });
    }


    /* =========================================
       ACTIVE NAVBAR LINK
       ========================================= */

    const currentPage = window.location.pathname.split("/").pop();

    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(link => {

        const linkPage = link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }
    });


    /* =========================================
       PAGE LOADING ANIMATION
       ========================================= */

    document.body.classList.add("page-loaded");


    /* =========================================
       PAGE TRANSITION
       ========================================= */

    const pageLinks = document.querySelectorAll("a");

pageLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (!href || href === "#" || href.startsWith("http")) {
        return;
    }

    if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("https:")
    ) {
        return;
    }

    // Don't add page transition to navbar links
    if (link.closest(".navbar")) {
        return;
    }

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const destination = this.href;

        document.body.classList.add("page-exit");

        setTimeout(() => {
            window.location.href = destination;
        }, 400);

    });

});


    /* =========================================
       SMOOTH SCROLL
       ========================================= */

    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       SCROLL REVEAL ANIMATION
       ========================================= */

    const revealElements = document.querySelectorAll(
        ".reveal, .product-card, .about-box, .feature, .contact-box"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =========================================
       BUTTONS
       ========================================= */

    const gadgetButtons = document.querySelectorAll(
        ".gadget-btn, .shop-btn, .explore-btn"
    );

    gadgetButtons.forEach(button => {

        button.addEventListener("click", () => {

            const gadgetsSection =
                document.querySelector("#gadgets");

            if (gadgetsSection) {

                gadgetsSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =========================================
       CONTACT FORM
       SEND DIRECTLY TO WHATSAPP
       ========================================= */

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.querySelector("#name")?.value.trim();

            const email =
                document.querySelector("#email")?.value.trim();

            const phone =
                document.querySelector("#phone")?.value.trim();

            const message =
                document.querySelector("#message")?.value.trim();


            if (!name || !message) {

                alert("Please enter your name and message.");

                return;

            }


            // CHANGE THIS TO YOUR WHATSAPP NUMBER
            const whatsappNumber = "2349060517683";


            const whatsappMessage =
                `Hello, I am ${name}.%0A%0A` +
                `Email: ${email}%0A` +
                `Phone: ${phone}%0A%0A` +
                `Message: ${message}`;


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


            window.open(whatsappURL, "_blank");

        });

    }


    /* =========================================
       BACK TO TOP BUTTON
       ========================================= */

    const topButton = document.querySelector(".back-to-top");

    if (topButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }

        });


        topButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       HEADER ON SCROLL
       ========================================= */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        });

    }


    /* =========================================
       GADGET CARD HOVER EFFECT
       ========================================= */

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                (y - centerY) / 20;

            const rotateY =
                (centerX - x) / 20;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0)";

        });

    });


    /* =========================================
       BUTTON RIPPLE EFFECT
       ========================================= */

    const buttons = document.querySelectorAll("button, .btn");

    buttons.forEach(button => {

        button.addEventListener("click", function (event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("ripple");

            const rect =
                this.getBoundingClientRect();

            ripple.style.left =
                `${event.clientX - rect.left}px`;

            ripple.style.top =
                `${event.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    /* =========================================
       PREVENT BROKEN BUTTONS
       ========================================= */

    const emptyButtons =
        document.querySelectorAll(
            'button[type="button"], button:not([type])'
        );

    emptyButtons.forEach(button => {

        button.addEventListener("click", () => {

            if (!button.dataset.action) {
                console.log(
                    "Button clicked:",
                    button.textContent.trim()
                );
            }

        });

    });

});