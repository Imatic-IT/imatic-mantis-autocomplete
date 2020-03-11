const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'files');
const APP_DIR = path.resolve(__dirname, 'js');

module.exports = {
    entry: `${APP_DIR}/index.js`,
    devtool: 'source-map',
    output: {
        path: BUILD_DIR,
        filename: 'autocomplete.js',
    },
};
