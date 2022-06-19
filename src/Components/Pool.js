import React from "react";

function Pool() {
  let candidate = [
    {
      partyIcon: "faAmazon",
      candidateName: "amazon",
      votes:100
    },
    {
      partyIcon: "faBaby",
      candidateName: "baby",
      votes:50
    },
    {
      partyIcon: "faCak",
      candidateName: "cake",
      votes:25
    },
  ];
  let maxVotes=candidate[0].votes*2;
//   var total=200
  return (
    <div className="container">
    
      {    
        candidate.map(obj=><div className="pool mt-4">
            
            {/* <label for={obj.id} className="form-label"> */}
            <p>{obj.candidateName} votes:{obj.votes}</p>
            {/* </label> */}
            <input type="range" className="mb-2 " id="obj.id" max={maxVotes} min={0} value={obj.votes} />
            </div>
        )
      }
    </div>
  );
}

export default Pool;
