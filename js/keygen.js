function getKeys() {
 /*   if (document.getElementById('pincode-input').value.length === 5) {
        let user = getUserKey(document.getElementById('pincode-input').value * 1);
        let admin = getAdminKey(document.getElementById('pincode-input').value * 1);
        document.getElementById('pincode-output-user').value = addnull(user);
        document.getElementById('pincode-output-admin').value = addnull(admin);
    }
*/
    
    if ($('#pincode-input').val().length === 5) {
        var key = parseInt($('#pincode-input').val());
        let user = getUserKey(key);
        let admin = getAdminKey(key);
        $('#pincode-output-user').val(user);
        $('#pincode-output-admin').val(admin);
    }
}

function getUserKey(key) {
    let keygen = 0;
    let sqrtnum = 0;
    var indexedSqrtNum = [];
    var array = [];
    let i = 0; 
    let index = 1;
    let temp = key;
    let total = 0;

    while (temp != 0)
    {
        array.push(temp % 10);
        temp = parseInt(temp / 10);
        array[i] = array[i] + index;
        index = index << 1;
        i++;
    }

    i = 4;
    while (i >= 0)
    {
        if (array[i] > 9)
            total = total * 100;
        else
            total = total * 10;
        total = total + array[i];
        if (array[i] > 9)
            array[i] = parseInt(array[i] % 10) + parseInt(array[i] / 10);
        i--;
    }

    sqrtnum = Math.pow(total, 1.0 / 2.0);
    temp = parseInt(sqrtnum);
    sqrtnum = sqrtnum - temp;

    i = 0;
    while (i <= 10)
    {
        sqrtnum = sqrtnum * 10;
        indexedSqrtNum.push(parseInt(sqrtnum));
        sqrtnum = sqrtnum - indexedSqrtNum[i];
        i++;
    }

    i = 4;
    while (i >= 0)
    {
        keygen = keygen * 10;
        keygen = keygen + indexedSqrtNum[array[i]];
        i--;
    }
    return keygen;
}

function getAdminKey(key)
{
    let keygen = 0;
    let sqrtnum = 0;
    var indexedSqrtNum = [];
    var array = [];
    let i = 0; 
    let index = 1;
    let temp = key;
    let total = 0;

    while (temp != 0)
    {
        array.push(temp % 10);
        temp = parseInt(temp / 10);
        array[i] = array[i] + index;
        index = index << 1;
        i++;
    }

    i = 4;
    while (i >= 0)
    {
        if (array[i] > 9)
            total = total * 100;
        else
            total = total * 10;
        total = total + array[i];
        if (array[i] > 9)
            array[i] = parseInt(array[i] % 10) + parseInt(array[i] / 10);
        i--;
    }

    sqrtnum = Math.pow(total, 1.0 / 3.0);
    temp = parseInt(sqrtnum);
    sqrtnum = sqrtnum - temp;

    i = 0;
    while (i <= 10)
    {
        sqrtnum = sqrtnum * 10;
        indexedSqrtNum.push(parseInt(sqrtnum));
        sqrtnum = sqrtnum - indexedSqrtNum[i];
        i++;
    }

    i = 4;
    while (i >= 0)
    {
        keygen = keygen * 10;
        keygen = keygen + indexedSqrtNum[array[i]];
        i--;
    }
    return keygen;
}

function addnull(str) {
    return ("0000" + str).substr(-5);
}