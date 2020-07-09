<template>
  <div class="register">
    <side-image></side-image>
    <div class="register__con">
      <div class="register__header">
        <router-link to="/" href="#" class="register__logo logo"
          >huntr</router-link
        >
        <h3 class="register__heading">Need a job? Register</h3>
      </div>
      <form action="" class="register__form" @submit.prevent="submit">
        <input
          type="text"
          class="register__name"
          placeholder="Your Name"
          v-model="form.name"
          required
        />
        <input
          type="email"
          class="register__email"
          placeholder="Email Address"
          v-model="form.email"
          required
        />
        <input
          type="password"
          class="register__password"
          placeholder="Password"
          v-model="form.password"
          required
        />
        <input
        type="submit"
          value="Sign In"
          class="register__submit"
          
        />
      </form>
      <p class="register__alert">
        Have an Account?
        <router-link to="/login">Log In</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import sideImage from "../components/sideImage";
import fb from "../firebase";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  components: {
    sideImage
  },
  methods: {
    submit() {
      fb.auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
       

        console.log(this.form)
    }
  }
};
</script>

<style></style>
