const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = env => {
  // const plugins = [new ExtractTextPlugin("css/[name].[hash].css")];
  const plugins = [new ExtractTextPlugin("css/[name].css")];

  if (env.NODE_ENV === "production") {
    plugins.push(new CleanWebpackPlugin(["dist"], { root: __dirname }));
    // plugins.push(new CleanWebpackPlugin(["dist"], { root:
    // 'D:/Docs/WS_Go/src/github.com/TheoRev/OdontoSoftGo/public' }));
  }

  const ruta_0 = __dirname;
  const ruta_1 = "D:/backup/WS_Go/src/github.com/TheoRev/OdontoSoftGo/public";
  const ruta_2 =
    "/home/theo/Documentos/WS_Go/src/github.com/TheoRevFdz/OdontoSoftGo/public";

  return {
    entry: {
      odontosoftprime: path.resolve(__dirname, "src/entries/main.js")
    },
    output: {
      path: path.resolve(ruta_2, "dist"),
      // filename: "js/[name].[hash].js",
      filename: "js/[name].js",
      publicPath: path.resolve(__dirname, "dist") + "/",
      chunkFilename: "js/[id].[chunkhash].js"
    },
    devServer: {
      port: 9000
    },
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer, use: que loader se va a encargar
          // del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "react", "stage-2"]
            }
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true
                }
              }
            ]
          })
        },
        {
          test: /\.(jpg|png|gif|svg|eot|svg|woff|woff2|ttf)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "images/[name].[hash].[ext]"
            }
          }
        }
      ]
    },
    plugins
  };
};
