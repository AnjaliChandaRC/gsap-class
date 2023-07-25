import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const GsapPractice = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    toggleActions: "play reverse none reverse",
  });
  useEffect(() => {
    // let mm = gsap.matchMedia();
    // mm.add("(min-width:1399.98px)", () => {
    // let value2 = gsap.timeline({
    //    scrollTrigger: {
    //     trigger: ".parent",
    //     start: "top 50%",
    //     end: "bottom top",
    //     markers: true,
    //     pin:true,
    //   },
    // })
    // value2
    //   .fromTo(".para", {
    //   xPercent:0,
    // },{
    //     xPercent: 100,
    //   duration:2,
    // })
    //   .to(".para", {
    //   xPercent:20,
    // })
    // });
     gsap.to(".bg_img", {
          duration: 10,
          backgroundPosition: "100% 0%",
          yoyo: true,
          repeat: -1,
     })
     gsap.to(".bg_img", {
          duration: 10,
          backgroundPosition: "100% 0%",
          yoyo: true,
          repeat: -1,
     })
  },[])

  //   let mm = gsap.matchMedia();
  // mm.add("(max-width:992px)", () => {})
  return (
    <>
      <div className="overflow-hidden">
        {/* <div className="min-vh-100 bg-info"></div> */}
        {/* <div className="px-5 py-5 min-vh-100 text_parent">
          <div className="d-flex justify-content-evenly align-items-center py-5 my-5">
            <div className="fs-1 fw-bold numbers">1</div>
            <div className="fs-1 fw-bold numbers2">2</div>
            <div className="fs-1 fw-bold numbers3">3</div>
            <div className="fs-1 fw-bold numbers4">4</div>
            <div className="fs-1 fw-bold numbers5">5</div>
          </div>
        </div>
        <div className="parent min-vh-100 bg-dark">
        <p className="para text-white pt-5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus ratione fugit nemo, veniam assumenda eos, omnis necessitatibus praesentium sunt sit veritatis? Inventore aliquam magni quod quam soluta debitis ullam.</p>
        </div>
        <div className="min-vh-100 bg-danger"></div> */}
        <div className="bg_img min-vh-100 d-flex justify-content-center align-items-center">
        <h2 className="text-white nature_text">This Is A Beautiful Nature</h2>
      </div>
      </div>
    </>
  );
};

export default GsapPractice;
