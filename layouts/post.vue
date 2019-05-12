<template>
  <a-layout>
    <a-affix>
      <a-layout-header class="layout-header">
        <menubar />
      </a-layout-header>
    </a-affix>
    <a-layout>
      <a-layout-content class="layout-content">
        <a-row>
          <a-col :md="2" :xs="1" />
          <a-col :md="15" :xs="22">
            <nuxt />
          </a-col>
          <a-col :md="1" :xs="1" />
          <a-col :md="4" :xs="0">
            <a-affix :offset-top="66">
              <gvf-project class="right-panel" />
              <hot-post class="right-panel" />
            </a-affix>
          </a-col>
          <a-col :md="2" :xs="0" />
        </a-row>
      </a-layout-content>
    </a-layout>
    <a-back-top />
    <a-layout-footer class="layout-footer">
      <my-footer />
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Menubar from '~/components/menubar'
import HotPost from '~/components/hot-post'
import GvfProject from '~/components/gvf-project'
import MyFooter from '~/components/footer'
export default {
  components: {
    Menubar,
    HotPost,
    GvfProject,
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
.layout-header {
  padding: 0px;
}
.layout-content {
  background-color: white;
}

.layout-footer {
  text-align: center;
  background-color: #ffffff;
}

.right-panel {
  margin-left: 8px;
}
</style>
