<template>
  <panel title = "ログイン">
    <br>
      <p style="padding-top:0.5em;">Emailアドレス</p>
      <v-text-field
        type="email"
        name="email"
        label="email"
        v-model="email"
        filled
        dense
        single-line
        color="white"/>
      <p>パスワード</p>
      <v-text-field
        type="password"
        name="password"
        label="password"
        v-model="password"
        filled
        single-line
        dense/>
        <br>
        <div class="error" v-html="error" />
        <div class="text-center">
        <br>
        <v-btn @click="login" class="button_style" rounded color="primary">ログイン</v-btn>
        </div>
  </panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$router.push({
          name: 'circle'
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .background{
    background-color:#F2F2F2;
    height:100vh;
  }
</style>
