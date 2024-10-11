<script>

  import { store } from '../store/store';
  import axios from 'axios'
  import { getCategory, getTags, formatData } from '../data/utils'

  export default {
    name: 'PostDetail',
    data(){
      return {
        post:{
          title: '',
          txt: '',
          path_image: '',
          image_original_name: '',
          created_at:'',
          reading_time: '',
          category: {},
          tags: [],
          user: {}
        }
      }
    },
    methods:{
      getApi(slug){
        axios.get(store.apiUrl + 'post-by-slug/' + slug)
          .then(res => {
            if(res.data.success){
              this.post = res.data.post;
              console.log(this.post);
            }else{
              console.log('errore 404');
              this.$router.push({name: '404'})
            }
            
          })
        
      }
    },
    computed:{
      infoPost(){
        const cat =  getCategory(this.post);
        const tags =  getTags(this.post);
        const date =  formatData(this.post.created_at);
        return `
              By ${this.post.user.name}
              | Tempo di lettura: ${this.post.reading_time} min
              | Categoria: ${cat}
              | Tag: ${tags}
              | ${date}
              `
      }
    },
    mounted(){
      // ottengo lo slug
      const slug = this.$route.params.slug;
      this.getApi(slug);
      
      
    }
  }
</script>


<template>
  <div>
    <h1>Dettaglio post: {{ post.title }}</h1>
    <p>{{ infoPost }}</p>
    <p>{{ post.txt }}</p>
    <img :src="post.path_image" :alt="post.title">
    <div class="span">{{ post.image_original_name }}</div>
    
  </div>
</template>



<style lang="sass" scoped>

</style>