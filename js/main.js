// Function to add and remove the page transition screen
function pageTransition() {
  var tl = gsap.timeline();
  tl.set(".loading-screen", { transformOrigin: "bottom left" });
  tl.to(".loading-screen", { duration: 0.5, scaleY: 1 });
  tl.to(".loading-screen", {
    duration: 0.5,
    scaleY: 0,
    skewX: 0,
    transformOrigin: "top left",
    ease: "power1.out",
    delay: 1
  });
  tl.from(".background", { opacity: 0, duration: 1.5 });
  tl.from(".first", { scale: 1.5, duration: 1 });
  tl.from(".second", { scale: 1, duration: 1 });
  tl.from(".third", { scale: 1, duration: 1 });

  gsap.from(".nineth", {
    rotation: 360,
    duration: 7,
    ease: "elastic",
    repeat: -1
  });
}

// Function to animate the content of each page
function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".is-animated", {
    duration: 0.5,
    translateY: 10,
    opacity: 0,
    stagger: 0.4
  });
  tl.from(".main-navigation", { duration: 0.5, translateY: -10, opacity: 0 });

  $(".green-heading-bg").addClass("show");
}

$(function() {
  barba.init({
    sync: true,

    transitions: [
      {
        async leave(data) {
          const done = this.async();

          pageTransition();
          await delay(1000);
          done();
        }
      }
    ]
  });
});
