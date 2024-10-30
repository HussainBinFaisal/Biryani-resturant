import React from "react";

export default function Dishes() {
    return (
      <div>
      <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4">Dish Menu</h1>
          <h1 className="text-3xl">By Biryani Resturant</h1>
      </div>
      
     
      <section id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                  <img src="biryani3.jpg"
                          alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                  <div className="px-4 py-3 w-72">
                      <span className="text-gray-400 mr-3 uppercase text-xs">Biryani</span>
                      <p className="text-lg font-bold text-black truncate block capitalize">Sindhi Biryani</p>
                      <div className="flex items-center">
                          <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 349</p>
                          <del>
                              <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 799</p>
                          </del>
                          </div>
                  </div>
              </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                  <img src="biryani2.jpg"
                          alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                  <div className="px-4 py-3 w-72">
                      <span className="text-gray-400 mr-3 uppercase text-xs">Biryani</span>
                      <p className="text-lg font-bold text-black truncate block capitalize">Chicken Biryani</p>
                      <div className="flex items-center">
                          <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 250</p>
                          <del>
                              <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 300</p>
                          </del>
                          
                      </div>
                  </div>
              </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                  <img src="biryani4.jpeg"
                          alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                  <div className="px-4 py-3 w-72">
                      <span className="text-gray-400 mr-3 uppercase text-xs">Biryani</span>
                      <p className="text-lg font-bold text-black truncate block capitalize">Mutton Biryani</p>
                      <div className="flex items-center">
                          <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 400</p>
                          <del>
                              <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 550</p>
                          </del>
                          
                      </div>
                  </div>
              </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                  <img src="biryani5.jpg"
                          alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                  <div className="px-4 py-3 w-72">
                      <span className="text-gray-400 mr-3 uppercase text-xs">Biryani</span>
                      <p className="text-lg font-bold text-black truncate block capitalize">Matka Biryani</p>
                      <div className="flex items-center">
                          <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 300</p>
                          <del>
                              <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 350</p>
                          </del>
                          
                      </div>
                  </div>
              </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                  <img src="biryani6.jpg"
                          alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                  <div className="px-4 py-3 w-72">
                      <span className="text-gray-400 mr-3 uppercase text-xs">Biryani</span>
                      <p className="text-lg font-bold text-black truncate block capitalize">Beef Biryani</p>
                      <div className="flex items-center">
                          <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 90000</p>
                          <del>
                              <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 99999</p>
                          </del>
                          
                      </div>
                  </div>
              </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"> 
              <a href="#">
                  <img src="drink.jpg"
                          alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                  <div className="px-4 py-3 w-72">
                      <span className="text-gray-400 mr-3 uppercase text-xs">Juice</span>
                      <p className="text-lg font-bold text-black truncate block capitalize">Watermelon Juice</p>
                      <div className="flex items-center">
                          <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 250</p>
                          <del>
                              <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 399</p>
                          </del>
                          
                      </div>
                  </div>
              </a>
          </div>
         
      
      </section>
      
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
        );
  }
  