module.exports = {
	devServer: {
		proxy: {
			'^/endpoint/v1/send': {
				target: "https://varroconnect.xyz",
				changeOrigin: True
			},
		}
	}
}