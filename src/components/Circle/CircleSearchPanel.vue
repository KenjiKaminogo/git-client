<template>
    <div class="search_wrapper">
        <v-text-field
        label="サークル、ジャンルを入力"
        rounded
        dense
        outlined
        solo
        v-model="search"
        ></v-text-field>
    </div>
</template>
<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: {
      handler: _.debounce(async function (value) {
        const route = {
          name: 'circle'
        }
        if (this.search !== '') {
          route.query = {
            search: this.search
          }
        }
        this.$router.push(route)
      }, 700),
      immediate: true
    },
    '$route.query.search': {
      handler (value) {
        this.search = value
        console.log(value)
      },
      immediate: true
    }
  }
}
</script>
<style scoped>
    .search_wrapper{
        width:80%;
        margin:0 auto;
    }
</style>
