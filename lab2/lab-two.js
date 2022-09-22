let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function capitalize(word) {
    let wordToCapitalize = word;
    let capitalizedWord = wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1);
    return capitalizedWord
}

function isLeapYear(year) {
    let inputYear = year;
    if (inputYear % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

function isJanFeb(month) {
    let imputMonth = capitalize(month);
    if (imputMonth === "January" || imputMonth === "February") {
        return true;
    } else {
        return false;
    }
}

function is16Or20(year) {
    let century = isolateFirstTwoDigits(year);
    if (century === 16 ||century === 20) {
        return true;
    } else {
        return false;
    }
}

function is17Or21(year) {
    let century = isolateFirstTwoDigits(year);
    if (century === 17 || century === 21) {
        return true;
    } else {
        return false;
    }
}

function is18(year) {
    let century = isolateFirstTwoDigits(year);
    if (century === 18) {
        return true;
    } else {
        return false;
    }
}

function getMonthCode(month) {
    let inputMonth = month;
    let capitalizedMonth = capitalize(inputMonth);
    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (capitalizedMonth === monthName[3] || capitalizedMonth === monthName[6]) {
        return 0;
    } else if (capitalizedMonth === monthName[0] || capitalizedMonth === monthName[9]) {
        return 1;
    } else if (capitalizedMonth === monthName[4]) {
        return 2;
    } else if (capitalizedMonth === monthName[7]) {
        return 3;
    } else if (capitalizedMonth === monthName[1] || capitalizedMonth === monthName[2] || capitalizedMonth === monthName[10]) {
        return 4;
    } else if (capitalizedMonth === monthName[5]) {
        return 5;
    } else {
        return 6;
    }
}
function dayCodeAsWord(num) {
    if (num === 0) {
        return(daysOfWeek[6]);
    } else if (num === 1) {
        return(daysOfWeek[0]);
    } else if (num === 2) {
        return(daysOfWeek[1]);
    } else if (num === 3) {
        return(daysOfWeek[2]);
    } else if (num === 4) {
        return(daysOfWeek[3]);
    } else if (num === 5) {
        return(daysOfWeek[4]);
    } else {
        return(daysOfWeek[5]);
    }
}

function isolateFirstDigit(num) {
    let xx = num;
    let yy = xx.toString();
    let zz = yy.charAt(0);
    return parseInt(zz);
}

function isolateFirstTwoDigits(num) {
    let aa = num;
    let bb = aa.toString();
    let cc = bb.slice(0, -2);
    return parseInt(cc);
}

function getLastTwoDigits(num) {
    let dd = num;
    let ee= dd.toString();
    let ff = ee.slice(2, 5)
    return parseInt(ff)
}

function getDayOfTheWeek(year, month, day) {
    let quotient1 = getLastTwoDigits(year) / 12; // should I make year.slice(2) its own variable?
    let firstDigitQuotient1 = isolateFirstDigit(quotient1)
    let remainder = getLastTwoDigits(year) % 12;
    let quotient2 = remainder / 4;
    let firstDigitQuotient2 = isolateFirstDigit(quotient2);
    let inputMonth = month;
    let capitalizedMonth = capitalize(inputMonth);
    let basicMonthCode = getMonthCode(capitalizedMonth);
    if (isLeapYear(year) == true && is16Or20(year) == true && isJanFeb(month) == true) {
        var monthCode = basicMonthCode + 5;
    } else if (is16Or20(year) == true) {
        var monthCode = basicMonthCode + 6;
    } else if (isLeapYear(year) == true && is17Or21(year) == true && isJanFeb(month) == true) {
        var monthCode = basicMonthCode + 3;
    } else if (is17Or21(year) == true) {
        var monthCode = basicMonthCode + 4;
    } else if (isLeapYear(year) == true && is18(year) == true && isJanFeb(month) == true) {
        var monthCode = basicMonthCode + 1;
    } else if (is18(year) == true) {
        var monthCode = basicMonthCode + 2;
    } else if (isLeapYear(year) == true && isJanFeb(month) == true) {
        var monthCode = basicMonthCode - 1;
    } else {
        var monthCode = basicMonthCode;
    }
    let inputDay = parseInt(day);
    let dayCode = (firstDigitQuotient1 + remainder + firstDigitQuotient2 + inputDay + monthCode) % 7;
    let dayOfWeek = dayCodeAsWord(dayCode);
    return(dayOfWeek)
}

function makeCalendar() {
    let dayJan = 1;
    while (dayJan <= 31) {
        console.log(`1-${dayJan}-2022 is a ${getDayOfTheWeek(2022, "January", dayJan)}.`);
        dayJan++;
    } 
    let dayFeb = 1;
    while (dayFeb <= 28) {
        console.log(`2-${dayFeb}-2022 is a ${getDayOfTheWeek(2022, "February", dayFeb)}.`);
        dayFeb++;
    }
    let dayMar = 1
    while (dayMar <= 31) {
        console.log(`3-${dayMar}-2022 is a ${getDayOfTheWeek(2022, "March", dayMar)}.`)
        dayMar++;
    }
    let dayApr = 1;
    while (dayApr <= 30) {
        console.log(`4-${dayApr}-2022 is a ${getDayOfTheWeek(2022, "April", dayApr)}.`);
        dayApr++;
    }
    let dayMay = 1;
    while (dayMay <= 31) {
        console.log(`5-${dayMay}-2022 is a ${getDayOfTheWeek(2022, "May", dayMay)}.`);
        dayMay++; 
    }
    let dayJune = 1
    while (dayJune <= 30) {
        console.log(`6-${dayJune}-2022 is a ${getDayOfTheWeek(2022, "June", dayJune)}.`);
        dayJune++;
    }
    let dayJuly = 1;
    while (dayJuly <= 31) {
        console.log(`7-${dayJuly}-2022 is a ${getDayOfTheWeek(2022, "July", dayJuly)}.`);
        dayJuly++;
    }
    let dayAug = 1
    while (dayAug <= 31) {
        console.log(`8-${dayJune}-2022 is a ${getDayOfTheWeek(2022, "August", dayAug)}.`);
        dayAug++;
    }
    let daySept = 1
    while (daySept <= 30) {
        console.log(`9-${daySept}-2022 is a ${getDayOfTheWeek(2022, "September", daySept)}.`);
        daySept++;
    }
    let dayOct = 1
    while (dayOct <= 31) {
        console.log(`10-${dayOct}-2022 is a ${getDayOfTheWeek(2022, "October", dayOct)}.`);
        dayOct++;
    }
    let dayNov = 1
    while (dayNov <= 30) {
        console.log(`11-${dayNov}-2022 is a ${getDayOfTheWeek(2022, "November", dayNov)}.`);
        dayNov++;
    }
    let dayDec = 1
    while (dayDec <= 31) {
        console.log(`12-${dayDec}-2022 is a ${getDayOfTheWeek(2022, "December", dayDec)}.`);
        dayDec++;
    }
}

module.exports = {getDayOfTheWeek, makeCalendar}