<template lang="pug">
  .main-nav__logo
    picture
      source( media="(min-width: 1440px)" srcset="../assets/logo-desktop.svg" width="70")
      source( media="(min-width: 768px)" srcset="../assets/logo-tablet.svg" width="70")
      img(class="main-nav__logo--img" src="../assets/logo-phone.svg" width="33" height="38")
    span Страница "О себе"

</template>

<style lang="stylus" scoped>
.main-nav__logo {
    display: flex;

    align-items: center;
    font-weight: bold;
    color: #2c3e50;
    margin-right: 20px;
}


</style>