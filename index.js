#! /usr/bin/env node
import inquirer from "inquirer";
let My_Balance = 50000;
let My_Pin = 9090;
const Answer = await inquirer.prompt([
    {
        name: "Pin_Code",
        message: "Please Enter Your Pin Code",
        type: "number",
    },
]);
if (Answer.Pin_Code === My_Pin) {
    console.log("Correct Pin Code");
    let Operations = await inquirer.prompt([
        {
            name: "Function",
            message: "Please Select One of The Options",
            type: "list",
            choices: ["Cash Withdrawal", "Fast Cash", "Balance Check", "Cancle Out"]
        }
    ]);
    // Cash withdrawl condition
    if (Operations.Function === "Cash Withdrawal") {
        let Entre_Amount = await inquirer.prompt([
            {
                name: "Amount",
                message: "Please Entre Your Amount",
                type: "number"
            }
        ]);
        if (Entre_Amount.Amount <= My_Balance) {
            My_Balance -= Entre_Amount.Amount;
            console.log(`Your Remaining Balance is: ${My_Balance} \n Tank You For Using The ATM \n`);
        }
        else {
            console.log("Sorry You Have not Sufficient Balance");
        }
        ;
    }
    ;
    // Fast Cash condition
    if (Operations.Function === "Fast Cash") {
        let Entre_Fast_Cash_Amount = await inquirer.prompt([
            {
                name: "Fast_Cash_Amount",
                message: "Please Entre Your Amount",
                type: "list",
                choices: ["5000", "10000", "20000", "50000"]
            }
        ]);
        if (Entre_Fast_Cash_Amount.Fast_Cash_Amount <= My_Balance) {
            My_Balance -= Entre_Fast_Cash_Amount.Fast_Cash_Amount;
            console.log(`Your Remaining Balance is: ${My_Balance} \n Tank You For Using The ATM \n`);
        }
    }
    ;
    // Balance Check condition
    if (Operations.Function === "Balance Check") {
        console.log(`Your Current Balance is: ${My_Balance}`);
        console.log("Tank You For Using The ATM");
    }
    ;
    // Cancle out condition
    if (Operations.Function === "Cancle Out") {
        console.log("Tank You For Using The ATM");
    }
    ;
}
else {
    console.log("Incorrect Pin Code. Please Entre the Correct Pin Code");
}
;
