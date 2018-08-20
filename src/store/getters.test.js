import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import Getters from './getters'
import Mutations from './mutations'

const stateInput = {
    courtage: 3,
    propertyTransferTax: 5,
    registerCosts: 2,
    purchasePrice: 100000,
    renovationCost: 0,
    squareMeters: 50,
    selfCaptive: 10000,
    loanInterest: 2,
    runtime: 20
}

const gettersResults = {
    totalClosingCostsPercent: 10,
    totalClosingCosts: 10000,
    totalPurchaseCost: 110000,
    loanAmount: 100000,
    pricePerSquareMeter: 2200,
    yearlyLoanRate: 6115.67181252904
}

var testStore

beforeEach(() => {

    Vue.use(Vuex)

    testStore = new Vuex.Store({
        state: State,
        getters: Getters,
        mutations: Mutations,
    })

    testStore.replaceState(stateInput)
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