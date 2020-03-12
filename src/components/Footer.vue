<template lang="pug">
  .page-footer( :class="{ green: checked , gray: !checked }" )
    .page-footer__container
        logo
        .copyright
          p(class="copyright") © 2020. Все права не защищены
        checked 
</template>

<script>
import Logo from '@/components/Logo.vue'
import Social from '@/components/Social.vue'

export default {
    name: 'Footer',
    components: { Logo, Social },
    props: {
       checked: Boolean
    }
}
</script>

<style lang="stylus">
tablet-width = 768px
desktop-width = 1440px
modily-width-only = 767px

.page-footer {
  background: #e5e5e5;
  flex-shrink: 0;
}

.page-footer__container {
  width: 280px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 40px;
  margin-top: 40px;
}

.page-footer__container-logo {
  display: flex;
  align-items: center;
}

@media (min-width: tablet-width) {
  .page-footer__container {
    width: 708px;
    padding: 0 30px;
    display: flex;
    align-items: center;
  }

  .page-footer__container input {
    margin-right: 20px;
  }

  .page-footer__container-logo {
    width: 300px;
  }
}

@media (min-width: desktop-width) {
  .page-footer__container {
    width: 1220px;
    padding: 0;
  }
}



</style>