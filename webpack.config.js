const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "scripts", "index.ts"),
    output: {
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
        ],
    },
};
