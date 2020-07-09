<template>
  <div>
    <div class="login">
      <side-image></side-image>
      <div class="login__con">
        <div class="login__header">
          <router-link to="/" href="#" class="login__logo logo"
            >huntr</router-link
          >
          <h3 class="login__heading">Need a job? Login</h3>
        </div>
        <form action="" class="login__form" @submit.prevent="submit">
          <input type="text" class="login__email" placeholder="Email Address" />
          <input
            type="password"
            class="login__password"
            placeholder="Password"
          />
          <input type="submit" value="Sign In" class="login__submit" />
        </form>
        <p class="login__alert">
          Don't have an account?
          <router-link to="/register">Sign Up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import sideImage from "../components/sideImage";
export default {
  components: {
    sideImage
  }
};
</script>

<style></style>
