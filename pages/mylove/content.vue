<template>
  <div class="post-content">
    <h1>{{post.title}}</h1>
  </div>
</template>
<script>
import isNil from 'lodash/isNil'
import api from '~/api'

export default {
  layout: 'post',
  mounted() {
    let id = this.$route.query.id
    api.getPost(id).then(res => {
      if (!isNil(res.data)) {
        this.post = res.data
      }
    })
  },
  data() {
    return {
      post: {
        
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>