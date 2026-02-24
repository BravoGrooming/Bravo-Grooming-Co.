const query = `
{
  product(handle: "premium-beard-oil") {
    id
    title
    customReviews: metafield(namespace: "custom", key: "reviews") {
      value
    }
    sprReviews: metafield(namespace: "spr", key: "reviews") {
      value
    }
    judgemeReviews: metafield(namespace: "judgeme", key: "widget") {
      value
    }
  }
}
`;

fetch('https://jywjn0-va.myshopify.com/api/2023-10/graphql.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': '234ff32924fbe75faade9e7268da0bb7'
  },
  body: JSON.stringify({ query })
})
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(console.error);
