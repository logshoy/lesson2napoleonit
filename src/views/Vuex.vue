<template>
  <div class="container pt-2">
    <h2> Vue-resource </h2>
    <div class="form-group">
      <label for="name">Имя(Иван)</label>
      <input type="text" id="name" class="form-control" v-model.trim="ivanName">
    </div>

    <div class="form-group">
      <label for="old">Возраст(Ивана)</label>
      <input type="text" id="old" class="form-control" v-model.number="ivanOld">
    </div>

    <div class="form-group">
      <label for="buckwheat">Килограмм гречки(У Ивана)</label>
      <input type="text" id="buckwheat" class="form-control" v-model.number="ivanBuckwheat">
    </div>

    <button class="btn btn-success" @click="createIvan">Создать Ивана</button>
    <button class="btn btn-primary" @click="loadIvans">Загрузить Иванов</button>

    <hr>

    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="ivan of ivans"
        :key="ivan.id"
      >
        <strong>{{ ivan.name }}</strong> -  {{ ivan.old }} лет - {{ ivan.buckwheat}} кг
      </li>
    </ul>

    <hr>

    <counter></counter>
    <actions></actions>

  </div>
</template>

<script>
  import Counter from '../components/Counter'
  import Actions from '../components/Actions'

  export default {
    components: {
        Counter,Actions
    },
    data () {
      return {
        ivanName: 'Иван',
        ivanOld: 23,
        ivanBuckwheat: 5,
        ivans: [],
        resource: null
      }
    },
    methods: {
      createIvan () {
        const ivan = {
          name: this.ivanName,
          old: this.ivanOld,
          buckwheat: this.ivanBuckwheat
        }
        this.resource.save({}, ivan)
      },
      loadIvans () {
        this.resource.get().then(response => response.json())
          .then(ivans => this.ivans = ivans)
      }
    },
    created () {
      this.resource = this.$resource('ivans')
    },
    updateCounter(val) {
        this.$emit('counterUpdated', val)
      }
  }
</script>
