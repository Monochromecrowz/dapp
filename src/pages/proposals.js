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
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-3 main-border-right">
            {proposals.map((proposal) => (
              <>
                <div
                  key={proposal.id}
                  className={`text button ${
                    selectedProposal && selectedProposal.id === proposal.id ? "selected bold" : ""
                  }`}
                  id={proposal.id}
                  onClick={() => {
                    setSelectedProposal(proposal);
                  }}
                >
                  {proposal.title}
                </div>
                <div className="bordered-separator" />
              </>
            ))}
          </div>
          <div className="col-3 main-border-right">
            <div className="text">
              <b>Title</b>:
            </div>
            <div className="text">{selectedProposal?.title}</div>
            <div className="small-separator" />
            <div className="text">
              <b>Collected</b>:
            </div>
            <div className="text">
              {selectedProposal?.collected} / {selectedProposal?.goal} USD
            </div>
            <div className="small-separator" />
            <div className="text">
              <b>Minimum Contribution</b>:
            </div>
            <div className="text">{selectedProposal?.minimumContribution} USD</div>
            <div className="small-separator" />
            <div className="text">
              <b>Link</b>:
            </div>
            <div className="text">{selectedProposal?.link}</div>
            <div className="small-separator" />
            <button>
              <u>&lt;contribute&gt;</u>
            </button>
          </div>
          <div className="col-6 main-border-right">
            <div className="text-with-breaks">
                {selectedProposal?.description}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
