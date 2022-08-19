<template>
  <panel title="アカウント登録">
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
    color="white"
    placeholder="email"/>
    <p>パスワード</p>
    <v-text-field
    type="password"
    name="password"
    label="password"
    v-model="password"
    filled
    single-line
    dense
    placeholder="password"/>
    <br>
    <div class="error" v-html="error" />
    <br>
    <div class="text-center">
    <v-btn @click="register" class="button_style" rounded color="primary">登録</v-btn>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'login'
        })
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
