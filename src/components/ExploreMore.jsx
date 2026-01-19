import { Link } from "react-router-dom";

export default function ExploreMore() {
  const items = [
    {
      title: "UV Marble Sheets Design Ideas",
      image: "/home/explore1.webp",
      slug: "uv-marble"
    },
    {
      title: "PVC Ceiling Panels – Types & Benefits",
      image: "/home/explore2.jpg",
      slug: "pvc-ceiling"
    },
    {
      title: "WPC Louvers for Modern Interiors",
      image: "/home/explore3.jpg",
      slug: "pvc-louvers"
    }
  ];

  return (
    <section style={styles.wrap}>
      <h2 style={styles.heading}>
        Explore More About Our Products
      </h2>

      <div style={styles.grid}>
        {items.map((item, i) => (
          <div key={i} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.img} />

            <div style={styles.overlay}>
              <p style={styles.title}>{item.title}</p>

              {/* ✅ LINK TO PRODUCTS */}
              <Link to={`/category/${item.slug}`} style={styles.btn}>
                View More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  wrap: {
    padding: "80px 20px",
    background:"#e0e0e0"
  },

  heading: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "40px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "auto"
  },

  card: {
    position: "relative",
    borderRadius: "14px",
    overflow: "hidden"
  },

  img: {
    width: "100%",
    height: "260px",
    objectFit: "cover"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "20px"
  },

  title: {
    fontSize: "18px",
    fontWeight: "600"
  },

  btn: {
    marginTop: "10px",
    display: "inline-block",
    width: "fit-content",
    background: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "20px",
    textDecoration: "none",
    fontSize: "14px"
  }
};
