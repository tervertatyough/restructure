function InfoCard() {
  return (
    <div
      style={{
        height: 120,
        width: 300,
        backgroundColor: "#009ddf",
        margin: 16,
        borderRadius: 10,
        padding: 32,
      }}
    >
      <div
        style={{
          height: 40,
          width: 40,
          backgroundColor: "#fff",
          borderRadius: 5,
        }}
      ></div>
      <div>
        <p style={{ color: "#fff" }}>
          How to make the best use of Restructure in 3 easy steps
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
