const path = require('path');

function getStyleUse(bundleFilename) {
    return [{
            loader: 'file-loader',
            options: {
                name: bundleFilename,
            },
        },
        {
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
        entry: path.resolve(__dirname, 'timeline/style.scss'),
        output: {
            // This is necessary for webpack to compile, but we never reference this js file.
            filename: 'timeline-style.js',
            path: path.resolve(__dirname, '../styles'),
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: getStyleUse('timeline.css'),
            }]
        },
    },
    {
        entry: path.resolve(__dirname, 'timeline/index.js'),
        output: {
            filename: 'timeline.js',
            path: path.resolve(__dirname, '../scripts'),
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