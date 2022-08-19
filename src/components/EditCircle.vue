<template>
  <panel title="サークル登録">
    <br>
    <p>サークル名(15文字以内)</p>
      <v-text-field
      label="サークル名（１５文字以内）"
      v-model="circle.title"
      filled
      dense
      required
      :rules="[required]"
      single-line
      color="white"></v-text-field>
    <p>活動日</p>
    <v-text-field
    label="何曜日"
    v-model="circle.acDate"
    filled
    required
    :rules="[required]"
    single-line
    dense></v-text-field>
    <p>活動場所</p>
    <v-text-field
    label="例）本キャンパス何号館"
    v-model="circle.acPlace"
    filled
    required
    :rules="[required]"
    single-line
    dense></v-text-field>
    <p>概要(200文字以内)</p>
    <v-text-field
    label="活動内容や人数など"
    v-model="circle.overview"
    filled
    required
    :rules="[required]"
    single-line
    dense></v-text-field>
    <p>インカレですか</p>
    <v-text-field
    label="はい / いいえ"
    v-model="circle.inCollege"
    filled
    required
    :rules="[required]"
    single-line
    dense></v-text-field>
    <p>サークルの写真URL</p>
    <v-text-field
    label="サークルの写真のURL"
    v-model="circle.picture"
    filled
    required
    :rules="[required]"
    single-line
    dense></v-text-field>

    <p>サークルの人数は何人ですか</p>
    <v-text-field
    label="約50人"
    v-model="circle.member"
    filled
    required
    :rules="[required]"
    single-line
    dense></v-text-field>
    <p>新歓情報（200字以内)</p>
    <v-text-field
    label="新歓情報"
    v-model="circle.shinkan"
    filled
    required
    :rules="[required]"
    single-line
    dense></v-text-field>
    <p>新歓情報チラシ</p>
    <v-text-field
    label="新歓情報"
    v-model="circle.shinkan_info"
    filled
    required
    :rules="[required]"
    single-line
    dense></v-text-field>
    <br>
    <div  class="danger-alert" v-if="error">{{error}}</div>
    <br>
    <v-btn @click="save" class="button_style" rounded color="primary">保存</v-btn>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import CircleService from '@/services/CircleService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      circle: {
        title: null,
        acDate: null,
        acPlace: null,
        overview: null,
        inCollege: null,
        member: null,
        shinkan: null,
        picture: null,
        shinkan_info: null
      },
      error: null,
      required: (value) => !!value || 'この質問は必須です'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.circle)
        .every(key => !!this.circle[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const circleId = this.$store.state.route.params.circleId
      try {
        await CircleService.put(this.circle)
        this.$router.push({
          name: 'vcircle',
          params: {
            circleId: circleId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const circleId = this.$store.state.route.params.circleId
      this.circle = (await CircleService.show(circleId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
