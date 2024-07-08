<template>
  <object
    :data="
      `https://docs.google.com/gview?embedded=true&url=${$aslice.getResources(
        'Aslice_Presentation.pdf'
      )}`
    "
    :width="width"
    :height="height"
  />
</template>
<script>
import HideScroll from "@/mixins/hideScroll";
export default {
  // TODO: ADD RESOURCES PDF PAGE WITH QUERY PARAMS
  name: "The Aslice Presentation",
  metaInfo: {
    title: "Aslice Presentation",
    meta: [
      {
        property: "og:description",
        content:
          "Aslice: The Official Presentation | We are presenting Aslice at panels, music festivals, and tech conferences around the world. Dig deeper into our story and learn how Aslice is actively restructuring how music makers get paid their fair share. Download Our Presentation here."
      },
      {
        name: "description",
        content:
          "Aslice: The Official Presentation | We are presenting Aslice at panels, music festivals, and tech conferences around the world. Dig deeper into our story and learn how Aslice is actively restructuring how music makers get paid their fair share. Download Our Presentation here."
      }
    ]
  },
  mixins: [HideScroll],
  data() {
    return {
      width: "",
      height: ""
    };
  },
  created() {
    this.width = window.innerWidth + "px";
    this.height = window.innerHeight + "px";
  },
  mounted() {
    this.$mixpanel.track('Presentation Page Visitor');
  }
};
</script>
