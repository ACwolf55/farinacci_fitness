import React from 'react'
import Header from '~/components/Header'

function About() {
  return (
    <div>
      <Header/>
      <div className="flex justify-center items-center h-screen bg-red-900">
  <article className="w-full h-full max-w-screen-xl p-8 bg-red-700 text-white">
  <h3 className="font-extrabold text-4xl mb-4">Nice to meet you!</h3>
<h3 className="text-2xl mb-8">Hello, Im Frank Farinacci, and heres a bit about myself:</h3>




  <ul className=" list-disc pl-6 space-y-2">
  <li> Passionate about fitness, health, and strength training - its my calling.</li>
  <li> Earned a personal training certificate from ECC. Knowledgeable on exercise science and anatomy.</li>
  <li> Won the New York Strongman Competition, demonstrating exceptional physical strength and mental fortitude.</li>
  <li> Refined coaching abilities training clients at the YMCA for 5 years. Customized 100+ fitness plans.</li>
  <li> Ran a successful personal training business for 3 years. Helped clients see life-changing results through motivation and personalized programming.</li>
</ul>   


  </article>
</div>
    </div>
  )
}

export default About