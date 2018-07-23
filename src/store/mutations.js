export default {
    increment(state) {
        state.count++
    },
    incrementPP(state) {
        state.purchasePrice++
    },
    // Person
    inputCurrentRent(state, value) {
        state.currentRent = value
    },
    // Apartment
    inputPurchasePrice(state, value) {
        state.purchasePrice = value
    },
    inputCourtage(state, value) {
        state.courtage = value
    },
    inputSquareMeters(state, value) {
        state.squareMeters = value
    },
    inputRenovationCost(state, value) {
        state.renovationCost = value
    },
    inputRenovationCostPerMonth(state, value) {
        state.renovationCostPerMonth = value
    },

    inputRentalIncome(state, value) {
        state.rentalIncome = value
    },
    inputHouseMoney(state, value) {
        state.houseMoney = value
    },
    inputHouseMoneyFoldable(state, value) {
        state.houseMoneyFoldable = value
    },
    // Loan
    inputSelfCaptive(state, value) {
        state.selfCaptive = value
    },
    inputLoanInterest(state, value) {
        state.loanInterest = value
    },
    inputRuntime(state, value) {
        state.runtime = value
    },
    inputPropertyTransferTax(state, value) {
        state.propertyTransferTax = value
    },
    inputRegisterCosts(state, value) {
        state.registerCosts = value
    },
    inputIncomeTaxRate(state, value) {
        state.incomeTaxRate = value
    },
    inputRentalSavings(state, value) {
        state.rentalSavings = value
    },
    // Investment
    inputInvestInterest(state, value) {
        state.investInterest = value
    }
}