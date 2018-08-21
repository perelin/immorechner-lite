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
}
const stateInput = Object.assign(State, stateInputInit)

const gettersResults = {
    totalClosingCostsPercent: 10,
    totalClosingCosts: 10000,
    totalPurchaseCost: 110000,
    loanAmount: 100000,
    pricePerSquareMeter: 2200,
    yearlyLoanRate: 6115.67181252904,
    monthlyLoanRate: 509.63931771075335,
    totalInterests: 22313.436250580795,
    monthlyInterests: 92.97265104408665,
    houseMoneyFoldable: 94.5,
    houseMoneyNotFoldable: 55.5,
    totalRenovationCostPerMonth: 83.33333333333333,
    burdenPerMonthLetting: -148.47265104408666,
    burdenPerYearInclTaxLetting: 0,
    taxSavingsAmortizationLetting: -137.5,
    incomeDemiseLetting: 268.19401562258,
    taxesLetting: 55.66230703016101,
    totalAdditionalPaymentLetting: -204.13495807424766,
    resumeLetting: 212.53170859241902,
    increaseInValueLetting: 416.6666666666667,
    burdenPerYearInclTaxLetting: -2449.619496890972

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

    expect(result).toBe(gettersResults.yearlyLoanRate)
})

test('yearlyLoanRate is NaN', () => {

    testStore.commit('inputLoanInterest', NaN)

    const result = testStore.getters.yearlyLoanRate

    expect(result).toBe(0)
})

test('monthlyLoanRate', () => {

    const result = testStore.getters.monthlyLoanRate

    expect(result).toBe(gettersResults.monthlyLoanRate)
})

test('totalInterests', () => {

    const result = testStore.getters.totalInterests

    expect(result).toBe(gettersResults.totalInterests)
})

test('monthlyInterests is NaN', () => {

    testStore.commit('inputRuntime', NaN)

    const result = testStore.getters.monthlyInterests

    expect(result).toBe(0)
})

test('houseMoneyFoldable', () => {

    const result = testStore.getters.houseMoneyFoldable

    expect(result).toBe(gettersResults.houseMoneyFoldable)
})

test('houseMoneyNotFoldable', () => {

    const result = testStore.getters.houseMoneyNotFoldable

    expect(result).toBe(gettersResults.houseMoneyNotFoldable)
})

test('totalRenovationCostPerMonth', () => {

    const result = testStore.getters.totalRenovationCostPerMonth

    expect(result).toBe(gettersResults.totalRenovationCostPerMonth)
})
test('burdenPerMonthLetting', () => {

    const result = testStore.getters.burdenPerMonthLetting

    expect(result).toBe(gettersResults.burdenPerMonthLetting)

})
test('burdenPerYearInclTaxLetting', () => {

    const result = testStore.getters.burdenPerYearInclTaxLetting

    expect(result).toBe(gettersResults.burdenPerYearInclTaxLetting)
})


test('incomeDemiseLetting', () => {

    const result = testStore.getters.incomeDemiseLetting

    expect(result).toBe(gettersResults.incomeDemiseLetting)
})

test('taxSavingsAmortizationLetting', () => {

    const result = testStore.getters.taxSavingsAmortizationLetting

    expect(result).toBe(gettersResults.taxSavingsAmortizationLetting)
})

test('taxesLetting', () => {

    const result = testStore.getters.taxesLetting

    expect(result).toBe(gettersResults.taxesLetting)
})

test('totalAdditionalPaymentLetting', () => {

    const result = testStore.getters.totalAdditionalPaymentLetting

    expect(result).toBe(gettersResults.totalAdditionalPaymentLetting)
})

test('increaseInValueLetting', () => {

    const result = testStore.getters.increaseInValueLetting

    expect(result).toBe(gettersResults.increaseInValueLetting)
})

test('resumeLetting', () => {

    const result = testStore.getters.resumeLetting

    expect(result).toBe(gettersResults.resumeLetting)
})