import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Enable WebAssembly support in Webpack
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true, // Enable async WASM loading (recommended)
      syncWebAssembly: true, // Alternatively, enable sync loading if needed
    };
    // Ensure WebAssembly files are handled correctly
    config.module.rules.push({
      test: /\.wasm$/,
      type: "webassembly/async", // Use 'webassembly/async' for async loading of WASM files,
      exclude: /node_modules/,
    });

    return config;
  },
};

export default nextConfig;
