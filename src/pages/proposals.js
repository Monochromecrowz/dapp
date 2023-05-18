"use client";

import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { getAllProposals } from "../shared/backend";

export default function Proposals() {
  const [proposals, setProposals] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);

  useEffect(() => {
    getAllProposals().then((proposals) => {
      setProposals(proposals);
    });
  }, []);

  useEffect(() => {
    if (proposals.length > 0) {
      setSelectedProposal(proposals[0]);
    }
  }, [proposals]);

  return (
    <Layout>
      <div className="row h-100">
        <div className="col-auto main-border-right main-menu">
          {proposals.map((proposal) => (
            <>
              <div
                key={proposal.id}
                className={`text button ${selectedProposal && selectedProposal.id === proposal.id ? "selected" : ""}`}
                id={proposal.id}
                onClick={() => {
                  setSelectedProposal(proposal);
                }}
              >
                {proposal.title}
              </div>
            </>
          ))}
        </div>
        <div className="col-auto main-border-right-dashed main-menu column">
          <div className="text">
            <b>Crow Lead</b>:
          </div>
          <div className="text">{selectedProposal?.lead}</div>
          <div className="small-separator" />
          <div className="text">
            <b>Target</b>:
          </div>
          <div className="text">{selectedProposal?.goal} USD</div>
          <div className="small-separator" />
          <div className="text">
            <b>Minimum Contribution</b>:
          </div>
          <div className="text">{selectedProposal?.minimumContribution} USD</div>
          <div className="small-separator" />
          {/* <div className="text">
              <b>Link</b>:
            </div>
            <div className="text">{selectedProposal?.link}</div>
            <div className="small-separator" />
            <button>
              <u>&lt;contribute&gt;</u>
            </button> */}
        </div>
        <div className="col">
          <div className="text-with-breaks">{selectedProposal?.description}</div>
        </div>
      </div>
    </Layout>
  );
}
