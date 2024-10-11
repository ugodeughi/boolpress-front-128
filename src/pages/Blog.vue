<script>
import axios from 'axios';
import { store } from '../store/store' 
import Loader from '../components/partials/Loader.vue'
import Paginator from '../components/partials/Paginator.vue'
import { getCategory, getTags, formatData } from '../data/utils'

  export default {
    name: 'Blog',
    components:{
      Loader,
      Paginator
    },
    data(){
      return{
        posts:[],
        isLoading: true,
        paginatorData:{
          current_page:1,
          links:[]
        },
        categories:[],
        tags:[],
        getCategory,
        getTags,
        formatData
      }
    },
    methods:{
      getApi(apiUrl, type = 'posts'){
        this.isLoading = true;
        
        axios.get(apiUrl)
        .then(result => {

          if(type === 'posts'){
            this.isLoading = false;
            this.posts = result.data.data;
            this.paginatorData.current_page = result.data.current_page;
            this.paginatorData.links = result.data.links;
            console.log(this.posts);
            
          }else{
            this[type] = result.data;
          }

          /*switch(type){
            case 'posts':
                this.isLoading = false;
                this.posts = result.data.data;
                this.paginatorData.current_page = result.data.current_page;
                this.paginatorData.links = result.data.links;
                console.log(this.posts);
                break;
              case 'categories':
                this.categories = result.data;
                console.log(this.categories);
                
                break;
              case 'tags':
                  this.tags = result.data;
                  console.log(this.tags);
                break;
            }*/
          })
          .catch(error => {
            console.log(error.message);
            
          })
      }
    },
    mounted(){
      this.getApi(store.apiUrl + 'posts', 'posts')
      this.getApi(store.apiUrl + 'categories', 'categories')
      this.getApi(store.apiUrl + 'tags', 'tags')
    }
  }
</script>


<template>
  <div>
    <h1>I miei post</h1>
    <div v-if="isLoading" class="loading">
      <Loader />
    </div>
    <div class="content" v-else>
      <div>
        <ul >
          <li v-for="post in posts" :key="post.id">
            <p class="title">
              <router-link :to="{name: 'postDetail', params:{slug: post.slug}}">{{ post.title }}</router-link>
            </p>
            <p class="caption">
              by {{ post.user.name }} 
              | Categoria: {{ getCategory(post) }}
              | Tag: {{ getTags(post) }}
              | {{ formatData(post.created_at) }}
            </p>
          </li>
        </ul>

      
      <Paginator :data="paginatorData" @callApi="getApi" />
      
      
    </div>

    <div class="box-container">
      <div class="box">
        <router-link 
          class="badge"
          v-for="category in categories"
          :key="category.id"
          :to="{name: 'postsCategory', params:{ slug: category.slug }}">
          {{ category.name }}
        </router-link>
      </div>
      <div class="box">
        <router-link 
          class="badge"
          v-for="tag in tags"
          :key="tag.id"
          :to="{name: 'PostsTag', params:{ slug: tag.slug }}">
          {{ tag.name }}
        </router-link>
      </div>
    </div>

    </div>
    
  </div>
</template>



<style lang="scss" scoped>
.loading{
  display: flex;
  justify-content: center;
  padding: 30px 0;
}

.content{
  display: flex;
  .title, .caption{
    line-height: 5px;
  }
  a{
    color: white;
    &:hover{
      color: yellow;
    }
  }
  .caption{
    font-size: .8rem;
  }
  .box{
    border-radius: 5px;
    border: 1px solid white;
    padding: 15px;
    margin: 15px;
    max-width: 200px;
    button{
      margin: 3px;
    }
    .badge{
      display: inline-block;
      margin: 5px 7px;
      padding: 3px 5px;
      border-radius: 5px;
      border: 1px solid white;
      background-color: lightgray;
      color: black;
      text-decoration: none;
      font-size: .8rem;
      &:hover{
        background-color: yellow;
      }
    }
  }
}
</style>