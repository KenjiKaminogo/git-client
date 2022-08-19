<template>
  <div class="main_wrapper">
    <v-container>
      <img class="logo" src="../assets/logo.png">
      <div class="search_wrapper">
        <v-text-field
        label="サークル名、キーワードを入力"
        rounded
        dense
        outlined
        solo
        v-model="search" />
        <router-link :to="{ path: 'circle', query: { search: search }}">検索!!</router-link>
    </div>
  </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: null
    }
  }
}
</script>

<style scoped>
.main_wrapper{
    max-width: 1000px;
    width:960px;
    font-size: 16px;
    margin: 0 auto;
    color: #222;
    padding:2rem 1rem 3rem;
    background-color: white;
    background-image: linear-gradient( #F9F9F9 2px, transparent 2px);
    background-size: auto 2rem;
    background-repeat: repeat;
    line-height: 24px;
    border-radius: 2px;
    overflow: hidden;
    height: 100vh;
}
.logo{
    margin-top:224px;
    width:256px;
}
.search_wrapper{
    width:346px;
    margin:0 auto;
}
@media screen and (max-width:491px){
  .main_wrapper{
    max-width:335px;
  }
  .search_wrapper{
    width:276px;
  }
  .logo{
    margin-top:160px;
    width:256px;
}

}
</style>
