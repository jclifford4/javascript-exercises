const findTheOldest = function(people) 
{
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};


function getAge(birth, death)
{
    const dateNow = new Date().getFullYear();

    if (!death)
        return dateNow - birth;

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
