import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const GsapClass = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let value = gsap.timeline({});
    value.from(".box1", {
      xPercent: -300,
      duration: 3,
    });
    value.to(
      ".box2",
      {
        xPercent: -300,
        duration: 3,
        scale: 2,
        //   repeat: -1,
      },
      "-=2"
    );
    value.fromTo(
      ".box3",
      {
        xPercent: 0,
        duration: 3,
      },
      {
        xPercent: 700,
        duration: 3,
        // repeat: -1,
        yoyo: true,
      }
    );




    // let mm = gsap.matchMedia();
    // mm.add("(min-width:992px) and (max-width:1200px)", () => {
    let value1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".text_parent",
        start: "top top",
        end: "bottom top",
        // end: "+=200%",
        markers: true,
        pin: true,
        // scrub: true,
      },
    });
    value1
      .to(".numbers", {
        yPercent: 300,
        stagger: 0.1,
               ease:"elastic",
        // yoyo: true,
        scale:2,
      })
      .to(".numbers2", {
        yPercent: 300,
        stagger: 0.1,
               ease:"elastic",
        // yoyo: true,
        scale:2,
      })
      .to(".numbers3", {
        yPercent: 300,
        stagger: 0.1,
               ease:"elastic",
        // yoyo: true,
        scale:2,
      })
      .to(".numbers4", {
        yPercent: 300,
        stagger: 0.1,
               ease:"elastic",
        // yoyo: true,
        scale:2,
      })
      .to(".numbers5", {
        yPercent: 300,
        stagger: 0.1,
               ease:"elastic",
        // yoyo: true,
        scale:2,
      });  
  });
  // })




     

  return (
    <>
      <div className="overflow-hidden">
        <div className="min-vh-100 bg-danger"></div>
         <div className="px-5 py-5 min-vh-100 text_parent">
          <div className="d-flex justify-content-evenly align-items-center py-5 my-5">
            <div className="fs-1 fw-bold numbers">1</div>
            <div className="fs-1 fw-bold numbers2">2</div>
            <div className="fs-1 fw-bold numbers3">3</div>
            <div className="fs-1 fw-bold numbers4">4</div>
            <div className="fs-1 fw-bold numbers5">5</div>
          </div>
        </div>
        <div className="min-vh-100 bg-danger"></div>

        {/* <div className="px-5 py-5 min-vh-100 text_parent">
          <div className="box1 m-auto text-white d-flex justify-content-center align-items-center fw-bold">
            from
          </div>
          <div className="box2 m-auto text-white d-flex justify-content-center align-items-center fw-bold">
            to
          </div>
          <div className="box3 mauto d-flex justify-content-center align-items-center fw-bold">
            fromTo
          </div>
        </div> */}
      </div>
    </>
  );
};

export default GsapClass;
