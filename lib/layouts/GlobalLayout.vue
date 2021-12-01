<template>
  <div id="vuepress-theme-glitzma">
    <TheHeader />

    <TheMain />

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheMain from '../components/TheMain.vue'
import TheFooter from '../components/TheFooter.vue'

// const TheHeader = r => require.ensure([], () => r(require('../components/TheHeader.vue')))
// const TheMain = r => require.ensure([], () => r(require('../components/TheMain.vue')))
// const TheFooter = r => require.ensure([], () => r(require('../components/TheFooter.vue')))

export default {
  name: 'Themeglitzma',

  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
}
</script>

<style lang="stylus" src="../styles/index.styl" />
