<template>
  <section>
    <a-row>
      <a-col :span="7" />
      <a-col :span="12">
        <a-timeline
          v-infinite-scroll="handleInfiniteOnLoad"
          class="mylove-container"
          style="height: 100%"
          :data-source="myloveList"
          :infinite-scroll-disabled="busy"
          :infinite-scroll-distance="10"
        >
          <a-timeline-item
            v-for="item in myloveList"
            :key="item.id"
            class="mylove-item"
            @mouseenter="mouseenter(item)"
            @mouseleave="mouseleave(item)"
          >
            {{ formatDateTime(item.createTime) }}
            <a-card
              hoverable
              :style="{width: itemWidth(item)}"
            >
              <img
                slot="cover"
                :src="item.photo"
              >
              <a-card-meta>
                <template slot="description">
                  {{ item.content }}
                </template>
              </a-card-meta>
            </a-card>
          </a-timeline-item>
        </a-timeline>
      </a-col>
      <a-col :span="5" />
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
