import React from 'react';
import { FaFacebook, FaGooglePlus, FaGooglePlay, FaTwitter, FaYoutube, FaInstagram, FaBandcamp, FaSpotify, FaItunes } from 'react-icons/fa';

const Footer = ({ background, socialColour, links, siteTitle, siteUrl }) => {
  const copyColour = background === "light" ? "dark" : "light";
  const year = new Date().getFullYear();
  const styles = {
    position: "absolute",
    padding: "0.5rem",
    right: "0",
    bottom: "0",
    left: "0"
  };

  return (
    <footer className={`bg-${background} text-center`} style={styles} itemScope itemType="http://schema.org/WebSite">
      <meta itemProp="name" content={siteTitle}/>
      <meta itemProp="url" content={siteUrl}/>
      <ul className="nav my-2 d-inline-flex">
        {links.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <meta itemProp="sameAs" content={item.link}/>
              {(item.link.search("facebook") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Facebook`}
                >
                  <FaFacebook size={28} />
                  <span className="sr-only">Facebook</span>
                </a>
              }
              {(item.link.search("plus.google") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Google`}
                >
                  <FaGooglePlus size={28} />
                  <span className="sr-only">Google</span>
                </a>
              }
              {(item.link.search("twitter") !== -1) &&
                <a 
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Twitter`}
                >
                  <FaTwitter size={28} />
                  <span className="sr-only">Twitter</span>
                </a>
              }
              {(item.link.search("instagram") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Instagram`}
                >
                  <FaInstagram size={28} />
                  <span className="sr-only">Instagram</span>
                </a>
              }
              {(item.link.search("youtube") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on YouTube`}
                >
                  <FaYoutube size={28} />
                  <span className="sr-only">YouTube</span>
                </a>
              }
              {(item.link.search("spotify") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Spotify`}
                >
                  <FaSpotify size={28} />
                  <span className="sr-only">Spotify</span>
                </a>
              }
              {(item.link.search("bandcamp") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Bandcamp`}
                >
                  <FaBandcamp size={28} />
                  <span className="sr-only">Bandcamp</span>
                </a>
              }
              {(item.link.search("itunes") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on iTunes`}
                >
                  <FaItunes size={28} />
                  <span className="sr-only">iTunes</span>
                </a>
              }
              {(item.link.search("play.google") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Google Play`}
                >
                  <FaGooglePlay size={28} />
                  <span className="sr-only">Google Play</span>
                </a>
              }
            </li>
          )
        })}
      </ul>
      <p className={`text-${copyColour}`}>&copy; {year} {siteTitle}</p>
      <small className="text-muted">Powered by <a href="https://www.thkr.com.au" target="_blank" rel="noopener noreferrer" className={`text-${socialColour}`}>THKR</a></small>
    </footer>
  );
}

export default Footer