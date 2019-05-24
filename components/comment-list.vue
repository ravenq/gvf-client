<template>
  <a-list
    v-if="comments.length"
    :data-source="comments"
    item-layout="horizontal"
    class="comment-list-container"
  >
    <a-list-item slot="renderItem" slot-scope="item">
      <a-comment
        :author="item.author.nick"
        :avatar="item.author.avatarUrl"
        :content="item.content"
        :datetime="item.createTime"
      >
        <div>
          <span class="reply-item">
            <a-icon type="like" @click="handleLikeComment(item)" /> {{ item.likes }}
          </span>
          <span class="reply-item">
            <a-icon type="dislike" @click="handleDislikeComment(item)" /> {{ item.dislikes }}
          </span>
          <span v-if="isAuthenticated" slot="actions" class="reply-item" @click="showReply(item)">回复</span>
        </div>
        <comment-list :comments="item.replies || []" />
        <div v-if="item.showReply">
          <a-textarea v-model="item.replyContent" :autosize="{ minRows: 2, maxRows: 6 }" style="margin-top: 12px;" />
          <a-button type="primary" style="margin-top: 12px;" @click="handleReply(item)">
            发布
          </a-button>
        </div>
      </a-comment>
    </a-list-item>
  </a-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    CommentList: () => import('./comment-list')
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'user'])
  },
  methods: {
    handleLikeComment(item) {
      this.$api
        .likeComment(item.id)
        .then(() => {
          item.likes = item.likes + 1
        })
        .catch(() => {
          this.$message.warning('赞太多次啦~')
        })
    },
    handleDislikeComment(item) {
      this.$api
        .dislikeComment(item.id)
        .then(() => {
          item.dislikes = item.dislikes + 1
        })
        .catch(() => {
          this.$message.warning('踩太多次啦~')
        })
    },
    showReply(item) {
      item.showReply = true
    },
    handleReply(item) {
      if (item.replyContent) {
        const comment = {
          parent: item.id,
          commentId: this.commentId,
          author: this.user,
          content: item.replyContent,
          replyContent: ''
        }
        this.$api.addComment(comment).then(res => {
          item.replies.push(comment)
          item.showReply = false
          item.replyContent = ''
        })
      }
    }
  }
}
</script>

<style>
#comment-list-container .reply-item {
  margin-right: 8px;
  cursor: pointer;
}
</style>
