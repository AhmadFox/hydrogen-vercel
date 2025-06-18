// remix.config.cjs

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	serverBuildTarget: "vercel",
	server: "./vercel-server.js",
	ignoredRouteFiles: ["**/.*"],
	future: {
	  v3_routeConvention: true,
	},
  };
  