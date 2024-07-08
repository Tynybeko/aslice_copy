<template>
  <div class="container-fluid">
    <div class="background-wallpaper">
      <div class="background-dark">
        <b-container>
          <div class="row home-page">
            <div class="col-lg-12 col-md-12">
              <div class="row">
                <div class="col-lg-6 col-md-12 home-page-center-content">
                  <h1>headline</h1>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-9 home-page-content">
                  <p class="home-page-article">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 ol-md-12 home-page-play-content">
                  <b-button pill variant="primary">
                    <span class="play-icon">
                      <img src="../assets/images/play-video-icon.svg" alt="" />
                    </span>
                    <span class="play-video-text">play video</span>
                  </b-button>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-12 home-page-bottom-content">
                  <div class="row">
                    <router-link
                      class="col-3 col-md-4 bottom-content-link"
                      to="/contact"
                      >CONTACT</router-link
                    >
                    <router-link
                      class="col-3 col-md-4 bottom-content-link"
                      to="/privacy"
                      >PRIVACY</router-link
                    >
                    <router-link
                      class="col-3 col-md-4 bottom-content-link"
                      to="/terms"
                      >T&C</router-link
                    >
                    <!-- <div class="col-3 col-md-4 bottom-content-link">CONTACT</div> -->
                    <!-- <div class="col-3 col-md-4 bottom-content-link">PRIVACY</div>
                  <div class="col-3 col-md-4 bottom-content-link">T&C</div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
.background-wallpaper {
  padding: 0;
  background-image: url("../assets/images/home-main-pic.png");
  background-size: 100% 99.99%;
  overflow: hidden !important;
}

@media only screen and (max-width: 767px) {
  .container-fluid {
    background-size: cover;
  }
}
</style>
