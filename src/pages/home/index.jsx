import React from "react"
import Head from "next/head"
import { getServerSideProps } from "./home.server"
import { Divider, Grid, Typography } from "@mui/material"
import Image from "next/image"
import Mockup from "../../../public/images/icons/mockup.png"
import Linkdien from "@local/assets/images/icons/linkdien.svg"
import Github from "@local/assets/images/icons/github.svg"
import { useHomeController } from "./home.controller"

function Home() {
  const { techStackList } = useHomeController()
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Grid
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ height: "90vh" }}>
        <Grid container spacing={6} xs={12} md={6} justifyContent="center" alignItems="center">
          <Grid item>
            <Grid item>
              <Typography variant="h3" component="div">
                Front-End React
                <br />
                Developer
              </Typography>
            </Grid>
            <Grid item pt={2}>
              <Typography variant="h6">
                Hi, I am Umesh Yadav .A passionate Front-end React and
                <br />
                Next Developer based in Varanasi India
              </Typography>
            </Grid>
            <Grid container spacing={2} py={2} alignItems="center">
              <Grid item>
                {" "}
                <Image src={Linkdien} width={30} height={30} alt="img" />
              </Grid>
              <Grid item>
                {" "}
                <Image src={Github} width={25} height={25} alt="img" />
              </Grid>
            </Grid>
            <Grid container pt={15}>
              <Grid item pr={2}>
                <Typography>Tech Stack</Typography>
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                style={{ width: "1px ", background: "black", height: "25px" }}
              />
              <Grid item>
                <Grid container spacing={4} pl={4}>
                  {techStackList.map((item, index) => (
                    <Grid item key={index}>
                      <Image src={item.src} width={30} height={30} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Image src={Mockup} width={100} height={100} alt="img" />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Home

export { getServerSideProps }
