import React from "react";
import Header from "~/components/Header";
import Image from "next/image";
import Footer from "~/components/Footer";

function About() {
  return (
    <div>
  <Header />
    <article className="h-full w-full max-w-screen-xl bg-red-700 p-8 text-white">
    <div className="flex flex-col md:flex-row items-center">
        <div className="relative h-full w-24 md:w-32 mr-4 border-2 border-gray-400">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400 to-gray-600"
            style={{ zIndex: -1 }}
          ></div>
          <Image
            src="/frank-headshot.png"
            alt="Frank"
            width={87}
            height={192}
            className="h-full w-full"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="mb-4 text-4xl font-extrabold">
            Nice to meet you!
          </h3>
          <h3 className="mb-8 text-2xl">
            Hello, I am Frank Farinacci, and here is a bit about myself:
          </h3>
        </div>
      </div>

      <ul className="list-disc space-y-2 pl-6">
        <li>
          Passionate about fitness, health, and strength training - it's my
          calling.
        </li>
        <li>
          Earned a personal training certificate from ECC. Knowledgeable on
          exercise science and anatomy.
        </li>
        <li>
          Won the New York Strongman Competition, demonstrating exceptional
          physical strength and mental fortitude.
        </li>
        <li>
          Refined coaching abilities training clients at the YMCA for 5
          years. Customized 100+ fitness plans.
        </li>
        <li>
          Ran a successful personal training business for 3 years. Helped
          clients see life-changing results through motivation and
          personalized programming.
        </li>
      </ul>
    </article>
   
  <Footer/>
</div>

  );
}

export default About;
