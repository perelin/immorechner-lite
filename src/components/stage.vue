<template>
<div class="jumbotron text-light">

    <div class="card col-md-6 px-3 py-3" id="stage">

        <h1 class="display-4">Immo&shy;Rechner
            <font-awesome-icon icon="home" />
        </h1>
        <p class="lead">Die Einschätzung für Deinen Immo-Invest: Lohnt sich das? Wie hoch ist die Rendite? Was sind die Alternativen?</p>
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
    background-image: url('../assets/stage_01.jpg');
    background-size: cover;
}

#stage.card {
    background: rgba(122, 130, 136, 0.6) !important;
}
</style>
