<template>
  <div class="share-widget">
    <span class="label">Share</span>
    <FacebookShareButton />
    <TwitterShareButton />
    <LinkedInShareButton />
    <LinkShareButton @copied="$emit('copied')" />
  </div>
</template>

<script>
import FacebookShareButton from "@/components/share/FacebookShareButton.vue";
import TwitterShareButton from "@/components/share/TwitterShareButton.vue";
import LinkedInShareButton from "@/components/share/LinkedInShareButton.vue";
import LinkShareButton from "@/components/share/LinkShareButton.vue";

export default {
  name: "ShareWidget",
  components: {
    FacebookShareButton,
    TwitterShareButton,
    LinkedInShareButton,
    LinkShareButton
  }
};
</script>

<style scoped lang="scss">
.share-widget {
  display: flex;
  width: 41px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    width: 100%;
    align-items: center;
    justify-content: start;
  }
}

.label {
  color: var(--Core-Grayscale-700, #c2c1bf);
  text-align: center;

  /* Webtext/List Caps */
  font-family: Graphik App, sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.35px;
  text-transform: uppercase;
}
</style>
