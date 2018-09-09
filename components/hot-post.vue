<template>
  <a-card title="热门文章" :bordered="false" id="hot-post-container" >
    <a-list
      itemLayout="horizontal"
      :dataSource="postList"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-list-item-meta>
          <nuxt-link slot="title" :to="{path:'/post/content', query:{id: item.id}}">
              {{truncatTitle(item.title)}}
            </nuxt-link>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script>
import api from '~/api'
import truncate from 'lodash/truncate'
export default {
  mounted() {
    api.getPostList(0, 5).then(res => {
      if (res.data) {
        this.postList = res.data
      }
    })
  },
  data() {
    return {
      postList: []
    }
  },
  methods: {
    truncatTitle(val) {
      return truncate(val, {length: 20})
    },
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
