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

      <header className="flex items-center justify-between p-4 px-24 border-16 border-red-500">
        <span className="flex items-center">
        <Image
          src="/FarinacciFitnessLogo.jpg"
          alt=""
          width={128}
          height={128}
          className=""
        />
        <h2>Farinacci Fitness</h2>
         </span>

        <nav className="text-lg">
          <a href="#" className="p-2 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="p-2 hover:text-blue-500">
            About
          </a>
          <a href="#" className="p-2 hover:text-blue-500">
            Programs
          </a>
          <a href="#" className="p-2 hover:text-blue-500">
            Success Stories
          </a>
          <a href="#" className="p-2 hover:text-blue-500">
            Contact
          </a>
          <a href="#" className="p-2 hover:text-blue-500">
            Blog
          </a>
        </nav>
      </header>
      <main>
      <div>
      <div className="relative bg-cover h-96" style={{backgroundImage: `url(${bgImage.src})`}}>
     
      </div>
    </div>


      </main>
     
    </>
  );
}
