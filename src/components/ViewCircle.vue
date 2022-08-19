<template>
    <div class="circle_wrapper">
        <div class="circle_preview" :style="{ 'background-image': 'url(' + circle.picture + ')' }">
          <div class="circle_title">{{circle.title}}</div>
        </div>
        <p><span class="under">①新歓情報</span></p>
        <div class="circle_text">・{{circle.shinkan}}</div>
        <p><span class="under">②新歓チラシ</span></p>
        <div class="circle_text"><a v-bind:href="circle.shinkan_info">{{circle.shinkan_info}}</a></div>
        <p><span class="under">③活動日</span></p>
        <div class="circle_text">{{circle.acDate}}</div>
        <p><span class="under">④活動場所</span></p>
        <div class="circle_text">{{circle.acPlace}}</div>
        <p><span class="under">⑤概要</span></p>
        <div class="circle_text">・{{circle.overview}}</div>
        <p><span class="under">⑥メンバー数</span></p>
        <div class="circle_text member">{{circle.member}}</div>
        <br>
        <!-- <v-btn @click="navigateTo({
          name: 'vcircle-edit',
          params: {
            circleId: circle.id
          }
          })">編集
        </v-btn> -->
    </div>
</template>

<script>
import CircleService from '@/services/CircleService'

export default {
  data () {
    return {
      circle: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    const circleId = this.$store.state.route.params.circleId
    this.circle = (await CircleService.show(circleId)).data
  }
}
</script>

<style scoped>
.circle_wrapper{
    max-width:766px;
    margin:40px auto;
    background-color: white;
    background-image: linear-gradient( #F9F9F9 2px, transparent 2px);
    background-size: auto 2rem;
    background-repeat: repeat;
    overflow: hidden;

}
.circle_wrapper p{
    margin-top:23px;
}
.circle_preview{
    width:689px;
    height:385px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    margin:12px;
}
.circle_title{
    background-color: black;
    color:white;
    opacity: 60%;
    text-align: center;
    position: absolute;
    bottom:0;
    margin:0;
    width:100%;
    text-align:left;
    padding-left:2rem;
    font-size:1rem;
    height: 2rem;;
}
.circle_text{
    text-align: left;
}
  @media screen and (max-width:491px){
    .circle_wrapper{
      max-width: 375px;
      margin: 0 auto;
    }
    .circle_preview{
      width: 365px;
    }
    .member{
      margin-bottom:90px;
    }
  }

</style>
