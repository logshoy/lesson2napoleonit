<template lang = "pug">
  .hello
    h1 {{ myName }}
    p {{ aboutMe }}
    Education
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      myName: "Маметьев Илья",
      aboutMe: "Меня зовут Маметьев Илья Сергеевич, родился и вырос в Курганской области, город Шадринск. Закончил в ЧелГУ на математическом факультете, в данный момент работаю и хочу попасть на ваш курс по Front-end."
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.main-nav__logo {
  min-height: 65px;
  display: flex;
  align-items: center;
}
</style>
