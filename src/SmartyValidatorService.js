
// Validator service for addresses 

const _ = require('lodash');

// Referenced the Smarty demo code on https://github.com/smarty/smartystreets-javascript-sdk
const SmartySDK = require('smartystreets-javascript-sdk');
const Address = require('./Address');
const SmartyCore = SmartySDK.core;
const Lookup = SmartySDK.usStreet.Lookup;

const authId = process.env.AUTH_ID;
const authToken = process.env.AUTH_TOKEN;
const credentials = new SmartyCore.StaticCredentials(authId, authToken);

class SmartyValidatorService {
    constructor() {
        const clientBuilder = new SmartyCore.ClientBuilder(credentials);
        this.client = clientBuilder.buildUsStreetApiClient();
    }

    // Takes in an input Address object, and a JSON object from the Smarty response
    // and returns the input converted to either the contents of the result or invalid
    static getValidatedResults(input, result) {
        if (!_.isEmpty(result)) {
            const validatedAddress = new Address(
                result.deliveryLine1,
                result.components.defaultCityName,
                result.components.zipCode);

            return `${input.toString()} -> ${validatedAddress.toString()}`;
        }
        else {
            return `${input.toString()} -> Invalid Address`;
        }
    }

    // Returns a Smarty Batch object containing all the Lookups created from the input Addresses
    static createLookupBatch(addresses) {
        const lookups = _.map(addresses, (address) => {
            const lookup = new Lookup();
            lookup.street = address.getStreet();
            lookup.city = address.getCity();
            lookup.zipCode = address.getZipCode();

            return lookup;
        });

        const batch = new SmartyCore.Batch();
        _.forEach(lookups, (lookup) => batch.add(lookup));

        return batch;
    }

    // Gets the batched addresses, sends them to the US Street Verification API, then prints results
    async validate(addresses) {
        const batch = SmartyValidatorService.createLookupBatch(addresses);

        try {
            const response = await this.client.send(batch);

            _.forEach(response.lookups, (lookup, index) => {
                const inputAddress = addresses[index];
                const validatedInfo = lookup.result[0];

                console.log(SmartyValidatorService.getValidatedResults(inputAddress, validatedInfo));
            });
        } catch (err) {
            console.log(err, err.payload);
        }
    }
}

module.exports = SmartyValidatorService;