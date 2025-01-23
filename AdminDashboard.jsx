import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";

function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 fixed md:relative z-50 h-full`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="bg-white w-[90px] h-[50px] sm:w-[160px] sm:h-auto">
            <img
              src="./assets/images/logo.png"
              className="w-full h-full"
              alt="Website Logo"
            />
          </div>
          <button
            className="text-white md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            ✖
          </button>
        </div>
        <nav>
          <ul>
            
              <li className="block py-2 px-4 rounded hover:bg-gray-700">
                Home
              </li>
              <li className="block py-2 px-4 rounded hover:bg-gray-700">
                About Us
              </li>
              <li className="block py-2 px-4 rounded hover:bg-gray-700">
                Products
              </li>
              <li className="block py-2 px-4 rounded hover:bg-gray-700">
                Infrastructure
              </li>
              <li className="block py-2 px-4 rounded hover:bg-gray-700">
                Quality
              </li>
              <li className="block py-2 px-4 rounded hover:bg-gray-700">
                Contact Us
              </li>
            
          </ul>
        </nav>
        <div className="mt-6 border-t border-gray-700 pt-4">
          <h6 className="text-gray-400 uppercase text-xs mb-2">
            Saved Reports
          </h6>
          <ul>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Current month
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Last quarter
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Social engagement
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Year-end sale
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 text-white flex justify-between items-center p-4 md:px-6">
          <button
            className="text-white md:hidden"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>

        {/* Dashboard content */}
        <main className="p-4 sm:p-6 bg-gray-50 min-h-screen">
          {/* Form container */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold  p-4 bg-gray-800 text-white">
              Form
            </h2>
            <form className="space-y-6 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Input Field 1
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Input Field 2
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Input Field 3
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Textarea 1
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Write something..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Textarea 2
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Write something..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Upload Image/Video 1
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Upload Image/Video 2
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="sm:w-[120px] px-3 py-2 bg-blue-600 text-white sm:py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
//   return (
//     <Router>
//       {/* <NavBar /> This will be displayed on all pages */}

//       <div className="overflow-x-hidden">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/infrastructure" element={<Infrastructure />} />
//           <Route path="/quality" element={ <Quality /> } />
//           <Route path="/product" element={<Product />} />
//           <Route path="/Admin" element={<AdminDashboard />} />
//         </Routes>
//       </div>

//       <Footer /> {/* This will also be displayed on all pages */}
//     </Router>
// )

}

export default AdminDashboard;
