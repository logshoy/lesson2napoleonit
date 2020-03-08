<template>
    <div class="page-main__universite">
        <div class="page-main__container">    
            <h2>{{ educatuonMsg }}</h2>
            <ul>
                <li v-for="item in educatuonList" :key="item.link"> {{ item.name }}
                    <span> {{ item.description }} </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            educatuonMsg: 'Образование',
            educatuonList: [{name:'Учебное заведение:', description:'Челябинский Государственный университет' },
            {name:'Год окончания:', description:'2018' },
            {name:'Факультет:', description:'Математический' },
            {name:'Специальность:', description:'Фундаментальная инфоматика и информационные технологии' },
            {name:'Форма обучения:', description:'Очная' }]
        }
    }
}
</script>

<style lang="scss"  scoped>

$tablet-width: 768px;
$desktop-width: 1440px;
$modily-width-only: 767px;


ul {
    list-style: none;
    padding: 0;
}

.page-main__container {
  width: 280px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  margin: 30px 0;
  line-height: 30px;

}

h2 {
  margin: 20px 0;
}

h3 {
  margin-bottom: 10px;
}

.page-main__born-text {
  margin-bottom: 30px;
}

.page-main__universite {
  min-height: 400px;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 0 20px;
  background: url(../assets/csu.jpg) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 35px;
}

.page-main__universite h2 {
  margin-bottom: 15px;
}

.page-main__universite li {
  margin: 20px 0;
}

.page-main__border-photo {
  min-width: 100px;
  min-height: 100px;
  padding: 10px;
}

.page-main__born-text {
  margin-top: 40px;
}

.page-main__skills {
  display: flex;
  flex-wrap: nowrap;
  color: #F9690E;
  font-weight: bold;
  font-size: 24px;
  padding-bottom: 10px;
}

.page-main__work ul {
  margin: 20px 0;
}

.page-main__additional-information .page-main__skills {
  margin: 10px 0;
}


@media (min-width: $tablet-width) {
  .page-main__container {
    width: 708px;
    padding: 0 30px;
  }

  h1 {
      text-align:inherit;
      font-size: 50px;
  }

  .page-main__born {
    display: flex;
  }

.page-main__additional-information li  {
    display: flex;
    margin: 10px 0;
  }

.page-main__skills  {
  margin-right: 10px;
  min-width: 300px;
}

.page-main__additional-information .page-main__skills {
  margin: 0;
  margin-right:  10px;
}

}

@media (min-width: $desktop-width) {
  .page-main__container {
    width: 1220px;
    padding: 0;
  }
}

</style>