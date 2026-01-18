export default function Home() {
  return (
    <section style={styles.hero}>

      {/* TEXT */}
      <div>
        <h1 style={styles.title}>
          Interior <span style={styles.highlight}>Studio</span>
        </h1>

        <p style={{
          fontSize: "clamp(24px, 2vw, 20px)",
          color: "brown",
          marginTop: "15px",
          maxWidth: "600px"
        }}>
          Premium UV Marble Sheets, PVC Ceiling, Rafters, WPC Panels & Louvers
        </p>

        <p style={{
          fontSize: "clamp(24px, 1.5vw, 16px)",
          color: "black",
          marginTop: "10px"
        }}>
          Select a category from the menu above to explore our designs.
        </p>
      </div>

      {/* IMAGE */}
      {/* <img
        src="/home/hero.jpeg"
        alt="Interior Design"
        style={styles.image}
      /> */}

    </section>
  );
}

const styles = {
  hero: {
    minHeight: "70vh",
    background: "white",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
    padding: "60px 40px"
  },
  image: {
    width: "420px",
    maxWidth: "100%",
    borderRadius: "12px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
    marginRight: "80px"
  },
  title: {
    fontSize: "44px",
    marginBottom: "10px"
  },
  highlight: {
    color: "#d4af37"
  }
};

<a href="/all-designs" style={styles.cta}>
  View All Designs
</a>
