<template>
<div>
<template v-if="user.loggedIn">
            <div class="nav-item">{{user.data.displayName}}</div>
           
          </template>   
</div>
     
</template>

<script>
import { mapGetters } from "vuex";
import fb from "../firebase";
export default {
     computed: {
    ...mapGetters({
      user: "user"
    })
  },

}
</script>

<style>

</style>