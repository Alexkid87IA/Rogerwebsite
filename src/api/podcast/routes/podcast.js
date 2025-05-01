module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/podcasts',
      handler: 'podcast.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/podcasts/:id',
      handler: 'podcast.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/podcasts',
      handler: 'podcast.create',
    },
    {
      method: 'PUT',
      path: '/podcasts/:id',
      handler: 'podcast.update',
    },
    {
      method: 'DELETE',
      path: '/podcasts/:id',
      handler: 'podcast.delete',
    },
  ],
};
