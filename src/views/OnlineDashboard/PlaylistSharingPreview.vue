<template>
  <div class="row mx-0 bg-white">
    <div class="col-12 px-4 mt-4 mt-lg-6">
      <div class="d-flex flex-column">
        <span class="label-text text-uppercase color-gray">
          Playlist Name
        </span>
        <h3 class="title mb-4">{{ playlist.name }}</h3>
      </div>
    </div>
    <div class="col-12 px-4 mt-3 mb-auto">
      <div class="canvas-wrapper  mb-4">
        <canvas
          class="preview-canvas"
          width="1080"
          height="1080"
          ref="canvasPreviewImage"
        ></canvas>
      </div>
      <span
        class="label-text text-uppercase color-gray d-flex mb-4 justify-content-center justify-content-lg-start"
      >
        Select color
      </span>
      <div class="colored-radio d-flex flex-row">
        <div
          class="radio mr-4"
          v-for="(scheme, index) in colorSchemas"
          :key="index"
        >
          <input
            :id="scheme.name"
            :name="scheme.name"
            :value="scheme"
            type="radio"
            v-model="currentColorScheme"
            @change="ctxRerender(scheme)"
          />
          <label
            :for="scheme.name"
            class="radio-item"
            :style="{ background: scheme.primaryColor }"
          />
        </div>
      </div>
      <span
        v-if="$device.mobile"
        class="label-text color-gray d-flex justify-content-center justify-content-lg-start mt-4 mb-4"
        style="max-width: 453px; font-size: 12px; font-family: Roboto-Mono; letter-spacing: normal;"
      >
        *Press and hold the image below to download to camera roll.
      </span>
      <div class="display-none">
        <!-- Music svg -->
        <div ref="svgMusic">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.0195 84.8389C69.2063 84.8389 74.2218 79.8234 74.2218 73.6366C74.2218 67.4497 69.2063 62.4343 63.0195 62.4343C56.8326 62.4343 51.8171 67.4497 51.8171 73.6366C51.8171 79.8234 56.8326 84.8389 63.0195 84.8389Z"
              :stroke="currentColorScheme.descriptionColor"
              stroke-width="4"
              stroke-miterlimit="10"
            />
            <path
              d="M74.2224 74.7386V19.4472L89.0766 17.0023"
              :stroke="currentColorScheme.descriptionColor"
              stroke-width="4"
              stroke-miterlimit="10"
            />
            <path
              d="M62.3015 31.5476H25.3967"
              :stroke="currentColorScheme.descriptionColor"
              stroke-width="4"
              stroke-miterlimit="10"
            />
            <path
              d="M62.3015 50H25.3967"
              :stroke="currentColorScheme.descriptionColor"
              stroke-width="4"
              stroke-miterlimit="10"
            />
            <path
              d="M43.8493 68.4524H25.397"
              :stroke="currentColorScheme.descriptionColor"
              stroke-width="4"
              stroke-miterlimit="10"
            />
            <path
              d="M96.7461 0.79364H3.25402C1.89522 0.79364 0.793701 1.89516 0.793701 3.25396V96.746C0.793701 98.1048 1.89522 99.2063 3.25402 99.2063H96.7461C98.1049 99.2063 99.2064 98.1048 99.2064 96.746V3.25396C99.2064 1.89516 98.1049 0.79364 96.7461 0.79364Z"
              :stroke="currentColorScheme.descriptionColor"
              stroke-width="4"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
        <!-- end Music svg -->

        <!-- Aslice logo svg -->
        <div ref="svgLogo">
          <svg
            width="240"
            height="60"
            viewBox="0 0 240 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.3329 7.5568C21.4366 7.55268 16.637 8.92056 12.4785 11.5053C8.31991 14.09 4.96877 17.7882 2.80503 22.1806C0.641287 26.5729 -0.248492 31.4836 0.236583 36.3559C0.721659 41.2282 2.56219 45.8671 5.54946 49.7466L7.97885 47.3172C5.47017 43.9202 3.95346 39.8935 3.59758 35.6856C3.24169 31.4777 4.0606 27.2535 5.96313 23.4834C7.86566 19.7133 10.7772 16.5452 14.3735 14.3317C17.9699 12.1182 22.11 10.9463 26.3329 10.9463C30.5559 10.9463 34.696 12.1182 38.2923 14.3317C41.8887 16.5452 44.8002 19.7133 46.7027 23.4834C48.6053 27.2535 49.4242 31.4777 49.0683 35.6856C48.7124 39.8935 47.1957 43.9202 44.687 47.3172L47.1177 49.7466C50.105 45.867 51.9456 41.228 52.4306 36.3556C52.9156 31.4832 52.0257 26.5723 49.8618 22.18C47.6979 17.7876 44.3466 14.0894 40.1879 11.5048C36.0291 8.92014 31.2294 7.55243 26.3329 7.5568ZM38.6379 41.2654C39.9662 39.0816 40.6895 36.5836 40.7333 34.0278C40.7772 31.4721 40.1401 28.9507 38.8874 26.7226C37.6348 24.4945 35.8117 22.6398 33.6054 21.3491C31.3991 20.0584 28.889 19.3782 26.3329 19.3782C23.7768 19.3782 21.2668 20.0584 19.0604 21.3491C16.8541 22.6398 15.0311 24.4945 13.7784 26.7226C12.5258 28.9507 11.8887 31.4721 11.9325 34.0278C11.9764 36.5836 12.6996 39.0816 14.028 41.2654L16.5298 38.7636C15.6774 37.087 15.2692 35.2198 15.3443 33.3405C15.4193 31.4611 15.9751 29.6325 16.9586 28.0292C17.942 26.4259 19.3202 25.1017 20.9615 24.183C22.6027 23.2644 24.4521 22.782 26.3329 22.782C28.2138 22.782 30.0632 23.2644 31.7044 24.183C33.3456 25.1017 34.7238 26.4259 35.7073 28.0292C36.6907 29.6325 37.2465 31.4611 37.3216 33.3405C37.3967 35.2198 36.9885 37.087 36.1361 38.7636L38.6379 41.2654ZM26.3329 31.3688L9.05068 48.6563L6.6384 51.0672C8.90616 53.658 11.6628 55.7758 14.7504 57.2994C17.838 58.823 21.1959 59.7225 24.6317 59.9462C28.0674 60.1699 31.5136 59.7135 34.7727 58.6032C38.0318 57.4928 41.0398 55.7504 43.6244 53.4756C44.479 52.7263 45.2835 51.9218 46.0327 51.0672L43.6204 48.6563L26.3329 31.3688ZM26.3329 56.5936C20.8695 56.5996 15.5869 54.6362 11.4537 51.0633L26.3329 36.1841L41.2121 51.0633C37.0789 54.6364 31.7965 56.6002 26.3329 56.5949V56.5936Z"
              :fill="currentColorScheme.secondaryColor"
            />
            <path
              d="M98.4576 15.8181H104.279V51.5018H98.4576L97.8888 46.8827C96.374 48.5294 94.5357 49.8457 92.4889 50.7493C90.442 51.6529 88.2307 52.1242 85.9933 52.1339C81.1206 52.0927 76.4614 50.1282 73.0303 46.668C69.5992 43.2078 67.6741 38.5322 67.6741 33.6593C67.6741 28.7864 69.5992 24.1108 73.0303 20.6506C76.4614 17.1904 81.1206 15.2259 85.9933 15.1847C88.2371 15.192 90.4545 15.6685 92.5031 16.5838C94.5518 17.499 96.3863 18.8327 97.8888 20.4991L98.4576 15.8181ZM97.952 33.66C97.9086 31.3341 97.1789 29.073 95.8545 27.1606C94.5301 25.2482 92.6701 23.7699 90.5082 22.9113C88.3462 22.0527 85.9787 21.8521 83.7031 22.3348C81.4275 22.8175 79.3454 23.9619 77.7181 25.6243C76.0909 27.2866 74.9912 29.3928 74.5573 31.6782C74.1233 33.9635 74.3744 36.3262 75.279 38.4693C76.1836 40.6124 77.7013 42.4404 79.6416 43.7237C81.5818 45.0069 83.858 45.6882 86.1842 45.6818C87.7553 45.6977 89.3133 45.3957 90.7646 44.7938C92.2159 44.1919 93.5305 43.3027 94.6292 42.1796C95.7279 41.0566 96.5881 39.7228 97.158 38.2587C97.7279 36.7946 97.9957 35.2303 97.9454 33.66H97.952Z"
              :fill="currentColorScheme.secondaryColor"
            />
            <path
              d="M108.201 47.5159L111.429 42.2002C114.554 44.5568 118.334 45.8839 122.246 45.9977C127.25 45.9977 129.712 44.7323 129.712 41.505C129.712 38.8478 127.499 37.3296 122.374 36.3803C113.58 34.6685 109.847 31.3766 109.847 25.3709C109.847 19.1704 115.035 15.1846 123.196 15.1846C127.339 15.1282 131.423 16.1767 135.027 18.2224L131.735 23.5367C129.162 21.9875 126.195 21.2181 123.193 21.322C119.018 21.322 116.362 22.8402 116.362 25.3709C116.362 28.0281 117.942 29.0407 124.079 30.3746C132.305 32.2101 136.291 35.7535 136.291 41.5103C136.291 48.1532 130.787 52.139 122.244 52.139C117.181 52.1893 112.244 50.5639 108.201 47.5159Z"
              :fill="currentColorScheme.secondaryColor"
            />
            <path
              d="M140.909 41.6946V3.05176e-05H147.492V40.8085C147.492 44.1622 148.251 46.061 151.162 46.061C152.427 46.0253 153.656 45.6302 154.705 44.922L157.11 50.3628C155.157 51.5754 152.892 52.1909 150.593 52.1338C144.326 52.1338 140.909 48.0848 140.909 41.6946Z"
              :fill="currentColorScheme.secondaryColor"
            />
            <path
              d="M159.7 5.70012C159.687 4.82141 159.936 3.95877 160.415 3.22191C160.894 2.48504 161.581 1.90725 162.389 1.56207C163.198 1.2169 164.09 1.11992 164.954 1.28348C165.817 1.44704 166.612 1.86372 167.238 2.48055C167.864 3.09739 168.293 3.88649 168.469 4.74744C168.645 5.6084 168.561 6.50231 168.228 7.31547C167.895 8.12862 167.327 8.82425 166.597 9.31389C165.867 9.80352 165.009 10.065 164.13 10.0651C163.552 10.0705 162.979 9.96176 162.443 9.7451C161.908 9.52844 161.42 9.20814 161.008 8.80259C160.597 8.39704 160.269 7.91421 160.045 7.38181C159.82 6.84941 159.703 6.27791 159.7 5.70012ZM160.776 51.5069V15.8233H167.36V51.5069H160.776Z"
              :fill="currentColorScheme.secondaryColor"
            />
            <path
              d="M172.419 33.6598C172.421 31.2022 172.914 28.7697 173.867 26.5043C174.82 24.239 176.214 22.1863 177.97 20.4659C179.725 18.7456 181.805 17.3922 184.089 16.4848C186.373 15.5773 188.815 15.134 191.272 15.1807C195.928 15.0824 200.433 16.8344 203.799 20.0526L199.371 24.7929C197.146 22.7899 194.266 21.6665 191.272 21.6327C189.678 21.6091 188.096 21.9026 186.617 22.4962C185.137 23.0898 183.791 23.9715 182.656 25.0902C181.52 26.2089 180.619 27.5421 180.003 29.0124C179.388 30.4827 179.071 32.0607 179.071 33.6546C179.071 35.2484 179.388 36.8264 180.003 38.2967C180.619 39.767 181.52 41.1002 182.656 42.2189C183.791 43.3376 185.137 44.2194 186.617 44.8129C188.096 45.4065 189.678 45.7 191.272 45.6764C194.266 45.6427 197.146 44.5192 199.371 42.5162L203.864 47.2565C200.45 50.4403 195.94 52.1853 191.272 52.1285C188.816 52.1751 186.375 51.7321 184.091 50.8253C181.808 49.9185 179.728 48.5661 177.973 46.8469C176.218 45.1277 174.823 43.0762 173.87 40.8121C172.916 38.5479 172.423 36.1166 172.419 33.6598Z"
              :fill="currentColorScheme.secondaryColor"
            />
            <path
              d="M239.612 35.3677H211.647C212.342 41.6315 217.277 45.8714 224.111 45.8714C227.63 45.9198 231.031 44.6042 233.601 42.2003L237.778 46.8194C235.967 48.606 233.808 50 231.434 50.9143C229.061 51.8287 226.524 52.2439 223.983 52.1338C213.037 52.1338 205.13 44.4783 205.13 33.9127C205.066 31.4839 205.487 29.0666 206.369 26.8028C207.252 24.5389 208.577 22.474 210.268 20.7293C211.959 18.9845 213.981 17.595 216.216 16.6422C218.452 15.6894 220.854 15.1925 223.284 15.1808C225.467 15.1005 227.643 15.4714 229.677 16.2701C231.71 17.0689 233.556 18.2784 235.101 19.8231C236.646 21.3678 237.855 23.2144 238.654 25.2476C239.453 27.2809 239.824 29.457 239.743 31.64C239.823 32.8839 239.779 34.1326 239.612 35.3677ZM233.223 29.8638C233.16 25.1814 228.793 21.4484 223.226 21.4484C220.708 21.4199 218.251 22.2319 216.246 23.7561C214.241 25.2802 212.801 27.4294 212.154 29.8638H233.223Z"
              :fill="currentColorScheme.secondaryColor"
            />
          </svg>
        </div>

        <!-- end Aslice logo svg -->
      </div>
    </div>
    <div
      class="spacer flex-column flex-grow-1 mt-5 py-3 py-lg-0 bg-gray px-4 d-flex align-items-center align-items-lg-start"
    >
      <SaveImageButton
        v-if="!$device.mobile"
        :href="dataUrlLink"
        :data-key="randomKey"
        :filename="playlist.name + '.jpg'"
      >
        Save image
      </SaveImageButton>
      <picture-sharesheet
        v-else
        :src="dataUrlLink"
        sheetcolor="#FFF"
        iconcolor="#000"
        fixed
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import imageRendererUtilsMixin from "@/mixins/imageRendererUtils.mixin";
import SaveImageButton from "@/components/global/buttons/SaveImageButton.vue";

export default {
  name: "PlaylistSharingPreview",
  mixins: [imageRendererUtilsMixin],
  components: {
    SaveImageButton
  },
  computed: {
    ...mapState("playlistSharing", ["playlist"]),
    ...mapState("user", {
      user: "data"
    })
  },
  data() {
    return {
      navigator: window.navigator,
      blob: null,
      randomKey: Math.ceil(Math.random() * Date.now()),
      canvas: {},
      ctx: {},
      dataUrlLink: "",
      uniquePerformersCount: 0,

      performersGroup: [],
      currentColorScheme: {
        name: "purple",
        primaryColor: "#442671",
        secondaryColor: "#FFFFFF",
        descriptionColor: "#AAA3B1"
      },
      colorSchemas: [
        {
          name: "purple",
          primaryColor: "#442671",
          secondaryColor: "#FFFFFF",
          descriptionColor: "#AAA3B1"
        },
        {
          name: "light-purple",
          primaryColor: "#9182C5",
          secondaryColor: "#FFFFFF",
          descriptionColor: "#442671"
        },
        {
          name: "light-gray",
          primaryColor: "#F2F1EF",
          secondaryColor: "#442671",
          descriptionColor: "#9182C5"
        },
        {
          name: "gray",
          primaryColor: "#75707B",
          secondaryColor: "#FFFFFF",
          descriptionColor: "#6EFDF0"
        },
        {
          name: "aquamarine",
          primaryColor: "#4F0743",
          secondaryColor: "#FFFFFF",
          descriptionColor: "#9182C5"
        },
        {
          name: "yellow",
          primaryColor: "#FCB416",
          secondaryColor: "#442671",
          descriptionColor: "#FCFBF9"
        },
        {
          name: "pink",
          primaryColor: "#8F0D7A",
          secondaryColor: "#FFFFFF",
          descriptionColor: "#FCB416"
        },
        {
          name: "black",
          primaryColor: "#000000",
          secondaryColor: "#FFFFFF",
          descriptionColor: "#9182C5"
        }
      ]
    };
  },
  mounted() {
    const uniquePerformersCount = new Set();
    this.playlist.tracks.map(track => {
      track.performers.map(performer => {
        if (
          performer.isGroup &&
          performer.status === "approved" &&
          performer?.performers
        ) {
          performer?.performers.map(perf => {
            if (perf?.name !== this.user.primeArtistName)
              uniquePerformersCount.add(perf?.name);
          });
        } else {
          if (performer?.name !== this.user.primeArtistName)
            uniquePerformersCount.add(performer?.name);
        }
      });
      track.remixers.map(performer => {
        if (
          performer.isGroup &&
          performer.status === "approved" &&
          performer?.performers
        ) {
          performer?.performers.map(perf => {
            if (perf?.name !== this.user.primeArtistName)
              uniquePerformersCount.add(perf?.name);
          });
        } else {
          if (performer?.name !== this.user.primeArtistName)
            uniquePerformersCount.add(performer?.name);
        }
      });
    });
    this.uniquePerformersCount = uniquePerformersCount.size;
    this.canvas = this.$refs.canvasPreviewImage;
    this.$set(this, "ctx", this.$refs.canvasPreviewImage.getContext("2d"));
    setTimeout(() => {
      this.ctxRerender(this.currentColorScheme);
    }, 400);
  },
  methods: {
    // ----------
    toDataURL(dataUrlLink, callback, outputFormat) {
      var img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = function() {
        var canvas = document.createElement("CANVAS");
        var ctx = canvas.getContext("2d");
        var dataURL;
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
      };
      img.src = dataUrlLink;
      if (img.complete || img.complete === undefined) {
        img.src =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = dataUrlLink;
      }
    },
    downloadImage() {
      let link = document.createElement("a");
      this.toDataURL(this.dataUrlLink, function(dataUrl) {
        link.setAttribute("href", dataUrl);
        link.setAttribute("download", "download.jpg");
        link.setAttribute("target", "_blank");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
    checkTextLines(ctx, text, maxWidth) {
      const words = text.split(' ');
      let line = '';
      let lines = 0;
      for (let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + ' ';
        if (ctx.measureText(testLine).width > maxWidth && i > 0) {
          line = words[i] + ' ';
          lines++;
        } else {
          line = testLine;
        }
      }
      if (line) {
        lines++;
      }
      return lines;
    },
    drawTextWithWordWrap(ctx, text, x, startY, maxWidth, lineHeight) {
      const words = text.split(' ');
      let line = '';
      let y = startY;
      for (let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + ' ';
        if (ctx.measureText(testLine).width > maxWidth && i > 0) {
          ctx.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight; // Move to the next line
        } else {
          line = testLine;
        }
      }
      if (line) {
        ctx.fillText(line, x, y); // Render the remaining part of the text
      }
    },

// ----------
    async ctxRerender(scheme) {
      // Use eventloop to rerender svg before rerender canvas image
      setTimeout(async () => {
        const logo = this.$refs.svgLogo.innerHTML;
        const musicIcon = this.$refs.svgMusic.innerHTML;

        this.ctx.fillStyle = scheme.primaryColor;
        this.ctx.fillRect(0, 0, 1080, 1080);
        this.ctx.fillStyle = scheme.secondaryColor;
        let baseFontSize = 80;
        let lineHeight = 94;
        let y = 320; // Initial position y
        this.ctx.font = `normal ${baseFontSize}px 'Graphik-Regular-Web'`;

        // Checking the number of lines for the promoter and venue
        let venueAndPromotersText = `at ${this.playlist.venue}`;
        let venueAndPromotersLines = this.checkTextLines(this.ctx, venueAndPromotersText, 960);

        if (this.playlist.promotionCompanies.length > 0) {
          venueAndPromotersText = (() => {
            const promoters = this.playlist.promotionCompanies.map(promoter => promoter.name);
            if (promoters.length > 1) {
              const lastPromoter = promoters.pop();
              return `for ${promoters.join(', ')} and ${lastPromoter} at ${this.playlist.venue}`;
            } else {
              return `for ${promoters[0]} at ${this.playlist.venue}`;
            }
          })();
          venueAndPromotersLines = this.checkTextLines(this.ctx, venueAndPromotersText, 960);
        }

        if (venueAndPromotersLines > 3) {
          baseFontSize = 75;
          this.ctx.font = `normal ${baseFontSize}px 'Graphik-Regular-Web'`;
          lineHeight = 85;
          y = 280; // Move the initial position up if there is a lot of text
        }
        // Rendering the text
        this.ctx.fillText(`${this.playlist.primeArtistName || this.user.primeArtistName}`, 60, y, 1040);
        y += lineHeight;
        this.ctx.fillText(`shared a portion of their`, 60, y, 1040);
        y += lineHeight;
        this.ctx.fillText(`earnings with ${this.uniquePerformersCount} artists`, 60, y, 1040);
        y += lineHeight;
        this.drawTextWithWordWrap(this.ctx, venueAndPromotersText, 60, y, 960, lineHeight);
        y += lineHeight * venueAndPromotersLines;

        this.ctx.font = "normal 42px 'Graphik-Regular-Web'";
        this.ctx.fillText(`aslice.com`, 800, 1035, 1040);

        this.ctx.fillStyle = scheme.descriptionColor;
        this.ctx.font = "normal 32px 'Roboto-Mono'";
        this.ctx.fillText(`Learn how Aslice is building a more`, 60, y, 1040);
        this.ctx.fillText(`equitable music economy.`, 60, y + 42, 1040);

        await this.renderSvgToCanvas(logo, { x: 50, y: 980 });
        await this.renderSvgToCanvas(musicIcon, { x: 60, y: 60 });

        this.dataUrlLink = this.$refs.canvasPreviewImage.toDataURL(
          "image/jpeg",
          1.0
        );
        this.$refs.canvasPreviewImage.toBlob(
          blob => {
            return (this.blob = new Blob([blob], {
              type: "image/jpeg",
              quality: 1.0
            }));
          },
          "image/jpeg",
          1.0
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-white {
  background-color: white;
}

.bg-gray {
  background: #f2f1ef;
}

.mt-lg-6 {
  @media only screen and (min-width: 992px) {
    margin-top: 60px !important;
  }
}

.label-text {
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.15em;
}

.title {
  font-size: 24px;
  line-height: 42px;
  color: #442671;
}

.preview-canvas {
  width: 1080px;
  height: 1080px;
  transform: scale(0.425);
  box-shadow: 15px 10px 30px 5px rgba(0, 0, 0, 0.25);
}

.canvas-wrapper {
  max-width: 460px;
  max-height: 460px;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 460px;
  min-height: 460px;

  canvas {
    position: absolute;
    transform-origin: 0 0;
  }

  @media only screen and (max-width: 500px) {
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    height: 100%;
    min-width: 300px;
    min-height: 300px;
    margin-left: auto;
    margin-right: auto;

    canvas {
      transform: scale(0.277);
    }
  }
}

.rounded-button {
  color: #fff;
  background: #442671;
  border: none;
  display: flex;
  width: max-content;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #442671 !important;
    background: #fff;
  }
}

.primary-button {
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  border-radius: 50px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  border: 1px solid #442671;
  font-family: "Graphik-Regular-Web", sans-serif;
  display: flex;
  align-items: center;
  background: #442671;
  color: #ffffff;
  margin-left: 10px;
  transition: 0.2s;

  &:hover {
    background: #ffffff;
    color: #442671;
  }
}

.radio {
  height: 30px;
}

input[type="radio"],
input[type="checkbox"] {
  position: fixed;
  left: -400vw;
}

.radio-item {
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 15px;
  border: solid 5px transparent;
  position: relative;
  cursor: pointer;
}

.radio-item:hover {
  &:after {
    content: "";
    opacity: 0;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-color: inherit;
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
  }
}

.radio-item {
  &:after {
    content: "";
    display: block;
    opacity: 0;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-color: inherit;
    border-radius: 30px;
    transition: all 0.3s cubic-bezier(0.54, 0.19, 0.79, 1.35);
  }
}

input[type="checkbox"]:checked,
input[type="radio"]:checked {
  & ~ .radio-item {
    &:after {
      content: "";
      opacity: 0.4;
      transform: translate(-50%, -50%) scale(1.1) !important;
      transition: all 0.3s cubic-bezier(0.54, 0.19, 0.79, 1.35);
    }
  }
}

.radio-item:hover {
  &:after {
    opacity: 0.2;
    transform: translate(-50%, -50%) scale(1.1) !important;
    transition: all 0.3s cubic-bezier(0.54, 0.19, 0.79, 1.35);
  }
}

@media (max-width: 500px) {
  .colored-radio {
    width: 100%;
    justify-content: space-between;

    .radio {
      margin-right: 0px !important;
    }

    .radio-item {
      width: 20px;
      height: 20px;
      min-width: unset;
      min-height: unset;
    }

    input[type="checkbox"]:checked,
    input[type="radio"]:checked {
      & ~ .radio-item {
        &:after {
          content: "";
          width: 35px;
          height: 35px;
          transform: translate(-50%, -50%) !important;
        }
      }
    }
  }
}
</style>
<style>
.sharesheet-container > .sharesheet {
  justify-content: center !important;
}
.sharesheet > :nth-child(-1n + 3) {
  display: none !important;
}
</style>
