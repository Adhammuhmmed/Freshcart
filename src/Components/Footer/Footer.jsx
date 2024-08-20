import React from "react";
import logo1 from '../../assets/images/amzon-pay.png'
import logo2 from '../../assets/images/master-card.png'
import logo3 from '../../assets/images/visa.png'
import logo4 from '../../assets/images/payPalpng.png'
import logo5 from '../../assets/images/playstore.png'
import logo6 from '../../assets/images/appstore.png'

export default function Footer() {
  return (
<>
    <div className="footer ">
        <div className="container mx-auto p-10">
        <h1 className="text-xl text-gray-800">Get The Freshcart App</h1>
        <p className="text-gray-600 text-sm">We will send you a link, open it on your phone to download the app.</p>

<div className="px-10">
<div className="relative z-0  w-full md:w-1/2 mb-5 mt-5 group">
                      <input  type="email" name="email" id="email" className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
                      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email...</label>
                  </div>
              <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                 Share App Link
                     </button>
</div>

        <div className="paymen-logo flex  justify-between  px-5">
    <div className="left flex items-center p-5">
      <h2 className="text-gray-800 font-semibold">Payment Partners</h2>
      <div className="logo flex px-3">
        <span className="mx-1"><img className="md:w-[40px]" src={logo1} alt="" /></span>
        <span className="mx-1"><img className="md:w-[40px]" src={logo4} alt="" /></span>
        <span className="mx-1"><img className="md:w-[40px]" src={logo3} alt="" /></span>
        <span className="mx-1"><img className="md:w-[40px]" src={logo2} alt="" /></span>
      </div>
    </div>

    <div className="right flex items-center p-5">
      <h2 className="text-gray-800 font-semibold">Payment Partners</h2>
      <div className="logo flex px-3">
        <span className="mx-1"><img className="w-[60px]" src={logo5} alt="" /></span>
        <span className="mx-1"><img className="w-[60px]" src={logo6} alt="" /></span>

      </div>
    </div>
        </div>
        </div>
    </div>
</>
  )

}
