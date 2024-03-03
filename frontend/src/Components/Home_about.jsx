import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import pic from "../assets/ai.avif";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.webp";
import pic5 from "../assets/pic5.jpg";
import camera from "../assets/cam.png";
import mic from "../assets/mic.png";
import { Typewriter } from "react-simple-typewriter";

export default function Home_about() {
  return (
    <div>
      <div className="box  min-h-[110vh] sm:w-[80%] w-full flex flex-col justify-center items-center m-auto ">
        <p className="text-[#ffffff] text-center w-full mb-[1.5rem] para">
          Say goodbye to the uncertainty of self-diagnosis and endless internet
          searches. Our revolutionary platform utilizes advanced AI algorithms
          to accurately diagnose health conditions based on your symptoms or
          even a simple picture.
        </p>
        <div className="info  flex  justify-center  items-center gap-[2rem] flex-wrap-reverse lg:flex-nowrap">
          <div className="left text-[#ffffff] text-center backdrop-blur p-[1rem] border-solid border-[2.3px] border-[#00FF29] rounded-[2rem] m-[1rem]">
            <div>
              "Welcome to our revolutionary disease recognition platform! Simply
              upload an image of your symptoms or provide the disease name, and
              watch as our cutting-edge technology swiftly identifies the
              ailment. But wait, there's more! With just a click, discover all
              the nearby doctors specialized in treating your condition,
              tailored to your location. Get the help you need, right at your
              fingertips. Experience health care like never before!"
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-[1rem] m-[1rem]">
              <button className="btn flex flex-row justify-center items-center text-center  border-solid border-[2.3px] border-[#000000] bg-[#00FF29] text-[#000000] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem] hover:text-[#00FF29] hover:bg-transparent hover:border-solid hover:border-[2px] hover:border-[#00FF29]">
                Discover by Snapping shots{" "}
                <img src={camera} className="w-[2rem] text-[#000000]" />
              </button>
              <button className="btn flex flex-row justify-center items-center text-center  border-solid border-[2.3px] border-[#000000] bg-[#00FF29] text-[#000000] transition-all ease-linear duration-100  rounded-[2rem] p-[0.4rem] hover:text-[#00FF29] hover:bg-transparent hover:border-solid hover:border-[2px] hover:border-[#00FF29]">
                Discover by disease name{" "}
                <img src={mic} className="w-[2.5rem]" />
              </button>
            </div>
          </div>
          <div className="right   m-auto md:m-[1rem]  ">
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              transitionTime={300}
              dynamicHeight={true}
              interval={2000}
              showThumbs={false}
            >
              <div className="rounded-[2rem]">
                <img src={pic} className="rounded-[1rem] w-[15rem] h-[23rem]" />
              </div>
              <div>
                <img
                  src={pic2}
                  className="rounded-[1rem] w-[15rem] h-[23rem]"
                />
              </div>
              <div>
                <img
                  src={pic3}
                  className="rounded-[1rem] w-[15rem] h-[23rem]"
                />
              </div>
              <div>
                <img
                  src={pic4}
                  className="rounded-[1rem] w-[15rem] h-[23rem]"
                />
              </div>
              <div>
                <img
                  src={pic5}
                  className="rounded-[1rem] w-[15rem] h-[23rem]"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <p className="join italic text-[#ffffff] text-center w-full mt-[1.5rem] para">
          Join us and discover the power of{" "}
          <Typewriter
            words={["Technology-driven disease detection", "AI-Powered Diagnosis", "Tech-driven disease recognition", "AI-powered healthcare"]}
            loop={1000}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={80}
          />{" "}
          ,redefining the way you approach wellness.
        </p>
      </div>
    </div>
  );
}
