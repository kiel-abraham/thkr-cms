import React from "react";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";

import Layout from "../components/layout";
import SEO from "../components/seo";

import placeholder from '../images/living-type-banner.jpg';

const Shows = ({ data }) => {
    const { allAirtableShows } = data;
    return (
        <Layout>
            <SEO title="Shows" />
            
            <div className="container">

                <div className="mb-4">
                    <h1>Shows</h1>
                    <p>Catch the latest show</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 row-gap-8">

                    {allAirtableShows.edges.map((item, index) => {
                        const { data } = item.node;
                        const image = data.Flyer !== null ? data.Flyer[0].url : placeholder;
                        return (
                            <div key={index} className="rounded overflow-hidden shadow-lg">
                                <Link to={`/shows/${kebabCase(data.Name)}`}>
                                    <div className="w-full" className="bg-cover bg-center" style={{backgroundImage: `url('${image}')`, minHeight: `200px`}} alt={`${data.Name} flyer`}></div>
                                    <div className="px-6 py-4">
                                        <h3 className="font-bold text-xl mb-2">{data.Name}</h3>
                                        <p className="text-gray-700 text-base">{data.Date}</p>
                                        <p className="text-gray-700 text-base">{data.Venue_name}</p>
                                    </div>
                                    <div className="px-6 py-4 space-x-2">
                                        {data.Band_names && data.Band_names.map((item, index) => (
                                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-1">{item}</span>
                                        ))}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

            </div>
        </Layout>
    );
}

export default Shows;

export const query = graphql`
    query {
        allAirtableShows {
            edges {
                node {
                    data {
                        Date(formatString: "DD MMMM, Y")
                        Name
                        Venue_name
                        Band_names
                        Flyer {
                            url
                        }
                    }
                }
            }
        }
    }
`;
