<template>
  <a-layout>
    <a-affix>
      <a-layout-header class="post-header">
        <menubar/>
      </a-layout-header>
    </a-affix>
    <a-layout>
      <a-layout-content class="post-content">
        <a-row>
          <a-col :span="2"></a-col>
          <a-col :span="15">
            <nuxt/>
          </a-col>
           <a-col :span="1"></a-col>
          <a-col :span="4">
            <a-affix :offsetTop="66">
              <aboutme  class="right-panel"></aboutme>
              <hot-post class="right-panel"></hot-post>
            </a-affix>
          </a-col>
          <a-col :span="2"></a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
    <a-layout-footer class="post-footer">
     <my-footer></my-footer>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Menubar from '~/components/menubar'
import HotPost from '~/components/hot-post'
import Aboutme from '~/components/aboutme'
import MyFooter from '~/components/footer'
export default {
  components: {
    Menubar,
    HotPost,
    Aboutme,
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

.right-panel {
  margin-left: 8px;
}
</style>

