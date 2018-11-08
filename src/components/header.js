import React from 'react'
import { Link } from 'gatsby'

const Header = ({ title }) => (
  <header
    style={{
      background: 'rgba(0, 126, 167, 1)',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <h1 style={{ margin: 0, color: 'rgba(0, 23, 31, 1)' }}>
        {title}
      </h1>

      <div
        style={{
          alignSelf: 'flex-end',
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <h2 style={{ margin: 0, paddingRight: '1rem' }}>
          <Link
            to="/"
            style={{
              color: 'rgba(0, 52, 89, 1)',
              textDecoration: 'none',
            }}
          >
            Home
          </Link>
        </h2>
        <h2 style={{ margin: 0 }}>
          <Link
            to="/blog"
            style={{
              color: 'rgba(0, 52, 89, 1)',
              textDecoration: 'none',
            }}
          >
            Blog
          </Link>
        </h2>
      </div>
    </div>
  </header>
)

export default Header
