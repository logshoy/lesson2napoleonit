<template lang="pug">
    div 
        div(class = "static" :class="{ red: isActive , green: !isActive } " @click="isActive = !isActive") {{ msg }}
        div(:style="{ background: color }") {{ skillsMsg }} 
        input(type="text" v-model="color")
</template>

<script>
export default {
    props: {
        skillsMsg: String
    },
    data() {
        return {
            msg: 'help',
            isActive: true,
            color: ''
        }
    },
}
</script>

<style lang="stylus" scoped>
.red {
    background: red;
}

.green {
    background: green;
}
</style>