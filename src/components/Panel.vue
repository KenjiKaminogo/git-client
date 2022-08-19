<template>
<div class="background">
  <v-container>
    <v-flex>
    <div class="wrapper">
    <h1><span class="under">{{title}}</span></h1>
    <slot>
        No slot Content
    </slot>
    </div>
    </v-flex>
  </v-container>
</div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
.background{
  background-color: #F2F2F2;
}
.wrapper{
  max-width: 14000px;
  padding:30px;
  margin: 29px  auto 0 190px;
  background-color:white;
}
template{
  background-color:#F2F2F2;
  height:100%;
}
.error {
  color: black;
}
.register_button{
  width:8rem;
  background: linear-gradient(#69B3EB, #64DEE6);
  }
  @media screen and (max-width:491px){
    .wrapper{
      margin:0 auto;
      max-width:900px;
    }
    .container{
      padding:20px 12px 0 12px;
    }
  }

</style>
