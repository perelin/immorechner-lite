import immoUtils from './../utils/immorechner_util'

export default {
    // Basic Purchase
    totalClosingCostsPercent(state) {
        return state.courtage + state.propertyTransferTax + state.registerCosts
    },
    totalClosingCosts(state, getters) {
        return (getters.totalClosingCostsPercent / 100) * state.purchasePrice
    },
    totalPurchaseCost(state, getters) {
        return getters.totalClosingCosts + state.purchasePrice + state.renovationCost
    },
    pricePerSquareMeter(state, getters) {
        return (getters.totalPurchaseCost) / Math.max(state.squareMeters, 1)
    },
    loanAmount(state, getters) {
        return getters.totalPurchaseCost - state.selfCaptive
    },
    yearlyLoanRate(state, getters) {
        // Nic sagt: basiert auf https://de.wikipedia.org/wiki/Annuit%C3%A4tendarlehen 

        let interestPowRuntime = Math.pow((100 + state.loanInterest) / 100, state.runtime)

        // console.log((interestPowRuntime))
        // console.log((state.loanInterest/100 * interestPowRuntime))
        // console.log((interestPowRuntime - 1))

        let yearlyLoanRate = getters.loanAmount * (state.loanInterest / 100 * interestPowRuntime) / (interestPowRuntime - 1)

        if (isNaN(yearlyLoanRate)) {
            yearlyLoanRate = 0
        }
        return yearlyLoanRate
    },
    monthlyLoanRate(state, getters) {
        //return getters.yearlyLoanRate
        return getters.yearlyLoanRate / 12
            //return 20
    },
    totalInterests(state, getters) {
        return getters.yearlyLoanRate * state.runtime - getters.loanAmount
    },
    monthlyInterests(state, getters) {
        let monthlyInterests = getters.totalInterests / state.runtime / 12
        if (isNaN(monthlyInterests)) {
            monthlyInterests = 0
        }
        return monthlyInterests
    },
    // Basic Letting
    houseMoneyFoldable(state, getters) {
        return state.houseMoney * state.houseMoneyFoldablePercent
    },
    houseMoneyNotFoldable(state, getters) {
        return state.houseMoney - getters.houseMoneyFoldable
    },
    totalRenovationCostPerMonth(state, getters) {
        return state.renovationCostPerMonth * state.squareMeters / 12
    },
    burdenPerMonthLetting(state, getters) {
        let burden = state.rentalIncome - getters.monthlyLoanRate - getters.totalRenovationCostPerMonth - state.houseMoney + getters.houseMoneyFoldable
        return immoUtils.checkIfValidNumber(burden)
    },
    burdenPerYearInclTaxLetting(state, getters) {
        let burden = getters.totalAdditionalPaymentLetting * 12
        return immoUtils.checkIfValidNumber(burden)
    },
    taxSavingsAmortizationLetting(state, getters) {
        let totalAmortizablePurchaseCosts = state.purchasePrice + getters.totalClosingCosts

        let taxSavingsAmortizationPerYear = totalAmortizablePurchaseCosts * state.amortization * state.residentialShare

        return taxSavingsAmortizationPerYear / 12 * -1
    },
    incomeDemiseLetting(state, getters) {
        return state.rentalIncome - getters.monthlyInterests - getters.houseMoneyNotFoldable - getters.totalRenovationCostPerMonth
    },
    taxesLetting(state, getters) {
        let taxes = (getters.incomeDemiseLetting + getters.taxSavingsAmortizationLetting - (state.propertyTaxPerYear / 12)) * state.incomeTaxRate
        return taxes
    },
    totalAdditionalPaymentLetting(state, getters) {
        return getters.burdenPerMonthLetting - getters.taxesLetting
    },
    increaseInValueLetting(state, getters) {
        let increaseInValueLetting = getters.loanAmount / 12 / state.runtime
        return immoUtils.checkIfValidNumber(increaseInValueLetting)
    },
    resultLetting(state, getters) {
        return getters.burdenPerMonthLetting - getters.taxesLetting + getters.increaseInValueLetting
    },
    returnLetting(state, getters) {
        let returnLetting = getters.resultLetting * 12 / getters.loanAmount * 100
        return immoUtils.checkIfValidNumber(returnLetting)
    },
    resultLettingAfterRuntime(state, getters) {
        return getters.resultLetting * 12 * state.runtime
    },
    returnLettingAfterRuntime(state, getters) {
        let burden = getters.resultLetting / getters.burdenPerMonthLetting
        return immoUtils.checkIfValidNumber(burden)
    },
    burdenPerMonthLettingOwnership(state, getters) {
        return state.rentalIncome - getters.totalRenovationCostPerMonth - state.houseMoney + state.houseMoneyFoldable
    },

    // Buy Owner-Occupation (OO)
    overallBurden(state, getters) {
        return state.rentalSavings - getters.monthlyLoanRate - state.houseMoney
    },
    effectiveMonthlyBurden(state, getters) {
        return (getters.monthlyLoanRate + state.houseMoney) * -1
    },
    resumeOO(state, getters) {
        return getters.increaseInValueLetting + getters.overallBurden
    },
    resumeOOAfterRuntime(state, getters) {
        return getters.resumeOO * 12 * state.runtime
    },
    // Investment
    totalSumInvest(state, getters) {
        let interestAfterInflation = state.investInterest / 100 - state.inflation
        let flatTaxReverse = 1 - state.abgeltungssteuer
        let gain = 1 + (interestAfterInflation * flatTaxReverse)
        return state.selfCaptive * Math.pow(gain, state.runtime)
    },
    yearlyWinningsInvest(state, getters) {
        return (getters.totalSumInvest - state.selfCaptive) / state.runtime
    },
    monthlyWinningsInvest(state, getters) {
        return getters.yearlyWinningsInvest / 12
    },
    resumeInvest(state, getters) {
        return getters.monthlyWinningsInvest + getters.totalAdditionalPaymentLetting * -1
    },
    resumeInvestAfterRuntime(state, getters) {
        return getters.resumeInvest * 12 * state.runtime
    },
    // TRENNER
    yieldRentGrossYear(state) {
        return state.rentColdNetYear / state.priceProperty
    }
}