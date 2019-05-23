const path = require('path');

function getStyleUse(bundleFilename) {
    return [{
            loader: 'file-loader',
            options: {
                name: bundleFilename,
            },
        }, {
            loader: 'extract-loader'
        },
        {
            loader: 'css-loader',
        },
        {
            loader: 'sass-loader',
            options: {
                includePaths: ['./node_modules'],
            }
        }
    ];
}

module.exports = [{
        entry: path.resolve(__dirname, 'styles/style.scss'),
        output: {
            // This is necessary for webpack to compile, but we never reference this js file.
            filename: 'style.js',
            path: path.resolve(__dirname, '../build/'),
        },
        module: {
            rules: [{
                    test: /\.scss$/,
                    use: getStyleUse('style.css'),
                },
                {
                    test: /\.(png|jpe?g)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        }
                    }],
                }
            ]
        },
    },
    {
        entry: path.resolve(__dirname, 'scripts/index.js'),
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../build/'),
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