function calculateTax(income) {
    if (income < 12000) return 0;
    else if (income <= 36000) return income * 0.2;
    else return income * 0.4;

}

export default calculateTax;