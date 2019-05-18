<template>
  <a-row>
    <a-col :md="4" :xs="1" />
    <a-col :md="16" :xs="22">
      <comments comment-id="about-me" />
    </a-col>
    <a-col :md="4" :xs="1" />
  </a-row>
</template>

<script>
import Comments from '~/components/comments'
export default {
  components: {
    Comments
  }
}
</script>
