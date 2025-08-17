module.exports = {
  apps: [
    {
      name: "pm2-monitor",
      script: "./index.js",
      exec_mode: "fork",
      watch: false,
      ignore_watch: ["logs/*", "node_modules", ".env"],
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
