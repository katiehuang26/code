// Main

require('dotenv').config();
const _ = require('lodash');
const fs = require('fs');
const { readAddresses } = require('./readAddresses');

const SmartyValidatorService = require('./SmartyValidatorService');

// Takes in the name of a file containing addresses as a commandline argument, 
// and prints corrected versions of the addresses
// Will ignore any subsequent commandline arguments, and will exit if no arguments are provided
async function main() {
    if (_.isUndefined(process.argv[2])) {
        console.log('No file of addresses provided');
        return;
    }

    const textFileName = process.argv[2].toString();
    console.log(`Reading addresses from ${textFileName}`);
    const addressData = fs.readFileSync(textFileName, 'utf8', (e, data) => {
        if (e) throw e;
        return data.toString();
    });

    const testaddresses = readAddresses(addressData);

    const validator = new SmartyValidatorService();
    await validator.validate(testaddresses);
}

main();

module.exports = { main };

