import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import styled from "styled-components";

const PortfolioItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PortfolioItem = styled.div`
  width: 60%;
  

  border: 3px solid lightblue;
  padding: 16px;
  margin: 16px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
  }
`;
const PortfolioImage = styled.img`
  max-width: 100%;
`;

const ButtonStyle = styled(Link)`
@import url("https://fonts.googleapis.com/css?family=Raleway:800,900&display=swap");
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  color: white;
font-size: 1rem;
border: 1px #ef6f6c solid;
border-radius: 15px;
padding: 10px 10px;
text-decoration: none;
background-color: #ef6f6c;
display: flex;
    /* margin: 0 auto; */
    justify-content: center;
`;





const PortfolioItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio {
            edges {
              node {
                id
                title
                slug
                excerpt
                content
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props => (
        <PortfolioItemsWrapper>
          {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
            <PortfolioItem key={portfolioItem.node.id}>
              <h2>{portfolioItem.node.title}</h2>
              <PortfolioImage
                src={portfolioItem.node.featured_media.source_url}
                alt="Thumnail"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: portfolioItem.node.excerpt
                }}
              />
              <ButtonStyle to={`/portfolio/${portfolioItem.node.slug}`}>
                Read More
              </ButtonStyle>
            </PortfolioItem>
          ))}
        </PortfolioItemsWrapper>
      )}
    />
  );
};

export default PortfolioItems;
