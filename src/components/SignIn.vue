<template>
  <h1>Sign In</h1>
  <div id="signIn">
    <form @submit.prevent="signIn">
      <div>
        <label for="username">email</label>
        <input name="username" v-model="username" placeholder="email">
      </div>
      <div>
        <label for="password">password</label>
        <input name="password" v-model="password" placeholder="password" type="password">
      </div>
      <input type="submit" value="register">
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      const { username, password } = this;
      const res = await fetch(
        "http://localhost:5000/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify({
            username,
            password
          })
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.status == 200) {
        this.$store.dispatch('setToken', res.status)
        this.$router.push("/admin");
      }
    }
  }
};
</script>