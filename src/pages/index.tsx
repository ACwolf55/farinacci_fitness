import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import bgImage from '../../public/frank-gym.jpg';
<div className="relative bg-cover h-96" style={{backgroundImage: `url(${bgImage.src})`}}>

</div>

import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Farnacci Fitness</title>
        <meta
          name="description"
          content="Online and in-person personal training"
        />
        <link rel="icon" href="/FarinacciFitnessLogo.jpg" />
      </Head>

      <header className="px-4 md:px-24 py-4 md:flex md:items-center md:justify-between">
      <div className="flex items-center">
        <Image
          src="/FarinacciFitnessLogo.jpg"
          alt="Farinacci Fitness Logo"
          width={128}
          height={128}
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <h2 className="text-2xl md:text-3xl ml-2">Farinacci Fitness</h2>
      </div>

      <nav className="mt-4 md:mt-0 text-lg">
        <a href="#" className="block mt-2 md:inline-block md:mt-0 md:ml-4 hover:text-blue-500">
          Home
        </a>
        <a href="#" className="block mt-2 md:inline-block md:mt-0 md:ml-4 hover:text-blue-500">
          About
        </a>
        <a href="#" className="block mt-2 md:inline-block md:mt-0 md:ml-4 hover:text-blue-500">
          Programs
        </a>
        <a href="#" className="block mt-2 md:inline-block md:mt-0 md:ml-4 hover:text-blue-500">
          Success Stories
        </a>
        <a href="#" className="block mt-2 md:inline-block md:mt-0 md:ml-4 hover:text-blue-500">
          Contact
        </a>
        <a href="#" className="block mt-2 md:inline-block md:mt-0 md:ml-4 hover:text-blue-500">
          Blog
        </a>
      </nav>
    </header>
      <main>
      <div>
      <div className="bg-cover h-64 md:h-96" style={{backgroundImage: `url(${bgImage.src})`}}>
     
      </div>
    </div>
  
    <div className="flex justify-center items-center h-screen bg-red-900">
  <article className="w-full h-full max-w-screen-xl p-8 bg-red-700 text-white">
      <h3 className="font-extrabold text-4xl">LEARN HOW TO BE MORE</h3>
      <p>Its about drive its about power we stay hunger we devour put in the work put in the hours and TAKE WHATS OURS</p>
  
  </article>
</div>



      </main>
     
    </>
  );
}
