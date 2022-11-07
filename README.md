# Hometask-integration-testing

## Installing the project

1. Clone this repository to your workstation.
2. Navigate to the project root.
3. Add JEST as development dependency with the command `yarn add --dev jest`.
4. Check the 'package.json' file if the dev dependency was added:

```json
  "devDependencies": {
    "jest": "^29.2.2"
  }
```

5. 'package.json' file should be updated with the command, which will trigger test execution

```json
  "scripts": {
    "test": "jest"
  }
```

## Tests running

1. Run `yarn install` to install all dependencies.
2. Run `yarn test` to check test command output.

The concole output will show you the result.

NOTE: if you would like to run tests after every change in the code, you can run
a command `yarn test:watch`.


## Test console output example

yarn test
yarn run v1.22.15
$ jest
 PASS  tests/rectangle.test.js
  Generating perimeter
    ✓ should calculate the perimeter (2 ms)
    ✓ should not calculate if length is not positive
    ✓ should not calculate if width is not positive (1 ms)
    ✓ should not calculate if any of the paramethers do not exist
  Generating area
    ✓ should calculate the area (1 ms)
    ✓ should not calculate if length is not positive
    ✓ should not calculate if width is not positive
    ✓ should not calculate if any of the paramethers do not exist
  Generating info
    ✓ should generate an error message if any of the paramethers do not exist
    ✓ should generate an error message if length is not positive
    ✓ should generate an error message if width is not positive
    ✓ should generate a valid test output if both paramethers are positive

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        0.385 s, estimated 1 s
Ran all test suites.
✨  Done in 1.21s.
