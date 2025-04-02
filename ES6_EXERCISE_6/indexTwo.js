const user = {
    Name: 'kumar',
    age: 25,
    address: 2317,
    city: 'kovilpatti',
    personalInfo: [{ nickName: 'GK', email: 'kumar@mitrahsoft.com', phone: 123456 }]
};
displayResult = (user) => {
    const { personalInfo, ...restDetails } = user;
    const [kumarInfo] = personalInfo;
    const { nickName, email, ...restInfo } = kumarInfo
    console.log("Nickname:", nickName);
    console.log("Email:", email);
}
displayResult(user);