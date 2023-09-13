import Head from "next/head";
import Header from "~/components/Header";
import bgImage from "../../public/frank-gym.jpg";

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
              <p className="text-3xl font-bold text-red-600 md:text-3xl">
                Online, group or 1 on 1 training
              </p>
              <p className="text-lg text-white md:text-xl">
                The number one Personal Training Studio in Depew, helping men
                and women to get in the best shape of their lives and achieving
                your body and strength goals
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-screen items-center justify-center bg-red-900">
          <article className="h-full w-full max-w-screen-xl bg-red-700 p-8 text-white">
            <h3 className="text-4xl font-extrabold">LEARN HOW TO BE MORE</h3>
            <p>
              Its about drive its about power we stay hunger we devour put in
              the work put in the hours and TAKE WHATS OURS
            </p>
          </article>
        </div>
        <div className="flex h-screen flex-col items-center justify-start">
          <article className="max-w-screen-xl p-8 text-center">
            <h3 className="text-4xl font-extrabold">
              IT IS TIME TO PUT YOURSELF FIRST
            </h3>
            <p>
              We work with men and women that have let fitness slide down their
              list of priorities, and want to make a change
            </p>
            <button className="red-700 rounded-full px-8 py-2 ">
              Try Us Out
            </button>
          </article>
        </div>
        
      </main>
    </>
  );
}
