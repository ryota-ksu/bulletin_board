<template id="app">
  <div>
    <h1>インターンのための掲示板</h1>
    名前
    <div><input type="text" v-model="name"></div>
    コメント
    <div><textarea v-model="comment"></textarea></div>
    <br>
    <button @click="submitPosts">投稿する</button>
    <br><br>
    <h2>投稿一覧</h2>
    <div v-for="post in posts" :key="post.name">
      <hr>
      <p>名前 : {{post.fields.name.stringValue}}</p>
      <p>コメント : {{post.fields.comment.stringValue}}</p>
    </div>
  </div>
</template>
<style>
  #app{
    text-align: center;
    background-color:red;
    font-family: HiraMinProN-W6;
  }
</style>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        name: '',
        comment: '',
        posts: ''
      };
    },
    created() {
      this.getPosts();
    },

    methods: {
      submitPosts() {
        axios.post(
          "https://firestore.googleapis.com/v1/projects/vue-test-8e952/databases/(default)/documents/posts",
          {
            fields: {
              name: {
                stringValue: this.name
              },
              comment: {
                stringValue: this.comment
              }
            }
          }
        ).then(() => {
          this.name = '';
          this.comment = '';
          this.getPosts();
        });
      },
      getPosts() {
        axios.get(
          "https://firestore.googleapis.com/v1/projects/vue-test-8e952/databases/(default)/documents/posts"
        ).then(res => {
          this.posts = res.data.documents;
        });
      }
    }
  };
</script>