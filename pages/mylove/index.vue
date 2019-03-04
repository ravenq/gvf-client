<template>
  <section>
    <a-row>
      <a-col :span="7"></a-col>
      <a-col :span="12">
        <a-timeline class="mylove-container">
          <virtual-scroller
            style="height: 100%"
            item-height="450"
            :items="myloveList"
            page-mode
            v-infinite-scroll="handleInfiniteOnLoad"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="10"
          >
            <a-timeline-item
              class="mylove-item"
              slot-scope="{item}"
              :key="item.id"
              @mouseenter="mouseenter(item)"
              @mouseleave="mouseleave(item)"
            >
              {{formatDateTime(item.createTime)}}
              <a-card
                hoverable
                :style="{width: itemWidth(item)}"
              >
                <img
                  :src="item.photo"
                  slot="cover"
                >
                <a-card-meta>
                  <template slot="description">{{item.content}}</template>
                </a-card-meta>
              </a-card>
            </a-timeline-item>
          </virtual-scroller>
        </a-timeline>
      </a-col>
      <a-col :span="5"></a-col>
    </a-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      myloveList: [],
      loading: false,
      busy: false,
      loadOffset: 0
    }
  },
  computed: {
    itemWidth() {
      return item => (item.closeUp ? '600px' : '400px')
    }
  },
  methods: {
    mouseenter(item) {
      item.entering = true
      setTimeout(_ => {
        if (item.entering) {
          this.$set(item, 'closeUp', true)
        }
      }, 500)
    },
    mouseleave(item) {
      item.entering = false
      this.$set(item, 'closeUp', false)
    },
    formatDateTime(val) {
      return new Date(Date.parse(val)).format('yyyy-MM-dd hh:mm:ss')
    },
    handleInfiniteOnLoad() {
      this.loading = true
      this.$api.getMyloveList(this.loadOffset).then(res => {
        if (res.data) {
          this.myloveList = this.myloveList.concat(res.data)
        }
        this.loading = false
        this.loadOffset += 10
      })
    }
  }
}
</script>

<style scoped>
.mylove-container {
  margin-top: 24px;
}
.mylove-item {
  margin-top: 10px;
}
</style>
