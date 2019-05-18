<template>
  <div />
</template>
<script>
import isNil from 'lodash.isnil'
import MobileDetect from 'mobile-detect'
import { mapMutations } from 'vuex'
export default {
  layout: 'empty',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const code = to.query.code
      const state = to.query.state
      if (!isNil(code)) {
        const md = new MobileDetect(window.navigator.userAgent)
        if (md.mobile()) {
          vm.code = code
          vm.state = state
        } else {
          window.opener.loginWithGithub(code, state)
          window.close()
        }
      }
    })
  },
  mounted() {
    const md = new MobileDetect(window.navigator.userAgent)
    if (md.mobile()) {
      this.$api.LoginWithGithub(this.code, this.state).then(res => {
        const user = res.data
        this.setUser(user)
        const route = JSON.parse(sessionStorage.getItem('cur-route'))
        this.$router.push(route)
      })
    }
    window.onblur = () => {
      window.focus()
    }
  },
  methods: {
    ...mapMutations(['setUser'])
  }
}
</script>
