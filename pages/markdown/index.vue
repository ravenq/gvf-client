<template>
  <a-row class="full-container">
    <a-col :span="12" class="full-container">
      <div class="full-container m-input-container">
        <div class="mk-toolbar">
         <a-icon class="mk-toolbar-item" type="delete" @click="handleDelete" />
         <a-icon class="mk-toolbar-item" type="sync" @click="handleReset" />
        </div>
        <a-textarea
          :autosize="{ minRows: 26 }"
          :rows=28
          :resize="false"
          v-model="content"
          class="m-input">
        </a-textarea>
      </div>
    </a-col>
    <a-col :span="12" class="full-container">
      <iframe src="//ghbtns.com/github-btn.html?user=ravenq&repo=markdown-it-vue&type=watch&count=true"
        class="markdown-it-vue-git"
        allowtransparency="true" 
        frameborder="0" 
        scrolling="0" 
        width="110" 
        height="20">
      </iframe>
      <a-divider class="mk-divider"></a-divider>
      <div class="full-container mk-container">
        <markdown-it-vue :content="content"></markdown-it-vue>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import MKData from './example.js';
export default {
  data() {
    return {
      content: MKData
    }
  },
  methods: {
    handleDelete () {
      this.content = ''
    },
    handleReset () {
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

