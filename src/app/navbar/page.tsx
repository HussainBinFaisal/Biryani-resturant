import React from "react";
import Link from "next/link";

const Navbar = () => {
  // return (
  //   <div className="text-2xl flex-auto text-blue-700 text-center font-bold">
  //     <nav className="bg-slate-800 ">
  //       <ul className="flex justify-evenly text-xl p-4 border-y-2-blue-700 border-x-2">
  //         <li>
  //           <Link className="hover:text-2xl hover:text-white hover:bg-blue-700" href="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link className="hover:text-2xl  hover:text-white hover:bg-blue-700" href="./about">About</Link>
  //         </li>
  //         <li>
  //           <Link className="hover:text-2xl  hover:text-white hover:bg-blue-700" href="./contact">Contact</Link>
  //         </li> 
  //       </ul>
  //     </nav>
  //   </div>
 return( 
<div>
<nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
    <a className="font-bold text-xl tracking-tight" href="/about">Biryani 🍚🍗</a>
    <div className="flex items-center">
        <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/dishes">Dishes</a>
        <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/about">About</a>
        <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/contact">Contact</a>
    </div>
</nav>
</div>
 );


};

export default Navbar;
