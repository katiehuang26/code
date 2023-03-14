
const Address = require('../../src/Address');

// eslint-disable-next-line max-len
const TEST_FILE = '143 e Maine Street, Columbus, 43215\r\n123 Street, Nowhere, 45678-9010\r\n1 Empora St, Title, 11111\r\n17801 international blvd, seattle, 98158\r\n635 Coleman avenue, san Jose, 95110\r\n3400 vine street, cincinnati, 45220\r\n1 Levee way, Newport, 41071\r\n5 hollywood blvd, LA';

const BAD_TEST_FILE = 'Unfinished, address\r\n123 Street, Nowhere';

const MOCK_ADDRESS_1 = new Address(
    '143 e Maine Street', 'Columbus', '43215'
);

const API_RESPONSE_1 = {
    'lookups': [
        {
            'street': '143 e Maine Street',
            'city': 'Columbus',
            'zipCode': '43215',
            'result': [
                {
                    'inputIndex': 0,
                    'candidateIndex': 0,
                    'deliveryLine1': '143 E Main St',
                    'lastLine': 'Columbus OH 43215-5370',
                    'deliveryPointBarcode': '432155370992',
                    'components': {
                        'primaryNumber': '143',
                        'streetName': 'Main',
                        'streetPredirection': 'E',
                        'streetSuffix': 'St',
                        'cityName': 'Columbus',
                        'defaultCityName': 'Columbus',
                        'state': 'OH',
                        'zipCode': '43215',
                        'plus4Code': '5370',
                        'deliveryPoint': '99',
                        'deliveryPointCheckDigit': '2'
                    },
                    'metadata': {
                        'recordType': 'H',
                        'zipType': 'Standard',
                        'countyFips': '39049',
                        'countyName': 'Franklin',
                        'carrierRoute': 'C023',
                        'congressionalDistrict': '03',
                        'buildingDefaultIndicator': 'Y',
                        'rdi': 'Commercial',
                        'elotSequence': '0232',
                        'elotSort': 'A',
                        'latitude': 39.9567,
                        'longitude': -82.99384,
                        'coordinateLicense': 'SmartyStreets',
                        'precision': 'Zip9',
                        'timeZone': 'Eastern',
                        'utcOffset': -5,
                        'obeysDst': true
                    },
                    'analysis': {
                        'dpvMatchCode': 'D',
                        'dpvFootnotes': 'AAN1',
                        'cmra': 'N',
                        'vacant': 'N',
                        'noStat': 'Y',
                        'active': 'Y',
                        'footnotes': 'H#M#'
                    }
                }
            ]
        },
        {
            'street': '1 Empora St',
            'city': 'Title',
            'zipCode': '11111',
            'result': []
        },
        {
            'street': '123 Street',
            'city': 'Nowhere',
            'zipCode': '45678-9010',
            'result': []
        },
        {
            'street': '17801 international blvd',
            'city': 'seattle',
            'zipCode': '98158',
            'result': [
                {
                    'inputIndex': 3,
                    'candidateIndex': 0,
                    'deliveryLine1': '17801 International Blvd',
                    'lastLine': 'Seatac WA 98158-1202',
                    'deliveryPointBarcode': '981581202013',
                    'components': {
                        'primaryNumber': '17801',
                        'streetName': 'International',
                        'streetSuffix': 'Blvd',
                        'cityName': 'Seatac',
                        'defaultCityName': 'Seattle',
                        'state': 'WA',
                        'zipCode': '98158',
                        'plus4Code': '1202',
                        'deliveryPoint': '01',
                        'deliveryPointCheckDigit': '3'
                    },
                    'metadata': {
                        'recordType': 'S',
                        'zipType': 'Standard',
                        'countyFips': '53033',
                        'countyName': 'King',
                        'carrierRoute': 'C015',
                        'congressionalDistrict': '09',
                        'rdi': 'Commercial',
                        'elotSequence': '0072',
                        'elotSort': 'A',
                        'latitude': 47.44354,
                        'longitude': -122.29622,
                        'coordinateLicense': 'SmartyStreets',
                        'precision': 'Zip9',
                        'timeZone': 'Pacific',
                        'utcOffset': -8,
                        'obeysDst': true
                    },
                    'analysis': {
                        'dpvMatchCode': 'Y',
                        'dpvFootnotes': 'AABBR1',
                        'cmra': 'Y',
                        'vacant': 'N',
                        'noStat': 'N',
                        'active': 'Y'
                    }
                }
            ]
        },
        {
            'street': '635 Coleman avenue',
            'city': 'san Jose',
            'zipCode': '95110',
            'result': [
                {
                    'inputIndex': 4,
                    'candidateIndex': 0,
                    'deliveryLine1': '635 Coleman Ave',
                    'lastLine': 'San Jose CA 95110-2029',
                    'deliveryPointBarcode': '951102029993',
                    'components': {
                        'primaryNumber': '635',
                        'streetName': 'Coleman',
                        'streetSuffix': 'Ave',
                        'cityName': 'San Jose',
                        'defaultCityName': 'San Jose',
                        'state': 'CA',
                        'zipCode': '95110',
                        'plus4Code': '2029',
                        'deliveryPoint': '99',
                        'deliveryPointCheckDigit': '3'
                    },
                    'metadata': {
                        'recordType': 'H',
                        'zipType': 'Standard',
                        'countyFips': '06085',
                        'countyName': 'Santa Clara',
                        'carrierRoute': 'C008',
                        'congressionalDistrict': '18',
                        'buildingDefaultIndicator': 'Y',
                        'rdi': 'Commercial',
                        'elotSequence': '0127',
                        'elotSort': 'A',
                        'latitude': 37.34141,
                        'longitude': -121.90982,
                        'coordinateLicense': 'SmartyStreets',
                        'precision': 'Zip9',
                        'timeZone': 'Pacific',
                        'utcOffset': -8,
                        'obeysDst': true
                    },
                    'analysis': {
                        'dpvMatchCode': 'D',
                        'dpvFootnotes': 'AAN1',
                        'cmra': 'N',
                        'vacant': 'N',
                        'noStat': 'N',
                        'active': 'Y',
                        'footnotes': 'H#N#'
                    }
                }
            ]
        },
        {
            'street': '3400 vine street',
            'city': 'cincinnati',
            'zipCode': '45220',
            'result': [
                {
                    'inputIndex': 5,
                    'candidateIndex': 0,
                    'deliveryLine1': '3400 Vine St',
                    'lastLine': 'Cincinnati OH 45220-1333',
                    'deliveryPointBarcode': '452201333007',
                    'components': {
                        'primaryNumber': '3400',
                        'streetName': 'Vine',
                        'streetSuffix': 'St',
                        'cityName': 'Cincinnati',
                        'defaultCityName': 'Cincinnati',
                        'state': 'OH',
                        'zipCode': '45220',
                        'plus4Code': '1333',
                        'deliveryPoint': '00',
                        'deliveryPointCheckDigit': '7'
                    },
                    'metadata': {
                        'recordType': 'S',
                        'zipType': 'Standard',
                        'countyFips': '39061',
                        'countyName': 'Hamilton',
                        'carrierRoute': 'C024',
                        'congressionalDistrict': '01',
                        'rdi': 'Commercial',
                        'elotSequence': '0001',
                        'elotSort': 'A',
                        'latitude': 39.14414,
                        'longitude': -84.51089,
                        'coordinateLicense': 'SmartyStreets',
                        'precision': 'Zip9',
                        'timeZone': 'Eastern',
                        'utcOffset': -5,
                        'obeysDst': true
                    },
                    'analysis': {
                        'dpvMatchCode': 'Y',
                        'dpvFootnotes': 'AABB',
                        'cmra': 'N',
                        'vacant': 'N',
                        'noStat': 'N',
                        'active': 'Y',
                        'footnotes': 'N#'
                    }
                }
            ]
        },
        {
            'street': '1 Levee way',
            'city': 'Newport',
            'zipCode': '41071',
            'result': [
                {
                    'inputIndex': 6,
                    'candidateIndex': 0,
                    'deliveryLine1': '1 Levee Way',
                    'lastLine': 'Newport KY 41071-1652',
                    'deliveryPointBarcode': '410711652995',
                    'components': {
                        'primaryNumber': '1',
                        'streetName': 'Levee',
                        'streetSuffix': 'Way',
                        'cityName': 'Newport',
                        'defaultCityName': 'Newport',
                        'state': 'KY',
                        'zipCode': '41071',
                        'plus4Code': '1652',
                        'deliveryPoint': '99',
                        'deliveryPointCheckDigit': '5'
                    },
                    'metadata': {
                        'recordType': 'H',
                        'zipType': 'Standard',
                        'countyFips': '21037',
                        'countyName': 'Campbell',
                        'carrierRoute': 'C001',
                        'congressionalDistrict': '04',
                        'buildingDefaultIndicator': 'Y',
                        'rdi': 'Commercial',
                        'elotSequence': '0141',
                        'elotSort': 'A',
                        'latitude': 39.09425,
                        'longitude': -84.49597,
                        'coordinateLicense': 'SmartyStreets',
                        'precision': 'Zip9',
                        'timeZone': 'Eastern',
                        'utcOffset': -5,
                        'obeysDst': true
                    },
                    'analysis': {
                        'dpvMatchCode': 'D',
                        'dpvFootnotes': 'AAN1',
                        'cmra': 'N',
                        'vacant': 'N',
                        'noStat': 'Y',
                        'active': 'Y',
                        'footnotes': 'H#'
                    }
                }
            ]
        },
        {
            'street': '5 hollywood blvd',
            'city': 'LA  ',
            'result': []
        }
    ]
};

const LOOKUP_RESULT_1 = [
    {
        'inputIndex': 0,
        'candidateIndex': 0,
        'deliveryLine1': '143 E Main St',
        'lastLine': 'Columbus OH 43215-5370',
        'deliveryPointBarcode': '432155370992',
        'components': {
            'primaryNumber': '143',
            'streetName': 'Main',
            'streetPredirection': 'E',
            'streetSuffix': 'St',
            'cityName': 'Columbus',
            'defaultCityName': 'Columbus',
            'state': 'OH',
            'zipCode': '43215',
            'plus4Code': '5370',
            'deliveryPoint': '99',
            'deliveryPointCheckDigit': '2'
        },
        'metadata': {
            'recordType': 'H',
            'zipType': 'Standard',
            'countyFips': '39049',
            'countyName': 'Franklin',
            'carrierRoute': 'C023',
            'congressionalDistrict': '03',
            'buildingDefaultIndicator': 'Y',
            'rdi': 'Commercial',
            'elotSequence': '0232',
            'elotSort': 'A',
            'latitude': 39.9567,
            'longitude': -82.99384,
            'coordinateLicense': 'SmartyStreets',
            'precision': 'Zip9',
            'timeZone': 'Eastern',
            'utcOffset': -5,
            'obeysDst': true
        },
        'analysis': {
            'dpvMatchCode': 'D',
            'dpvFootnotes': 'AAN1',
            'cmra': 'N',
            'vacant': 'N',
            'noStat': 'Y',
            'active': 'Y',
            'footnotes': 'H#M#'
        }
    }
];

module.exports = {
    TEST_FILE,
    BAD_TEST_FILE,
    MOCK_ADDRESS_1,
    API_RESPONSE_1,
    LOOKUP_RESULT_1
};
