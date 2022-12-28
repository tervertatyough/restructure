import Pie from "./pie";

function CreditScoreCard() {
  return (
    <div
      style={{
        width: 320,
        height: 360,
        border: "2px solid #eee",
        borderRadius: 5,
        padding: "16px 32px",
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: 16 }}>Credit Score</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <p>Low Credit Score</p>
        <p>High Credit Score</p>
      </div>
      <div style={{ width: 200, height: 200, margin: "16px auto" }}>
        <Pie percentage={30} colour="green" />
      </div>
      <p style={{ textAlign: "center" }}>Learn More about credit scores</p>
    </div>
  );
}

export default CreditScoreCard;
