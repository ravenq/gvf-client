<template>
  <a-spin :spinning="spinning">
    <div>
      <a-alert v-if="!isAuthenticated" class="alter-login" message="登录后可评论" banner />
      <a-row type="flex" justify="space-between">
        <a-col :span="4">
          <div class="comments-header-title">
            {{ comments.length }} 个评论
          </div>
        </a-col>
        <a-col :span="8" />
        <a-col :span="4">
          <div v-if="!isAuthenticated">
            <a-icon class="login-github" type="github" @click="loginWithGithub" />
            <strong class="login-title">登录：</strong>
          </div>
        </a-col>
      </a-row>
    </div>
    <a-divider />
    <div>
      <a-list
        v-if="comments.length"
        :data-source="comments"
        item-layout="horizontal"
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a-comment
            :author="item.author.nick"
            :avatar="item.author.avatarUrl"
            :content="item.content"
            :datetime="item.createTime"
          >
            <span slot="actions">回复</span>
          </a-comment>
        </a-list-item>
      </a-list>
      <a-comment>
        <a-avatar
          slot="avatar"
          :src="user.avatarUrl"
          alt="unlogin"
        />
        <div slot="content">
          <a-form-item>
            <a-textarea v-model="comment.content" :rows="4" />
          </a-form-item>
          <a-form-item>
            <a-button
              html-type="submit"
              :loading="submitting"
              type="primary"
              :disabled="!canComment"
              @click="handleSubmit"
            >
              评论
            </a-button>
          </a-form-item>
        </div>
      </a-comment>
    </div>
  </a-spin>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import clone from 'lodash.clone'
import { GITHUB } from '~/config'
export default {
  props: {
    commentId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      spinning: false,
      comments: [],
      submitting: false,
      comment: {
        parent: null,
        commentId: null,
        author: {
          id: null
        },
        content: null,
        user: this.user
      }
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'user']),
    canComment() {
      return this.comment.content && this.isAuthenticated
    }
  },
  watch: {
    commentId: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$api.getCommentList(val).then(res => {
            this.comments = res.data || []
          })
        }
      }
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    loginWithGithub() {
      this.spinning = true
      const oauthUri = GITHUB.OAUTH_URI
      const redirectUri = GITHUB.REDIRECT_URI
      const clientId = GITHUB.CLIENT_ID
      const state = new Date().getTime()
      const url = `${oauthUri}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user&state=${state}`
      const myWindow = window.open(
        url,
        'aqcoder.com-login-github',
        'modal=yes,toolbar=no,titlebar=no,menuba=no,location=no,top=200,left=500,width=600,height=400'
      )
      myWindow.focus()
      myWindow.onclose = () => {
        const code = myWindow.code
        const verifyState = myWindow.state
        this.$api.LoginWithGithub(code, verifyState).then(res => {
          const user = res.data
          this.setUser(user)
          this.spinning = false
        })
      }

      setTimeout(() => {
        if (!this.isAuthenticated) {
          this.$message.error('登录超时')
          this.spinning = false
        }
      }, 60000)
    },
    handleSubmit() {
      if (!this.comment.content) {
        return
      }

      if (!this.isAuthenticated) {
        this.$message.warning('登录后可评论！')
        return
      }

      this.submitting = true

      this.comment.commentId = this.commentId
      this.comment.author = this.user
      this.$api.addComment(this.comment).then(res => {
        this.submitting = false
        this.comments = [...this.comments, clone(this.comment)]
        this.comment.content = null
      })
    }
  }
}
</script>

<style scoped>
.comments-header-title {
  margin-top: 10px;
}
.alter-login {
  margin-top: 8px;
  margin-bottom: 8px;
}
.login-title {
  text-align: right;
  float: right;
  font-size: 16px;
  margin-top: 5px;
}
.login-github {
  font-size: 32px;
  float: right;
  margin-right: 4px;
}
</style>
