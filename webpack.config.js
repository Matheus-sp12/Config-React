const { plugins } = require("@babel/preset-env/lib/plugins-compat-data");// vai pular lá de dentro do Webpack
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = { // jeito antigo
    devtool: "source-map", //ferramentas de desenvolvimento
    entry: "./src/index.js",//qual o ponto de entrada da aplicação, com o caminho
    module: { // modulos que vamos utilizar para criar nossas regras

        rules: [ // rules para ele fazer a validação dos arquivos que tem na aplicação
            {
                test: /\.js$/,
                exclude: /node_modules/, //excluir a leitura dentro do node_modules
                use: { loader: "babel-loader" } //qual loader queremos que ele utiliza
            },

            {
                test: /\.html$/,
                use: [{ loader: "html-loader" }]
            },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ["file-loader"]
            },
        ]
    },

    resolve: { //pra ele saber quais arquivos ele precisa tratar
        extensions: [".js", ".jsx"],
    },
    plugins: [ // pluginss
        new HtmlWebPackPlugin({
            template: './public/index.html' //aonde ele vai exporta o arquivo final
        })
    ]
}