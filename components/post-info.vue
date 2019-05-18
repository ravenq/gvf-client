<template>
  <div class="post-info">
    <div
      v-if="category"
      class="post-info-item hide-in-mobile"
    >
      分类:
      <a>{{ category }}</a>
    </div>
    <div
      v-if="category"
      class="post-info-item hide-in-mobile"
    >
      |
    </div>
    <div
      v-if="tags"
      class="post-info-item hide-in-mobile"
    >
      标签:
      <a
        v-for="(tag, index) in tagArr"
        :key="index"
      >{{ tag }} </a>
    </div>
    <div
      v-if="tags"
      class="post-info-item hide-in-mobile"
    >
      |
    </div>
    <div
      v-if="visit > 0"
      class="post-info-item"
    >
      阅读: {{ visit }} 次
    </div>
    <div
      v-if="visit"
      class="post-info-item"
    >
      |
    </div>
    <div
      v-if="pubTime"
      class="post-info-item"
    >
      发布: {{ pubTimeStr }}
    </div>
  </div>
</template>

<script>
import split from 'lodash.split'
import isString from 'lodash.isstring'
export default {
  props: {
    category: {
      type: String,
      default: ''
    },
    tags: {
      type: String,
      default: ''
    },
    visit: {
      type: Number,
      default: 0
    },
    pubTime: {
      type: [Date, String],
      default: ''
    }
  },
  computed: {
    tagArr() {
      return split(this.tags, ',')
    },
    pubTimeStr() {
      let pub = this.pubTime
      if (isString(pub)) {
        pub = new Date(pub)
      }
      return pub.format('yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.post-info {
  display: inline-flex;
  font-size: 14px;
}

.post-info-item {
  margin-right: 8px;
}

@media only screen and (min-width: 320px) {
  .hide-in-mobile {
    display: none;
  }
}

@media only screen and (min-width: 992px) {
  .hide-in-mobile {
    display: inline-block;
  }
}
</style>
