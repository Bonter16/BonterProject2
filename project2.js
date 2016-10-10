/**
 *   @author Bonter, Brian (Bonterb@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Project 2  || created: 10.3.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let lastName,firstName;
let policyID,birthDay,birthMonth,birthYear,dueDate,numFaults,totalBill,age,currentYear;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1){
        setPolicyID();
        //setBirthDay();
        //setBirthMonth();
        setBirthYear();
        setCurrentYear();
        setAge();
        setDueDate();
        setNumFaults();
        setLastName();
        setFirstName();
        setTotalBill();
        printTotalBill();
        setContinueResponse();
        return main(); //proper tail recursion
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            setContinueResponse(); //improper recursion
        }
    } else {
        continueResponse = 1;
    }
}

function setPolicyID(){
    policyID = Math.floor((Math.random() * 20) + 1);  //JavaScript random number 1 - 20
}

function setBirthDay() {
    birthDay = Number(PROMPT.question(`\nPlease enter birth day:`));
}

function setBirthMonth() {
    birthMonth = Number(PROMPT.question(`\nPlease enter birth month:`));
}

function setBirthYear() {
    birthYear = Number(PROMPT.question(`\nPlease enter birth year:`));
}

function setCurrentYear(){
    currentYear = 2016;
}

function setAge() {
    age = birthYear - currentYear;
}
function setDueDate() {
    dueDate = Number(PROMPT.question(`\nPlease enter premuim due date:`));
}

function setNumFaults(){
    numFaults = Number(PROMPT.question(`\nPlease enter the number of at faults you have:`));
}

function setLastName(){
    lastName = PROMPT.question(`\nPlease enter your last name:`);
}

function setFirstName(){
    firstName = PROMPT.question(`\nPlease enter your first name:`);
}

function setTotalBill(){
    totalBill = 0
    const BASEPRICE = 100
    const YOUNG_AGE_PRICE = 20
    const MIDDLE_AGE_PRICE = 10
    const HILL_AGE_PRICE = 0
    const OLD_AGE_PRICE = 30
    const FAULT_PRICE = 50
    const MIN_AGE = 14
    const YOUNG_AGE = 30
    const MIDDLE_AGE = 45
    const HILL_AGE = 60
    if (age >= MIN_AGE && age < YOUNG_AGE) {
            totalBill = YOUNG_AGE_PRICE + BASEPRICE + (numFaults * FAULT_PRICE)
        } else if (age > YOUNG_AGE && age <= MIDDLE_AGE) {
            totalBill = MIDDLE_AGE_PRICE + BASEPRICE + (numFaults * FAULT_PRICE)
        } else if (age > MIDDLE_AGE && age <= HILL_AGE) {
            totalBill = HILL_AGE_PRICE + BASEPRICE + (numFaults * FAULT_PRICE)
        } else {
            totalBill = OLD_AGE_PRICE + BASEPRICE + (numFaults * FAULT_PRICE)
        }
}

function printTotalBill() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${firstName}'s bill: \$${totalBill}. policy#: ${policyID}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tGoodbye.`);
}

//*this program is to help set up people with a policy id and get them a bill
