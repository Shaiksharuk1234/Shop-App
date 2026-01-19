import { Link } from "react-router-dom";

export default function CategoryPreview({ category }) {
  return (
    <div style={styles.card}>
      {/* IMAGE */}
      <div style={styles.imageWrap}>
        <img
          src={category.designs?.[0]}
          alt={category.name}
          style={styles.image}
        />
      </div>

      {/* TEXT */}
      <div style={styles.content}>
        <h3 style={styles.title}>{category.name}</h3>

        <Link
          to={`/products/${category.slug}`}
          style={styles.link}
        >
          View Designs →
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  imageWrap: {
    height: "180px", // 🔥 FIXED HEIGHT (THIS SOLVES YOUR ISSUE)
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },

  content: {
    padding: "14px",
    textAlign: "center",
  },

  title: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "6px",
  },

  link: {
    fontSize: "14px",
    color: "#d4af37",
    fontWeight: "600",
    textDecoration: "none",
  },
};
