module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/videos',
      handler: 'video.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/videos/:id',
      handler: 'video.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/videos',
      handler: 'video.create',
    },
    {
      method: 'PUT',
      path: '/videos/:id',
      handler: 'video.update',
    },
    {
      method: 'DELETE',
      path: '/videos/:id',
      handler: 'video.delete',
    },
  ],
};
