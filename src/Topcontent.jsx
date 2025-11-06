import { useState, useEffect } from "react";
import { generateScript } from "./GenetareScript"; // Import the function from GenerateScript.js
import LivePreview from "./LivePreview";
import DragDropZone from "./DragDropZone";
import CustomHotstringBuilder from "./CustomHotstringBuilder";

function Topcontent() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [uniname, setUniname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const [isDownloaded, setIsDownloaded] = useState(false);
  const [error, setError] = useState("");
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [customHotstrings, setCustomHotstrings] = useState([]);
  
  // Theme state - default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('typexmate-theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('typexmate-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleImportedData = (data) => {
    if (data.name) setName(data.name);
    if (data.address) setAddress(data.address);
    if (data.email) setEmail(data.email);
    if (data.degree) setUniname(data.degree);
    if (data.phonenumber) setPhonenumber(data.phonenumber);
  };

  const clearFields = () => {
    setName("");
    setAddress("");
    setEmail("");
    setUniname("");
    setPhonenumber("");
    setError("");
    setCustomHotstrings([]);
  };

  const handleClick = () => {
    if (!name || !address || !email || !uniname || !phonenumber) {
      setError("All fields are required");
      return;
    }

    generateScript(name, address, email, uniname, phonenumber, customHotstrings);
    setIsDownloaded(true);
  };

  return (
    <div className={`grid sm:grid-cols-2 transition-colors duration-300 ${
      isDarkMode ? 'bg-[#0a001b]' : 'bg-gray-100'
    }`}>
      <div className={`h-screen overflow-auto p-10 justify-center sm:order-1 ${
        isDarkMode ? 'text-[#dadadae7]' : 'text-gray-800'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <h1 className={`text-[28px] mt-2 font-bold ${
            isDarkMode ? 'text-[white]' : 'text-gray-900'
          }`}>
            TypexMate.
          </h1>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg transition-all ${
              isDarkMode 
                ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' 
                : 'bg-gray-800 hover:bg-gray-900 text-yellow-400'
            }`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <span className="text-xl">☀️</span>
            ) : (
              <span className="text-xl">🌙</span>
            )}
          </button>
        </div>
        
        <div>

          {/* Collapsible Shortcuts Reference */}
          <div className="mt-10">
            <button
              onClick={() => setShowShortcuts(!showShortcuts)}
              className={`w-full flex items-center justify-between p-4 border rounded-lg transition-all font-semibold ${
                isDarkMode 
                  ? 'border-[#424242] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] text-[white]'
                  : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900 shadow-sm'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">⌨️</span>
                Shortcuts Reference Guide
              </span>
              <span className={`transform transition-transform ${showShortcuts ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {showShortcuts && (
              <div className="mt-3 space-y-3 animate-fadeIn">
                <div className={`border rounded-lg p-6 ${
                  isDarkMode 
                    ? 'border-[#424242] bg-[rgba(255,255,255,0.13)]'
                    : 'border-gray-300 bg-white shadow-sm'
                }`}>
                  <p className={`font-bold mb-4 text-lg ${isDarkMode ? 'text-[#fff]' : 'text-gray-900'}`}>
                    📝 Personal Info Shortcuts (with ;)
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}>
                      <span className="text-blue-400 font-mono">name;</span> → Your full name
                    </p>
                    <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}>
                      <span className="text-blue-400 font-mono">add;</span> → Your address
                    </p>
                    <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}>
                      <span className="text-blue-400 font-mono">email;</span> → Your email
                    </p>
                    <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}>
                      <span className="text-blue-400 font-mono">num;</span> → Your phone
                    </p>
                    <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}>
                      <span className="text-blue-400 font-mono">degree;</span> → Your degree
                    </p>
                  </div>
                </div>

                <div className={`border rounded-lg p-6 ${
                  isDarkMode 
                    ? 'border-[#424242] bg-[rgba(255,255,255,0.13)]'
                    : 'border-gray-300 bg-white shadow-sm'
                }`}>
                  <p className={`font-bold mb-4 text-lg ${isDarkMode ? 'text-[#fff]' : 'text-gray-900'}`}>
                    📅 Date Shortcuts (+ space)
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className={`font-semibold mb-2 ${isDarkMode ? 'text-[#888]' : 'text-gray-500'}`}>Weekdays:</p>
                      <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">mon</span> → Monday</p>
                      <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">tue</span> → Tuesday</p>
                      <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">wed</span> → Wednesday</p>
                      <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">thu</span> → Thursday</p>
                      <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">fri</span> → Friday</p>
                      <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">sat</span> → Saturday</p>
                      <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">sun</span> → Sunday</p>
                    </div>
                    <div className="col-span-2">
                      <p className={`font-semibold mb-2 ${isDarkMode ? 'text-[#888]' : 'text-gray-500'}`}>Months:</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">jan</span> → January</p>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">feb</span> → February</p>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">mar</span> → March</p>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">apr</span> → April</p>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">may</span> → May</p>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">jun</span> → June</p>
                        </div>
                        <div>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">jul</span> → July</p>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">aug</span> → August</p>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">sep</span> → September</p>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">oct</span> → October</p>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">nov</span> → November</p>
                          <p className={isDarkMode ? 'text-[#aaa]' : 'text-gray-600'}><span className="text-green-400 font-mono">dec</span> → December</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Custom Hotstring Builder */}
          <CustomHotstringBuilder 
            customHotstrings={customHotstrings}
            onCustomHotstringsChange={setCustomHotstrings}
            isDarkMode={isDarkMode}
          />

          {/* Drag and Drop Zone */}
          <DragDropZone onDataExtracted={handleImportedData} />

          {/* Live Preview Panel */}
          <LivePreview 
            name={name}
            address={address}
            email={email}
            degree={uniname}
            phonenumber={phonenumber}
            customHotstrings={customHotstrings}
            isDarkMode={isDarkMode}
          />

        </div>
      </div>
      <div className={`text-center rounded-[20px] m-5 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-[hsla(249,100%,6%,0)] to-[rgb(33,0,59)]'
          : 'bg-gradient-to-br from-blue-50 to-purple-50'
      }`}>
        
        {/* Welcome Section */}
        <div className="pt-10 px-5">
          <div className="text-left mb-8">
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-[white]' : 'text-gray-900'
            }`}>
              Welcome to TypexMate!
            </h2>
            <p className={`font-light leading-relaxed ${
              isDarkMode ? 'text-[#dadadae7]' : 'text-gray-700'
            }`}>
              Simplify your typing tasks with ease. TypexMate is your go-to solution for generating AutoHotkey scripts 
              effortlessly. Say goodbye to manual typing and hello to streamlined productivity. Input your details, 
              download your custom script, and let TypexMate do the heavy lifting. Transform your typing experience today!
            </p>
          </div>
        </div>

        <form>
          <div className="px-5">
            {/* Responsive grid layout - auto-fit columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullname"
                  className={`block mb-2 text-sm font-medium text-left ${
                    isDarkMode ? 'text-[white]' : 'text-gray-700'
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none ${
                    isDarkMode 
                      ? 'bg-[#474747] border border-[#696969] text-[#d1d1d1]'
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label
                  htmlFor="address"
                  className={`block mb-2 text-sm font-medium text-left ${
                    isDarkMode ? 'text-[white]' : 'text-gray-700'
                  }`}
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none ${
                    isDarkMode 
                      ? 'bg-[#474747] border border-[#696969] text-[#d1d1d1]'
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter your address"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium text-left ${
                    isDarkMode ? 'text-[white]' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none ${
                    isDarkMode 
                      ? 'bg-[#474747] border border-[#696969] text-[#d1d1d1]'
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className={`block mb-2 text-sm font-medium text-left ${
                    isDarkMode ? 'text-[white]' : 'text-gray-700'
                  }`}
                >
                  Mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  className={`text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none ${
                    isDarkMode 
                      ? 'bg-[#474747] border border-[#696969] text-[#d1d1d1]'
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                  placeholder="Mobile number"
                  required
                />
              </div>

              <div className="lg:col-span-2">
                <label
                  htmlFor="degree"
                  className={`block mb-2 text-sm font-medium text-left ${
                    isDarkMode ? 'text-[white]' : 'text-gray-700'
                  }`}
                >
                  Degree Name
                </label>
                <input
                  type="text"
                  id="degree"
                  value={uniname}
                  onChange={(e) => setUniname(e.target.value)}
                  className={`text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none ${
                    isDarkMode 
                      ? 'bg-[#474747] border border-[#696969] text-[#d1d1d1]'
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter your Degree Name"
                  required
                />
              </div>
            </div>
          </div>

          {/* Buttons and Messages */}
          <div className="px-5 pb-10">
            <div className="flex gap-3 mt-6 mb-4">
              <button
                type="submit"
                onClick={handleClick}
                className="flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
              >
                📥 Download Script
              </button>

              <button
                type="button"
                onClick={clearFields}
                className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
              >
                🗑️ Clear
              </button>
            </div>

            {error && (
              <div className={`p-3 border rounded-lg text-sm mb-3 ${
                isDarkMode 
                  ? 'bg-red-500 bg-opacity-20 border-red-500 text-red-300'
                  : 'bg-red-50 border-red-300 text-red-700'
              }`}>
                ⚠️ {error}
              </div>
            )}

            {isDownloaded && (
              <div className={`p-3 border rounded-lg text-sm mb-3 ${
                isDarkMode 
                  ? 'bg-green-500 bg-opacity-20 border-green-500 text-green-300'
                  : 'bg-green-50 border-green-300 text-green-700'
              }`}>
                ✓ Script downloaded successfully!
              </div>
            )}
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Topcontent;
