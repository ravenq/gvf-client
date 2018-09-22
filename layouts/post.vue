<template>
  <a-layout>
    <a-affix>
      <a-layout-header class="layout-header">
        <menubar/>
      </a-layout-header>
    </a-affix>
    <a-layout>
      <a-layout-content class="layout-content">
        <a-row>
          <a-col :span="2"></a-col>
          <a-col :span="15">
            <nuxt/>
          </a-col>
           <a-col :span="1"></a-col>
          <a-col :span="4">
            <a-affix :offsetTop="66">
              <gvf-project  class="right-panel"></gvf-project>
              <hot-post class="right-panel"></hot-post>
            </a-affix>
          </a-col>
          <a-col :span="2"></a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
    <a-layout-footer class="layout-footer">
     <my-footer></my-footer>
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

