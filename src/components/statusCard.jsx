function StatusCard() {
  return (
    <div
      style={{
        margin: 16,
        width: 260,
        height: 60,
        border: "2px solid #eee",
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
        <p style={{ fontSize: 16, fontWeight: "lighter" }}>Total Debtors</p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>5</p>
      </div>
    </div>
  );
}

export default StatusCard;
