import React, { Component } from "react";
const Home = () => {
  return (
    <main className="bg-customGray rounded-lg px-5 overflow-y-auto scrollbar-none">
      <nav className="flex h-16 items-center justify-start sticky top-0 bg-customGray">
        <div className="flex justify-between w-52 text-sm font-semibold">
          <a className="bg-white px-3 py-1 rounded-full">All</a>
          <a className=" bg-baseHighlight px-3 py-1 rounded-full text-white">
            Music
          </a>
          <a className="bg-baseHighlight px-3 py-1 rounded-full text-white">
            Podcasts
          </a>
        </div>
      </nav>
      <ul className="grid lg:grid-cols-[repeat(4,_minmax(250px,_1fr))] lg:grid-rows-[4rem_4rem] gap-3 md:grid-cols-[repeat(2,_minmax(200px,_1fr))] md:grid-rows-[repeat(4,3rem)] grid-cols-2 grid-rows-[repeat(4,3rem)]">
        <li className="flex items-center rounded-md overflow-hidden bg-baseHighlight hover:bg-tintedHighlight">
          <img
            src="https://i.pinimg.com/736x/43/6a/ac/436aaceceaca8b425f129b41f6131da2.jpg"
            className="h-full"
          ></img>{" "}
          <h2 className="pl-3 text-sm font-semibold text-white">
            Wicked:The Soundtrack
          </h2>
        </li>
        <li className="flex items-center rounded-md overflow-hidden bg-baseHighlight hover:bg-tintedHighlight">
          <img
            src="https://i.pinimg.com/474x/36/8d/84/368d84458e466be4fefb9aa661f5e4a4.jpg"
            className="h-full"
          ></img>{" "}
          <h2 className="pl-3 text-sm font-semibold text-white">Aespa</h2>
        </li>
        <li className="flex items-center rounded-md overflow-hidden bg-baseHighlight hover:bg-tintedHighlight">
          <img
            src="https://i.pinimg.com/236x/bc/e6/e4/bce6e492177bf03a2e0e1f97edef8831.jpg"
            className="h-full"
          ></img>{" "}
          <h2 className="pl-3 text-sm font-semibold text-white">Adele</h2>
        </li>
        <li className="flex items-center rounded-md overflow-hidden bg-baseHighlight hover:bg-tintedHighlight">
          <img
            src="https://i.pinimg.com/474x/78/f7/97/78f797264c48c15d950a2f187dad02e1.jpg"
            className="h-full"
          ></img>{" "}
          <h2 className="pl-3 text-sm font-semibold text-white">Ariana</h2>
        </li>
        <li className="flex items-center rounded-md overflow-hidden bg-baseHighlight hover:bg-tintedHighlight">
          <img
            src="https://i.pinimg.com/736x/2e/a5/c2/2ea5c22570ac8270e8bb18c80ecfd331.jpg"
            className="h-full"
          ></img>{" "}
          <h2 className="pl-3 text-sm font-semibold text-white">Katy Perry</h2>
        </li>
        <li className="flex items-center rounded-md overflow-hidden bg-baseHighlight hover:bg-tintedHighlight">
          <img
            src="https://i.pinimg.com/736x/58/ba/3b/58ba3b22b118b9049e467996d2f61073.jpg"
            className="h-full"
          ></img>{" "}
          <h2 className="pl-3 text-sm font-semibold text-white">ROSE</h2>
        </li>
        <li className="flex items-center rounded-md overflow-hidden bg-baseHighlight hover:bg-tintedHighlight">
          <img
            src="https://i.pinimg.com/474x/fb/f2/0d/fbf20dda3a708e9b16ac3eedcac69f92.jpg"
            className="h-full"
          ></img>{" "}
          <h2 className="pl-3 text-sm font-semibold text-white">Bruno Mars</h2>
        </li>
        <li className="flex items-center rounded-md overflow-hidden bg-baseHighlight hover:bg-tintedHighlight">
          <img
            src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
            className="h-full"
          ></img>{" "}
          <h2 className="pl-3 text-sm font-semibold text-white">
            Olivia Rodrigo
          </h2>
        </li>
      </ul>
      <div className="flex flex-col mt-10 gap-4">
        <div className="flex justify-between">
          <h2 className="text-white text-2xl font-bold">
            Made For Mazen Hassan
          </h2>
          <a className="text-customTextGrey hover:underline decoration-white decoration-1 font-semibold cursor-pointer">
            Show all
          </a>
        </div>
        <ul className="flex gap-5">
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-blue-600 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-blue-600 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                01
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/236x/dc/07/50/dc07509519f0d4b8472167c9b4a64a61.jpg"
              ></img>
              <p className="bg-red-500 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-red-500 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                02
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/236x/5f/f4/83/5ff483cf28501863e5415cd1546951de.jpg"
              ></img>
              <p className="bg-pink-300 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-pink-300 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                03
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/474x/f2/99/d2/f299d2b29d855750ecbbb734869aa6d2.jpg"
              ></img>
              <p className="bg-lime-200 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-lime-200 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                04
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/236x/7e/1f/ab/7e1fabc34020b6e7981c80e185d90e5c.jpg"
              ></img>
              <p className="bg-indigo-300 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-indigo-300 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                05
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/236x/8e/d9/74/8ed9746e3aa5ea3eeeda80cdbedb1880.jpg"
              ></img>
              <p className="bg-yellow-400 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-yellow-400 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                06
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-10 gap-4">
        <div className="flex justify-between">
          <h2 className="text-white text-2xl font-bold">
            Made For Mazen Hassan
          </h2>
          <a className="text-customTextGrey hover:underline decoration-white decoration-1 font-semibold cursor-pointer">
            Show all
          </a>
        </div>
        <ul className="flex gap-5">
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-blue-600 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-blue-600 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                01
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-red-500 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-red-500 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                02
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-pink-300 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-pink-300 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                03
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-lime-200 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-lime-200 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                04
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-indigo-300 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-indigo-300 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                05
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-yellow-400 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-yellow-400 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                06
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-10 gap-4">
        <div className="flex justify-between">
          <h2 className="text-white text-2xl font-bold">
            Made For Mazen Hassan
          </h2>
          <a className="text-customTextGrey hover:underline decoration-white decoration-1 font-semibold cursor-pointer">
            Show all
          </a>
        </div>
        <ul className="flex gap-5">
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-blue-600 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-blue-600 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                01
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-red-500 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-red-500 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                02
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-pink-300 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-pink-300 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                03
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-lime-200 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-lime-200 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                04
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-indigo-300 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-indigo-300 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                05
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
          <li className="flex flex-col lg:w-64 min-w-36 gap-1">
            <div className="w-full relative">
              <img
                className="w-full rounded-lg "
                src="https://i.pinimg.com/736x/c0/bc/32/c0bc3220c6562c0594660fbc6776347c.jpg"
              ></img>
              <p className="bg-yellow-400 absolute bottom-2 left-2 lg:text-xl md:text-lg text-sm font-semibold px-1">
                Daily Mix
              </p>
              <p className="bg-yellow-400 absolute bottom-2 right-2 lg:text-3xl lg:w-14 md:text-2xl text-xl font-semibold px-1 font-stretch-expanded text-center">
                06
              </p>
            </div>
            <p className="text-customTextGrey text-sm font-semibold">
              Taemin, ITZY, ENHYPEN and more
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
