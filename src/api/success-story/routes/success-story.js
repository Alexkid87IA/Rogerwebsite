module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/success-stories',
      handler: 'success-story.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/success-stories/:id',
      handler: 'success-story.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/success-stories',
      handler: 'success-story.create',
    },
    {
      method: 'PUT',
      path: '/success-stories/:id',
      handler: 'success-story.update',
    },
    {
      method: 'DELETE',
      path: '/success-stories/:id',
      handler: 'success-story.delete',
    },
  ],
};
