export default (context) => {
  return {
    httpLinkOptions: {
      fetchPolicy: 'cache-and-network',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    },
    httpEndpoint:
      process.env.NODE_ENV === 'production'
        ? process.env.APOLLO_URL
        : process.env.APOLLO_URL_DEV,
  };
};
