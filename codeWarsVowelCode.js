encode = (testString) => {
    testString = testString.replace('a', 1);
    testString = testString.replace('e', 2);
    testString = testString.replace('i', 3);
    testString = testString.replace('o', 4);
    testString = testString.replace('u', 5);
    return testString;
}

decode = (testString) => {
    testString = testString.replace('1', 'a');
    testString = testString.replace('2', 'e');
    testString = testString.replace('3', 'i');
    testString = testString.replace('4', 'o');
    testString = testString.replace('5', 'u');
    return testString;
}

console.log(encode("you"));