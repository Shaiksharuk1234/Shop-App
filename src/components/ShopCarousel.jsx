import { useState } from "react";

const images = [
  "/home/image.png",
  "/home/Corosel-4.png"
];

export default function ShopCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
  <section style={styles.section}>
    <div style={styles.carousel}>
      <img src={images[index]} alt="Shop" style={styles.image} />

      <button onClick={prev} style={{ ...styles.arrow, left: "10px" }}>‹</button>
      <button onClick={next} style={{ ...styles.arrow, right: "10px" }}>›</button>
    </div>

    <div style={styles.text}>
      <h2>More About Us</h2>
      <p>
        PVC LUXE Wall Design Studio delivers premium interior solutions
        with modern designs, expert installation, and trusted quality.
      </p>
    </div>
  </section>
);

}

const styles = {
  section: {
    padding: "50px 16px",
    textAlign: "center",
    background: "#e0e0e0",
  },

  carousel: {
    maxWidth: "900px",
    margin: "0 auto",
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)"
  },

  image: {
    width: "100%",
    height: "340px",          // ✅ REDUCED HEIGHT
    objectFit: "cover"
  },

  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.55)",
    color: "#fff",
    border: "none",
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    fontSize: "26px",
    cursor: "pointer"
  },

  text: {
    marginTop: "22px",
    maxWidth: "680px",
    marginInline: "auto",
    color: "#444",
    lineHeight: "1.6"
  },

  heading: {
    marginBottom: "8px",
    fontSize: "22px"
  }
};
