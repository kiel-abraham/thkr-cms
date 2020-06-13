import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Header from "./header";
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menu {
            name
            link
          }
          socials {
            name
            link
          }
        }
      },
      logo: file(relativePath: { eq: "living-type-logo.png" }) {
			  childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
			  }
			}
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} menu={data.site.siteMetadata.menu} />

      <main className="bg-gray-100">
        <div className="container">
          {children}
        </div>
      </main>

      <footer className="bg-gray-300">
        <div className="container">

        <Img fluid={data.logo.childImageSharp.fluid} alt={data.site.siteMetadata.title} className="w-1/4" />

          <div className="flex flex-wrap justify-center">
            {data.site.siteMetadata.socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="p-1 underline hover:no-underline"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>
        
        <p className="text-center">© {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default Layout
