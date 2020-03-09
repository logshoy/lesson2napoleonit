<template>
    <div>
        <div class="social-link">
          <ul class="social-link__list">
            <li v-for="i in socialLink" :key="i" class="social-link__item">
              <a :href="i.link">
                <span>{{ i.name }}</span>
              </a>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socialLink: [{link:'https://vk.com/logshoy', 
            //src:'../assets/vk-social-network-logo.svg',  
            name: 'Вконтакте'},
            {link:'https://www.youtube.com/channel/UCd84loKaOq6qmXUnr2Rd24g', 
            //rc:'../src/assets/youtube.svg', 
            name: 'YouTube'},
            {link:'https://github.com/logshoy',
            //src:'../src/assets/github-image.svg', 
             name: 'Github'}]
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

li {
  margin: 0 10px;
}

span {
    color: black;
}
</style>