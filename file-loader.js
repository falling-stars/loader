Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.raw = true
exports.default = loader

const loaderUtils = require('loader-utils')
const schemaUtils = require('schema-utils')
const _loaderUtils = loaderUtils.__esModule ? loaderUtils : {default: loaderUtils}

function loader(content) {
  var options = loaderUtils.getOptions(this) || {}
  // 获取hash
  console.log(loaderUtils.getHashDigest(content) + '-----------------')
  var url = _loaderUtils.default.interpolateName(this, options.name, {content, regExp: options.regExp})
  this.emitFile(url, content)
  return `module.exports = __webpack_public_path__ + ${JSON.stringify(url)}`
}