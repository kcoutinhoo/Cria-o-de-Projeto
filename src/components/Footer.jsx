import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 | CREATORLOG Express</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'left',
    padding: '10px',
    color: '#fff',
  },
};

export default Footer;
