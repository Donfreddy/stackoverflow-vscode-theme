<template>
  <button @click="handleClick" :class="{ active }"></button>
</template>

<script>
/**
 * Use the v-model directive to bind the value of the button to the value of the input.
 * The v-model directive is a two-way data binding directive.
 * The v-model directive is used to bind the value of the input to the value of the button.
 */
export default {
  data() {
    return {
      active: true,
    };
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style lang="scss" scoped>
.css {
  color: salmon;
}
</style> 
