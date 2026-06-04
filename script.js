/* ==========================================================================
   GLOBAL ARCHITECTURE & SAFETY REFERENCES
   ========================================================================== */
const intro = document.getElementById("intro");
const envelopeSection = document.getElementById("envelopeSection");
const letterSection = document.getElementById("letterSection");
const gallerySection = document.getElementById("gallerySection");
const finalSection = document.getElementById("finalSection");
const continueBtn = document.getElementById("continueBtn");

// Mobile & Laptop Proof Native HTML5 Audio Context Engine
const music = document.getElementById("bg-music");

// Universal Transition Wrapper with Null-Safety Guards
function transitionPages(current, next) {
    if (!current || !next) {
        console.error("Navigation Error: One or more section references are missing in your HTML.");
        return;
    }
    current.classList.remove("active-section");
    setTimeout(() => {
        current.style.display = "none";
        next.style.display = "flex";
        setTimeout(() => {
            next.classList.add("active-section");
        }, 50);
    }, 400);
}

/* ==========================================================================
   1. INTRO SCENE TRIGGER (Unlocks Laptop & Phone Speakers Instantly)
   ========================================================================== */
const startBtn = document.getElementById("startBtn");
if (startBtn) {
    startBtn.onclick = () => {
        transitionPages(intro, envelopeSection);
        
        // Native HTML5 audio play command - accepted flawlessly by iOS, Android, and Laptops
        if (music) {
            music.play().catch(error => {
                console.log("Audio playback notice: Interaction captured, awaiting system sound access.", error);
            });
        }
    };
}

/* ==========================================================================
   2. ROYAL ENVELOPE INTERACTION
   ========================================================================== */
const envelope = document.getElementById("envelope");
if (envelope) {
    envelope.onclick = () => {
        transitionPages(envelopeSection, letterSection);
        setTimeout(startTypewriter, 600);
    };
}

/* ==========================================================================
   3. LETTER TYPING CONTROLLER (Protected Against Blank Screen Freezes)
   ========================================================================== */
const text = `Today is not just another day.
Today is the celebration of someone truly wonderful.

Your smile has the power to brighten dark days.
Your kindness makes life beautiful.
Your presence makes ordinary moments special.

May this year bring endless happiness, success, love, peace, and beautiful memories.

Happy Birthday Mahnoor ❤️`;

let charIndex = 0;
function startTypewriter() {
    const typingField = document.getElementById("typing");
    
    if (typingField) {
        if (charIndex < text.length) {
            // Converts line breaks cleanly into web presentation format
            if (text.charAt(charIndex) === '\n') {
                typingField.innerHTML += '<br>';
            } else {
                typingField.innerHTML += text.charAt(charIndex);
            }
            charIndex++;
            setTimeout(startTypewriter, 35);
        } else {
            // Reveals the next interface phase action element smoothly
            if (continueBtn) {
                continueBtn.style.display = "inline-block";
                continueBtn.style.animation = "beautifulScaleIn 0.5s ease-out forwards";
            }
        }
    } else {
        // Emergency Fallback: If 'typing' paragraph target is missing, do not freeze.
        console.warn("Safety Warning: Target element ID 'typing' not found in HTML. Bypassing animation.");
        if (continueBtn) {
            continueBtn.style.display = "inline-block";
        }
    }
}

if (continueBtn) {
    continueBtn.onclick = () => {
        transitionPages(letterSection, gallerySection);
    };
}

/* ==========================================================================
   4. CELESTIAL ORB INTERACTION MECHANISM & EXTRA REDIRECT
   ========================================================================== */
const giftBox = document.getElementById("giftBox");
const giftStatus = document.getElementById("giftStatus");
const surpriseMessage = document.getElementById("surpriseMessage");

if (giftBox) {
    giftBox.addEventListener("click", () => {
        let currentStage = parseInt(giftBox.getAttribute("data-stage") || "0");

        if (currentStage === 0) {
            // Stage 1: Core Awakens & Cracks Into Critical Vibration Status
            giftBox.classList.add("cracking");
            if (giftStatus) giftStatus.innerHTML = "Energy levels spiking... ⚡";
            giftBox.setAttribute("data-stage", "1");

        } else if (currentStage === 1) {
            // Stage 2: Core Explodes completely, Revealing Levitating Card Vector
            giftBox.classList.remove("cracking");
            giftBox.classList.add("shattered");
            giftBox.setAttribute("data-stage", "2");
            if (giftStatus) giftStatus.style.display = "none";
            
            // Unleash Full Screen Spatial Effects Matrix
            triggerConfettiStorm(130);
            fireworksSystem.activate();

            // 🎁 SURPRISE WINDOW REDIRECT
            // 👉 REPLACE THE URL BELOW WITH YOUR ACTUAL SURPRISE LINK
            setTimeout(() => {
                window.open("https://your-custom-link-here.com", "_blank");
            }, 400);

            if (surpriseMessage) {
                setTimeout(() => {
                    surpriseMessage.style.display = "block";
                    surpriseMessage.scrollIntoView({ behavior: 'smooth' });
                }, 800);
            }
        }
    });
}

const viewFinalBtn = document.getElementById("viewFinalBtn");
if (viewFinalBtn) {
    viewFinalBtn.onclick = () => {
        transitionPages(gallerySection, finalSection);
    };
}

/* ==========================================================================
   5. CAKE BLOW VECTORS
   ========================================================================== */
const flame = document.getElementById("flame");
const cakeHint = document.getElementById("cakeHint");
const finalWishes = document.getElementById("finalWishes");

if (flame) {
    flame.addEventListener("click", () => {
        flame.style.display = "none";
        if (cakeHint) {
            cakeHint.innerHTML = "✨ Your wish was sent directly to the stars! ✨";
            cakeHint.style.color = "#ffd700";
        }
        
        if (finalWishes) {
            finalWishes.classList.add("unveil-wishes");
        }
        
        fireworksSystem.escalate();
        triggerConfettiStorm(150);
    });
}

/* ==========================================================================
   CONFETTI GENERATOR
   ========================================================================== */
function triggerConfettiStorm(quantity) {
    const palette = ['#9b59b6', '#ffd700', '#ffffff', '#e74c3c', '#3498db', '#f1c40f'];
    for (let i = 0; i < quantity; i++) {
        const paper = document.createElement('div');
        paper.classList.add('confetti');
        paper.style.left = Math.random() * 100 + 'vw';
        paper.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
        paper.style.transform = `scale(${Math.random() * 0.6 + 0.4})`;
        paper.style.animationDuration = Math.random() * 2 + 1.5 + 's';
        paper.style.animationDelay = Math.random() * 0.2 + 's';
        
        document.body.appendChild(paper);
        setTimeout(() => paper.remove(), 3600);
    }
}

/* ==========================================================================
   MATHEMATICAL FIREWORKS BACKGROUND ENGINE
   ========================================================================== */
const fireworksSystem = {
    canvas: null,
    ctx: null,
    pool: [],
    isActive: false,
    capacity: 75,
    velocityMod: 1,

    init() {
        this.canvas = document.getElementById("fireworks");
        if (this.canvas) {
            this.ctx = this.canvas.getContext("2d");
            this.resize();
            window.addEventListener('resize', () => this.resize());
        }
    },

    resize() {
        if (this.canvas) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
    },

    activate() {
        if (this.isActive) return;
        this.init();
        if (this.ctx) {
            this.isActive = true;
            this.populate(this.capacity);
            this.renderLoop();
        }
    },

    escalate() {
        this.capacity = 250;
        this.velocityMod = 2.5;
        this.populate(150);
    },

    populate(amount) {
        if (!this.canvas) return;
        for (let i = 0; i < amount; i++) {
            this.pool.push({
                x: this.canvas.width * Math.random(),
                y: this.canvas.height * (Math.random() * 0.45 + 0.15),
                dx: (Math.random() - 0.5) * (7 * this.velocityMod),
                dy: (Math.random() - 0.5) * (7 * this.velocityMod),
                radius: Math.random() * 2.5 + 1,
                hue: Math.random() * 360,
                opacity: 1,
                fadeRate: Math.random() * 0.012 + 0.004
            });
        }
    },

    renderLoop() {
        if (!this.isActive || !this.ctx || !this.canvas) return;

        this.ctx.fillStyle = "rgba(3, 3, 7, 0.16)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.pool.forEach((particle) => {
            particle.opacity -= particle.fadeRate;

            if (particle.opacity <= 0) {
                particle.x = this.canvas.width * Math.random();
                particle.y = this.canvas.height * (Math.random() * 0.5 + 0.1);
                particle.dx = (Math.random() - 0.5) * (5 * this.velocityMod);
                particle.dy = (Math.random() - 0.5) * (5 * this.velocityMod);
                particle.opacity = 1;
            }

            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = `hsl(${particle.hue}, 100%, 65%)`;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();

            particle.x += particle.dx;
            particle.y += particle.dy;
            particle.dy += 0.035; 
        });

        requestAnimationFrame(() => this.renderLoop());
    }
};
