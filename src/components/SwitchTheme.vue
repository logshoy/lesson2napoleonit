<template lang="pug">
    div 
        input(type="checkbox" :checked="value" v-model="model" ) 
        label(v-if="value===true") Зеленая тема
        label(v-else) Серая тема
</template>

<script>
export default {
  name: "SwtchTheme",
  props: ['value'],
   computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
    }
   }
}
};

</script>

<style scoped>
</style>
