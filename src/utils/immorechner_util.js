export default {
    format2Eur: function(number) {
        return (number).toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2 })
    },
    checkIfValidNumber: function(number) {
        if (isNaN(number) || !isFinite(number)) {
            number = 0
        }
        return number
    },
    formatEuroMixin: {
        methods: {
            formatEuro: function(number) {
                return (number).toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0, minimumFractionDigits: 0 })
            }
        }
    },
    formatPercentMixin: {
        methods: {
            formatPercent: function(value) {
                return Number(value).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
            }
        }
    }
}