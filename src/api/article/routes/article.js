module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/articles',
      handler: 'article.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/articles/:id',
      handler: 'article.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/articles',
      handler: 'article.create',
    },
    {
      method: 'PUT',
      path: '/articles/:id',
      handler: 'article.update',
    },
    {
      method: 'DELETE',
      path: '/articles/:id',
      handler: 'article.delete',
    },
  ],
};
