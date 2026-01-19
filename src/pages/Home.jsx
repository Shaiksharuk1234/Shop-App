import products from "../data/products";
import CategoryPreview from "../components/CategoryPreview";
import ShopCarousel from "../components/ShopCarousel";
import Stats from "../components/Stats";
import Features from "../components/Features";
import ExploreMore from "../components/ExploreMore";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            PVC Luxe <span style={styles.highlight}>Wall Design Studio</span>
          </h1>

          <h2 style={styles.tagline}>
            Premium Wall & Ceiling Interior Solutions
          </h2>

          <p style={styles.sub}>
            Transform your space with modern, durable, and stylish interior wall designs.
            We specialize in <b>WPC Louvers</b>, <b>PVC Panels</b>, <b>UV Marble Sheets</b>,
            <b>Ceiling Panels</b> and <b>PU Stones</b> with professional installation and
            long-lasting quality.
          </p>

          <ul style={styles.points}>
            <li>📍 Trusted interior solution provider</li>
            <li>📞 Affordable pricing</li>
            <li>🏠 Residential & Commercial projects</li>
          </ul>

          <div style={styles.ctaRow}>
            <a href="tel:8639088948" style={styles.ctaPrimary}>
              📞 Call Now
            </a>
            <a
              href="https://wa.me/8639088948"
              target="_blank"
              rel="noreferrer"
              style={styles.ctaSecondary}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <div style={styles.heroImageWrap}>
          <img
            src="/home/hero.jpeg"
            alt="PVC Luxe Interior Designs"
            style={styles.heroImg}
          />
        </div>
      </section>

      {/* ================= EXPLORE MORE (JUST BELOW HERO) ================= */}
      <ExploreMore />

      {/* ================= LIVE STATS ================= */}
      <Stats />

      {/* ================= FEATURES ================= */}
      <Features />

      {/* ================= CATEGORY CARDS (3 CARDS BLOCK) ================= */}
      <section style={styles.cards}>
  {products
    .filter((cat) => cat.slug !== "pvc-rafters") // ❌ hide from home
    .slice(0, 4) // ✅ ensure only 4 cards
    .map((cat) => (
      <CategoryPreview key={cat.id} category={cat} />
    ))}
</section>


      {/* ================= SHOP CAROUSEL (ABOVE FOOTER) ================= */}
      <ShopCarousel />
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  hero: {
    minHeight: "90vh",
    padding: "70px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "80px",
    background: "#ffffff",
    flexWrap: "wrap"
  },

  heroContent: {
    maxWidth: "560px"
  },

  heroImageWrap: {
    maxWidth: "520px",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },

  heroImg: {
    width: "100%",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
  },

  title: {
    fontSize: "42px",
    lineHeight: "1.2",
    marginBottom: "10px"
  },

  highlight: {
    color: "#d4af37"
  },

  tagline: {
    fontSize: "22px",
    marginBottom: "14px",
    color: "#222"
  },

  sub: {
    fontSize: "17px",
    lineHeight: "1.6",
    color: "#444"
  },

  points: {
    listStyle: "none",
    padding: 0,
    marginTop: "16px",
    lineHeight: "1.8",
    fontSize: "16px"
  },

  ctaRow: {
    marginTop: "24px",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap"
  },

  ctaPrimary: {
    padding: "12px 22px",
    background: "#d4af37",
    color: "#000",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold"
  },

  ctaSecondary: {
    padding: "12px 22px",
    border: "2px solid #d4af37",
    color: "#d4af37",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold"
  },

 cards: {
  padding: "50px 20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "24px",
  maxWidth: "1200px",
  margin: "auto"
}

};
