<template>
  <a-card
    id="hot-post-container"
    title="热门文章"
    :bordered="false"
  >
    <a-list
      item-layout="horizontal"
      :data-source="postList"
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item"
      >
        <a-list-item-meta>
          <nuxt-link
            slot="title"
            :to="{path:'/post/content', query:{id: item.id}}"
          >
            {{ truncatTitle(item.title) }}
          </nuxt-link>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script>
import truncate from 'lodash.truncate'
export default {
  data() {
    return {
      postList: []
    }
  },
  mounted() {
    this.$api.getHotPostList().then(res => {
      if (res.data) {
        this.postList = res.data
      }
    })
  },
  methods: {
    truncatTitle(val) {
      return truncate(val, { length: 20 })
    }
  }
}
</script>

<style>
#hot-post-container .ant-card-body {
  padding-top: 10px;
}

#hot-post-container .ant-list-item {
  padding-top: 6px;
  padding-bottom: 6px;
}
</style>
