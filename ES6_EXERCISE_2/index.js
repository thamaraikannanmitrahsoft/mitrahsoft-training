var arr = [1, 2, 3, 4, 5];
getLength = (data = []) => {
    console.log('length', data.length);
};
getLength();

getString = (str = "", position) => {
    console.log('new string:', str.slice(0, position));
};
getString();