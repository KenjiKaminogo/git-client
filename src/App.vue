<template>
  <div id="app">
    <v-app>
      <page-header />
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>
<style>
* :not(.v-icon) {
font-family: "游ゴシック monospace", "Yu Gothic monospace;", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "verdana", monospace;
}
#app {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.button_style{
  width:8rem;
  background: linear-gradient(#69B3EB, #64DEE6);
  }
  .danger-alert{
    color:red;
  }
#nav {
  padding: 30px;
}
.under{
background:linear-gradient(transparent 70%, #64D9E6 0%);
}
h1{
  font-size:1.4rem;
}
h1,p{
  text-align: left;
  color:black;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
