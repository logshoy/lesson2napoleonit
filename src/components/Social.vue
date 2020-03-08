<template>
    <div>
        <div class="social-link">
          <ul class="social-link__list">
            <li v-for="item in socialLink" :key="item.link" class="social-link__item">
              <a :href="item.link">
                <img width="50" height="50" :src="item.src">
                <span class="visually-hidden">{{ item.name }}</span>
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
            src:"../img/vk-social-network-logo.svg", name: 'Вконтакте'},
            {link:'https://www.youtube.com/channel/UCd84loKaOq6qmXUnr2Rd24g',
            src:"../img/youtube.svg", name: 'YouTube'},
            {link:'https://github.com/logshoy',
            src:"../img/github-image.svg", name: 'Github'}]
        }
    }
}
</script>