const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
        entry: {
            'bundle.min.css': [
                // SCSS files contain imports that regard that section of the app
                // Main.scss contains imports that appear in multiple sections
                path.resolve(__dirname, 'styles/style.scss'),
                // All other styling files are contained as CSS files
                path.resolve(__dirname, 'styles/bootstrap.min.css')
            ]
        },
        output: {
            // This is necessary for webpack to compile, but we never reference this js file.
            filename: '[name]',
            path: path.resolve(__dirname, '../build/styles/'),
        },
        module: {
            rules: [{
                    test: /\.(jpg|eot|svg|ttf|woff|woff2)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }, ]
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                                loader: 'css-loader'
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    includePaths: [path.resolve(__dirname, 'node_modules/')]
                                }
                            },
                        ],
                    })
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: 'css-loader'
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("bundle.min.css"),
        ]
    },
    {
        entry: {
            'bundle.min.js': [
                path.resolve(__dirname, 'scripts/jquery-2.1.1.js'),
                path.resolve(__dirname, 'scripts/modernizr.js'),
                path.resolve(__dirname, 'scripts/isotope.pkgd.min.js'),
                path.resolve(__dirname, 'scripts/bootstrap.min.js'),
                path.resolve(__dirname, 'scripts/animated-headline.js'),
                path.resolve(__dirname, 'scripts/menu.js'),
                path.resolve(__dirname, 'scripts/custom.js'),
            ]
        },
        output: {
            // This is necessary for webpack to compile, but we never reference this js file.
            filename: '[name]',
            path: path.resolve(__dirname, '../build/scripts/'),
        },
        module: {
            rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                }],
            }]
        },
    }
];