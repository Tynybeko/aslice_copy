<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
export default {
  name: "AppInfoLayout",
  components: {
    Navbar
  }
};
</script>