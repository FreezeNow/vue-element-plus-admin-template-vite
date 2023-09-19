<template>
  <el-icon v-if="icon">
    <component v-if="!!elIcon" :is="elIcon" />
    <svg-icon v-else :icon-class="icon" />
  </el-icon>
</template>
<script lang="jsx">
export default {
  props: ['icon'],
  computed: {
    elIcon() {
      return this.icon.includes('el-icon') ? this.icon.replace('el-icon-', '') : false;
    },
  },
};
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
