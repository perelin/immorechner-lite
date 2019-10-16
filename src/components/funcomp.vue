<template>
<p>geilo! {{greeting}}</p>
</template>

<script>
module.exports = {
    data: function () {
        greeting: 'Hello'
        return {}
    }
}
</script>

<style scoped>
p {
    outline: 1px red;
}
</style>