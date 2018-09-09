<template>
  <a-row class="menubar-container">
    <a-col :span="6">
      <a-row justify="start">
        <a-col :span="6">
          <img class="logo" alt="logo" height="32" src="/logo.png">
        </a-col>
        <a-col :span="14">
          <a-select
            showSearch
            id="search-select"
            style="width: 100%"
            :defaultActiveFirstOption="false"
            :showArrow="false"
            :filterOption="false"
            @search="handleSearch"
            @select="handleSelect"
            placeholder="search post..."
            :notFoundContent="fetching ? undefined : null"
          >
            <a-spin v-if="fetching" slot="notFoundContent" size="small"/>
            <a-select-option v-for="d in data" :key="d.value">{{d.text}}</a-select-option>
          </a-select>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="18">
      <a-menu
        class="title"
        mode="horizontal"
        v-model="selectKeys"
        :style="{ lineHeight: '64px', width:'100%' }"
      >
        <a-menu-item key="post">
          <router-link to="/post/list"><a-icon type="book" />Blog</router-link>
        </a-menu-item>
        <a-menu-item key="mylove">
          <router-link to="/mylove"><a-icon type="heart-o" />Mylove</router-link>
        </a-menu-item>
        <a-menu-item key="base64">
          <router-link to="/base64"><a-icon type="base64" />Base64</router-link>
        </a-menu-item>
        <a-menu-item key="aboutme">
          <router-link to="/aboutme"><a-icon type="user" />Aboutme</router-link>
        </a-menu-item>
      </a-menu>
    </a-col>
  </a-row>
</template>

<script>
import api from '~/api'
import debounce from 'lodash/debounce'
import isArray from 'lodash/isArray'
import isNil from 'lodash/isNil'
import split from 'lodash/split'

export default {
  mounted() {
    let names = split(this.$route.fullPath, '/')
    if (names.length > 1) {
      this.selectKeys = [names[1]]
    }
  },
  data() {
    this.handleSearch = debounce(this.handleSearch, 500)
    return {
      selectKeys: ['post'],
      fetching: false,
      data: []
    }
  },
  methods: {
    handleSearch(val) {
      if (!isNil(val)) {
        this.fetching = true
        api
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

#search-select .ant-select-selection {
  border: none;
  box-shadow: none;
}
</style>

