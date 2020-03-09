<template>
    <div>
        <div class="static" 
            :class="{ red: isActive , green: !isActive } " 
            @click="isActive = !isActive">
            {{ msg }}
        </div>
        <div :style="{ background: color }">
            {{ skillsMsg }}
        </div>
        <input type="text" v-model="color">
    </div>
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

<style lang="scss" scoped>
.red {
    background: red;
}

.green {
    background: green;
}
</style>