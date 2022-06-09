import { Box, Container, Typography } from "@mui/material";
import Canvas from "components/Canvas/canvas";
import Sun from "components/Canvas/sun";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={(styles.container, styles["sky"])}>
      <div className="h-screen">
        <Box pt={2} />
        <Typography variant="h3">Tanakorn Tampanya</Typography>
        <Typography variant="subtitle1" color="CaptionText" className="ml-2">
          I am ...
        </Typography>
        <div className="absolute bottom-0">
          {/* <Sun /> */}
          <Canvas />
        </div>
      </div>
      <Typography>asd</Typography>
    </div>
  );
};

export default Home;
