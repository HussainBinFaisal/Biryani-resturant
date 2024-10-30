import React from 'react';

export default function Home() {
      return (
     <div>   
        <div className="relative h-screen w-full">
    <img src="bg1.png"  className="absolute inset-0 w-full h-full object-cover "></img>
    <div className="absolute inset-0 bg-black bg-opacity-10">
   
    
        
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <h1 className="text-5xl font-bold text-amber-400 mb-8">Thanks For Visiting Our Resturant</h1>
          <div className="text-center">
            <p className="text-lg text-amber-400 mb-4">
              I'm <strong>Chef Hussain Faisal</strong>,Had alot of experence in the field of cooking i hope u wil enjoy our food!
            </p>
            <a href="/about" className="bg-blue-500 hover:bg-blue-700 text-amber-400 font-bold py-2 px-4 rounded">
              Lets move around
            </a>
          
          </div>
          </div>
          </div>
       
       
       
       
       </div> 
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
</footer></div>
      );
    };
    
