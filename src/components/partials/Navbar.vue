<script>
  export default {
    name: 'Navbar'
  }
</script>


<template>
  <div>
    <ul>
      <li><router-link :to="{name:'home'}">home</router-link></li>
      <li><router-link :to="{name:'about'}">chi siamo</router-link></li>
      <li><router-link :to="{name:'blog'}">i miei post</router-link></li>
      <li><router-link :to="{name:'contacts'}">contatti</router-link></li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
ul{
  list-style: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  li{
    a{
      display: inline-block;
      margin: 0 10px;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      padding: 5px 10px;
      border: 1px solid white;
      &:hover,
      &.active{
        color: yellow;
      }
    }
  }
}
</style>