const user = {
  data: [
    {
      name: 'kamaraj',
      age: '23',
      native: 'KVP'
    },
    {
      name: 'KumarSTR',
      age: '45',
      native: 'TVL'
    },
    {
      name: 'Inbaraj',
      age: '32',
      native: 'MDU'
    }
  ]
};
const { data } = user;
const [userOne, userTwo, userThree] = data;
const { name: nameUserOne, age: ageUserOne } = userOne;
const { name: nameUserTwo, age: ageUserTwo } = userTwo;
const { name: nameuserThree, age: ageuserThree } = userThree;
console.log(nameUserOne, ageUserOne);
console.log(nameUserTwo, ageUserTwo);
console.log(nameuserThree, ageuserThree);