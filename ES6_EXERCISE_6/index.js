const values = { one: 1, two: 2, three: 3, four: 4, five: 5 };
printValues = ({ three, ...rest }) => {
    for (let key in rest) {
        console.log(rest[key])
    }
}
printValues(values);