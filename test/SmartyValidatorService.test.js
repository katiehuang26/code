
// Tests for the SmartyValidator 

const _ = require('lodash');
const { MOCK_ADDRESS_1, LOOKUP_RESULT_1, API_RESPONSE_1 } = require('./constants/constants');

const mockSend = jest.fn().mockResolvedValueOnce(API_RESPONSE_1);
const mockBuildClient = jest.fn().mockImplementation(() => {
    return {
        send: mockSend,
    };
});
const mockAddToBatch = jest.fn();
const mockNewLookup = jest.fn();

const SmartyValidatorService = require('../src/SmartyValidatorService');

jest.mock('smartystreets-javascript-sdk', () => {
    return {
        core: {
            ClientBuilder: jest.fn().mockImplementation(() => {
                return {
                    buildUsStreetApiClient: mockBuildClient,
                };
            }),
            Batch: jest.fn().mockImplementation(() => {
                return {
                    add: mockAddToBatch,
                };
            }),
            StaticCredentials: jest.fn().mockReturnThis(),
        },
        usStreet: {
            Lookup: mockNewLookup,
        }
    };
});

describe('SmartyValidatorService', () => {
    const size = API_RESPONSE_1.lookups.length;
    const mockAddressList = Array(size);
    _.fill(mockAddressList, MOCK_ADDRESS_1);

    describe('constructor', () => {
        it('should create a new client service', () => {
            const validator = new SmartyValidatorService(); 

            expect(mockBuildClient).toHaveBeenCalled();
            expect(validator).toHaveProperty('client');
        });
    });

    describe('getValidatedResults', () => {
        it('returns the validated information if the result exists', () => {
            const result = SmartyValidatorService.getValidatedResults(MOCK_ADDRESS_1, LOOKUP_RESULT_1[0]);
            expect(result).toMatch(`${MOCK_ADDRESS_1.toString()} -> 143 E Main St, Columbus 43215`);
        });

        it('returns invalid address if the result does not exist', () => {
            const result = SmartyValidatorService.getValidatedResults(MOCK_ADDRESS_1, []);
            expect(result).toMatch(`${MOCK_ADDRESS_1.toString()} -> Invalid Address`);
        });
    });

    describe('createLookupBatch', () => {
        it('should create lookups from a list of input addresses and add them to batch, then return batch', () => {
            const batch = SmartyValidatorService.createLookupBatch(mockAddressList);

            expect(mockNewLookup).toHaveBeenCalledTimes(size);
            expect(mockAddToBatch).toHaveBeenCalledTimes(size);
            expect(batch).toBeDefined();
        });
    });

    describe('validate', () => {
        it('should create a lookup batch, send a request to client, and finally print output', async () => {
            const validator = new SmartyValidatorService();

            const createLookupBatchSpy = jest.spyOn(SmartyValidatorService, 'createLookupBatch');
            const getValidatedResultsSpy = jest.spyOn(SmartyValidatorService, 'getValidatedResults');
            const logSpy = jest.spyOn(console, 'log');

            await validator.validate(mockAddressList); 

            expect(createLookupBatchSpy).toHaveBeenCalledTimes(1);
            expect(mockSend).toHaveBeenCalledTimes(1);
            expect(getValidatedResultsSpy).toHaveBeenCalledTimes(size);
            expect(logSpy).toHaveBeenCalledTimes(size);
        });
    });
});