module.exports = function (opts) {
  var provider = {
    baseUrl: 'https://www.facebook.com/dialog/oauth',
    scopeDelimiter: ',',
    scope: ['public_profile', 'email'],
    display: 'popup'
  }

  return Object
    .keys(opts)
    .reduce(function (memo, key) {
      memo[key] = opts[key]
      return memo
    }, provider)
}

module.exports.popupDefaults = {
  width: 452,
  height: 633
}
