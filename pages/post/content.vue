<template>
  <div class="post-content">
    <h1>{{ post.title }}</h1>
    <a-divider />
    <post-info
      :category="post.category.name"
      :tags="post.tags"
      :visit="post.visit"
      :pub-time="post.pubTime"
    />
    <div>
      <markdown-it-vue :content="post.content" />
    </div>
  </div>
</template>
<script>
import isNil from 'lodash.isnil'
import PostInfo from '~/components/post-info'

export default {
  layout: 'post',
  components: {
    PostInfo
  },
  data() {
    return {
      post: {
        author: 'ravenq',
        category: {
          id: null,
          name: ''
        },
        title: '',
        tags: '',
        isTop: false,
        summary: '',
        content: '',
        status: 0,
        postType: 0,
        refUrl: '',
        refAuthor: '',
        translator: '',
        visit: 0,
        pubTime: new Date()
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const id = to.query.id
      vm.$api.getPost(id).then(res => {
        if (!isNil(res.data)) {
          vm.post = res.data
        }
      })
    })
  }
}
</script>
<style lang="scss" scoped>
.post-content {
  height: 100%;
  margin-top: 64px;
}
</style>
