<template>
  <div class="vee_validation">
    <h1>Vee</h1>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit="formSubmit" method="post">
        <ValidationProvider rules="email" v-slot="{errors}">
          <div>
            <label for="email">email</label>
            <input type="text" id="email" v-model="email" />
            {{errors[0]}}
          </div>
        </ValidationProvider>
        <ValidationProvider rules="min:8|max:20|alpha_dash" v-slot="{errors}">
          <div>
            <label for="password">password</label>
            <input type="text" id="password" v-model="password" />
            {{errors[0]}}
          </div>
        </ValidationProvider>
        <button type="submit" :disabled="invalid">Login</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "VeeValidation",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    formSubmit() {
      return true
    }
  }
}
</script>