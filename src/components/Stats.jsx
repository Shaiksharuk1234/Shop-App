import { useEffect, useState } from "react";

export default function Stats() {
  const stats = [
    { label: "Architects’ Choice", value: 27902, suffix: " +" },
    { label: "Dealers’ Network", value: 54967, suffix: " +" },
    { label: "States", value: 21, suffix: " +" },
    { label: "Distributors Pan India", value: 143, suffix: " +" },
    { label: "Sheets Sold", value: 85, suffix: " Million +" }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {stats.map((item, i) => (
          <LiveCounter key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

function LiveCounter({ item }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = item.value;
    const duration = 1800; // total animation time (ms)
    const increment = Math.max(1, Math.floor(end / 90));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 90);

    return () => clearInterval(timer);
  }, [item.value]);

  return (
    <div style={styles.card}>
      <h2 style={styles.value}>
        {count.toLocaleString()}
        {item.suffix}
      </h2>
      <p style={styles.label}>{item.label}</p>
    </div>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    background: "#f7f7f7"
  },

  grid: {
    maxWidth: "1100px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "28px",
    textAlign: "center"
  },

  card: {
    padding: "12px"
  },

  value: {
    fontSize: "30px", // 👈 medium size
    fontWeight: "700",
    color: "#d4af37",
    marginBottom: "6px"
  },

  label: {
    fontSize: "14px",
    color: "#444"
  }
};
