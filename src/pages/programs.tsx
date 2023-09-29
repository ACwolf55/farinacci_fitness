import React from 'react'
import Header from '~/components/Header'
import Footer from "~/components/Footer";

function programs() {
  return (
    <div>
      <Header/>
      <h2></h2>
      <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row p-4 bg-gradient-to-r from-red-700 to-red-900 h-full p-8 ">
  {/* Section 1 */}
  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300">
    <img src="/tyson_progress.png" alt="Image 1" className="w-full h-48 object-cover rounded-lg" />
    <div className="text-center md:text-left">
      <h3 className="text-xl font-semibold">Online Personal Training</h3>
      <p className="mt-4 text-gray-700">
        Guided personal program with follow-up for every workout
      </p>
      <div className="mt-4 text-center md:text-left">
        {/* <button className="py-1 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Learn More</button> */}
      </div>
    </div>
  </div>

  {/* Section 2 */}
  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300">
    <img src="/tires.png" alt="Image 2" className="w-full h-48 object-cover rounded-lg" />
    <div className="text-center md:text-left">
      <h3 className="text-xl font-semibold">Strength Building Program</h3>
      <p className="mt-4 text-gray-700">
        Focusing on Compound Lifts and form for strength building
      </p>
      <div className="mt-4 text-center md:text-left">
        {/* <button className="py-1 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Learn More</button> */}
      </div>
    </div>
  </div>

  {/* Section 3 */}
  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300">
    <img src="/frank_squat_spot.png" alt="Image 3" className="w-full h-48 object-cover rounded-lg" />
    <div className="text-center md:text-left">
      <h3 className="text-xl font-semibold">Power Build Program</h3>
      <p className="mt-4 text-gray-700">
       Gain muscle size, definition and power
      </p>
      <div className="mt-4 text-center md:text-left">
        {/* <button className="py-1 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Learn More</button> */}
      </div>
    </div>
  </div>
</div>

<Footer/>
    </div>
  )
}

export default programs