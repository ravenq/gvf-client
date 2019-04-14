<template>
  <section>
    <a-card
      id="aboutme-container"
      :bordered="false"
      style="width: 240px"
    >
      <img
        class="avatar"
        src="/gvf-project.png"
      >
      <a-card-meta title="The GVF Project" style="text-align: center">
        <template slot="description">
          <p style="text-align: justify">
            GVF 项目是由 Golang 作为后端、Vue 作为 PC 前端、Flutter
            作为移动端构建的现代互联网应用框架示例。本博客使用 GVF 项目构建。
          </p>
          <a-row
            type="flex"
            justify="start"
          >
            <strong class="project-title">gvf-server:</strong>
            <iframe
              src="//ghbtns.com/github-btn.html?user=ravenq&repo=gvf-server&type=watch&count=true"
              allowtransparency="true"
              frameborder="0"
              scrolling="0"
              width="110"
              height="20"
            />
          </a-row>
          <a-row
            type="flex"
            justify="start"
          >
            <strong class="project-title2">gvf-client:</strong>
            <iframe
              src="//ghbtns.com/github-btn.html?user=ravenq&repo=gvf-client&type=watch&count=true"
              allowtransparency="true"
              frameborder="0"
              scrolling="0"
              width="110"
              height="20"
            />
          </a-row>
          <a-row
            type="flex"
            justify="start"
          >
            <strong class="project-title">gvf-admin:</strong>
            <iframe
              src="//ghbtns.com/github-btn.html?user=ravenq&repo=gvf-admin&type=watch&count=true"
              allowtransparency="true"
              frameborder="0"
              scrolling="0"
              width="110"
              height="20"
            />
          </a-row>
        </template>
      </a-card-meta>
    </a-card>
  </section>
</template>

<script>
export default {}
</script>

<style>
#aboutme-container .ant-card-body {
  padding-top: 0px;
  padding-bottom: 0px;
}

#aboutme-container .avatar {
  margin-left: 22px;
  width: 128px;
  height: 90px;
  border-radius: 4px;
}

#aboutme-container .project-title {
  margin-top: -2px;
  margin-right: 4px;
  margin-bottom: 8px;
}

#aboutme-container .project-title2 {
  margin-top: -2px;
  margin-right: 13px;
  margin-bottom: 8px;
}
</style>
