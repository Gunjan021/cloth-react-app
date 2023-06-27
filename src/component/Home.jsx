import React from "react";

function Home() {
  return (
    <div>
      <div className="mt-0 md:mt-10 px-5 py-2 md:p-10 flex flex-col lg:flex-row items-start justify-around">
        <div className="rounded-full overflow-hidden">
          <img
            className="md:h-96 xl:h-full"
            src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center items-start">
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
