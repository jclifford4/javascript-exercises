const sumAll = function(start, end) 
{
    let startCopy = start;

    if (start > end)
    {
        start = end;
        end = startCopy;
    }

    if ((start < 0 || end < 0) ||
        (typeof start !== 'number' || typeof end !== 'number'))
    {
        return 'ERROR';
    }

    
    let sum = 0;
    for (let i = start; i <= end; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
