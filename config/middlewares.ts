export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:1337', 'http://localhost:5174', 'http://5174-igsog7dn0mj2gg0z69wl0-20999e76.manus.computer', 'https://bdfsgloy.manus.space'] // Allow Strapi admin, local dev frontend, proxied dev frontend, and deployed frontend
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

