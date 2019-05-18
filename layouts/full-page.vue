<template>
  <a-layout class="default-layout-container">
    <a-affix>
      <a-layout-header class="layout-header">
        <menubar />
      </a-layout-header>
    </a-affix>
    <a-layout>
      <a-layout-content class="layout-content">
        <nuxt />
      </a-layout-content>
    </a-layout>
    <a-layout-footer class="layout-footer">
      <my-footer />
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

<style lang="scss" scoped>
.ant-layout-header {
  background: #ffffff;
}
.ant-layout-sider {
  background: #ffffff;
}
.layout-header {
  padding: 0px;
}
.layout-content {
  background-color: white;
}

.layout-footer {
  text-align: center;
  background-color: #ffffff;
  position: fixed;
  bottom: 0px;
  left: 40%;
}

.default-layout-container {
  height: 100%;
}
</style>
