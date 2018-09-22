import request from '@/utils/request'

export default {
  getPostList(offset, limit=10) {
    return request({
      url: '/post?sortby=pubTime&order=desc&limit='+ limit +'&offset=' + offset,
      method: 'get'
    })
  },
  getHotPostList(limit=5) {
    return request({
      url: '/post?sortby=visit&order=desc&limit='+ limit,
      method: 'get'
    })
  },
  getPost(id) {
    return request({
      url: '/post/' + id,
      method: 'get'
    })
  },
  searchPost(query) {
    return request({
      url: '/post?query=title.contains:' + query,
      method: 'get'
    })
  },
  getMyloveList(offset, limit=10) {
    return request({
      url: '/mylove?sortby=createTime&order=desc&limit='+ limit +'&offset=' + offset,
      method: 'get'
    })
  },
}