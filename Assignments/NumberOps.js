function isPrime(n)
{
    let result = true;
    for(let i = 2; i <= n/2; i++)
    {
        if(n%i == 0)
        {
            result = false;
            break;
        }
    }
    return result;
}

function isPalandrome(n)
{
    let digits = getDigits(n);
    let result = true;
    let j = -1;
    for(let i = 0; i < digits.length/2; i++)
    {
        if(digits[i] == digits[j])
        {
            j--;
        }
        else
        {
            result = false;
            break;
        }
    }
    return result;
}

function switchDigits(n,x,y)
{
    let digits = getDigits(n);
    digits = switchArrayEntries(digits,x,y);
    let result = digitsToNumber(digits);
    return result;
}

function getPrimeFactors(n)
{
    let result = [];
    for(let i = 2; i<n; i++)
    {
        while(n%i == 0)
        {
            result.push(i);
            n = n/i;
        }
    }
    if (n > 2)
    {
        result.push(n);
    }
    return result;
}

function reverseInteger(n)
{
    let digits = getDigits(n);
    digits = reverseDigits(digits);
    let result = digitsToNumber(digits);
    return result;
}

function digitsToNumber(array)
{
    let result = 0;
    let j = -1;
    for(let i = 0; i < array.length; i++)
    {
        let expo = 10**i;
        let digit = array[j] * expo;
        result = result + digit;
        j--;
    }
    return result;
}

function switchArrayEntries(array,x,y)
{
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
    return array;
}

function getDigits(n)
{
    let temp = n;
    let digits = [];
    while(temp > 0)
    {
        digits.push(temp%10);
        temp /= 10;
    }
    digits = reverseDigits(digits);
    return digits;
}

function reverseDigits(digits)
{
    let size = digits.length
    let j = -1;
    let reverse = [];
    for(let i=0;i<size;i++)
    {
        reverse.push(digits[j]);
        j--;
    }
    return reverse;
}

function getDigitCount(n)
{
    let temp = n;
    let count = 0;
    while(temp > 0)
    {
        temp /= 10;
        count++;
    }
    return count;
}