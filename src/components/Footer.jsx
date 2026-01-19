export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* BRAND */}
        <div style={styles.section}>
          <h2 style={styles.brand}>PVC LUXE</h2>
          <p style={styles.subtitle}>Wall Design Studio</p>
          <p style={styles.text}>
            Premium interior wall & ceiling solutions with modern designs,
            quality materials, and professional installation.
          </p>
        </div>

        {/* SERVICES */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Our Services</h3>
          <ul style={styles.list}>
            <li>UV Marble Sheets</li>
            <li>PVC Ceiling Panels</li>
            <li>WPC / PVC Louvers</li>
            <li>Fluted Panels</li>
            <li>PU Stones</li>
            <li>Wall Panels</li>
            <li>Commercial Interiors</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}>📞 086390 88948</p>
          <p style={styles.text}>📞 95425 51526</p>
          <p style={styles.text}>
            📍 Raichur to Kurnool X Road, Aiza, Telangana – 509127
          </p>
        </div>

        {/* GOOGLE MAP */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Find Us</h3>

          <iframe
            title="PVC Luxe Wall Design Studio Location"
            src="https://www.google.com/maps?q=PVC+LUXE+Wall+Design+Studio+Aiza+Telangana&output=embed"
            style={styles.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottom}>
        <p>
          © {new Date().getFullYear()} PVC LUXE Wall Design Studio |
          Managing Director: Shaik Azeez Basha
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#111",
    color: "#fff",
    marginTop: "80px"
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "30px",
    padding: "50px 40px"
  },

  section: {
    lineHeight: "1.7"
  },

  brand: {
    fontSize: "26px",
    marginBottom: "6px",
    color: "#d4af37"
  },

  subtitle: {
    fontSize: "14px",
    marginBottom: "12px",
    color: "#aaa"
  },

  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    borderBottom: "2px solid #d4af37",
    display: "inline-block",
    paddingBottom: "5px"
  },

  text: {
    fontSize: "14px",
    color: "#ccc"
  },

  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "14px",
    color: "#ccc"
  },

  map: {
    width: "100%",
    height: "200px",
    border: "0",
    borderRadius: "10px"
  },

  bottom: {
    background: "#000",
    textAlign: "center",
    padding: "14px",
    fontSize: "13px",
    color: "#aaa"
  }
};
