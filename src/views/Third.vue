<template>
  <div class="third">
    <h2>Третья страница с циклом</h2>
    <ul>
      <li v-for="value in books" :key="value" @click="color = red" :style="styleObject">
        {{ value.title }} - {{ value.name }} - {{ value.year }}
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      books: [{ title:"Русский язык", name: "А.Д Дейкина  Русский  язык 10-11 кл", year: "2009" },
      { title:"Литература", name: "Коровина  В.Я  Литература 10 кл", year: "2010" },
      { title:"Информатика и  ИКТ", name: "Угринович Н.Д Информатика 10-11 (базовый)", year: "2009" },
      { title:"Алгебра", name: "Колягин Ю.М, Ткачева, Федорова Алгебра и начала анализа 10-11 кл", year: "2010" },
      { title:"Геометрия", name: "Атанасян Л.С  Геометрия 10-11кл", year: "2012" },
      { title:"Химия", name: "О.С Габриелян    Химия 10 кл     (базовый)", year: "2011" },]
    }
  }
}
</script>