module.exports = {
	mount: {
		public: "/",
		src: "/dist"
	},
	routes: [
		{
			match: "routes",
			src: ".*",
			dest: "/index.html"
		}
	],
	plugins: ["@snowpack/plugin-postcss", "@snowpack/plugin-react-refresh"]
}
