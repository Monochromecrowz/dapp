"use client";

import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import Crowz from "./crowz";
import NavBar from "./navbar";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>🪺 CROWZ</title>
      </Head>
      <div className="wrapper">
        <div className="container-fluid h-100 d-flex flex-column">
          <div className="row h-100">
            <div className="col-auto main-border-right main-border-left main-menu" style={{display: "flex"}}>
              <NavBar />
            </div>
            <div className="col">{children}</div>
          </div>
        </div>
        <Crowz />
      </div>
    </>
  );
}
