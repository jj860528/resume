module.exports = {
    publicPath: '/movie',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}