function customerName(){
    return customerName
}
var customerName = "bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer= `not bob`;
    return customerName;
}

function overwriteBestCustomer() {
    bestCustomer = `maybe bob`
}

const leastFavoriteCustomer = `Bob is being discriminated against`

function changeLeastFavoriteCustomer(newName) {
    leastFavoriteCustomer = `bob`
    return leastFavoriteCustomer;
}