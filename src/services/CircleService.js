import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('circle', {
      params: {
        search: search
      }
    })
  },
  show (circleId) {
    return Api().get(`circle/${circleId}`)
  },
  put (circle) {
    return Api().put(`circle/${circle.id}`, circle)
  },
  post (circle) {
    return Api().post('circle', circle)
  }
}
