<script>
import TheHeader from './components/TheHeader.vue'
import Content from './components/Content.vue'

export default {
  components: {
    TheHeader,
    Content
  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<template>
  <TheHeader></TheHeader>

  <main>
    <div class="container">
      <Content></Content>
    </div>
  </main>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;

main {
  background-color: $main-bg;
}
</style>
