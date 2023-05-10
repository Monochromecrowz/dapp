"use client";

import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import Crowz from "./crowz";
import NavBar from "./navbar";
import Image from "next/image";
import Logo from "../assets/crowz_logo.png";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>🪺 CROWZ</title>
      </Head>
      <div className="wrapper">
        <div className="container-fluid h-100 d-flex flex-column overflow-y">
          <div className="row h-100">
            <div className="col-auto main-border-right">
              <NavBar />
            </div>
            <div className="col main-border-right">{children}</div>
          </div>
          <div className="row flex-grow-1">
            <div className="col-md-2">
              <Image src={Logo} responsive="true" alt="CROWZ" align-items="center" style={{ marginTop: "auto" }} />
            </div>
            <div className="col-md-10"></div>
          </div>
        </div>
        <Crowz />
      </div>
    </>
  );
}
