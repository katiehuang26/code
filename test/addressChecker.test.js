
// Tests for main
const fs = require('fs');

const mockReadAddresses = jest.fn().mockReturnValue('addresses');

const { main } = require('../src/addressChecker');
const SmartyValidatorService = require('../src/SmartyValidatorService');

jest.mock('../src/SmartyValidatorService');
jest.mock('fs');
jest.mock('../src/readAddresses', () => {
    return {
        readAddresses: mockReadAddresses,
    };
});

describe('main', () => {
    const mockValidate = jest.fn().mockResolvedValue();
    beforeAll(() => {
        SmartyValidatorService.mockImplementation(() => {
            return {
                validate: mockValidate
            };
        });
    });

    it('should read file provided in commandline argument, read addresses from the data, and then call validate', async () => {
        const readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue('text');

        await main();

        expect(readFileSyncSpy).toHaveBeenCalled();
        expect(mockReadAddresses).toHaveBeenCalledWith('text');
        expect(mockValidate).toHaveBeenCalledWith('addresses');
    });
});
