/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true, dot: true },
    src: { url: '/dist', dot: true },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-webpack',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  packageOptions: {
    knownEntrypoints: [
      '@chakra-ui/hooks',
      '@chakra-ui/hooks/use-animation-state',
      'framesync'
    ]
  }
};
