import { useState } from "react";
import "./index.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className=" bg-slate-300 h-full border-36 border-slate-300  ">
      {/* <div className=" text-slate-300 " > .</div> */}
      <div className=" h-full  w-full m-auto bg-black  ">
        <div className=" w-1/4 m-auto bg-red-400 text-white rounded-b-md ">
          <p className=" text-xxs pt-1 lg:text-xs lg:pt-2 text-center ">
            Your current plan:{" "}
          </p>
          <p className=" text-xs lg:text-sm text-center mt-1 pb-3 ">
            <b>Starter Trial 500MAUs</b>{" "}
          </p>
        </div>

        <h6 className=" text-xl text-white text-center mt-10 ">
          <b>Choose your plan</b>{" "}
        </h6>
        <div className=" text-xxs w-3/4 flex flex-row md:w-1/4 lg:w-1/4 m-auto text-center text-white lg:text-xs mt-2 pl-4 md:text-xxs ">
          <h6 className=" mt-0.5  ">Billed monthly</h6>{" "}
          {isToggled ? (
            <h6 onClick={handleToggleClick} className="   ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="24"
                viewBox="0 0 576 512"
                fill="pink"
              >
                <path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
              </svg>
            </h6>
          ) : (
            <h6 onClick={handleToggleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="24"
                viewBox="0 0 576 512"
                fill="pink"
              >
                <path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
              </svg>
            </h6>
          )}{" "}
          <h6 className=" text-white mt-0.5 ">Billed annually</h6>
        </div>
        <div className=" w-9/12 md:w-11/12 lg:w-7/12 md:flex lg:flex-row text-white justify-center pb-6 mt-4 m-auto">
          <div className=" lg:w-1/3 md:w-1/3 bg-slate-900 rounded-md p-5 ">
            <h3 className=" text-center text-sm ">
              <b>Starter</b>
            </h3>
            <h1 className=" text-2xl mt-3 text-center ">
              <b>$19</b>
            </h1>
            <div className=" text-xxs mt-6 p-1 ">
              <li className="marker-red">500MAUs</li>
              <li className=" marker-red mt-0.5 ">3 projects</li>
              <li className="marker-red mt-0.5">Unlimited guides</li>
              <li className="marker-red mt-0.5">Unlimited flows</li>
              <li className="marker-red mt-0.5">Unlimited branded themes</li>
              <li className="marker-red mt-0.5">Email support</li>
            </div>

            <button className="hover:bg-red-400 md:mt-6 lg:mt-3 p-1 w-32 mt-3 border border-red-400 text-xs text-center  ">
              Choose Plan
            </button>
          </div>
          <div className="md:mt-0 md:ml-2 mt-2 lg:mt-0 md:w-1/3 items-center lg:ml-2 bg-slate-900 rounded-md lg:p-3 lg:pt-5 md:pl-2 pl-5 pb-5 pt-5">
            <h3 className=" text-center text-sm ">
              <b>Pro</b>
            </h3>
            <h1 className=" text-2xl mt-3 text-center ">
              $99<span className=" text-sm ">/month</span>
            </h1>
            <select
              className=" md:ml-2 text-sm p-1 sm:w-28 w-36 text-center text-white bg-slate-900 border border-white mt-2 "
              value="2500MAUs"
            >
              <option value="2500MAUs">2500MAUs</option>
            </select>
            <p className=" text-xxs text-red-400 ml-4 ">Monthly active users</p>
            <div className="text-xxs mt-3 ">
              <li className="marker-red mt-0.5">All starter features, plus:</li>
              <li className="marker-red mt-0.5">Unlimited projects</li>
              <li className="marker-red mt-0.5">
                Unlimited fully customizable themes
              </li>
              <li className="marker-red mt-0.5">
                A dedicated Customer Success Manager
              </li>
            </div>
            <button className=" hover:bg-red-400 p-1 w-32 mt-3 border border-red-400 text-xs text-center  ">
              Choose Plan
            </button>
          </div>
          <div className="md:mt-0 md:ml-2 mt-2 lg:mt-0 lg:ml-2 md:w-1/3 lg:w-1/3 bg-slate-900 rounded-md p-5  ">
            <h3 className=" text-center text-sm ">
              <b>Enterprise</b>
            </h3>
            <div>
              <h1 className=" text-xl mt-3 text-center ">
                <b>Let's Talk!</b>
              </h1>
              <div className=" text-xxs mt-10 p-1 md:p-0 ">
                <li className="marker-red mt-0.5">All Pro features</li>
                <li className="marker-red mt-0.5">Unlimited MAUs</li>
                <li className="marker-red mt-0.5">Dedicated enviroment</li>
                <li className="marker-red mt-0.5">
                  Enterprise account administration
                </li>
                <li className="marker-red mt-0.5">
                  Premiun suppport and services{" "}
                </li>
              </div>
            </div>
            <button className=" md:mt-5 p-1 w-32 mt-3 border border-red-400 text-xs text-center hover:bg-red-400 ">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
