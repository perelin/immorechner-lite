<template>
<div>
    <div class="card">
        <div class="card-header">
            Bruttomietrendite <br />
            <small class="text-muted mb-3">Die erste grobe Einschätzung. Lohnt es sich, oder nicht?</small>
        </div>
        <div class="card-body">
            <form>
                <b-form-group label="Kaufpreis" label-for="priceProperty" label-cols-sm="4" label-cols-lg="3" description="Der einmalige, reine Kaufpreis der Immobilie. Ohne Maklergebühren, Notarkosten, Grundbucheintrag, Steuer oder Zinsen.">
                    <b-input-group prepend="€" class="mt-3">
                        <vue-numeric currency="" separator="." v-model="priceProperty" pattern="[0-9]*" class="form-control" id="priceProperty"></vue-numeric>
                    </b-input-group>
                </b-form-group>

                <b-form-group label="Nettokaltmiete" label-for="rentColdNetYear" label-cols-sm="4" label-cols-lg="3"  description="Die Mieteeinnahmen ohne Abzüge wie Nebenkosten oder Rücklagen.">
                    <b-input-group prepend="€" append="pro Jahr" class="mt-3">
                        <vue-numeric currency="" separator="." v-model="rentColdNetYear" pattern="[0-9]*" class="form-control" id="rentColdNetYear"></vue-numeric>
                        <!--
                        <b-input-group-append>
                            <b-form-radio-group @input="setRentPeriodOptionSelectedObject" id="rent-period" class="btn-selection" v-model="rentPeriodSelected" :options="rentPeriodOptions" buttons name="rent-period-btn" button-variant="primary"></b-form-radio-group>
                        </b-input-group-append>-->
                    </b-input-group>
                </b-form-group>
            </form>
        </div>
        <div class="card-footer text-right ">
            Die Bruttomietrendite beträgt <span class="font-size-lg display-1 font-weight-bold badge badge-info">{{yieldRentGrossYearComputed}}</span><br />
            <span class="text-muted small">Das ergibt sich aus (Nettokaltmiete / Kaufpreis)</span>
        </div>
    </div>
</div>
</template>

<script>
import ImmorechnerUtils from '../utils/immorechner_util'
import VueNumeric from 'vue-numeric'
import {
    mapState,
    mapMutations
} from 'vuex'

export default {
    data() {
        return {

        }
    },
    methods: {

        ...mapMutations([
            'inputPriceProperty',
            'inputRentColdNetYear'
        ])

    },
    computed: {

        rentColdNetYear: {
            get() {
                return this.$store.state.rentColdNetYear
            },
            set(value) {
                this.inputRentColdNetYear(value)
            }
        },

        priceProperty: {
            get() {
                return this.$store.state.priceProperty
            },
            set(value) {
                this.inputPriceProperty(value)
            }
        },

        yieldRentGrossYear: function () {
            return this.$store.getters.yieldRentGrossYear
        },
        yieldRentGrossYearComputed: function () {
            if (this.yieldRentGrossYear > 0) {
                return this.formatPercent(this.yieldRentGrossYear)
            } else {
                return "-.-"
            }
        }
    },
    components: {
        VueNumeric,
    },
    mixins: [ImmorechnerUtils.formatPercentMixin],
}
</script>

<style>
span.badge { font-size: 1.0rem; }
</style>
