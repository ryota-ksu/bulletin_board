<template>
  <div>
    <h1>掲示板！</h1>
    名前
    <div><input type="text" v-model="name"></div>
    コメント
    <div><textarea v-model="comment"></textarea></div>
    <br>
    <button @click="submitPosts">投稿する</button>
    <br><br>
    <h2>投稿一覧</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      comment: ''
    }
  },
  methods: {
    submitPosts() {
      console.log('submit');
    }
  }
}
</script>
