
<template>
<div>
  <div id="nav">
    <Header/>
  </div>
   <Suspense>
    
  <router-view>
   
  <template  #fallback>
    Loading...
  </template>

  </router-view>
  </Suspense>
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
// import SuspenseExample from './components/SuspenseExample.vue'
// import Hellodata from './components/Helloworlddata.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    // SuspenseExample,


  },
  data(){
    return{
      $datas:""

    }
  },
     watch: {
    // Note: only simple paths. Expressions are not supported.
    '$route.path': function(data) {
      // data.search('')
      //  console.log(data);
      this.datas = data;
       console.log(this.datas);

      
       
  
   },
  mounted(){
    console.log(this.datas)
  }
     }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
