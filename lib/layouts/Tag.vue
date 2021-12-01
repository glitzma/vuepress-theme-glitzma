<template>
  <div class="tag">
    <PostsFilter
      v-model="posts"
      :posts="$tag.posts"
      :tags="false"
    />

    <PostsList :posts="posts" />
  </div>
</template>

<script>
import PostsFilter from '../components/PostsFilter.vue'
import PostsList from '../components/PostsList.vue'
// const PostsFilter = r => require.ensure([], () => r(require('../components/PostsFilter.vue')))
// const PostsList = r => require.ensure([], () => r(require('../components/PostsList.vue')))

export default {
  name: 'Tag',

  components: {
    PostsFilter,
    PostsList,
  },

  data () {
    return {
      posts: null,
    }
  },

  created () {
    this.posts = this.$tag.posts
  },
}
</script>
