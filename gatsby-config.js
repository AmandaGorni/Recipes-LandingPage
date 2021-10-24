module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Recipes",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",        
        fieldName: "alldata",        
        url: "https://api-us-east-1.graphcms.com/v2/ckuwzxwn0062c01xs7d1uhkuw/master",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `DM Sans`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
};
