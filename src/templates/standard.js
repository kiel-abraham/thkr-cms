import React from 'react';
import Helmet from 'react-helmet';
import Banner from '../components/banner';
import { Row, Col } from 'reactstrap';

const StandardPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <div>
      <Helmet>
        <title>{`${frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
        <meta property="og:title" content={`${frontmatter.title} | ${data.site.siteMetadata.title}`}/>
        {frontmatter.metaDesc &&
          <meta name="description" content={frontmatter.metaDesc}/>
        }
        {frontmatter.metaImage &&
          <meta property="og:image" content={data.site.siteMetadata.siteUrl + frontmatter.metaImage} />
        }
      </Helmet>
      
      <section className="container mt-4">
        <Row>
          <Col>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default StandardPage

export const query = graphql`
  query StandardPage($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        metaDesc
        metaImage
      }
    }
  }
`;