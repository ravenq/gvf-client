<template>
  <a-spin :spinning="spinning">
    <div class="comments-header-title">
      {{ comments.length }} 个评论
    </div>
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
            <div class="reply-container">
              <span class="reply-item"><a-icon type="like" /> 0</span>
              <span class="reply-item"><a-icon type="dislike" /> 0</span>
              <span slot="actions" class="reply-item">回复</span>
            </div>
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
            <div v-if="!isAuthenticated" class="login-container">
              <a-row>
                <a-col :span="12">
                  <div class="login-title">
                    登录后可评论
                  </div>
                </a-col>
                <a-col :span="12" style="text-align: left">
                  <a-icon class="login-github" type="github" @click="loginWithGithub" />
                </a-col>
              </a-row>
            </div>
            <a-textarea v-model="comment.content" :rows="4" :disabled="!isAuthenticated" />
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
import MobileDetect from 'mobile-detect'
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
      const md = new MobileDetect(window.navigator.userAgent)
      if (md.mobile()) {
        sessionStorage.setItem(
          'cur-route',
          JSON.stringify({
            path: this.$route.path,
            query: this.$route.query
          })
        )
        window.location.href = url
      } else {
        window.loginWithGithub = (code, vertifyState) => {
          this.$api.LoginWithGithub(code, vertifyState).then(res => {
            const user = res.data
            this.setUser(user)
            this.spinning = false
          })
        }
        const myWindow = window.open(
          url,
          'aqcoder.com-login-github',
          'modal=yes,toolbar=no,titlebar=no,menuba=no,location=no,top=200,left=500,width=600,height=400'
        )
        myWindow.focus()

        setTimeout(() => {
          if (!this.isAuthenticated) {
            this.$message.error('登录超时')
            this.spinning = false
          }
        }, 60000)
      }
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

<style lange="scss" scoped>
.comments-header-title {
  margin-top: 10px;
}
.alter-login {
  margin-top: 8px;
  margin-bottom: 8px;
}
.login-title {
  text-align: right;
  margin-right: 8px;
  font-size: 20px;
  margin-top: -4px;
}
.login-github {
  font-size: 32px;
  margin-right: 4px;
  cursor: pointer;
}
.login-container {
  position: absolute;
  z-index: 100;
  text-align: center;
  width: 100%;
  margin-top: 30px;
}
.reply-item {
  margin-right: 8px;
  cursor: pointer;
}
</style>
