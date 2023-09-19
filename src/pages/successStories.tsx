
import React from 'react'
import Header from '~/components/Header'
import Footer from "~/components/Footer";

function successStories() {
  return (
    <div>
    <Header/>
  
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 p-4 sm:p-8">
      <h2 className="bg-yellow-500 text-white p-2 rounded-full text-2xl">
        <span className="text-2xl mr-2">&#9888;</span> PAGE UNDER CONSTRUCTION &#9888;
      </h2>
      <h2 className="text-2xl mt-8 mb-8 sm:mb-4">Success Stories (and Reviews)</h2>
      <ul className="space-y-2">
        {/* <li>Tyson</li>
        <li>Sherrief?</li>
        <li>Crowe?</li>
        <li>(other client here)</li>
        <li>(other client here)</li>
        <li>(other client here)</li> */}
      </ul>
    </div>
    <Footer/>
  </div>
  
  )
}

export default successStories