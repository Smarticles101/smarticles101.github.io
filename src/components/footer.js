import React from 'react'

import { SocialIcon } from 'react-social-icons';

const year = "2018";

const Footer = () => {
  let currentYear = new Date().getFullYear().toString();

  return (
    <footer style={{
      backgroundColor: 'rgba(0, 23, 31, 1)',
      color: 'rgba(0, 168, 232, 1)'
    }}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <SocialIcon 
            style={{
              maxWidth: '1.75rem',
              maxHeight: '1.75rem',
              margin: '.25rem',
            }}
            url={"https://github.com/Smarticles101"}
          />
          <SocialIcon 
            style={{
              maxWidth: '1.75rem',
              maxHeight: '1.75rem',
              margin: '.25rem',
            }}
            url={"https://www.linkedin.com/in/loganstucki/"}
          />
          <SocialIcon 
            style={{
              maxWidth: '1.75rem',
              maxHeight: '1.75rem',
              margin: '.25rem',
            }}
            url={"https://twitter.com/Smarticles101"}
          />
          <SocialIcon 
            style={{
              maxWidth: '1.75rem',
              maxHeight: '1.75rem',
              margin: '.25rem',
            }}
            url={"mailto:loganstucki@gmail.com"}
          />
        </div>

        <div>
          &copy; Logan Stucki {year + (currentYear !== year ? " - " + currentYear : "")}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
