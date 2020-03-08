<template>
    <div class="page-footer__container">
        <logo></logo>
        <Social></Social>
        <div class="copyright">
          <p class="copyright">© 2020. Все права не защищены</p>
        </div>
      </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Social from '@/components/Social.vue'

export default {
    name: 'Footer',
    components: { Logo, Social }
}
</script>