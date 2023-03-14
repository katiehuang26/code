
const _ = require('lodash');

const { readAddresses } = require('../src/readAddresses');

const { TEST_FILE, BAD_TEST_FILE, API_RESPONSE_1 } = require('./constants/constants');
const NUM_ADDRESSES = API_RESPONSE_1.lookups.length;
const NUM_BAD_ADDRESSES = 2;

describe('csvReader', () => {
    const mockStreet = '123 Street';
    const mockCity = 'Nowhere';
    const mockZip = '45678-9010';

    it('should take in text data as a string and create Address objects', () => {
        const testAddresses = readAddresses(TEST_FILE);

        expect(testAddresses).toHaveLength(NUM_ADDRESSES);
        expect(testAddresses[1].getStreet()).toEqual(mockStreet);
        expect(testAddresses[1].getCity()).toEqual(mockCity);
        expect(testAddresses[1].getZipCode()).toEqual(mockZip);

        _.forEach(testAddresses, (addr) => {
            expect(addr).toHaveProperty('street');
            expect(addr).toHaveProperty('city');
            expect(addr).toHaveProperty('zipCode');
        });
    });

    it('should create Address objects even if the data is incomplete', () => {
        const testAddresses = readAddresses(BAD_TEST_FILE);

        expect(testAddresses).toHaveLength(NUM_BAD_ADDRESSES);
        expect(testAddresses[0]).toHaveProperty('street', 'Unfinished');
        expect(testAddresses[0]).toHaveProperty('city', 'address');
        expect(testAddresses[0]).toHaveProperty('zipCode', undefined);
    });
});