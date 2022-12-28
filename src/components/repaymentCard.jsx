function RepaymentCard() {
  return (
    <div
      style={{
        maxWidth: 400,
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
        </div>
      </div>
      <div>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>N 200,000.20</p>
      </div>
    </div>
  );
}

export default RepaymentCard;
