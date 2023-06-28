import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div>
      <div className="px-5 py-2 md:p-10 grid xl:grid-cols-2 grid-rows-2 place-items-center">
        <div className="rounded-3xl overflow-hidden">
          <Carousel
            className="rounded-xl"
            infiniteLoop={true}
            autoPlay={true}
            showArrows={true}
            interval={2000}
            showStatus={false}
            showThumbs={false}
            stopOnHover={false}
          >
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
        <div className="flex md:mt-20 outline xl:outline-offset-[6rem] outline-offset-[2rem] outline-white rounded-lg flex-col justify-center items-start">
          <div className="text-stone-600 font-serif text-7xl font-black">
            <p>Bulding</p>
            <p>a better you</p>
          </div>
          {/* <div className="flex text-center items-center justify-evenly bg-yellow-200 text-stone-800 rounded-full overflow-hidden p-3">
            <div className="text-[80px]">
              <p>$</p>
            </div>
            <div className="">
              <p className="text-[50px]">
                99.<span className="text-[20px]">99</span>
              </p>
            </div>
          </div> */}
          <div className="mt-5 md:mt-20 flex flex-col items-start justify-center max-w-sm">
            <p className="font-bold text-slate-700 text-4xl">
              Our Special Feature
            </p>
            <p className="font-semibold text-slate-800 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              quasi numquam nobis fuga deleniti, est odio dicta dolore veniam
              quaerat?
            </p>
            <div className="flex justify-evenly w-[100%] font-bold text-slate-700 text-base mt-5">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="h-[50px]"
                  src="https://img.icons8.com/?size=512&id=etRqsBHtSyMZ&format=png"
                  alt=""
                />
                <p>Free Delivery</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="h-[50px]"
                  src="https://img.icons8.com/?size=512&id=dEeAxd8v4Kb1&format=png"
                  alt=""
                />
                <p>2 Qty In Stoke</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="h-[50px]"
                  src="https://img.icons8.com/?size=512&id=p7knLKcrWmUD&format=png"
                  alt=""
                />
                <p>Cotton</p>
              </div>
            </div>
            <div className="mt-5 w-fit mx-auto">
              <button className="capitalize py-2 px-5 bg-white hover:bg-gray-100 rounded-xl">
                add to my shopping bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
