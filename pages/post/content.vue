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
  asyncData({ query }) {
    const id = query.id
    return this.$api.getPost(id).then(res => {
      if (!isNil(res.data)) {
        return {
          post: res.data
        }
      }
    })
  },
  layout: 'post',
  beforeRouteUpdate(to, from, next) {
    const id = to.query.id
    this.$api.getPost(id).then(res => {
      if (!isNil(res.data)) {
        this.post = res.data
      }
    })
    next()
  }
}
</script>
<style lang="scss" scoped>
.post-content {
  height: 100%;
  margin-top: 64px;
}
</style>
