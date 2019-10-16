import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import Getters from './getters'
import Mutations from './mutations'

const stateInputInit = {
    courtage: 3,
    propertyTransferTax: 5,
    registerCosts: 2,
    purchasePrice: 100000,
    renovationCost: 0,
    squareMeters: 50,
    selfCaptive: 10000,
    loanInterest: 2,
    runtime: 20,
    houseMoney: 150,
    renovationCostPerMonth: 20,
    rentalIncome: 500,
    TRENNER: 0,
    priceProperty: 100000,
    rentColdNetYear: 6000,
}
const stateInput = Object.assign(State, stateInputInit)

// we are rounding every float because original results 
// from google sheets differ a tiny bit from the calculated ones
// IMPORTANT: also round the calculated results in the tests
const gettersResults = {
    totalClosingCostsPercent: 10,
    totalClosingCosts: 10000,
    totalPurchaseCost: 110000,
    loanAmount: 100000,
    pricePerSquareMeter: 2200,
    yearlyLoanRate: Math.round(6115.67),
    monthlyLoanRate: Math.round(509.63),
    totalInterests: Math.round(22313.43),
    monthlyInterests: Math.round(92.97),
    houseMoneyFoldable: Math.round(94.5),
    houseMoneyNotFoldable: Math.round(55.5),
    totalRenovationCostPerMonth: Math.round(83.33),
    burdenPerMonthLetting: Math.round(-148.47),
    burdenPerYearInclTaxLetting: 0,
    taxSavingsAmortizationLetting: Math.round(-137.5),
    incomeDemiseLetting: Math.round(268.19),
    taxesLetting: Math.round(55.66),
    totalAdditionalPaymentLetting: Math.round(-204.13),
    resultLetting: Math.round(212.53),
    increaseInValueLetting: Math.round(416.66),
    burdenPerYearInclTaxLetting: Math.round(-2449.61),
    returnLetting: Math.round(2.55),
    resultLettingAfterRuntime: Math.round(51007.61),
    TRENNER: 0,
    yieldRentGrossYear: 0.06
}



Vue.use(Vuex)

var testStore
testStore = new Vuex.Store({
    state: State,
    getters: Getters,
    mutations: Mutations,
})

beforeEach(() => {
    // reset state for every test
    let stateInputRest = JSON.parse(JSON.stringify(stateInput))
    testStore.replaceState(stateInputRest)
});

// tests

test('yieldRentGrossYear', () => {
    const result = testStore.getters.yieldRentGrossYear
    expect(result).toBe(gettersResults.yieldRentGrossYear)
});

// TRENNER

test('totalClosingCostsPercent', () => {
    const result = testStore.getters.totalClosingCostsPercent
    expect(result).toBe(gettersResults.totalClosingCostsPercent)

})

test('totalClosingCosts', () => {
    const result = testStore.getters.totalClosingCosts
    expect(result).toBe(gettersResults.totalClosingCosts)

})

test('totalPurchaseCost', () => {
    const result = testStore.getters.totalPurchaseCost
    expect(result).toBe(gettersResults.totalPurchaseCost)
})

test('pricePerSquareMeter', () => {
    const result = testStore.getters.pricePerSquareMeter
    expect(result).toBe(gettersResults.pricePerSquareMeter)
})

test('loanAmount', () => {
    const result = testStore.getters.loanAmount
    expect(result).toBe(gettersResults.loanAmount)
})

test('yearlyLoanRate', () => {
    const result = testStore.getters.yearlyLoanRate
    expect(Math.round(result)).toBe(gettersResults.yearlyLoanRate)
})

test('yearlyLoanRate is NaN', () => {
    testStore.commit('inputLoanInterest', NaN)
    const result = testStore.getters.yearlyLoanRate
    expect(result).toBe(0)
})

test('monthlyLoanRate', () => {
    const result = testStore.getters.monthlyLoanRate
    expect(Math.round(result)).toBe(gettersResults.monthlyLoanRate)
})

test('totalInterests', () => {
    const result = testStore.getters.totalInterests
    expect(Math.round(result)).toBe(gettersResults.totalInterests)
})

test('monthlyInterests is NaN', () => {
    testStore.commit('inputRuntime', NaN)
    const result = testStore.getters.monthlyInterests
    expect(result).toBe(0)
})

test('houseMoneyFoldable', () => {
    const result = testStore.getters.houseMoneyFoldable
    expect(Math.round(result)).toBe(gettersResults.houseMoneyFoldable)
})

test('houseMoneyNotFoldable', () => {
    const result = testStore.getters.houseMoneyNotFoldable
    expect(Math.round(result)).toBe(gettersResults.houseMoneyNotFoldable)
})

test('totalRenovationCostPerMonth', () => {
    const result = testStore.getters.totalRenovationCostPerMonth
    expect(Math.round(result)).toBe(gettersResults.totalRenovationCostPerMonth)
})
test('burdenPerMonthLetting', () => {
    const result = testStore.getters.burdenPerMonthLetting
    expect(Math.round(result)).toBe(gettersResults.burdenPerMonthLetting)

})
test('burdenPerYearInclTaxLetting', () => {
    const result = testStore.getters.burdenPerYearInclTaxLetting
    expect(Math.round(result)).toBe(gettersResults.burdenPerYearInclTaxLetting)
})


test('incomeDemiseLetting', () => {
    const result = testStore.getters.incomeDemiseLetting
    expect(Math.round(result)).toBe(gettersResults.incomeDemiseLetting)
})

test('taxSavingsAmortizationLetting', () => {
    const result = testStore.getters.taxSavingsAmortizationLetting
    expect(Math.round(result)).toBe(gettersResults.taxSavingsAmortizationLetting)
})

test('taxesLetting', () => {
    const result = testStore.getters.taxesLetting
    expect(Math.round(result)).toBe(gettersResults.taxesLetting)
})

test('totalAdditionalPaymentLetting', () => {
    const result = testStore.getters.totalAdditionalPaymentLetting
    expect(Math.round(result)).toBe(gettersResults.totalAdditionalPaymentLetting)
})

test('increaseInValueLetting', () => {
    const result = testStore.getters.increaseInValueLetting
    expect(Math.round(result)).toBe(gettersResults.increaseInValueLetting)
})

test('resultLetting', () => {
    const result = testStore.getters.resultLetting
    expect(Math.round(result)).toBe(gettersResults.resultLetting)
})

test('returnLetting', () => {
    const result = testStore.getters.returnLetting
    expect(Math.round(result)).toBe(gettersResults.returnLetting)
})

test('resultLettingAfterRuntime', () => {
    const result = testStore.getters.resultLettingAfterRuntime
    expect(Math.round(result)).toBe(gettersResults.resultLettingAfterRuntime)
})

test('resultLettingAfterRuntime', () => {
    const result = testStore.getters.resultLettingAfterRuntime
    expect(Math.round(result)).toBe(gettersResults.resultLettingAfterRuntime)
})