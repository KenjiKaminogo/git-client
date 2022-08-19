<template>
  <v-container>
    <h1><span class="under">検索結果</span></h1>
      <div v-for = "circle in circle" :key = "circle.id">
        <a @click="navigateTo({
          name: 'vcircle',
          params: {
            circleId: circle.id
          }
          })">
        <div class="circle_preview" :style="{ 'background-image': 'url(' + circle.picture + ')' }">
          <p class="circle_title">{{circle.title}}</p>
        </div>
        </a>
      </div>
  </v-container>
</template>
<script>
import CircleService from '@/services/CircleService'
export default {
  components: {
  },
  data () {
    return {
      circle: null
    }
  },
  // async mounted () {
  //   this.circle = (await CircleService.index()).data
  // },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.circle = (await CircleService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.circle_preview{
    width:152px;
    height:152px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    margin:12px;
    float:left;
    z-index: 50;
}
h1{
  text-align: center;
  border-bottom: solid #f2f2f2;
  line-height: 4rem;;
}
.circle_title{
    background-color: black;
    color:white;
    opacity: 60%;
    text-align: center;
    position: absolute;
    bottom:0;
    margin:0;
    width:100%
}
</style>
