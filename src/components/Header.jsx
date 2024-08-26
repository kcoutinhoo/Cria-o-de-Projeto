import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Entre em contato</h1>
    </header>
  );
}

const styles = {
  header: {
    padding: '20px',
    textAlign: 'left', 
    color: '#fff',
  },
};

export default Header;
