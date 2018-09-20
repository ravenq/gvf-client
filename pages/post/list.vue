<template>
  <a-list
    itemLayout="vertical"
    size="large"
  >
    <virtual-scroller
        style="height: 100%"
        item-height="73"
        :items="postList"
        page-mode
        v-infinite-scroll="handleInfiniteOnLoad"
        :infinite-scroll-disabled="busy"
        :infinite-scroll-distance="10"
    >
      <a-list-item slot-scope="{item}" :key="item.index">
        <template slot="actions">
          <span><a-icon type="star-o" style="margin-right: 8px" />{{item.visit || 0}}</span>
          <span><a-icon type="like-o" style="margin-right: 8px" />{{item.visit || 0}}</span>
          <span><a-icon type="message" style="margin-right: 8px" />{{item.visit || 0}}</span>
        </template>
        <!-- <img slot="extra" width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" /> -->
        <a-list-item-meta>
          <div slot="description">
            <post-info
              :category="item.category.name"
              :tags="item.tags"
              :visit="item.visit"
              :pubTime="item.pubTime">
            </post-info>
          </div>
          <router-link slot="title" :to="{path:'/post/content', query:{id: item.id}}">
            <img class="post-type-img" :src="postTypeUrl(item.postType)" /> {{item.title}}
          </router-link>
          <a-avatar slot="avatar" src="/logo.png" />
        </a-list-item-meta>
        <div>{{truncateSummary(item.summary)}}</div>
      </a-list-item>
    </virtual-scroller>
    <a-spin v-if="loading && !busy" class="post-list-loading" />
  </a-list>
</template>
<script>
import api from '~/api'
import truncate from 'lodash/truncate'
import PostInfo from '~/components/post-info'

export default {
  layout: 'post',
  components: {
    PostInfo
  },
  data () {
    return {
      postList: [],
      loading: false,
      busy: false,
      loadOffset: 0
    }
  },
  methods: {
    postTypeUrl(val) {
      let ret = '/post-origin.png'
      switch(val) {
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
      return truncate(val, {length: 300})
    },
    handleInfiniteOnLoad () {
      this.loading = true
      api.getPostList(this.loadOffset).then(res => {
        if (res.data) {
          this.postList = this.postList.concat(res.data)
        }
        this.loading = false
        this.loadOffset += 10
      })
    }
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
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
.post-type-img {
  margin-top: -3px;
}
</style>