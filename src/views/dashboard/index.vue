<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useUserStore } from '@/stores/user';

export default {
  name: 'Dashboard',
  computed: {
    ...mapStores(useUserStore),
    name() {
      return this.userStore.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
