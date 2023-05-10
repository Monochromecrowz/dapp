"use client";

import Layout from "../../components/layout";
import Image from "next/image";
import Chart from "../../assets/donut-chart.svg";

export default function PoE() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="text">
              CRZ is a truly deflationary token, which means that its total supply is constantly decreasing over time.
              <br />
              <br />
              Once the target amount to acquire the asset has been met, the accumulated funds from the members'
              contributions are employed to repurchase CRZ tokens from the market to then burn them.
              <br />
              <br />
              This process of buying and burning CRZ tokens has the effect of creating a constant buy pressure on the
              token. As more assets are purchased through the protocol and more funds are collected, more CRZ tokens
              will be bought back and burned, thereby reducing the total supply of CRZ tokens in circulation.
              <br />
              <br />
              This reduction in supply, coupled with the constant demand for the token due to its use in the platform,
              leads to an increase in the token's value over time. Crowz uses a novel consensus algorithm called
              proof-of-encryption. Anybody who has participated in a proposal can encrypt the access message for
              newcomers. As a reward, they earn 5% of the collected funds for encrypting the message.
              <br />
              <br />
              The outcome of this innovative approach is a truly decentralized ecosystem, which functions autonomously
              and does not rely on centralized servers or a single originator to sustain its operation.
            </div>
          </div>
          <div className="col-4">
            <Image src={Chart} alt="CROWZ" width="400" height="400" />
            <div className="text" style={{ textAlign: "center" }}>
              Team: 12%
              <br />
              Strategic: 12%
              <br />
              Treasury: 16%
              <br />
              Liquidity: 60%
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </Layout>
  );
}
