<template>
  <a-row>
    <a-col :span="4" />
    <a-col :span="16">
      <comments comment-id="about-me" />
    </a-col>
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
