.show{
opacity:1 !important;
transform:translateY(0) !important;
}

.service-card,
.pricing-card,
.step,
.testimonial-card,
.about-card{
opacity:0;
transform:translateY(60px);
transition:.8s ease;
}

.active{
color:#00d4ff !important;
}

.loaded{
opacity:1;
  }

/* =====================================
   NOCTIS TECHNOLOGIES
   PREMIUM JAVASCRIPT
===================================== */

/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("nav-menu");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        if(navMenu.style.display === "flex"){

            navMenu.style.display = "none";

        }else{

            navMenu.style.display = "flex";

        }

    });

}

/* CLOSE MENU AFTER CLICK */

document.querySelectorAll("#nav-menu a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        if(window.innerWidth < 768){

            navMenu.style.display = "none";

        }

    });

});

/* =====================================
   FAQ ACCORDION
===================================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question =
    item.querySelector(".faq-question");

    const answer =
    item.querySelector(".faq-answer");

    question.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other !== item){

                other.querySelector(
                ".faq-answer"
                ).style.display = "none";

            }

        });

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }else{

            answer.style.display = "block";

        }

    });

});

/* =====================================
   SCROLL TO TOP
===================================== */

const scrollTopBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollTopBtn.style.display =
        "flex";

    }else{

        scrollTopBtn.style.display =
        "none";

    }

});

scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/* =====================================
   NAVBAR BACKGROUND EFFECT
===================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(5,8,22,.92)";

        navbar.style.boxShadow =
        "0 10px 40px rgba(0,0,0,.2)";

    }else{

        navbar.style.background =
        "rgba(5,8,22,.65)";

        navbar.style.boxShadow =
        "none";

    }

});

/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
document.querySelectorAll(
".service-card, .pricing-card, .step, .testimonial-card, .about-card"
);

const revealOnScroll = ()=>{

    revealElements.forEach(el=>{

        const windowHeight =
        window.innerHeight;

        const elementTop =
        el.getBoundingClientRect().top;

        const revealPoint = 100;

        if(elementTop <
        windowHeight - revealPoint){

            el.classList.add("show");

        }

    });

};

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
document.querySelectorAll(
".stat-card h2, .mini-stats h2"
);

const animateCounter = (counter)=>{

    const text =
    counter.innerText;

    const target =
    parseInt(text);

    if(isNaN(target)) return;

    let count = 0;

    const speed = target / 80;

    const update = ()=>{

        count += speed;

        if(count < target){

            counter.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        }else{

            counter.innerText = target;

        }

    };

    update();

};

const counterObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(
            entry.target
            );

            counterObserver.unobserve(
            entry.target
            );

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/* =====================================
   PARALLAX EFFECT
===================================== */

window.addEventListener(
"mousemove",
(e)=>{

    const blur1 =
    document.querySelector(".blur1");

    const blur2 =
    document.querySelector(".blur2");

    if(!blur1 || !blur2) return;

    const x =
    e.clientX / window.innerWidth;

    const y =
    e.clientY / window.innerHeight;

    blur1.style.transform =
    `translate(${x*20}px,${y*20}px)`;

    blur2.style.transform =
    `translate(-${x*20}px,-${y*20}px)`;

});

/* =====================================
   CONTACT FORM
===================================== */

const form =
document.querySelector("form");

if(form){

    form.addEventListener(
    "submit",
    (e)=>{

        e.preventDefault();

        alert(
        "Thank you! Your message has been submitted."
        );

        form.reset();

    });

}

/* =====================================
   TYPING EFFECT
===================================== */

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

    const originalText =
    heroTitle.innerHTML;

    heroTitle.innerHTML = "";

    let i = 0;

    const typing = ()=>{

        if(i <
        originalText.length){

            heroTitle.innerHTML +=
            originalText.charAt(i);

            i++;

            setTimeout(
            typing,
            25
            );

        }

    };

    typing();

}

/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
"#nav-menu a"
);

window.addEventListener(
"scroll",
()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop;

        if(
            pageYOffset >=
            sectionTop - 200
        ){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove(
        "active"
        );

        if(
        link.getAttribute("href")
        ===
        `#${current}`
        ){

            link.classList.add(
            "active"
            );

        }

    });

});

/* =====================================
   PRELOADER
===================================== */

window.addEventListener(
"load",
()=>{

    document.body.classList.add(
    "loaded"
    );

});

/* =====================================
   END
===================================== */
