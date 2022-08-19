<template>
  <v-container>
    <div class="circle_wrapper">
      <circle-search-panel class="mt-12"/>
      <circle-panel />
    </div>
  </v-container>
</template>
<script>
import CircleService from '@/services/CircleService'
import CirclePanel from './CirclePanel'
import CircleSearchPanel from './CircleSearchPanel'
export default {
  components: {
    CirclePanel,
    CircleSearchPanel
  },
  data () {
    return {
      circle: null
    }
  },
  async mounted () {
    this.circle = (await CircleService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.circle_wrapper{
    max-width: 766px;
    margin: 0 auto;
    color: #222;
    background-color: white;
    background-image: linear-gradient( #F9F9F9 2px, transparent 2px);
    background-size: auto 2rem;
    background-repeat: repeat;
    border-radius: 2px;
    overflow: hidden;
}

</style>
