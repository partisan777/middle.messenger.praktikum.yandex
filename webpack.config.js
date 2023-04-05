// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV == 'prod';
const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: [
		'./index.ts',
		'./main.scss'
	],
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: false,
        host: 'localhost',
        port: 3000,
		historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),

        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/','/**/*test.ts'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
			{	test: /\.hbs$/,
				loader: "handlebars-loader"
			},
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
		alias: {
			handlebars: 'handlebars/dist/handlebars.min.js'
		}
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'prod';
        
        
    } else {
        config.mode = 'dev';
    }
    return config;
};

