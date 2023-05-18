"use client";

import Layout from "../../components/layout";
import Image from "next/image";
import Chart from "../../assets/donut-chart.svg";

export default function PoE() {
  return (
    <Layout>
      <div className="no-left-margins">
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
              leads to an increase in the token's value over time.
            </div>
          </div>
        
        </div>
      </div>
    </Layout>
  );
}
