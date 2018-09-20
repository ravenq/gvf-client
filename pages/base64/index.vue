<template>
  <section>
    <a-row>
      <a-col :span="4"></a-col>
      <a-col :span="16">
        <a-divider orientation="left">图片转 Base64</a-divider>
        <a-spin :spinning="imgToBase64.loading">
          <a-row class="inline-row">
            <a-upload
              listType="picture-card"
              :showUploadList="false"
              :beforeUpload="handleSelectImg"
            >
              <img v-if="imgToBase64.imageUrl" class="to-base64-img" :src="imgToBase64.imageUrl" />
              <div v-else>
              <a-icon type="plus" />
                <div>选取图片</div>
              </div>
            </a-upload>
            <a-textarea 
              class="base64-input" 
              :value="imgToBase64.imageUrl"
              placeholder="若图片较大等待时间会比较长！"
            />
          </a-row>
        </a-spin>
        <a-divider orientation="left">Base64转图片</a-divider>
        <a-spin :spinning="base64Toimg.loading">
          <a-row class="inline-row">
            <a-textarea
              class="base64-to-img-input"
              v-model="base64Toimg.imageUrl"
              placeholder="输入图片 Base64 字符串！"
            />
            <a-upload
              disabled
              listType="picture-card"
              :showUploadList="false"
              :beforeUpload="handleSelectImg"
            >
              <img v-if="base64Toimg.imageUrl" class="to-base64-img" :src="base64Toimg.imageUrl" />
              <div v-else>
                <div>暂无图片</div>
              </div>
            </a-upload>
          </a-row>
        </a-spin>
      </a-col>
      <a-col :span="4"></a-col>
    </a-row>
  </section>
</template>

<script>
import some from 'lodash/some'
export default {
  layout: 'screen',
  data() {
    return {
      imgToBase64: {
        loading: false,
        imageUrl: ''
      },
      base64Toimg: {
        loading: false,
        imageUrl: ''
      }
    }
  },
  methods: {
    handleSelectImg(file) {
      const types = ['image/jpeg', 'image/png', 'image/jpg']
      if (!some(types, item => file.type === item)) {
        this.$message.error('只能选择 jpeg/png 图片')
        return false
      }
      this.imgToBase64.loading = true
      let reader = new FileReader()
      reader.onload = (e) => {
        this.imgToBase64.imageUrl = e.target.result
        this.imgToBase64.loading = false
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style scoped>
.to-base64-img {
  height: 100px;
}
.inline-row {
  display: inline-flex;
  width: 100%;
}
.base64-input {
  margin-bottom: 8px;
  width: 100%;
}
.base64-to-img-input {
  width: 100%;
  margin-bottom: 8px;
  margin-right: 8px;
}
</style>
