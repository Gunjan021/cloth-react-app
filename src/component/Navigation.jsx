import { useState } from "react";

export default function Navigation() {
  const [women, setWomen] = useState(false);
  const [men, setMen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="sticky top-0">
      <nav className="flex outline-double flex-row bg-first-color md:rounded-lg text-white justify-between items-center">
        <div className="flex flex-row sm:my-2 justify-center items-center">
          <img
            className="hover:rounded-full hover:bg-[#8a8176] relative ml-3 p-2 h-10 lg:hidden"
            src="https://img.icons8.com/?size=512&id=8113&format=png"
            alt=""
          />
          <img
            className="p-2 h-16"
            src="https://img.icons8.com/?size=512&id=mkkp6yt38FVq&format=png"
            alt=""
          />
        </div>
        <ul className="hidden lg:flex justify-center items-center sm:text-base xl:text-lg text-">
          {/* <li className="md:ml-6 lg:ml-10 hover:text-black font-semibold">
  
          </li> */}
          <li className="ml-2 md:ml-6 lg:ml-10 hover:text-gray-300 font-semibold">
            <a href="#">Home</a>
          </li>
          <div onMouseLeave={() => setWomen(false)} className="relative">
            <li className="ml-2 flex justify-center items-center md:ml-6 lg:ml-10 hover:text-gray-300 hover:duration-300 font-semibold">
              <a onMouseOver={() => setWomen(true)} href="#">
                Women
              </a>
            </li>
            <ul
              className={`absolute bg-first-color w-40 py-2 pt-2 rounded-lg shadow-xl ${
                women ? "block" : "hidden"
              }`}
            >
              <li className="flex w-full items-center px-3 py-2 text-sm rounded-xl hover:bg-gray-100 hover:font-semibold hover:text-slate-800">
                Kurta Kurtis
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm rounded-xl hover:bg-gray-100 hover:font-semibold hover:text-slate-800">
                Sarees
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm rounded-xl hover:bg-gray-100 hover:font-semibold hover:text-slate-800">
                Lehengas
              </li>
            </ul>
          </div>

          <div onMouseLeave={() => setMen(false)} className="relative">
            <li className="ml-2 flex justify-center items-center md:ml-6 lg:ml-10 hover:text-gray-300 font-semibold">
              <a onMouseOver={() => setMen(true)} href="#">
                Men
              </a>
            </li>
            <ul
              className={`absolute bg-first-color  w-40 py-2 pt-2 rounded-lg shadow-xl ${
                men ? "block" : "hidden"
              }`}
            >
              <li className="flex w-full items-center px-3 py-2 text-sm rounded-xl hover:bg-gray-100 hover:font-semibold hover:text-slate-800">
                T-Shirts
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm rounded-xl hover:bg-gray-100 hover:font-semibold hover:text-slate-800">
                Jeans
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm rounded-xl hover:bg-gray-100 hover:font-semibold hover:text-slate-800">
                Shorts
              </li>
            </ul>
          </div>
          <li className="ml-2 md:ml-6 lg:ml-10 hover:text-gray-300 font-semibold">
            <a href="#">Kids</a>
          </li>
          <li className="ml-2 md:ml-6 lg:ml-10 hover:text-gray-300 font-semibold">
            <a href="#">Offers</a>
          </li>
        </ul>

        <div
          onMouseLeave={() => setSearch(false)}
          className="flex sm:w-[400px] justify-end flex-nowrap"
        >
          <div className="hidden sm:flex">
            <input
              className={`relative w-[150px] left-7 xs:left-10 md:left-13 lg:left-14 md:my-1 lg:my-3 pl-2 pr-10 rounded-lg text-black font-semibold ${
                search ? "block" : "hidden"
              }`}
              type="text"
            />
            <button
              onMouseDown={() => setSearch(true)}
              className={`z-1 p-2 lg:p-4 ${
                search ? "" : "hover:rounded-full hover:bg-[#8a8176]"
              }`}
            >
              <img
                className={`w-8 p-1 invert ${search ? "invert-0" : "invert"}`}
                src="https://img.icons8.com/?size=512&id=132&format=png"
                alt=""
              />
            </button>
          </div>
          <button className="hover:rounded-full hover:bg-[#8a8176] p-2 lg:p-4">
            <img
              className="w-8 p-1 invert"
              src="https://img.icons8.com/?size=512&id=9671&format=png"
              alt=""
            />
          </button>
          <div onMouseLeave={() => setMenu(false)} className="relative">
            <button
              onMouseDown={() => setMenu(true)}
              className="hover:rounded-full hover:bg-[#8a8176] p-2 lg:p-4"
            >
              <img
                className="w-8 p-1 invert"
                src="https://img.icons8.com/?size=512&id=H6ezvXOgluUF&format=png"
                alt=""
              />
            </button>
            <ul
              className={`absolute bg-first-color right-0 w-40 py-2 pt-2 rounded-lg shadow-xl ${
                menu ? "block" : "hidden"
              }`}
            >
              <li className="flex w-full items-center px-3 py-2 text-sm rounded-xl hover:bg-gray-100 hover:font-semibold hover:text-slate-800">
                Profile
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm rounded-xl hover:bg-gray-100 hover:font-semibold hover:text-slate-800">
                Account
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm rounded-xl hover:bg-gray-100 hover:font-semibold hover:text-slate-800">
                Log Out
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
