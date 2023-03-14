/* eslint-disable no-undef */

// Tests for the Address object

const Address = require('../src/address');

describe('Address', () => {
    const mockStreet = '123 Street';
    const mockCity = 'Nowhere';
    const mockZip = '45678-9010';

    describe('constructor', () => {
        it('should populate the street, city and zip fields', () => {
            const address = new Address(mockStreet, mockCity, mockZip);

            expect(address.street).toEqual(mockStreet);
            expect(address.city).toEqual(mockCity);
            expect(address.zipCode).toEqual(mockZip);
        });

        it('should be undefined if not all parameters are passed', () => {
            const address = new Address(mockStreet);

            expect(address.street).toEqual(mockStreet);
            expect(address.city).toEqual(undefined);
            expect(address.zipCode).toEqual(undefined);
        });
    });

    describe('getters', () => {
        const address = new Address(mockStreet, mockCity, mockZip);
        const badAddress = new Address();

        it('should return street, or undefined', ()=> {
            expect(address.getStreet()).toEqual(mockStreet);
            expect(badAddress.getStreet()).toEqual(undefined);
        });

        it('should return city, or undefined', ()=> {
            expect(address.getCity()).toEqual(mockCity);
            expect(badAddress.getCity()).toEqual(undefined);
        });

        it('should return zip, or undefined', ()=> {
            expect(address.getZipCode()).toEqual(mockZip);
            expect(badAddress.getZipCode()).toEqual(undefined);
        });
    });

    describe('toString', () => {
        it('should print the address object in street, city zip format', () => {
            const address = new Address(mockStreet, mockCity, mockZip);

            const string = address.toString();

            expect(string).toEqual(`${address.getStreet()}, ${address.getCity()} ${address.getZipCode()}`);
        });
    });
});