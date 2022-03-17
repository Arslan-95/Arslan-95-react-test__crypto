import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    marginBottom: 20,
  },
  link: {
    marginRight: 10,
  },
};

function Header() {
  return (
    <header style={styles.header}>
      <Link style={styles.link} to="/">
        Home
      </Link>
      <Link style={styles.link} to="/orders">
        Orders
      </Link>
    </header>
  );
}

export default Header;
