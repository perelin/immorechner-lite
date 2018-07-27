// CommitChart.js
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,
    mounted() {
        this.renderChart({
            labels: ['Eigenkapital', 'Kredit', 'Zinsen'],
            datasets: [{
                label: 'Zinsanteil',
                data: [42000, 63000, 26000],
                backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#cc65fe',
                ]
            }]
        })
    }
}