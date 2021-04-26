<template>
  <div class="reg_validation">
    <h1>정규표현식</h1>
    <form @submit="formSubmit" method="post">
      <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="text" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegValidation",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    formSubmit() {
      if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)){
        alert("이메일 주소를 입력해 주세요.")
      }
      if(!/^[a-zA-Z0-9]{8,20}$/.test(this.password)){
        alert("비밀번호는 영문 or 숫자 8자 이상 20자 미만으로 입력해 주세요.")
      }
      return true
    },
  },
}
</script>