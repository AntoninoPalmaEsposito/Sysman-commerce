<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'


export default {
  components: {
    Header
  }
}

</script>



<template>
  <Header></Header>
  <RouterView />
</template>



