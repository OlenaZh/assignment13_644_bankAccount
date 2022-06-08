const $ = function (id) {
    return document.getElementById(id);
};

function BankAccount(ownerName) {
    let balance = 0;
    
    return {
        withdrawal: function (withdrawalAmount) {
            if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
                balance -= withdrawalAmount;
            }
        },
        deposit: function (depositAmount) {
            if (depositAmount > 0) {
                balance += depositAmount;
            }
        },
        getBalance: function () {
            return balance;
        },
        getOwnerName: function () {
            return ownerName;
        }
    };
}

const account = new BankAccount('Olena Zheliabina');

    $('accountname').innerHTML = account.getOwnerName();
    $('deposit').addEventListener('click', () => {
        let deposit = parseInt(prompt('How much would you like to deposit?'));
        if (isNaN(deposit) || deposit < 0) {
            alert('Please enter a valid number.');
            return false;
        }
        account.deposit(deposit);
        $('balance').innerHTML = 'Balance: $' + account.getBalance();
    });
    $('withdrawal').addEventListener('click', () => {
        let withdrawal = parseInt(prompt('How much would you like to withdrawal?'));
        if (isNaN(withdrawal) || withdrawal < 0) {
            alert('Please enter a valid number.');
            return false;
        }
        account.withdrawal(withdrawal);
        $('balance').innerHTML = 'Balance: $' + account.getBalance();
    });
