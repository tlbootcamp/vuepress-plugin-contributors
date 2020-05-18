<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="contributor-list-footer">
        <contributor-icon profile-name="123" />
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ContributorIcon from 'vuepress-plugin-contributors/lib/components/ContributorIcon'
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: {
    ContributorIcon,
    ParentLayout
  }
}
</script>

<style lang="stylus">
  // mimic the style of `PageEdit.vue` — footer of `Page.vue`
  .contributor-list-footer
    max-width $contentWidth
    margin: 0 auto
</style>