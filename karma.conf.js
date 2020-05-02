module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      '@angular-devkit/build-angular',
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-mocha-reporter'),
    ],
    client:{
      clearContext: false,
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'),
      reports: [
        'html',
        'lcovonly',
      ],
      fixWebpackSourcePaths: true,
    },
    files: [
      'src/app/spec/mocks/js/google-mock.js',
      {
        pattern: 'src/assets/**',
        watched: false,
        included: false,
        nocache: false,
        served: true,
      },
    ],
    proxies: {
      '/spa/assets/': '/base/src/assets/',
    },
    reporters: [
      'mocha',
      'progress',
      'kjhtml',
    ],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
      ChromiumHeadlessNoSandbox: {
        base: 'ChromiumHeadless',
        flags: ['--no-sandbox'],
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    mochaReporter: {
      ignoreSkipped: true,
      colors: {
        success: 'green',
        info: 'blue',
        warning: 'yellow / orange',
        error: 'red',
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      },
    },
  });
};
