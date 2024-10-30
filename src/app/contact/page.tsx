import React from 'react'

const Contact = () => {
  return (
          <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Us</h1>
            <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your full name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message here"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send Message
                </button>
              </div>
            </form>
<div>

            <footer className="bg-gray-200 py-8 px-4 shadow-md z-10 flex justify-content-center align-items-center dark:bg-slate-900 dark:text-white">
    <div className="text-sm text-gray-600 dark:text-gray-300">Copyright © 2024 Biryani Resturant</div>
    <div className="flex ml-auto gap-4">
        <a href="conditions blalbla" className="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700">Terms &
            Conditions
        </a>
        <a href="policy blablalba" className="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700">Privacy
            Policy
        </a>
    </div>
</footer>
</div>
          </div>
        );
      };


export default Contact
