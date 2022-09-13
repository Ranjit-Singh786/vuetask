





<template>
<div>
<div><h1>Suspense  demmo Data</h1></div>
    <Suspense>
    
             <User/>
        <template #fallback>
          <span>Loading...</span>
        </template>
    </Suspense>
   
</div>
    
</template>
<script>

import User from './Users';
export default {
    name:"SuspenseDataHere",
    components:{
        User
    }
}
</script>