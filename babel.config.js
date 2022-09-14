module.exports = api => {
  return {
    presets: [
      // @babel/preset-env will automatically target our browserslist targets
      // [require('@babel/preset-env'), { targets: 'last 2 versions' }],aaa
      [require('@babel/preset-env'), { targets: 'last 2 Chrome versions' }],
      [require('@babel/preset-react'), { development }],
      '@linaria'
    ],
  }
}