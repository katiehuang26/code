// Defines an address object to store data about an address that is being validated

class Address {
    constructor(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zipCode = zip;
    }

    getStreet() {
        return this.street;
    }

    getCity() {
        return this.city;
    }

    getZipCode() {
        return this.zipCode;
    }

    toString() {
        return `${this.street}, ${this.city} ${this.zipCode}`;
    }
}

module.exports = Address;