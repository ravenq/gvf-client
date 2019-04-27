<template>
  <div />
</template>
<script>
import isNil from 'lodash.isnil'
export default {
  layout: 'empty',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const code = to.query.code
      const state = to.query.state
      if (!isNil(code)) {
        window.code = code
        window.state = state
        window.close()
      }
    })
  },
  mounted() {
    window.onblur = () => {
      window.focus()
    }
  }
}
</script>
