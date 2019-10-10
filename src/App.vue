<template>
  <div id="app">
    <container>
      <h1>Instagram</h1>
      <p class="description">Sign up to see photos and videos from your friends.</p>
      <Input placeholder="Mobile Number or Email" />
      <Input placeholder="Full Name" />
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Button>Sign up</Button>
      <p class="terms">By signing up, you agree to our Terms, Data Policy and Cookies Policy .</p>
    </container>
    <container>
      <p class="login">
        Have an account?
        <a>Log in</a>
      </p>
    </container>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: whitesmoke;
  width: 100%;
  height: 100vh;
  padding-top: 40px;
}

h1 {
  padding: 20px;
  font-family: "Mansalva";
}

.description {
  text-align: center;
  color: #999;
  font-size: 18px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  font-family: inherit;
}

.terms {
  text-align: center;
  color: #999;
  font-size: 14px;
  font-family: inherit;
  margin: 10px 30px 30px 30px;
}

.login {
  text-align: center;
  margin: 0;
  padding: 20px;
  font-size: 14px;
  font-family: inherit;
}
</style>
