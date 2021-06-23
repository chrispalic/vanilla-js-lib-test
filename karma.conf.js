module.exports = function (config) {
  config.set({
    basePath: '.',
    browsers: ['Chrome'],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    frameworks: ['jasmine'],
    files: ['src/**/*.spec.ts'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-rollup-preprocessor')
    ],
    preprocessors: {
      'src/**/*.ts': ['rollup'],
      'src/**/*.spec.ts': ['rollup']
    },
    reporters: ['kjhtml'],
    rollupPreprocessor: {
      input: 'src/main.ts',
			plugins: [
				require('@rollup/plugin-typescript')({tsconfig : './tsconfig.json'}),
			],
      output: 
      {
        file: 'ifs-core-rules-engine',
        format: 'es'
      }
		},
    restartOnFileChange: true
  });
}