<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <FooterNew />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import FooterNew from "../components/FooterNew";
export default {
  name: "AppRegularNewFooterLayout",
  components: {
    Navbar,
    FooterNew
  }
};
</script>
