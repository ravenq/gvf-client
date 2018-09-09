<template>
  <section>
    <a-select
      mode="combobox"
      :value="value"
      id="search-select"
      style="width: 100%"
      :defaultActiveFirstOption="false"
      :showArrow="false"
      :filterOption="false"
      placeholder="search post..."
    >
      <a-spin v-if="fetching" slot="notFoundContent" size="small"/>
      <a-select-option v-for="d in searchList" :key="d.value">{{d.text}}</a-select-option>
    </a-select>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectKeys: ['post'],
      fetching: false,
      value: '',
      searchList: [{
        text: '11',
        value: '11'
      }]
    }
  },
}
</script>
