export default class Api {
  constructor(axios) {
    this.axios = axios
  }
  LoginWithGithub(code, state) {
    return this.axios.post('/user/loginWithGithub', {
      code: code,
      state: state
    })
  }
  getPostList(offset, limit = 10) {
    return this.axios.get(
      `/post?sortby=pubTime&order=desc&limit=${limit}&offset=${offset}`
    )
  }
  getHotPostList(limit = 5) {
    return this.axios.get(`/post?sortby=visit&order=desc&limit=${limit}`)
  }
  getPost(id) {
    return this.axios.get(`/post/${id}`)
  }
  likePost(id) {
    return this.axios.get(`/post/like/${id}`)
  }
  dislikePost(id) {
    return this.axios.get(`/post/dislike/${id}`)
  }
  searchPost(query) {
    return this.axios.get(`/post?query=title.contains:${query}`)
  }
  getMyloveList(offset, limit = 10) {
    return this.axios.get(
      `/mylove?sortby=createTime&order=desc&limit=${limit}&offset=${offset}`
    )
  }
  addComment(data) {
    return this.axios.post('/comments', data)
  }
  getCommentList(id) {
    return this.axios.get(`/comments/fetch/${id}`)
  }
  likeComment(id) {
    return this.axios.get(`/comments/like/${id}`)
  }
  dislikeComment(id) {
    return this.axios.get(`/comments/dislike/${id}`)
  }
}
