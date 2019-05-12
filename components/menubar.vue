<template>
  <a-row class="menubar-container">
    <a-col :md="6" :xs="24">
      <a-row justify="start">
        <a-col :md="6" :xs="2">
          <!-- <img class="logo" alt="logo" height="32" src="/logo.png"> -->
        </a-col>
        <a-col :md="14" :xs="20">
          <a-select
            id="search-select"
            show-search
            style="width: 100%"
            :default-active-first-option="false"
            :show-arrow="false"
            :filter-option="false"
            placeholder="search post..."
            :not-found-content="fetching ? undefined : null"
            @search="handleSearch"
            @select="handleSelect"
          >
            <a-spin
              v-if="fetching"
              slot="notFoundContent"
              size="small"
            />
            <a-select-option
              v-for="d in data"
              :key="d.value"
            >
              {{ d.text }}
            </a-select-option>
          </a-select>
        </a-col>
      </a-row>
    </a-col>
    <a-col :md="18" :xs="0">
      <a-menu
        v-model="selectKeys"
        class="title"
        mode="horizontal"
        :style="{ lineHeight: '64px', width: '100%' }"
      >
        <a-menu-item key="post">
          <router-link to="/post/list">
            <a-icon id="menu-icon" type="book" />Blog
          </router-link>
        </a-menu-item>
        <a-menu-item key="markdown">
          <router-link to="/markdown">
            <a-icon id="menu-icon" type="file-markdown" />Markdown
          </router-link>
        </a-menu-item>
        <a-menu-item key="base64">
          <router-link to="/base64">
            <a-icon id="menu-icon" type="inbox" />Base64
          </router-link>
        </a-menu-item>
        <!-- <a-menu-item key="mylove">
          <router-link to="/mylove">
            <a-icon id="menu-icon" type="heart-o" />Mylive
          </router-link>
        </a-menu-item> -->
        <a-menu-item key="aboutme">
          <router-link to="/aboutme">
            <a-icon id="menu-icon" type="heart-o" />About Me
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-col>
  </a-row>
</template>

<script>
import debounce from 'lodash.debounce'
import isArray from 'lodash.isarray'
import isNil from 'lodash.isnil'
import split from 'lodash.split'

export default {
  data() {
    this.handleSearch = debounce(this.handleSearch, 500)
    return {
      selectKeys: ['post'],
      fetching: false,
      data: []
    }
  },
  mounted() {
    const names = split(this.$route.fullPath, '/')
    if (names.length > 1) {
      this.selectKeys = [names[1]]
    }
  },
  methods: {
    handleSearch(val) {
      if (!isNil(val)) {
        this.fetching = true
        this.$api
          .searchPost(val)
          .then(res => {
            if (isArray(res.data)) {
              const data = res.data.map(item => ({
                text: item.title,
                value: item.id
              }))
              this.data = data
            } else {
              this.data = []
            }
          })
          .finally(_ => {
            this.fetching = false
          })
      }
    },
    handleSelect(value) {
      if (!isNil(value)) {
        this.data = []
        this.$nextTick(_ => {
          this.$router.push({ path: '/post/content', query: { id: value } })
        })
      }
    }
  }
}
</script>

<style>
.menubar-container {
  box-shadow: 0 2px 8px #f0f1f2;
}

.logo {
  margin-left: 50px;
}

.title {
  font-size: 24px;
}

#menu-icon {
  font-size: 24px;
}

#search-select .ant-select-selection {
  border: none;
  box-shadow: none;
}
</style>
