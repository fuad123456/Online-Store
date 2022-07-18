const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {bundle:'./src/index.ts'},
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
	//   {
    //     test: /\.html$/i,
    //     loader: "html-loader",
    //   },
	  {
		test: /\.css$/i,
		use: [
			MiniCssExtractPlugin.loader,
			"css-loader",
		  ],
	  },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
	clean: true,
	assetModuleFilename:'assets/[name][ext][query]'
  },
  plugins: [
	new MiniCssExtractPlugin(
		{
			filename: "styles.css",
		}
	),
    new HtmlWebpackPlugin({
      title: 'Output Management',
	  filename: 'index.html',
	  template: './src/template.html'
    }),
	new CopyPlugin({
		patterns: [
		  { from: "src/assets/img", to: "assets" },
		//   { from: "other", to: "public" },
		],
	  }),
  ],
  mode: 'development',
  devServer: {
    static: './dist',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};