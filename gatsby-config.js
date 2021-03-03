module.exports = {
  siteMetadata: {
    title: `Awesome NBA Data`,
    author: `Jovani Pink`,
    description: `Awesome NBA Data`,
    keywords: `NBA`,
    siteUrl: `https://www.jovanipink.com/`,
    // image: ``,
    social: {
      twitter: `@JovaniPink`,
    },
  },
  flags: { DEV_SSR: true },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    { resolve: `gatsby-plugin-emotion` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-csv`,
  ],
};
