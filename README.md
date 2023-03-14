# README

## Empora Code Sample Submission

### Katelyn Huang

Preferred name: Katie

### Setup

1. Download Node.js and `npm`
2. Clone repository
3. Run `npm install` to download all dependencies

### How to run code sample and tests

* Node.js/JS environment
* Jest testing

To run, type `node addressChecker.js {name of test file}` in the commandline. Any extra commandline arguments will be ignored.

To run tests, type `npm test` and all test suites will be run at once. You can also run `npm test {name of file}` to test a specific module.

### Thought Process

My first thought was that Address would be the primary class needed for this sample, since we are working with three primary pieces of data (street, city, zip). I created the `Address` class first and then tested it, then moved on to taking in file input to get the data, which is in `readAddresses`. I switched back and forth between piping in the data or taking a file name as an argument, but ultimately settled on a file name since it was easier to test than piping in data and reading it from stdin. I do see a possible adjustment for how I read in the address data and create Address objects from it, since I could pass the array of split fields directly into the Address constructor, instead of splitting in and passing them in individually.

I then created the `SmartyValidatorService` class to contain all the functions relating to sending the verification request and handling the response from the API with the corrected addresses. I separated the process into three functions for each step of preparing the batch of addresses, sending and receiving the response, and outputting the result.
