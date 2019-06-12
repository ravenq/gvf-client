<template>
  <div>
    <a-list
      v-infinite-scroll="handleInfiniteOnLoad"
      item-layout="vertical"
      size="large"
      style="height: 100%"
      :data-source="postList"
      :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="10"
    >
      <a-list-item
        :key="item.index"
        slot="renderItem"
        slot-scope="item"
      >
        <template slot="actions">
          <span>
            <a-icon
              type="eye-o"
              style="margin-right: 8px"
            />
            {{ item.visit || 0 }}
          </span>
        </template>
        <template slot="actions">
          <span>
            <a-icon
              type="like-o"
              style="margin-right: 8px"
            />
            {{ item.likes || 0 }}
          </span>
        </template>
        <template slot="actions">
          <span>
            <a-icon
              type="message"
              style="margin-right: 8px"
            />
            {{ item.commentsCount || 0 }}
          </span>
        </template>
        <a-list-item-meta>
          <div slot="description">
            <post-info
              :category="item.category.name"
              :tags="item.tags"
              :visit="item.visit"
              :pub-time="item.pubTime"
            />
          </div>
          <router-link
            slot="title"
            :to="{name:'post-id', params:{id: item.id}}"
          >
            <img
              class="post-type-img"
              :src="postTypeUrl(item.postType)"
            >
            {{ item.title }}
          </router-link>
        </a-list-item-meta>
        <div>{{ truncateSummary(item.summary) }}</div>
      </a-list-item>
    </a-list>
    <div v-if="loading && !busy" class="post-list-loading">
      <a-spin />
      <span style="margin-left: 8px;">正在加载...</span>
    </div>
  </div>
</template>
<script>
import truncate from 'lodash.truncate'
import PostInfo from '~/components/post-info'
import debounce from 'lodash.debounce'

export default {
  layout: 'post',
  components: {
    PostInfo
  },
  data() {
    return {
      postList: [],
      loading: false,
      busy: false,
      loadOffset: 0,
      postMap: {}
    }
  },
  asyncData({ $api }) {
    // make it faster.
    return $api.getPostList().then(res => {
      if (res.data) {
        const map = {}
        for (const item of res.data) {
          map[item.id] = item
        }
        return {
          postList: res.data,
          postMap: map
        }
      }
    })
  },
  methods: {
    postTypeUrl(val) {
      let ret = '/post-origin.png'
      switch (val) {
        case 1:
          ret = '/post-repost.png'
          break
        case 2:
          ret = '/post-translate.png'
          break
      }
      return ret
    },
    truncateSummary(val) {
      return truncate(val, { length: 300 })
    },
    handleInfiniteOnLoad: debounce(function() {
      this.loading = true
      this.$api.getPostList(this.loadOffset).then(res => {
        if (res.data) {
          for (const item of res.data) {
            if (!this.postMap[item.id]) {
              this.postList.push(item)
              this.postMap[item.id] = true
            }
          }
        }
        this.loading = false
      })
      this.loadOffset += 10
    }, 100)
  }
}
</script>
<style scoped>
.post-list-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 600px;
}
.post-list-loading {
  margin-top: 8px;
  text-align: center;
}
.post-type-img {
  margin-top: -3px;
}
</style>
