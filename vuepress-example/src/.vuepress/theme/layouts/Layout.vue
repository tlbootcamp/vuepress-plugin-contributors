<template>
  <ParentLayout>
    <template #page-bottom>
      <contributor-icon profile-name="123" />
    </template>
  </ParentLayout>
</template>

<script>
import ContributorIcon from 'vuepress-plugin-contributors/components/ContributorIcon'
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: {
    ContributorIcon,
    ParentLayout
  }
}
</script>