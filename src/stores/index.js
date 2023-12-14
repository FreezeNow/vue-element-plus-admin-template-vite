import { watch } from 'vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

watch(
  pinia.state,
  (state) => {
    // 每当状态发生变化时，将整个 state 持久化到本地存储。
    const saveState = {
      user: state.user,
    };
    sessionStorage.setItem('project_pinia', JSON.stringify(saveState));
  },
  { deep: true },
);

export default pinia;
