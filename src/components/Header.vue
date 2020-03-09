<template>
  <div>
    <div class="page-header">
        <div class="page-header__container">
            <logo></logo>
            <router-link to="/">Home</router-link> 
            <router-link to="/about">Навыки</router-link> 
            <router-link to="/third">Третья страница</router-link>
            <button id="show-modal" @click="showModal = true">Показать номер</button>
            <modal v-if="showModal" @close="showModal = false">
              <h3 slot="header">custom header</h3>
            </modal>
        </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Header',
  components: { Logo, Modal },
  data() {
    return {
        showModal: false
    }
  },
}
</script>

<style lang="scss" scoped>


$tablet-width: 768px;
$desktop-width: 1440px;
$modily-width-only: 767px;

.page-header {
  background-color: #e5e5e5;
  position: sticky;
}

.page-header a.router-link-exact-active {
  color: #42b983;
}

.page-header {
    background-color: #e5e5e5;
    position: sticky;
    top: 0;
}

.page-header__container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 280px;
    margin: 0 auto;
    padding: 0 20px;
}

.page-header__container a {
  margin: 10px;
}

@media (min-width: $tablet-width) {
  .page-header__container {
    flex-direction: row;
    width: 708px;
    padding: 0 30px;
  }

}

@media (min-width: $desktop-width) {

  .page-header__container {
    width: 1220px;
    margin: 0 auto;
  }
}

</style>