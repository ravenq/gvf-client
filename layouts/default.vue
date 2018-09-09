<template>
  <a-layout class="default-layout-container">
    <a-affix>
      <a-layout-header class="post-header">
        <menubar/>
      </a-layout-header>
    </a-affix>
    <a-layout>
      <a-layout-content class="post-content">
        <nuxt/>
      </a-layout-content>
    </a-layout>
    <a-layout-footer class="post-footer">
      <my-footer></my-footer>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Menubar from '~/components/menubar'
import MyFooter from '~/components/footer'

export default {
  components: {
    Menubar,
    MyFooter
  }
}
</script>

<style>
.ant-layout-header {
  background: #ffffff;
}
.ant-layout-sider {
  background: #ffffff;
}
.post-header {
  padding: 0px;
}
.post-content {
  background-color: white;
}

.post-footer {
  text-align: center;
  background-color: #ffffff;
}
#__nuxt {
  height: 100%;
}
#__layout {
  height: 100%;
}
.default-layout-container {
  height: 100%;
}
</style>

