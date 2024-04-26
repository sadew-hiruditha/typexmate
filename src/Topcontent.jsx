import { useState } from "react";
import React from "react";
import { generateScript } from "./GenetareScript"; // Import the function from GenerateScript.js

function Topcontent() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [uniname, setUniname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const [isDownloaded, setIsDownloaded] = useState(false);
  const [error, setError] = useState("");

  const clearFields = () => {
    setName("");
    setAddress("");
    setEmail("");
    setUniname("");
    setPhonenumber("");
    setError("");
  };

  const handleClick = () => {
    if (!name || !address || !email || !uniname || !phonenumber) {
      setError("All fields are required");
      return;
    }

    generateScript(name, address, email, uniname, phonenumber);
    setIsDownloaded(true);
  };

  return (
    <div className="grid sm:grid-cols-2 bg-[#0a001b] h-">
      <div className="h-screen overflow-auto p-10 justify-center sm:order-1  " >
        <h1 className="text-[white] text-[28px] mt-2 font-bold ">TypexMate.</h1>
        <div className="text-[#dadadae7]">
          <p className="text-[#dadadae7] font-light mt-10">
            Welcome to TypexMate! Simplify your typing tasks with ease.
            TypexMate is your go-to solution for generating AHK scripts
            effortlessly. Say goodbye to manual typing woes and hello to
            streamlined productivity. Input your details, download your custom
            script, and let TypexMate do the heavy lifting. Transform your
            typing experience today!
          </p>

          <div className="border border-[#424242] mt-10 rounded-lg bg-[rgba(255,255,255,0.13)] p-10">
          <p className="font-bold mb-5 un">short name with ;</p>

            <p>name;</p>
            <p>add;</p>
            <p>email;</p>
            <p>num;</p>
            <p>degree;</p>
          </div>

<div className="grid grid-cols-2">
  
<div className="border mt-10 border-[#424242] rounded-lg bg-[rgba(255,255,255,0.13)] p-10">
            <p className="font-bold mb-5 un">short name + space</p>
            <p>mon</p>
            <p>tue</p>
            <p>wed</p>
            <p>thu</p>
            <p>fri</p>
            <p>sat</p>
            <p>sun</p>
            <p>jan</p>
            <p>feb</p>
            <p>mar</p>
            <p>apr</p>
            <p>may</p>
            <p>jun</p>
            <p>jul</p>
            <p>aug</p>
            <p>sep</p>
            <p>oct</p>
            <p>nov</p>
            <p>dec</p>
          </div>

</div>


        </div>
      </div>
      <div className=" text-center  rounded-[20px] bg-gradient-to-br from-[hsla(249,100%,6%,0)] to-[rgb(33,0,59)] text-[black] m-5">
        <form>
          <div className="mt-10">
            <div class="p-5">
              <label
                for="text"
                className="block mb-2 text-sm font-medium text-[white] text-left "
              >
                Full Name
              </label>
              <input
                type="text"
                id="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#474747] border border-[#696969] text-[#d1d1d1] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="Enter your full name"
                required
              />
            </div>
            <div class="p-5 ">
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-[white] text-left "
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-[#474747] border border-[#696969] text-[#d1d1d1] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="Enter your address"
                required
              />
            </div>
            <div class="p-5 ">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-[white] text-left "
              >
                Email
              </label>
              <input
                type="email"
                id="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#474747] border border-[#696969] text-[#d1d1d1] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="p-5 ">
              <label
                for="mobile"
                class="block mb-2 text-sm font-medium text-[white] text-left "
              >
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                className="bg-[#474747] border border-[#696969] text-[#d1d1d1] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="Mobile number"
                required
              />
            </div>
            <div class="p-5 ">
              <label
                for="degree"
                class="block mb-2 text-sm font-medium text-[white] text-left "
              >
                Degree Name
              </label>
              <input
                type="email"
                id="text"
                value={uniname}
                onChange={(e) => setUniname(e.target.value)}
                className="bg-[#474747] border border-[#696969] text-[#d1d1d1] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="Enter your Degree Name"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={handleClick}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm flex ml-5 px-5 py-2.5 text-left mb-10"
          >
            Download
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default Topcontent;
