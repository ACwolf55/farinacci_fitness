import { type AppType } from "next/app";
import Head from "next/head";
import {Anek_Malayalam} from '@next/font/google'

import { api } from "~/utils/api";

import "~/styles/globals.css";
const anek = Anek_Malayalam({
  subsets: ['latin'],
  weight:'700',
  variable:'--font-anek'
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
    <>
     <Head>
        <title>Farnacci Fitness</title>
        <meta
          name="description"
          content="Online and in-person personal training"
        />
        <link rel="icon" href="/FarinacciFitnessLogo.jpg" />
        
      </Head>
    <main className={`${anek.variable} font-sans`}>
    <Component {...pageProps} />
    </main>
    </>
  )
};


export default api.withTRPC(MyApp);
