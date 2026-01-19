export default function Features() {
  const features = [
    "Waterproof & Moisture Resistant",
    "Termite & Fungal Resistant",
    "Easy & Fast Installation",
    "Low Maintenance & Lightweight",
  ];

  return (
    <section style={styles.wrap}>
      <h2 style={styles.heading}>
        Why Choose Our Interior Products?
      </h2>

      <div style={styles.grid}>
        {features.map((item, i) => (
          <div key={i} style={styles.card}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  wrap: {
    padding: "70px 20px",
    background: "#f7f2ea",
    textAlign: "center"
  },
  heading: {
    fontSize: "32px",
    marginBottom: "40px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    maxWidth: "1100px",
    margin: "auto"
  },
  card: {
    padding: "25px",
    background: "#fff",
    borderRadius: "12px",
    fontSize: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
  }
};
