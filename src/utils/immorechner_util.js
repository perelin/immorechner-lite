export default {
    format2Eur: function(number) {
        return (number).toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2 })
    }
}