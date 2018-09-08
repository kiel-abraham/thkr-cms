import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';
import FloatButton from '../components/floatButton';

import './style.scss';
// this is a test pull into master

const Layout = ({ children, data }) => {
  const metaDesc = data.home.frontmatter.metaDesc || data.site.siteMetadata.title;
  let ogImage;
  if (data.home.frontmatter.metaImage) {
    ogImage = data.home.frontmatter.metaImage;
  } else if (data.settings.frontmatter.header.logo) {
    ogImage = data.settings.frontmatter.header.logo;
  } else {
    ogImage = null;
  }

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title} | {data.site.siteMetadata.tagline}</title>
        <meta name="description" content={metaDesc}/>
        <meta property="og:title" content={`${data.site.siteMetadata.title} | ${data.site.siteMetadata.tagline}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={metaDesc}/>
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        {ogImage &&
          <meta property="og:image" content={data.site.siteMetadata.siteUrl + ogImage} />
        }
        {data.settings.frontmatter.favicon &&
          <link rel="shortcut icon" href={data.site.siteMetadata.siteUrl + data.settings.frontmatter.favicon} />
        }
      </Helmet>

      <a href="#main-content" className="sr-only sr-only-focusable">Skip to main content</a>

      <Header 
        menu={data.settings.frontmatter.header.menu}
        background={data.settings.frontmatter.header.background}
        invert={data.settings.frontmatter.header.invert}
        siteTitle={data.site.siteMetadata.title}
        nav={data.nav.edges}
        logo={data.settings.frontmatter.header.logo}
      />

      <main id="main-content" className="mb-5">
        {children()}
      </main>
      
      <Footer
        background={data.settings.frontmatter.footerBackground}
        socialColour={data.settings.frontmatter.socialColour}
        links={data.settings.frontmatter.socialLinks}
        siteTitle={data.site.siteMetadata.title}
      />

      {data.settings.frontmatter.floatingButton.visible &&
        <div className="d-lg-none">
          <FloatButton
            floatButtonColour={data.settings.frontmatter.floatingButton.colour}
            floatButton={data.settings.frontmatter.floatingButton.type}
            phone={data.contact.frontmatter.phone}
          />
        </div>
      }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      id
      siteMetadata {
        siteUrl
        title
        tagline
      }
    }
    nav: allMarkdownRemark(
      filter: {frontmatter: {nav: {eq: true}}}
      sort: {fields: [frontmatter___navSort], order: ASC}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            menuTitle
            slug
          }
        }
      }
    }
    home: markdownRemark(frontmatter: { homePage: { eq: true } }) {
      frontmatter {
        metaDesc
        metaImage
      }
    }
    settings: markdownRemark(frontmatter: { settingsPage: { eq: true } }) {
      frontmatter {
        header {
          menu
          background
          invert
          logo
        }
        favicon
        footerBackground
        floatingButton {
          visible
          type
          colour
        }
        socialColour
        socialLinks {
          link
        }
      }
    }
    contact: markdownRemark(frontmatter: { pageType: { eq: "contact" } }) {
      frontmatter {
        phone
      }
    }
  }
`
