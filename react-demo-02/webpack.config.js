module.exports = {
	entry: ['./app.js', './global.js'],	//Това са вхидните файлове - може да са повече от един
	output: {
		filename: 'bundle.js'	//това е изходния файл
	},
	module: {
		preLoaders: [
      		{
        		test: /\.js$/,
        		exclude: /node_modules/,
        		loader: 'jshint-loader'
      		}
      	],
   		loaders: [
     	{
       		test: /\.jsx?$/,
       		exclude: /node_modules/,
       		loader: 'babel-loader',
       		query: {
       			cacheDirectory: true,
         		presets: ['react', 'es2015'] 
       		}
     	}	
   ]
 },
	watch: true,
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'eval-source-map',
	devServer: {
		//Enable history API fallback so HTML5 History API based
		//routing works This is a good default that will come
		//inhandy in more complicated setups.
		historyApiFallback: true,

		//Unlike the cli flag, this doesn't et
		//HotModuleReplacementPlugin!
		hot: true,
		inline: true,

		//Display only errors o reduce the amount of output.
		//stats: 'errors-omly',

		stats: 'normal',

		host: process.env.HOST || 'localhost',
		port: process.env.PORT || 3000,

		proxy: {
			'/api/*': {
				target: 'http://localhost:9000',
				ecure: false
			}
		},
	},
}