<template>
    <div class="header_wrapper_sp">
      <div class="cp_cont">
        <input type="checkbox" id="cp_toggle02">
        <div class="cp_mobilebar">
        <label for="cp_toggle02" class="cp_menuicon">
        <span></span>
        </label>
        <span class="home2" @click="navigateTo({name: 'index'})">
          <img class="logo_size" src="../assets/white_logo.png">
        </span>
        </div>
        <header class="cp_offcm02">
        <span class="home" @click="navigateTo({name: 'index'})">
          <img class="logo_size" src="../assets/white_logo.png">
        </span>
        <nav>
        <ul class="menu_list clearfix">
        <li>
          <v-btn class="menu_button" dark text  @click="navigateTo({name: 'circle'})">
        サークル一覧
         </v-btn>
        </li>
        <li v-if="!$store.state.isUserLoggedIn">
          <v-btn v-if="!$store.state.isUserLoggedIn" dark class="menu_button" text @click="navigateTo({name: 'register'})">
          アカウント登録
          </v-btn>
        </li>
        <li v-if="!$store.state.isUserLoggedIn">
          <v-btn v-if="!$store.state.isUserLoggedIn" class="menu_button" dark text @click="navigateTo({name: 'login'})">
          ログイン
          </v-btn>
        </li>
        <li v-if="$store.state.isUserLoggedIn">
          <v-btn v-if="$store.state.isUserLoggedIn" class="menu_button" dark text  @click="logout">
          ログアウト
          </v-btn>
        </li>
        <li v-if="$store.state.isUserLoggedIn">
          <v-btn v-if="$store.state.isUserLoggedIn" class="menu_button" dark text  @click="navigateTo({name: 'circle-create'})">
          サークルを追加
          </v-btn>
        </li>
        </ul>
        </nav>
        </header>
      </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false
  }),
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'circle'
      })
    }
  }
}
</script>

<style scoped>
  .logo_size{
    width:187px;
    cursor: pointer;
    margin:24px auto;
    padding:10px;
  }
  .button_wrapper{
    margin: 0 13px;
    padding-top:40.2px;
  }
  .menu_button{
    text-align: left;
    margin-bottom:22.2px;
    font-weight: bold;
  }
.menu_list {
list-style: none;
margin: 0 13px;
border-top:solid white;
padding:40.2px 0 0 0;
}
.menu_list li{
  text-align: center;
}
a {
text-decoration: none;
color: inherit;
}

/* menu */
.cp_offcm02 {
position: fixed;
z-index: 5;
left: 0;
visibility: visible;
overflow: auto;
width:187px;
height: 100vh;
padding-top: 0;
text-align: center;
opacity: 1;
background: linear-gradient(180deg,#64DEE6, #69B3EB);
}

.cp_offcm02 nav, .cp_offcm02 ul {
height: 100%;
}
.cp_offcm02 li {
text-align:center;
display: inline-block;
border: none;
color: #ffffff;
}
.cp_offcm02 a {
display: block;
padding: 12px 45px;
-webkit-transition: background-color .3s ease-in;
transition: background-color .3s ease-in;
}

/* menu toggle */
#cp_toggle02 {
display: none;
}
.cp_mobilebar {
display: none;
}
/* content */
.cp_container {
position: relative;
top: 0px;
margin-top: 0;
padding: 35px auto;
-webkit-transition: transform .3s ease-in;
transition: transform .3s ease-in;
}
.cp_content {
margin: 0 auto;
padding: 20px;
height: 65vh;
text-align: center;
}

@media screen and (max-width:491px){
.home{
  display: none;
}
.menu_list {
border-top:none;
padding:0;
}
/* menu */
.cp_offcm02 {
position: fixed;
z-index: 2;
bottom: 0;
/* overflow-y: scroll; */
overflow: hidden;
height:123px;
width:100vw;
-webkit-transition: opacity 0.3s ease-in, visibility 0.3s ease-in 0.3s;
transition: opacity 0.3s ease-in, visibility 0.3s ease-in 0.3s;
opacity: 0;
background: linear-gradient(180deg,#64DEE6, #69B3EB);
}
.cp_offcm02 nav {
background: linear-gradient(180deg,#64DEE6, #69B3EB);
opacity:70%;
}
.cp_offcm02 li {
float:left;
display: block;
margin: 15px auto;
width:33%;
}
.menu_button{
  height: 36px;
  min-width: 64px;
  margin:0;
  padding:27px 16px;
  font-weight: bold;
}
.cp_offcm02 a:hover {
background-color: white;
}
/* menu toggle */
.home2{
  position:absolute;
  top:0;
  left:0;
  right: 0;
  bottom:0;
}
.logo_size[data-v-61dd7a3d] {
    width: 163px;
    cursor: pointer;
    margin:0;
    padding:0;
}
.cp_mobilebar {
display: block;
z-index: 20;
position: fixed;
bottom: 0;
left: 0;
padding: 0 25px;
width: 100%;
height: 60px;
background: linear-gradient(180deg,#64DEE6, #69B3EB);
-webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
.cp_menuicon {
display: block;
position: relative;
width: 25px;
height: 100%;
cursor: pointer;
-webkit-transition: transform .3s ease-in;
transition: transform .3s ease-in;
z-index: 21;
}
.cp_menuicon > span {
display: block;
position: absolute;
top: 55%;
margin-top: -0.3em;
width: 100%;
height: 0.2em;
border-radius: 1px;
background-color: #eeeeee;
-webkit-transition: transform .3s ease-in;
transition: transform .3s ease-in;
}
.cp_menuicon > span:before, .cp_menuicon > span:after {
content: '';
position: absolute;
width: 100%;
height: 100%;
left:0;
border-radius: 1px;
background-color: #eeeeee;
-webkit-transition: transform .3s ease;
transition: transform .3s ease;
}
.cp_menuicon > span:before {
-webkit-transform: translateY(-0.6em);
transform: translateY(-0.6em);
}
.cp_menuicon > span:after {
-webkit-transform: translateY(0.6em);
transform: translateY(0.6em);
}
#cp_toggle02:checked + .cp_mobilebar .cp_menuicon {
-webkit-transform: rotate(45deg);
transform: rotate(45deg);
}
#cp_toggle02:checked + .cp_mobilebar span:before,
#cp_toggle02:checked + .cp_mobilebar span:after {
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
}
#cp_toggle02:checked ~ .cp_offcm02 {
visibility: visible;
opacity: 1;
-webkit-transition-delay: 0s;
transition-delay: 0s;
}
}

</style>
