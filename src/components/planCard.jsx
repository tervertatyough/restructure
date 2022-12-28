function PlanCard() {
  return (
    <>
      <div
        style={{
          margin: 16,
          paddingRight: 32,
          maxWidth: 800,
          height: 100,
          border: "2px solid #eee",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            margin: 16,
            padding: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: "#c4c4c4",
              marginRight: 16,
            }}
          ></div>
          <div>
            <p style={{ fontSize: 16, fontWeight: "bold" }}>Ultra Bank</p>
            <p style={{ fontSize: 8, fontWeight: "lighter" }}>
              Due Date: 03-Sep-2022
            </p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 16, fontWeight: "bold" }}>N 200,000.20</p>
        </div>
        <div>
          <input class="button" type="button" value="View Restructure Plan" />
        </div>
      </div>
    </>
  );
}

export default PlanCard;
