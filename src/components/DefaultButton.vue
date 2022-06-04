<template>
  <button class="btn" :class="styling" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    styling: String,
    onClick: {
      type: Function,
      default: () => {
        console.log('You have not added any function');
      }
    },
  }
};
</script>