<template>
  <div class="post-content">
    <h1>{{post.title}}</h1>
    <a-divider />
      <post-info
        :category="post.category.name"
        :tags="post.tags"
        :visit="post.visit"
        :pubTime="post.pubTime">
      </post-info>
    <div>
      <markdown-it-vue :content="post.content"></markdown-it-vue>
    </div>
  </div>
</template>
<script>
import isNil from 'lodash/isNil'
import api from '~/api'
import PostInfo from '~/components/post-info'

export default {
  asyncData({query}) {
    let id = query.id
    return api.getPost(id).then(res => {
      if (!isNil(res.data)) {
        return {
          post: res.data
        }
      }
    })
  },
  layout: 'post',
  components: {
    PostInfo
  },
  beforeRouteUpdate(to, from, next){
    let id = to.query.id
    api.getPost(id).then(res => {
      if (!isNil(res.data)) {
        this.post = res.data
      }
    })
    next()
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
  }
}
</script>
<style lang="scss" scoped>
.post-content {
  height: 100%;
  margin-top: 64px;
}
</style>