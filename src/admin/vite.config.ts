import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
      // Add the temporary public domain to allowed hosts
      allowedHosts: ['1337-igsog7dn0mj2gg0z69wl0-20999e76.manus.computer'],
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
