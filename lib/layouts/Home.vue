<template>
  <div class="home">
    <PostsList />
  </div>
</template>

<script>
import PostsList from '../components/PostsList.vue'
// const PostsList = r => require.ensure([], () => r(require('../components/PostsList.vue')))
export default {
  name: 'Home',

  components: {
    PostsList,
  },
}
</script>
