<template>
  <footer class="footer">
    <p
      v-if="sns"
      class="sns-links"
    >
      <a
        v-for="(item, name) in sns"
        :key="name"
        class="sns-link"
        :href="item.link"
        target="_blank"
      >
        <IconSns
          :name="name"
          :account="item.account"
        />
      </a>
    </p>

    <div class="copyright">
      © 2014 –
      <span itemprop="copyrightYear">{{ $themeConfig.personalInfo.copyrightYear }}</span>
      <span class="post-meta-divider">|</span>
      <span
        class="author"
        itemprop="copyrightHolder"
      >{{ $themeConfig.personalInfo.nickname }}</span>
    </div>
  </footer>
</template>

<script>
import IconSns from './IconSns.vue'

export default {
  name: 'TheFooter',

  components: {
    IconSns,
  },

  computed: {
    sns () {
      return this.$themeConfig.personalInfo.sns || null
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.footer
  color $grayTextColor
  padding-bottom 1.5rem
  text-align center
  border-top 1px solid $borderColor
</style>
