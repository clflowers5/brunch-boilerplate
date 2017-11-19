module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'scripts/vendor.js': /^(?!app)/,
        'scripts/app.js': /^app/
      }
    },
    stylesheets: { joinTo: 'styles/app.css' }
  },

  plugins: {
    babel: { presets: ['env', 'react'] },
    sass: {
      mode: 'native'
      // modules: true // enable if using css-modules with something like React
    }
  },

  modules: {
    autoRequire: {
      'scripts/app.js': ['scripts/initialize']
    }
  }
};
