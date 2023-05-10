"use client";

import Layout from "../../components/layout";

export default function HowItWorks() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <div className="text">
              <div className="title ">How does it work?</div>
              <br />
              <br />
              1. A crow submits a proposal for a digital asset they would like to share with others.
              <br />
              <br />
              2. Other crowz are invited to pool their resources to contribute to the purchase of the asset.
              <br />
              <br />
              3. Once the funding goal has been reached, the proposer crow purchases the asset, encrypts it and uploads
              it.
              <br />
              <br />
              4. Crowz who have pooled their resources can then access the shared asset.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
