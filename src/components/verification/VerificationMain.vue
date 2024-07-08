<template>
  <div class="verify-process-main">
    <keep-alive>
      <component v-bind:is="`Process${currentTabComponent}`"></component>
    </keep-alive>
  </div>
</template>

<script>
import Process1 from "../verification/Process-1";
import Process2 from "../verification/Process-2";
import Process3 from "../verification/Process-3";
import Process4 from "../verification/Process-4";
import Process5 from "../verification/Process-5";
import Process6 from "../verification/Process-6";
import { mapGetters } from "vuex";
export default {
  components: {
    Process1,
    Process2,
    Process3,
    Process4,
    Process5,
    Process6
  },
  computed: {
    ...mapGetters({
      currentTabComponent: "user/getCurrentTabComponent"
    })
  }
};
</script>
<style scoped>
@media screen and (max-width: 768px) {
  .verify-process-main {
    margin-left: 0;
  }
}
</style>
