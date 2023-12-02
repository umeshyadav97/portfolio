import React from "react"
import Head from "next/head"
import Banner from "@local/components/banner"
import { getServerSideProps } from "./home.server"

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>

      <Banner></Banner>
    </React.Fragment>
  )
}

export default Home

export { getServerSideProps }
