<template>
  <div class="input_validation">
    <h1>Input</h1>
    <form @submit="formSubmit" method="post">
      <div>
        <label for="email">email</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputValidation",
}
</script>