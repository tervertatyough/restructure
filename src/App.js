import "./styles/login.css";
import InfoCard from "./components/infoCard";
import PlanCard from "./components/planCard";
import StatusCard from "./components/statusCard";
import CreditScoreCard from "./components/creditScoreCard";
import RepaymentCard from "./components/repaymentCard";
import TransactionTable from "./components/transactionTable";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <InfoCard color="#009ddf" />
        <InfoCard color="red" />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </div>

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}
      >
        <div style={{ flexGrow: 3 }}>
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
        <div style={{ flexGrow: 1 }}>
          <CreditScoreCard />
        </div>
      </div>
      <RepaymentCard />
      {/* <TransactionTable /> */}
    </>
  );
}

export default App;
