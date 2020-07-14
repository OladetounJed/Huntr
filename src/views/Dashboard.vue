<template>
  <div>
    <!-- <template v-if="user.loggedIn">
     
    </template>
    <button @click="signOut">Sign Out</button> -->

    <section class="dashboard-header">
        <div class="dashboard-header__navbar">
        <div class="dashboard-header__navbar-left">
          <a href="#" class="dashboard-header__logo logo">huntr</a>
        </div>
       
        <div class="dashboard-header__navbar-right">
           <p class="dashboard-header__note">Welcome, {{ user.data.displayName }}</p>
          <a @click="signOut"  class=" btn btn--small dashboard-header__btn btn--active">Log Out</a>
          
        </div>
      </div>
    </section>
    <section class="job">
      <h1 class="dashboard-job__heading job__heading">Latest Job</h1>
      <div class="job__con">
          <div class="job__child" v-for="job in jobs">
              <p class="job__title">{{ job.title }}</p>
              <div class="job__details">
                   <p class="job__location">{{ job.location }}</p>
           <p class="job__time">{{job.published_at.for_humans}}</p>
              </div>
             
              <div class="job__company">
                <img :src="job.company.avatar" alt="" class="job__icon" />
                <p class="job__name">{{ job.company.name}}</p>
                
              </div>
             
              <router-link to="/login"><button href="#" class="job__apply">Apply Now</button></router-link>
            </div>


         
      </div>
      
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import fb from "../firebase";
import router from "../router";
export default {
  data () {
    return {
      jobs: []
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
    mounted() {
    this.fetchUsers();
    console.log(this.user)
  }, 
  methods: {
    async signOut(){
      try {
        const signOut = await fb.auth().signOut();
        this.user.loggedIn = null;
        router.replace("/");
      }catch(err){
        console.log("Signed Out")
      }

    },
      fetchUsers: function () {
      const baseURI = 'https://vuejobs.com/api/jobs'
         this.$http.get(baseURI)
      .then((result) => {
        this.jobs = result.data;
      })
    }
  }

};
</script>

<style></style>
