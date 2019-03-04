import Api from '@/api'

export default function(ctx, inject) {
  const $axios = ctx.$axios
  const api = new Api($axios)
  ctx.$api = api
  inject('api', api)
}
