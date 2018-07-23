<template>
<div class="jumbotron text-light">

    <div class="card col-md-6" id="stage">

        <h1 class="display-4">Immo&shy;Rechner
            <font-awesome-icon icon="home" />
        </h1>
        <p class="lead">Die Einschätzung für Deinen Immo-Invest: Lohnt sich das? Wie hoch ist die Rendite? Was sind die Alternativen?</p>
        <hr />
        <p>Schnell und einfach zum Ergebnis. Einfach unten im Text die markierten Werte für deinen Immo-Invest anpassen und sofort die erste Einschätzung bekommen. Reicht nicht? Dann einfach alles bis ins kleinste Detail nachjustieren.</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#dialog" role="button">Jetzt starten</a>
            <button @click="increment">+</button>
        </p>
    </div>

</div>
</template>

<script>
export default {
    methods: {
        increment() {
            this.$store.commit('increment')
        }
    }
}
</script>

<style>
.jumbotron {
    background-image: url('../assets/sorasak-587984-unsplash.jpg');
    background-size: cover;
}

#stage.card {
    background: rgba(122, 130, 136, 0.6)!important;
    padding: 2rem;
}
</style>
