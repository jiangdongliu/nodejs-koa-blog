"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  context: path.resolve(__dirname, "./"),
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": resolve("."),
      "@app": resolve("app"),
      "@api": resolve("app/api"),
      "@core": resolve("core"),
      "@dao": resolve("app/dao"),
      "@lib": resolve("app/lib"),
      "@middlewares": resolve("middlewares"),
      "@models": resolve("app/models"),
      "@service": resolve("app/service"),
      "@validators": resolve("app/validators")
    }
  }
};
