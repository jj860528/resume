module.exports = {
    publicPath: '/resume',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}