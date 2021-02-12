const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	// entry: './src/index.js',
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
  output: {
		// filename: 'bundle.js',
		filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
		]
	},
	devServer: {
		contentBase: './dist'
  },
	plugins: [
		new HtmlWebpackPlugin({
      filename: 'index.html',
			template: 'index.html',
      inject: true
    }),
	]
};