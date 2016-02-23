module.exports = {
    entry: './modules/main.js',
    output: {
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['','.coffee','.js','.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['jsx?harmony'] },
            { test: /\.js$/, loaders: ['jsx?harmony'] }
        ]
    }
};