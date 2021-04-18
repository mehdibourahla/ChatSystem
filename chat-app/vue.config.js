module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost/msn/public",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/api" },
      },
    },
  },
};
