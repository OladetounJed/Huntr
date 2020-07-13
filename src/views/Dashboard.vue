<template>
  <div>
    <template v-if="user.loggedIn">
      <div class="nav-item">{{ user.data.displayName }}</div>
    </template>
    <button @click="signOut">Sign Out</button>
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
  methods: {
    async signOut(){
      try {
        const user = await fb.auth().signOut();
      }catch(err){
        console.log("Signed Out")
      }

    }
  }

};
</script>

<style></style>
