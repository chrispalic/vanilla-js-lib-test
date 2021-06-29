# vanilla-js-lib-test
Testing building a lib with webpack, Typescript, etc.

# Global NPM packages to install on your box#
* Rollup: `npm install rollup -g`
* Karma CLI: `npm install karma-cli -g`

# Commands #
* `npm run lint-lib` Lint the library
* `npm run test-lib` Run Karam/Jasmine Unit Tests
* `npm run build-lib` Builds the library using rollup and places in the \dist\ folder
* `npm run publish-patch` Will automatically increment the patch number, push to npm, and commit and tag github repo
* `npm run publish-minor` Will automatically increment the patch number, push to npm, and commit and tag github repo
* `npm run publish-major` Will automatically increment the patch number, push to npm, and commit and tag github repo