// ================================
// CyVortex Website JavaScript (FIXED)
// ================================

// Console message
console.log("%cCyVortex Website Loaded Successfully", "color:#66fcf1; font-size:16px;");

// ================================
// SMOOTH SCROLL
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ================================
// GLITCH EFFECT
// ================================
setInterval(() => {
    const glitchText = document.querySelector(".glitch");
    if (glitchText) {
        glitchText.style.opacity = "0.9";
        setTimeout(() => glitchText.style.opacity = "1", 120);
    }
}, 2000);

// ================================
// MATRIX BACKGROUND
// ================================
const canvas = document.getElementById("matrix");
if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    let drops = [];

    for (let x = 0; x < columns; x++) drops[x] = 1;

    function drawMatrix() {
        ctx.fillStyle = "rgba(0,0,0,0.07)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ffea";
        ctx.font = fontSize + "px monospace";

        drops.forEach((y, i) => {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * fontSize, y * fontSize);

            if (y * fontSize > canvas.height && Math.random() > 0.95) drops[i] = 0;
            drops[i]++;
        });
    }
    setInterval(drawMatrix, 40);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ================================
// TYPING EFFECT
// ================================
const typingText = document.getElementById("typing-text");

if (typingText) {
    const typingLines = [
        "Initializing CyVortex Security...",
        "Loading Pentesting Modules...",
        "Activating OSINT Engine...",
        "System Status: SECURE ✓"
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        let text = typingLines[lineIndex];
        typingText.textContent = text.slice(0, charIndex);

        charIndex++;

        if (charIndex > text.length) {
            lineIndex++;
            charIndex = 0;
            if (lineIndex === typingLines.length) return;
            setTimeout(typeEffect, 700);
        } else {
            setTimeout(typeEffect, 40);
        }
    }

    typeEffect();
}

// ================================
// LOADER
// ================================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.classList.add("fade-out");
        setTimeout(() => loader.style.display = "none", 600);
    }
});

// ================================
// PARTICLES
// ================================
const pCanvas = document.getElementById("particles");
if (pCanvas) {
    const pCtx = pCanvas.getContext("2d");
    pCanvas.width = window.innerWidth;
    pCanvas.height = window.innerHeight;

    const particles = [];

    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * pCanvas.width,
            y: Math.random() * pCanvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5
        });
    }

    function drawParticles() {
        pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
        pCtx.fillStyle = "#66fcf1";

        particles.forEach(p => {
            pCtx.beginPath();
            pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            pCtx.fill();

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > pCanvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > pCanvas.height) p.speedY *= -1;
        });

        requestAnimationFrame(drawParticles);
    }

    drawParticles();
}

// ================================
// CYBER CURSOR
// ================================
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
    if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
});

// ================================
// SCROLL TO TOP BUTTON
// ================================
const topBtn = document.getElementById("scrollTopBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
// ================================
// ACTIVE NAV LINK HIGHLIGHT
// ================================
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;

        document.querySelectorAll('.faq-answer').forEach(a => {
            if (a !== answer) a.style.maxHeight = null;
        });

        if (answer.style.maxHeight)
            answer.style.maxHeight = null;
        else
            answer.style.maxHeight = answer.scrollHeight + "px";
    });
});

// ================================
// MOBILE MENU TOGGLE
// ================================
const hamburger = document.querySelector('.hamburger');
const mobileSidebar = document.querySelector('.mobile-sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const closeBtn = document.querySelector('.close-btn');

// Open sidebar
if (hamburger) {
    hamburger.addEventListener('click', () => {
        mobileSidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
    });
}

// Close sidebar
function closeSidebar() {
    if (mobileSidebar) mobileSidebar.classList.remove('active');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
}

// Close sidebar when clicking overlay
if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

// Close sidebar when clicking a link (for smooth navigation)
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

