<template>
  <div id="app">
    <div id="container">
      <h1>Instagram</h1>
      <p class="description">Sign up to see photos and videos from your friends.</p>
      <input type="text" placeholder="Mobile Number or Email" class="form-control" />
      <input type="text" placeholder="Full Name" class="form-control" />
      <input type="text" placeholder="Username" class="form-control" />
      <input type="text" placeholder="Password" class="form-control" />
      <button class="btn btn-primary">Sign up</button>
      <p class="terms">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
    </div>
    <div class="login">
      <p>
        Have an account?
        <a>Log in</a>
      </p>
    </div>
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

#container {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  background: white;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 0 auto;
}

#container h1 {
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

#container input {
  width: 18em;
  margin: 5px;
}

#container button {
  margin: 10px;
  width: 18em;
}

.terms {
  text-align: center;
  color: #999;
  font-size: 14px;
  font-family: inherit;
  margin: 10px 30px 30px 30px;
}

.login {
  border: 1px solid #ccc;
  background: white;
  width: 40%;
  margin: 0 auto;
  margin-top: 40px;
}

.login p {
  text-align: center;
  margin: 0;
  padding: 20px;
  font-size: 14px;
  font-family: inherit;
}
</style>
