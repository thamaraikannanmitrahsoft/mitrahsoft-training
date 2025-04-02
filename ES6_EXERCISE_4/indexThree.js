const user = {
    data: [
        {
            gender: 'Male',
            requestSource: 'Student',
            requestStatus: 'Pending',
            requestData: {
                educationInfo: [
                    {
                        userEmail: 'Doaulas@rrigg.com',
                        qualification: 'College'
                    }
                ],
                personalInfo: [
                    {
                        userFirstName: 'Doaul',
                        userLastName: 'Doaulas',
                        designation: 'Developer',
                        location: {
                            doorNumber: '2323',
                            streetName: 'indra nager',
                            city: 'kovilaptti'
                        }
                    }
                ]
            }
        },
        {
            gender: 'Female',
            requestSource: 'Student',
            requestStatus: 'Success',
            requestData: {
                educationInfo: [
                    {
                        userEmail: 'pooja@rrigg.com',
                        qualification: 'College'
                    }
                ],
                personalInfo: [
                    {
                        userFirstName: 'pooja',
                        userLastName: 'kekar',
                        designation: 'Tester',
                        location: {
                            doorNumber: '1236',
                            streetName: 'gandhi gram',
                            city: 'rajasthan'
                        }
                    }
                ]
            }
        }
    ]
}
const { data } = user;
const [userOne, userTwo] = data;
const { requestData } = userOne;
const { personalInfo } = requestData;
const [userOnePersonal] = personalInfo;
const { location } = userOnePersonal;
const { streetName, city } = location;
const { requestData: requestDataTwo } = userTwo;
const { personalInfo: personalInfoTwo } = requestDataTwo;
const [userTwoPersonal] = personalInfoTwo;
const { location: locationTwo } = userTwoPersonal;
const { streetName: streetNameTwo, city: cityTwo } = locationTwo;
console.log(streetName, city);
console.log(streetNameTwo, cityTwo);