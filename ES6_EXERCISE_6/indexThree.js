const car = {
    manufacturer: {
        toyota: [
            {
                vitz: {
                    color: 'Blue',
                    bodyType: 'Hatchback'
                },
                corolla: {
                    color: 'Silver',
                    bodyType: 'Sedan'
                }
            }
        ],
        Honda: [
            {
                civic: {
                    color: 'White',
                    bodyType: 'Hatchback'
                },
                city: {
                    color: 'Black',
                    bodyType: 'Sedan'
                }
            }
        ],
        Maruthi: [
            {
                Brezza: {
                    color: 'White',
                    bodyType: 'SUV'
                },
                Ciaz: {
                    color: 'Black',
                    bodyType: 'Sedan'
                }
            }
        ]
    }
};
printResult = (car) => {
    const { manufacturer } = car;
    const { Honda, Maruthi, ...restManufacturer } = manufacturer;
    const [hondaCars] = Honda;
    const { city, ...restHonda } = hondaCars;
    const [maruthiCars] = Maruthi;
    const { Ciaz, ...restMaruthi } = maruthiCars
    const { color: colorCity, bodyType: bodyCity } = city;
    const { color: colorCiaz, bodyType: bodyCiaz } = Ciaz;
    console.log("Honda city details: ", colorCity, bodyCity);
    console.log("Maruthi Ciaz details: ", colorCiaz, bodyCiaz);
}
printResult(car);