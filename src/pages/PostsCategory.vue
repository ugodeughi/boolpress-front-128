<script>
  import axios from 'axios';
  import { store } from '../store/store';

  export default {
    name: 'PostsCategory',
    data(){
      return {
        posts: [],
        categoryName: ''
      }
    },
    methods:{
      getApi(slug){
        axios.get(store.apiUrl + 'posts-by-category/' + slug)
          .then(res => {
            if(res.data.success){
              this.posts = res.data.category.posts;
              this.categoryName = res.data.category.name;
            }else{
              this.$router.push({name: '404'})
            }
          })
        
      }
    },
    mounted(){
      const slug = this.$route.params.slug;
      this.getApi(slug);
      
    }
  }
</script>


<template>
  <div>
    <h2>Elenco post pe la categoria: {{ categoryName }}</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{name: 'postDetail', params: {slug: post.slug}}">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>
a{
  color: white;
}
</style>