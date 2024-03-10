gsap.registerPlugin(ScrollTrigger);
const mobileMediaBreakpoint = gsap.matchMedia(); // (max-width: 768px)

//============================= Import nav & header items ==============================//
const getMenuItems = () => {
  const mobileMenuHamburger = document.querySelector(".mob-menu-hamburger");
  const navMenu = document.querySelector("#nav-menu");
  const navMenuItems = document.querySelectorAll("#nav-menu li");
  const navContainer = document.querySelector("#header-info");
  const logo = document.querySelector("#logo");

  return {
    mobileMenuHamburger,
    navMenu,
    navMenuItems,
    navContainer,
    logo,
  };
};

const menuHoverEffect = () => {
  getMenuItems().navMenuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      gsap.to(item, {
        y: -5,
        duration: 0.2,
      });
    });

    item.addEventListener("mouseout", () => {
      gsap.to(item, {
        y: 0,
        duration: 0.2,
      });
    });
  });
};
menuHoverEffect();

//============================= Transition nav-bar on scroll ==============================//
const navbarScrollEffect = () => {
  getMenuItems().navContainer.style.fontSize = "2.25rem";
  getMenuItems().mobileMenuHamburger.style.fontSize = "2.25rem";

  let screenWidth = window.innerWidth;

  window.addEventListener("resize", function () {
    screenWidth = window.innerWidth;
    console.log(screenWidth);
  });

  gsap.to(["#header-info"], {
    background: "rgb(0,0,0)",
    color: "hsla(52, 94%, 94%, 1)",

    scrollTrigger: {
      trigger: "video",
      markers: false,
      start: "bottom 100px",
      end: "bottom 100px",
      scrub: true,
      // Change the styling of the navbar based on scrolltrigger position (bottom of video element)
      onLeave: () => {
        getMenuItems().navContainer.style.fontSize = "1.5rem";
        // getMenuItems().navContainer.style.padding = "0.5rem 1rem";
        getMenuItems().navContainer.style.transition = "200ms";
        getMenuItems().mobileMenuHamburger.style.fontSize = "1.5rem";
        getMenuItems().mobileMenuHamburger.style.transition = "200ms";
        if (screenWidth > 767) {
          getMenuItems().navMenuItems.forEach((item) => {
            item.style.transition = "color 200ms, font-size 200ms";
            item.style.fontSize = "1rem";
          });
        }
      },
      onEnterBack: () => {
        getMenuItems().navContainer.style.fontSize = "2.25rem";
        // getMenuItems().navContainer.style.padding = "1rem";
        getMenuItems().mobileMenuHamburger.style.fontSize = "2.25rem";
        if (screenWidth > 767) {
          getMenuItems().navMenuItems.forEach((item) => {
            item.style.fontSize = "1.25rem";
          });
        }
      },
    },
  });
};
navbarScrollEffect();

//============================= Animate nav menu item on hover ==============================//

const menuItemHoverAnim = () => {
  mobileMediaBreakpoint.add("(max-width: 768px)", () => {
    getMenuItems().navMenuItems.forEach((item) => {
      const anim = gsap.to(item, {
        paused: true,
        x: -10,
        opacity: 0.7,
        duration: 0.1,
      });

      item.onmouseover = () => anim.play();
      item.onmouseout = () => anim.reverse();
    });
  });
};
menuItemHoverAnim();

//============================= Animation and function to open the nav menu ==============================//
const openMobileMenu = () => {
  const menuTimeline = gsap.timeline();
  mobileMediaBreakpoint.add("(max-width: 768px)", () => {
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

    const { mobileMenuHamburger, logo } = getMenuItems();

    getMenuItems().mobileMenuHamburger.addEventListener("click", () => {
      getMenuItems().navMenu.classList.toggle("open");

      if (getMenuItems().navMenu.classList.contains("open")) {
        menuTimeline.timeScale(1);
        menuTimeline.play();
        logo.classList.add("text-black");
        mobileMenuHamburger.classList.add("text-black");
      } else {
        menuTimeline.timeScale(3);
        menuTimeline.reverse();
        logo.classList.remove("text-black");
        mobileMenuHamburger.classList.remove("text-black");
      }
    });
  });
};
openMobileMenu();

const getInfoGridItems = () => {
  const map = document.querySelector("#where-to-find-section");
  const gridItems = document.querySelectorAll("#info-grid div");
  const description = document.querySelectorAll(".description-item");
  return { map, gridItems, description };
};

const infoGridAnimateIn = () => {
  [
    getInfoGridItems().map,
    ...getInfoGridItems().gridItems,
    ...getInfoGridItems().description,
  ].forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      duration: 1,
      y: 20,

      scrollTrigger: {
        trigger: item,
        markers: false,
        start: "top 90%",
      },
    });
  });
};
infoGridAnimateIn();

// mobileMediaBreakpoint.add("(max-width: 768px)", () => {}
