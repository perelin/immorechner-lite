<template>
  <div>
    <header>
      <header-component />
    </header>
    <stage-component />
    <div id="app" class="container">
      <dialog-component />
    </div>
    <footer-component />
  </div>
</template>

<script>
  import StageComponent from './components/stage.vue'
  import DialogComponent from './components/dialog.vue'
  import HeaderComponent from './components/header.vue'
  import FooterComponent from './components/footer.vue'

  
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      StageComponent,
      DialogComponent,
      HeaderComponent,
      FooterComponent
    }
  }
</script>
