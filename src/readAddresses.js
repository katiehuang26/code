const _ = require('lodash');
const Address = require('./Address');

// Reads in the csv data piped in, and returns a collection of Address objects
export function readAddresses(addressCSV) {
    // Split the text input by line, and then remove any trailing empty strings
    const addressStrings = _.filter(
        _.split(addressCSV, '\r\n'), (str) => { return str !== ''; });

    // Map the address strings to Address
    const addresses = _.map(addressStrings, (a) => {
        const fields = _.split(a, ', ');

        return new Address(
            fields[0] ? fields[0] : undefined,
            fields[1] ? fields[1] : undefined,
            fields[2] ? fields[2] : undefined,
        );
    });

    return addresses;
}