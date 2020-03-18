<template lang="pug">
  .container
    form( class= "pt-3")
      div(class="form-group")
        label( for="email") Email
        input(type="email" id="email" class="form-control is-invalid" @blur="$v.email.$touch()" v-model="email" :class="{'is-invalid': $v.email.$error}")
        div(class="invalid-feedback" v-if="!$v.email.required" ) Email field is required
        iv(class="invalid-feedback" v-if="!$v.email.email" ) This field should be an email
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: ''
    }
  },
  validations: {
      email: {
        required, email
      }
  }
}
</script>