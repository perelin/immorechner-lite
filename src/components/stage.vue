<template>
<div class="jumbotron text-dark">



            <div class="card col-md-9 px-3 py-3 mx-auto" id="stage">

                <h1 class="display-4">ImmoRechner
                    <font-awesome-icon icon="home" />
                </h1>
                <p class="lead">Die Einschätzung für Ihren Immo-Invest: Lohnt sich das? Wie hoch ist die Rendite? Was sind die Alternativen?</p>
                <hr />
                <p>Schnell und einfach zum Ergebnis. Einfach unten im Text die markierten Werte für deinen Immo-Invest anpassen und sofort die erste Einschätzung bekommen. Reicht nicht? Dann einfach alles bis ins kleinste Detail nachjustieren.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#dialog" role="button">Jetzt starten</a>
                    <debug-component />
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
    background-position: left;
}

#stage.card {
    background: rgba(228, 232, 235, 0.8) !important;
}

#stage hr {
    background-color: #f8f9fa;
}
</style>
