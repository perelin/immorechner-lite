<template>
<div class="jumbotron text-dark">

    <div class="card col-md-10 col-lg-8 col-xl-7 px-3 py-3 mx-auto" id="stage">

        <h1 class="display-4">
            <font-awesome-icon icon="home" /> Immo-Rechner
        </h1>
        <p class="lead">Die Einschätzung für Ihren Immo-Invest: Lohnt sich das? Wie hoch ist die Rendite?</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#dialog" role="button" v-scroll-to="'#dialog-yield-rent-gross-year'">Lohnt sich das?</a>
            <!-- <debug-component /> -->
        </p>

    </div>

</div>
</template>

<script>
import DebugComponent from './debug.vue'
export default {
    methods: {
        increment() {
            this.$store.commit('increment')
        }
    },
    components: {
        DebugComponent
    }
}
</script>

<style>
.jumbotron {
    /*background-image: url('../assets/stage_01.jpg');*/
    background-image: url('../assets/grant-lemons-80424-unsplash_mirror.jpg');
    background-size: cover;
    background-position: center;
}

#stage.card {
    background: rgba(228, 232, 235, 0.85) !important;
}

#stage hr {
    background-color: #f8f9fa;
}
</style>
