<template>
  <div class="bg">
    <b-container class="text-center text-white">
      <b-row>
        <b-col>
          <h1 class="mb-4 display-1 font-weight-bolder text-uppercase">404</h1>
          <h2 class="mb-4 display-4 font-weight-bolder text-uppercase">
            page not found
          </h2>

          <p class="mb-4">
            The page you are looking for does not seem to exist
          </p>

          <b-button
            @click="goHome"
            pill
            class="px-5 py-2 text-white font-weight-bolder btn-home text-uppercase"
          >
            Home
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <Footer> </Footer>
  </div>
</template>

<script>
import Footer from "@/components/FooterNew.vue";
export default {
  name: "NotFound",
  components: { Footer },
  methods: {
    goHome() {
      this.$router
        .push({
          name: "Main"
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
.btn-home {
  background: rgb(89, 19, 238, 1);
  border: none;
}

.container {
  padding-top: 20vh;
  padding-bottom: 10vh;
}

h1,
h2 {
  font-family: "Europa-Regular";
  letter-spacing: 4px;
  color: #442671;
}
</style>
