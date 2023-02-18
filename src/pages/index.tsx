import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Speakers } from '@/components/Speakers'

export default function Home() {
  return (
    <>
      <Head>
        <title>DeceptiConf - A community-driven design conference</title>
        <meta name="description" content="DeceptiConf - A community-driven design conference" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
      </main>
    </>
  )
}
