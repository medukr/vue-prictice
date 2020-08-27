<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: $v.email.$dirty && (!$v.email.required || !$v.email.email)}"

        >
        <label for="email">Email</label>
        <small v-if="$v.email.$dirty && !$v.email.required" class="helper-text invalid">Поле Email не должно быть пустым</small>
        <small v-else-if="$v.email.$dirty && !$v.email.email" class="helper-text invalid">Email не валидный</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: $v.password.$dirty && (!$v.password.required || !$v.password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small v-if="$v.password.$dirty && !$v.password.required" class="helper-text invalid">Введите пароль</small>
        <small v-else-if="$v.password.$dirty && !$v.password.minLength" class="helper-text invalid">Пароль должен быть не менее
          {{ this.$v.password.$params.minLength.min }} символов. Сейчас он {{password.length}}</small>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model.trim="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required }"
        >
        <label for="name">Имя</label>
        <small v-if="$v.name.$dirty && !$v.name.required" class="helper-text invalid">Введите имя</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree"/>
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link :to="{name:'login'}">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, minLength, required} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      email: '',
      password: '',
      name:'',
      agree:false
    }
  },
  validations: {
    email: {required, email},
    password: {required, minLength: minLength(6)},
    name:{required},
    agree:{checked: value => value} //чекбокс всегда возращает true или false, а валидато ожидает
                                    // как результат валидации тоже true или false, поэтому достатончо
                                    // просто вернуть value
  },
  methods:{
    submitHandler(){
      this.$v.$touch();

      if (this.$v.$invalid){
        return
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }

      console.log('--->formData', formData);

      this.$router.push({name:'home'})

    }
  }
}
</script>

<style scoped>

</style>