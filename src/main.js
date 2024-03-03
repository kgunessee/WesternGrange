gsap.registerPlugin(ScrollTrigger);

const menuItems = () => {
  const mobileMenuHamburger = document.querySelector(".mob-menu-hamburger");
  const navMenu = document.querySelector("#nav-menu");
  const navMenuItems = document.querySelectorAll("#nav-menu li");
  const headerLogoHamburger = document.querySelector("#header-info");

  return { mobileMenuHamburger, navMenu, navMenuItems, headerLogoHamburger };
};

const navbarScrollEffect = () => {
  menuItems().headerLogoHamburger.style.fontSize = "2.25rem";
  menuItems().mobileMenuHamburger.style.fontSize = "2.25rem";

  gsap.to("#header-info", {
    background: "rgb(0,0,0)",
    color: "hsla(52, 94%, 94%, 1)",

    scrollTrigger: {
      trigger: "video",
      markers: true,
      start: "bottom 100px",
      end: "bottom 100px",
      scrub: true,
      onLeave: () => {
        menuItems().headerLogoHamburger.style.fontSize = "1.5rem";
        menuItems().mobileMenuHamburger.style.fontSize = "1.5rem";
        menuItems().headerLogoHamburger.style.transition = "500ms";
        menuItems().mobileMenuHamburger.style.transition = "500ms";
      },
      onEnterBack: () => {
        menuItems().headerLogoHamburger.style.fontSize = "2.25rem";
        menuItems().mobileMenuHamburger.style.fontSize = "2.25rem";
      },
    },
  });
};
navbarScrollEffect();

const menuItemHoverAnim = () => {
  menuItems().navMenuItems.forEach((item) => {
    const anim = gsap.to(item, {
      paused: true,
      x: -10,
      opacity: 0.7,
      duration: 0.1,
    });

    item.addEventListener("mouseover", () => {
      anim.play();
    });

    item.addEventListener("mouseout", () => {
      anim.reverse();
    });
  });
};
menuItemHoverAnim();

const openMobileMenu = () => {
  const menuTimeline = gsap.timeline();

  menuTimeline.pause();

  menuTimeline.fromTo(
    "#nav-menu",
    { xPercent: 100, opacity: 0 },
    { xPercent: 0, duration: 0.3, opacity: 1 },
  );

  menuTimeline.fromTo(
    ".mob-menu-item",
    { opacity: 0, xPercent: 20 },
    { opacity: 1, xPercent: 0, stagger: 0.07 },
  );

  menuItems().mobileMenuHamburger.addEventListener("click", () => {
    menuItems().navMenu.classList.toggle("open");

    if (menuItems().navMenu.classList.contains("open")) {
      menuTimeline.timeScale(1);
      menuTimeline.play();
    } else {
      menuTimeline.timeScale(3);
      menuTimeline.reverse();
    }
  });
};
openMobileMenu();
