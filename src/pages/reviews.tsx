
import React from 'react'
import Header from '~/components/Header'
import Footer from "~/components/Footer";

function reviews() {
  return (
    <div>
    <Header/>
  
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
  <div className="p-4 sm:p-8">
    {/* Content goes here */}
  </div>
  <section className="bg-gray-900 text-white py-16 w-full p-4">
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Client Reviews</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-red-700 p-8 rounded-lg shadow-lg">
          <p className="text-gray-100 mb-4">From Joy:</p>
          <p className="text-white">&quot;Frank is a fantastic trainer. He helps me reach my goals, and makes sure I am doing so at a good pace. He keeps my pace realistic and achievable, so I always feel motivated to keep going. I have made so many gains over the past few years with Frank, and I&rsquo;m excited to continue my fitness journey with him.&quot;</p>
        </div>

        <div className="bg-red-700 p-8 rounded-lg shadow-lg">
          <p className="text-gray-100 mb-4">From Rachel:</p>
          <p className="text-white">&quot;Frank is an excellent trainer. I came to him with very little experience and he has guided me to feeling confident in the gym and becoming progressively stronger. Frank is encouraging and patient. He has taught me how to lift safely with proper form and is flexible with my needs and goals. After 18 months Frank has helped me build strength that benefits my daily life and a desire to be consistent with working out for the first time ever.&quot;</p>
        </div>

        <div className="bg-red-600 p-8 rounded-lg shadow-lg">
          <p className="text-gray-100 mb-4">From Tyson:</p>
          <p className="text-white">&quot;Frank has helped me gain an insane amount with his program and I&rsquo;ve put on a crazy amount of muscle working with him. He pushes me to go beyond.&quot;</p>
        </div>

        <div className="bg-red-600 p-8 rounded-lg shadow-lg">
          <p className="text-gray-100 mb-4">From Jordan:</p>
          <p className="text-white">&quot;When I first met frank, I had no dietary knowledge, no weightlifting knowledge, and I would only bench press every day. Luckily (thanks to a great training plan) I was able to not only reach my goals, but pass them with flying colors. If you’re looking for an attentive and supportive trainer, FRANK’S YOUR GUY!!! &quot;</p>
        </div>


        </div>
      </div>
    </section>
    </div>
    <Footer/>
  </div>
  
  )
}

export default reviews