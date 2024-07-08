<template>
  <b-container>
    <b-row>
      <b-col>
        <div
          class="p-5 mx-auto my-5 text-center border rounded shadow col-lg-6 col-md-8"
        >
          <DownloadApp />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import DownloadApp from "@/components/DownloadApp";
export default {
  components: {
    DownloadApp
  }
};
</script>
