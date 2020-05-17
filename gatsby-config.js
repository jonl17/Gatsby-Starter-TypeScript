require("dotenv").config({
  path: `.env.development`
})

const aliases = {
  "~": "src"
}

const pages = [
  { name: { is: `Sýningar`, en: `Exhibitions` }, slug: `/` },
  { name: { is: `Listamenn`, en: `Artists` }, slug: `/listamenn` },
  { name: { is: `Sýningarstaðir`, en: `Venues` }, slug: `/syningarstadir` },
  { name: { is: `Um Listvitann`, en: `About Listvitinn` }, slug: `/um-listvitann` },
]

module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    url: ``,
    pages: pages
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: aliases,
        extensions: [`ts`, `tsx`]
      }
    }
  ],
}
