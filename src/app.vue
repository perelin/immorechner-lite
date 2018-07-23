<template>
  <div>
    <header>
      <header-component />
    </header>
    <stage-component />
    <div id="app" class="container">
      <dialog-component />
      <debug-component />
    </div>
    <footer-component />
  </div>
</template>

<script>
  import StageComponent from './components/stage.vue'
  import DialogComponent from './components/dialog.vue'
  import HeaderComponent from './components/header.vue'
  import FooterComponent from './components/footer.vue'
  import DebugComponent from './components/debug.vue'
  
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
      FooterComponent,
      DebugComponent
    }
  }
</script>
