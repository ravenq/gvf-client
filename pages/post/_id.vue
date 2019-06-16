<template>
  <div class="post-content">
    <post-info
      :category="post.category.name"
      :tags="post.tags"
      :visit="post.visit"
      :pub-time="post.pubTime"
    />
    <div class="mk-content">
      <markdown-it-vue :content="post.content" />
    </div>
    <a-divider />
    <div class="like-container">
      <a-icon type="like" class="like-icon" @click="handleLike" />
      <span class="like-span-left">{{ post.likes }}</span>
      <a-icon type="dislike" class="like-icon like-span-right" @click="handleDislike" />
      <span>{{ post.dislikes }}</span>
    </div>
    <a-divider />
    <comments :comment-id="commentId" />
  </div>
</template>
<script>
import isNil from 'lodash.isnil'
import isEqual from 'lodash.isequal'
import PostInfo from '~/components/post-info'
import Comments from '~/components/comments'

export default {
  layout: 'post',
  components: {
    PostInfo,
    Comments
  },
  head() {
    const title = this.post.title + ' - Ravenq的技术博客'
    return {
      title: title,
      meta: [
        {
          hid: title,
          name: title,
          content: this.post.summary
        }
      ],
      script: [{ src: '/baidu-spider.js', async: true, defer: true }]
    }
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
        likes: 0,
        dislikes: 0,
        pubTime: new Date()
      }
    }
  },
  computed: {
    commentId() {
      return `post-${this.post.id}`
    }
  },
  asyncData({ $api, query, params }) {
    const id = query.id || params.id
    return $api.getPost(id).then(res => {
      if (!isNil(res.data)) {
        return {
          post: res.data
        }
      }
    })
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     const id = to.query.id
  //     vm.$api.getPost(id).then(res => {
  //       if (!isNil(res.data)) {
  //         vm.post = res.data
  //       }
  //     })
  //   })
  // },
  methods: {
    handleLike() {
      this.$api
        .likePost(this.post.id)
        .then(res => {
          this.post.likes = res.data.likes
        })
        .catch(e => {
          if (isEqual(e.status, 6)) {
            this.$message.info('一天只能赞一次哦~')
          }
        })
    },
    handleDislike() {
      this.$api
        .dislikePost(this.post.id)
        .then(res => {
          this.post.dislikes = res.data.dislikes
        })
        .catch(e => {
          if (isEqual(e.status, 6)) {
            this.$message.info('一天只能吐槽一次哦~')
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.post-content {
  height: 100%;
  margin-top: 45px;
}
.mk-content {
  margin-top: 12px;
}
.like-container {
  text-align: center;
  font-size: 32px;
}
.like-span-left {
  margin-right: 32px;
}
.like-span-right {
  margin-left: 32px;
}
.like-icon {
  cursor: pointer;
}
</style>
