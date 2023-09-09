import React from 'react'
import Header from '~/components/Header'

function programs() {
  return (
    <div>
      <Header/>
      <h2>Programs</h2>
      <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row p-4 bg-gradient-to-r from-red-700 to-red-900">
  {/* Section 1 */}
  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300">
    <img src="your-image-url-1.jpg" alt="Image 1" className="w-full h-48 object-cover rounded-lg" />
    <p className="mt-4 text-gray-700 text-center md:text-left">Online Training: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="mt-4 text-center md:text-left">
    <div className="mt-4 text-center">
      <button className="py-1 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Learn More</button>
    </div>
    </div>
  </div>

  {/* Section 2 */}
  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300">
    <img src="your-image-url-1.jpg" alt="Image 1" className="w-full h-48 object-cover rounded-lg" />
    <p className="mt-4 text-gray-700 text-center md:text-left">1 on 1 Training: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="mt-4 text-center md:text-left">
    <div className="mt-4 text-center">
      <button className="py-1 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Learn More</button>
    </div>
    </div>
  </div>

  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300">
    <img src="your-image-url-1.jpg" alt="Image 1" className="w-full h-48 object-cover rounded-lg" />
    <p className="mt-4 text-gray-700 text-center md:text-left">Group Training: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="mt-4 text-center md:text-left">
    <div className="mt-4 text-center">
      <button className="py-1 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Learn More</button>
    </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default programs