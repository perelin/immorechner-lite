<template>
<footer class="footer bg-primary fixed-bottom">
    <div class="container d-flex">
        <div class="text-light">&copy; 2018 ImmoRechner</div> <small class="ml-auto">{{ versionFromEnv }}</small>
    </div>
</footer>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            version: '',
            versionFromEnv: process.env.HEROKU_APP_NAME + ' ' + process.env.HEROKU_RELEASE_VERSION
        }
    },
    methods: {
        getVersion: function () {
            var self = this
            axios.get('/version')
                .then((response) => {
                    self.version = response.data
                    console.log(response.data)
                }, (error) => {
                    console.log('error while getting version')
                    console.log(error)
                    })
        }
    },
    mounted: function () {
        //console.log(process.env.HEROKU_RELEASE_VERSION)
        var self = this
        //self.getVersion()
    }
}
</script>

<style>
html {
    position: relative;
    min-height: 100%;
}

body#immorechner {
    margin-bottom: 80px;
    /* Margin bottom by footer height */
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    /* Set the fixed height of the footer here */
    line-height: 60px;
    /* Vertically center the text there */
    background-color: #f5f5f5;
}
</style>
