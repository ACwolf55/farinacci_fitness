import Head from "next/head";
import Header from "~/components/Header";
import bgImage from "../../public/frank-gym.jpg";
import VideoFeed from "~/components/VideoFeed";
import { videoData } from "~/videoData";
import Link from "next/link";
import Footer from "~/components/Footer";

import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Header />
      <main>
        <div>
          <div
            className="flex h-64 items-center justify-end bg-cover p-8 md:h-96"
            style={{ backgroundImage: `url(${bgImage.src})` }}
          >
            <div className="font-oswald w-full text-left md:w-1/2">
              <h2 className="text-4xl font-bold text-red-600 md:text-5xl xl:text-6xl">
                Online,
                Group,
              </h2>
              
              <h2 className="text-4xl font-bold text-red-600 md:text-5xl xl:text-6xl">
               & 1 on 1
              </h2>
              <h2 className="text-4xl font-bold text-red-600 md:text-5xl xl:text-6xl">
               Personal Training
              </h2>
              <br/>
              <p className="text-lg text-white md:text-xl xl:text-2xl">
                Located in Lockport ~ Helping men and women become the
                strongest version of themselves&#128170;
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <article className="h-[30vh] w-full bg-red-700 p-8 text-white">
            <h3 className="text-4xl font-extrabold">LEARN HOW TO BE MORE</h3>
            <p>
              Its about drive its about power we stay hunger we devour put in
              the work put in the hours and TAKE WHATS OURS
            </p>
          </article>
        </div>

        <div className="flex h-screen items-center justify-center">
          <article className="flex h-full w-full p-4  bg-red-700 p-8 text-white">
            <div className="flex overflow-x-auto">
              {videoData.map((item, index) => (
                <VideoFeed
                  key={index}
                  description={item.description}
                  embedCode={item.src}
                />
              ))}
            </div>
          </article>
        </div>

        <div className="flex h-screen flex-col items-center justify-start">
          <article className="max-w-screen-xl p-8 text-center">
            <h3 className="text-4xl font-extrabold">
              IT IS TIME TO PUT YOURSELF FIRST
            </h3>
            <p className="mb-4"></p>

            <Link href="/contact">
              <button className="rounded-full bg-red-700 px-8 py-2 text-white transition duration-300 ease-in-out hover:bg-red-800">
                Try Us Out
              </button>
            </Link>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
