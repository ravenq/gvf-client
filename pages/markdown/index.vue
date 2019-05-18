<template>
  <a-row class="full-container">
    <a-col
      :span="12"
      class="full-container"
    >
      <div class="full-container m-input-container">
        <div class="mk-toolbar">
          <a-icon
            class="mk-toolbar-item"
            type="delete"
            @click="handleDelete"
          />
          <a-icon
            class="mk-toolbar-item"
            type="sync"
            @click="handleReset"
          />
        </div>
        <a-textarea
          v-model="content"
          :autosize="{ minRows: 26 }"
          :rows="28"
          :resize="false"
          class="m-input"
        />
      </div>
    </a-col>
    <a-col
      :span="12"
      class="full-container"
    >
      <iframe
        src="//ghbtns.com/github-btn.html?user=ravenq&repo=markdown-it-vue&type=watch&count=true"
        class="markdown-it-vue-git"
        allowtransparency="true"
        frameborder="0"
        scrolling="0"
        width="110"
        height="20"
      />
      <a-divider class="mk-divider" />
      <div class="full-container mk-container">
        <markdown-it-vue :content="content" />
      </div>
    </a-col>
  </a-row>
</template>

<script>
import MKData from './example.js'
export default {
  head() {
    return {
      title: 'markdown-it-vue',
      meta: [
        {
          hid: 'markdown-it-vue',
          name: 'markdown-it-vue',
          content:
            'markdown-it-vue 是一个丰富的 markdown Vue 组件，支持 GFM TOC、GFM style、emoji等通用特性，还支持 mermaid charts、Echarts、flowchart.js 等多种图表，支持 AsciiMath、Latex 等数学公式渲染，支持 errro|warning|info 个性化提示。'
        }
      ],
      script: [{ src: '/baidu-spider.js', async: true, defer: true }]
    }
  },
  data() {
    return {
      content: MKData
    }
  },
  methods: {
    handleDelete() {
      this.content = ''
    },
    handleReset() {
      this.content = MKData
    }
  }
}
</script>

<style lang="scss" scoped>
.full-container {
  height: 100%;
}

.m-input {
  height: 100%;
  resize: none;
}

.m-input-container {
  padding: 10px 15px;
}

.mk-container {
  height: 100%;
  margin: 10px;
  padding: 5px;
}

.mk-toolbar {
  font-size: 18px;
  margin-bottom: 8px;
}

.mk-toolbar-item {
  margin-right: 16px;
  &:hover {
    cursor: pointer;
    color: rgb(98, 174, 255);
  }
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.markdown-it-vue-git {
  margin-top: 10px;
}

.mk-divider {
  margin-top: 10px;
}
</style>
