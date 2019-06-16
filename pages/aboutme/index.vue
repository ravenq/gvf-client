<template>
  <a-row>
    <a-col :md="3" :xs="1" />
    <a-col :md="18" :xs="22">
      <div>
        <a-card class="my-profile-card">
          <a-row type="flex" justify="start">
            <a-col>
              <img src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr.png" class="ravenq-qr">
            </a-col>
            <a-col :span="18">
              <div class="my-profile">
                <div class="coder-say">
                  一个码农的技术博客，记录一些技术问题和感想。同时开源本博源码(下方开源项目)，和天下的码农们共同学习，共同进步ヾ(◍°∇°◍)ﾉﾞ
                </div>
                <ul class="my-acounts">
                  <li>
                    <img class="my-acount-logo" src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/wechart-logo.svg">
                    微信公众号：Ravenq 的程序之路
                  </li>
                  <li>
                    <img class="my-acount-logo" src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/github-logo.svg">
                    GitHub: <a href="https://www.github.com/ravenq" target="_blank">https://www.github.com/ravenq</a>
                  </li>
                  <li>
                    <img class="my-acount-logo" src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/zhihu-logo.svg">
                    知乎：<a href="https://www.zhihu.com/people/aquarius-for/activities" target="_blank">https://www.zhihu.com/people/aquarius-for/activities</a>
                  </li>
                  <li>
                    <img class="my-acount-logo" src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/oschina-logo.svg">
                    OSChina：<a href="https://my.oschina.net/ravenq" target="_blank">https://my.oschina.net/ravenq</a>
                  </li>
                  <li>
                    <a-icon type="mail" style="color: #00a2ff" />
                    Email： flw_dream@126.com
                  </li>
                </ul>
              </div>
            </a-col>
          </a-row>
        </a-card>
        <a-card class="my-profile-mobile">
          <img
            slot="cover"
            alt="ravenq-qr"
            src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr.png"
            class="open-source-project-logo"
          >
          <a-card-meta
            description="一个码农的技术博客，记录一些技术问题和感想。同时开源本博源码(下方开源项目)，和天下的码农们共同学习，共同进步ヾ"
            class="open-source-project-description"
          />
          <template slot="actions" class="ant-card-actions">
            <a href="https://www.github.com/ravenq" target="_brank">
              <img class="my-acount-logo" src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/github-logo.svg">
            </a>
            <a href="https://my.oschina.net/ravenq" target="_brank">
              <img class="my-acount-logo" src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/oschina-logo.svg">
            </a>
            <a href="https://blog.csdn.net/my___dream" target="_brank">
              <img class="my-acount-logo" src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/csdn-logo.svg">
            </a>
            <img class="my-acount-logo" src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/jianshu-logo.svg">
            <a href="https://www.zhihu.com/people/aquarius-for/activities" target="_brank">
              <img class="my-acount-logo" src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/zhihu-logo.svg">
            </a>
          </template>
        </a-card>
        <h2 style="margin-top: 12px;">
          <strong>我的开源项目</strong>
        </h2>
        <a-row type="flex" justify="space-between">
          <a-col>
            <a-card class="open-source-project-card">
              <img
                slot="cover"
                alt="markdown-it-vue"
                src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/markdown-it-vue.png"
                class="open-source-project-logo"
              >
              <a-card-meta
                description="markdown-it-vue 是一个丰富的 markdown Vue 组件，markdown-it-vue 使用 markdown-it 作为 Markdown 数据解析引擎，整合多种 markdown-it 插件，并内置了一些自己的功能性插件，支持 GFM TOC、GFM style、emoji等通用特性，还支持 mermaid charts、Echarts、flowchart.js 等多种图表，支持 AsciiMath、Latex 等数学公式渲染，支持 errro | warning | info 个性化提示。"
                class="open-source-project-description"
              />
              <template slot="actions" class="ant-card-actions">
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=ravenq&repo=markdown-it-vue&type=star&count=true"
                  class="github-start-btn"
                  allowtransparency="true"
                  frameborder="0"
                  scrolling="0"
                  width="110"
                  height="20"
                />
                <router-link to="/base64">
                  <a-icon type="heart" />
                  <span style="margin-left: 3px;">live demo</span>
                </router-link>
              </template>
            </a-card>
          </a-col>
          <a-col>
            <a-card class="open-source-project-card">
              <img
                slot="cover"
                alt="vue-cli-plugin-component-lib"
                src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/vue-cli-plugin-component-lib.png"
                class="open-source-project-logo-vue-cli-plugin-component-lib"
              >
              <a-card-meta
                description="vue-cli-plugin-component-lib 是一个 @vue/cli 3.0 插件，此插件主要用于新建 Vue 组件库时完成一些基础配置。添加 vue-cli-plugin-component-lib 插件后，更具插件的配置选项，将会为您的 packages.json 做出一些基础配置，还会生成 example 示例工程目录，示例工程和组件库工程在同一个工程中构建，为组件库提供示例代码，方便组件库调试。如果您的组件库打算发布到GitHub上，插件还会为您做出基础的 Trav CI 配置。"
                class="open-source-project-description"
              />
              <template slot="actions" class="ant-card-actions">
                <iframe
                  src="//ghbtns.com/github-btn.html?user=ravenq&repo=vue-cli-plugin-component-lib&type=star&count=true"
                  class="github-start-btn"
                  allowtransparency="true"
                  frameborder="0"
                  scrolling="0"
                  width="110"
                  height="20"
                />
                <iframe
                  src="//ghbtns.com/github-btn.html?user=ravenq&repo=vue-cli-plugin-component-lib&type=fork&count=true"
                  class="github-start-btn"
                  allowtransparency="true"
                  frameborder="0"
                  scrolling="0"
                  width="110"
                  height="20"
                />
              </template>
            </a-card>
          </a-col>
          <a-col>
            <a-card class="open-source-project-card">
              <img
                slot="cover"
                alt="GVF Projet"
                src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/gvf-project.png"
                class="open-source-project-logo-gvf-project"
              >
              <a-card-meta
                description="GVF 项目是由 Golang 作为后端、Vue 作为 PC 前端、Flutter 作为移动端构建的现代互联网应用框架示例。本博客使用 GVF 项目构建。欢迎 Fork 这些项目，轻松构建自己博客网站。前端项目已经使用 Nuxt SSR 模式，接入百度 Spider 页面提交，百度统计等 SEO 优化。"
                class="open-source-project-description"
              />
              <div>
                <ul style="margin-top: 0px; margin-bottom: 0px; color: rgba(0, 0, 0, 0.45);">
                  <li>gvf-client: 后端服务，使用 Go 构建。</li>
                  <li>gvf-client: 前端项目，使用 Nuxt 构建。</li>
                  <li>gvf-admin: 后台管理项目。</li>
                </ul>
              </div>
              <template slot="actions" class="ant-card-actions">
                <iframe
                  src="//ghbtns.com/github-btn.html?user=ravenq&repo=gvf-server&type=star&count=true"
                  class="github-start-btn"
                  allowtransparency="true"
                  frameborder="0"
                  scrolling="0"
                  width="110"
                  height="20"
                />
                <iframe
                  src="//ghbtns.com/github-btn.html?user=ravenq&repo=gvf-client&type=star&count=true"
                  class="github-start-btn"
                  allowtransparency="true"
                  frameborder="0"
                  scrolling="0"
                  width="110"
                  height="20"
                />
                <iframe
                  src="//ghbtns.com/github-btn.html?user=ravenq&repo=gvf-admin&type=star&count=true"
                  class="github-start-btn"
                  allowtransparency="true"
                  frameborder="0"
                  scrolling="0"
                  width="110"
                  height="20"
                />
              </template>
            </a-card>
          </a-col>
          <a-col>
            <a-card class="open-source-project-card">
              <img
                slot="cover"
                alt="vscode-goto-node-modules"
                src="https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/vscode-goto-node-modules.png"
                class="open-source-project-logo-vscode-goto-node-modules"
              >
              <a-card-meta
                description="vscode-goto-node-modules 是一个能够快速定位引用模块在 node_modules 目录下位置的 VSCode 插件。"
                class="open-source-project-description"
              />
              <div>
                <br>
                <span style="color: rgba(0, 0, 0, 0.45);">插件市场：</span>
                <a href="https://marketplace.visualstudio.com/items?itemName=ravenq.vscode-goto-node-modules">vscode-goto-node-modules</a>
              </div>
              <template slot="actions" class="ant-card-actions">
                <iframe
                  src="//ghbtns.com/github-btn.html?user=ravenq&repo=vscode-goto-node-modules&type=star&count=true"
                  class="github-start-btn"
                  allowtransparency="true"
                  frameborder="0"
                  scrolling="0"
                  width="110"
                  height="20"
                />
                <iframe
                  src="//ghbtns.com/github-btn.html?user=ravenq&repo=vscode-goto-node-modules&type=fork&count=true"
                  class="github-start-btn"
                  allowtransparency="true"
                  frameborder="0"
                  scrolling="0"
                  width="110"
                  height="20"
                />
              </template>
            </a-card>
          </a-col>
        </a-row>
      </div>
      <comments class="comments" comment-id="about-me" />
    </a-col>
    <a-col :md="3" :xs="1" />
  </a-row>
</template>

<script>
import Comments from '~/components/comments'
export default {
  components: {
    Comments
  }
}
</script>

<style scoped>
.comments {
  margin-top: 32px;
}
.ravenq-qr {
  width: 180px;
}
.my-profile-card {
  margin-top: 24px;
}
.my-profile {
  margin-top: 8px;
  font-size: 16px;
}
.coder-say {
  margin-left: 20px;
}
.open-source-project-card {
  margin-top: 8px;
  font-size: 16px;
  width: 370px;
}
.open-source-project-logo {
  width: 150px;
  margin: auto;
  margin-top: 12px;
}
.open-source-project-description {
  text-align: justify;
}
.github-start-btn {
  margin-top: 5px;
}
.open-source-project-logo-gvf-project {
  width: 130px;
  height: 95px;
  margin: auto;
  margin-top: 12px;
}
.open-source-project-logo-vue-cli-plugin-component-lib {
  width: 88px;
  margin: auto;
  margin-top: 12px;
}

.open-source-project-logo-vscode-goto-node-modules {
  width: 88px;
  margin: auto;
  margin-top: 12px;
}

.my-acount-logo {
  width: 16px;
  cursor: pointer;
}
@media only screen and (min-width: 320px) {
  .my-profile-mobile {
    display: block;
  }
  .my-profile-card {
    display: none;
  }
}

@media only screen and (min-width: 992px) {
  .my-profile-mobile {
    display: none;
  }
  .my-profile-card {
    display: block;
  }
}
</style>
