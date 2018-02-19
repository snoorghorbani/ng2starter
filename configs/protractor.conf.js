exports.config = {
  allScriptsTimeout: 180000,
  getPageTimeout :300000,
  specs: ['../features/**/*.feature'],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },
  plugins: [],
  baseUrl: 'http://localhost:4200/',
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    //compiler: "ts:ts-node/register",
    // format: "pretty",
    require: [
      '../src/app/**/*.steps.js'
    ]
  },
  onPrepare: function () {
    const globals = require('protractor');
    const browser = globals.browser;
    browser.manage().window().maximize();
  }
};



// // Protractor configuration file, see link for more information
// // https://github.com/angular/protractor/blob/master/lib/config.ts

// const { SpecReporter } = require('jasmine-spec-reporter');

// exports.config = {
//   allScriptsTimeout: 11000,
//   specs: [
//     '../src/**/*.e2e-spec.ts'
//   ],
//   capabilities: {
//     'browserName': 'chrome'
//   },
//   directConnect: true,
//   baseUrl: 'http://localhost:4200/',
//   framework: 'jasmine',
//   jasmineNodeOpts: {
//     showColors: true,
//     defaultTimeoutInterval: 30000,
//     print: function() {}
//   },
//   onPrepare() {
//     require('ts-node').register({
//       project: './configs/tsconfig.e2e.json'
//     });
//     jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
//   }
// };
