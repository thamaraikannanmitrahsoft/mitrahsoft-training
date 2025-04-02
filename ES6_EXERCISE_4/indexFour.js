const user = [
    { firstName: 'suresh' },
    'lname',
    23,
    {
        cityCode: 'KVP',
        location: {
            doorNumber: '1236',
            streetName: 'gandhi gram'
        }
    },
    'tamilnadu',
    'india',
    '628502'
];
const [fname, lname, age, address, state, country, pincode] = user;
const { firstName } = fname;
const { location } = address;
const { doorNumber, streetName } = location;
console.log(firstName);
console.log(doorNumber);
console.log(streetName);
console.log(pincode);