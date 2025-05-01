module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pages-statiques',
      handler: 'page-statique.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/pages-statiques/:id',
      handler: 'page-statique.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/pages-statiques',
      handler: 'page-statique.create',
    },
    {
      method: 'PUT',
      path: '/pages-statiques/:id',
      handler: 'page-statique.update',
    },
    {
      method: 'DELETE',
      path: '/pages-statiques/:id',
      handler: 'page-statique.delete',
    },
  ],
};
