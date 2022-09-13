<template>
<div id="app">
    <Header />
     
    {{ isLoading }}
        <loadingPage v-if="!isLoading"></loadingPage>
        <router-view v-else></router-view>
    <SuspenseComponent/>
     <UsersComponent/>
</div>
</template>

<script>
    // import { mapGetters } from 'vuex';
    import loadingPage from "./views/loading.vue";
    import Header from "./components/Header.vue";
    import SuspenseComponent from "./components/SuspenseExample.vue";
    import UsersComponent from "./components/Users.vue";
    import mitt from 'mitt';
    const emitter = mitt();
    export default {
      namespaced: true,
        components: {
            loadingPage,
            Header,
            SuspenseComponent,
            UsersComponent
        },
        data(){return {isLoading:''}},
        watch:
        {
          '$store.getters.getLoading':function(v){
                     this.isLoading = v;
          }
        },
        mounted(){
          console.log(emitter);
            //  console.log(this);
        }
       
    }
</script>
