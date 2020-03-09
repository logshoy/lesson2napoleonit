<template>
  <div class="about">
    <h2>{{ skillsMsg }}</h2>
    <ul>
      <li v-for="item in skills" :key="item.link"> <span class="page-main__skills"> {{ item.name }} :</span> {{ item.desctiption }}</li>
    </ul>
    <work :skillsMsg="skillsMsg" />
  </div>
</template>

<script>
import Work from '@/components/Work.vue'


export default {
  components: { Work },
  data() {
    return {
      skillsMsg: 'Личные качества',
      skills: [{name:'Иностранные языки', desctiption:'Русский - родной, Английский - Intermideate' },
      {name:'Компьютерные навыки', desctiption:'HTML5, CSS3, Знание JavaScript на базовом уровне, Препроцессор SASS, Адаптивная верстка, Разметка по методике БЭМ, Контроль версий, Знание Photoshop для работ с макетом' },
      {name:'Личные качества', desctiption:'Отвественность, коммуникабельность, трудолюбие, саморазвитие, структуное мышление' }]
    }
  }
}
</script>


<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>