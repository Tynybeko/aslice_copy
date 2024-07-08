<template>
  <div class="row mx-0 bg-white">
    <div class="col-12 px-4 mt-4 mt-lg-6">
      <div class="d-flex flex-column mb-4">
        <span class="label-text text-uppercase color-gray">
          TRACK NAME
        </span>
        <h3 class="title mb-0">{{ track.name }}</h3>
        <span class="label-text text-uppercase color-gray">
          Listed DJs (Select at least one)
        </span>
        <v-select
          style="max-width: 358px;"
          class="mt-3"
          :class="{ active: played1 }"
          :options="[...playedBy]"
          :selectable="alreadySelected"
          :clearable="false"
          v-model="played1"
          placeholder="Select Artist"
          @option:selected="ctxRerender(currentColorScheme)"
        ></v-select>
        <v-select
          style="max-width: 358px;"
          class="mt-3"
          :class="{ active: played2 }"
          :disabled="!played1"
          :options="[...playedBy]"
          :selectable="alreadySelected"
          :clearable="false"
          v-model="played2"
          placeholder="Select Artist"
          @option:selected="ctxRerender(currentColorScheme)"
        ></v-select>
        <v-select
          style="max-width: 358px;"
          class="mt-3"
          :class="{ active: played3 }"
          :disabled="!played2"
          :options="[...playedBy]"
          :selectable="alreadySelected"
          :clearable="false"
          v-model="played3"
          placeholder="Select Artist"
          @option:selected="ctxRerender(currentColorScheme)"
        ></v-select>
      </div>

      <div class="canvas-wrapper mb-4">
        <canvas
          class="preview-canvas mt-3"
          width="1080"
          height="1080"
          ref="canvasPreviewImage"
        ></canvas>
      </div>

      <span
        class="label-text text-uppercase color-gray d-flex mt-5 justify-content-center justify-content-lg-start"
      >
        Select color
      </span>
      <div class="colored-radio d-flex flex-row mt-4">
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
          />
          <label
            :for="scheme.name"
            class="radio-item"
            :style="{ background: scheme.primaryColor }"
          />
        </div>
      </div>
      <span
        class="label-text color-gray d-flex justify-content-center justify-content-lg-start mt-4 mb-4"
        style="max-width: 453px; font-size: 12px; font-family: Roboto-Mono; letter-spacing: normal;"
      >
        Tip: When posting, don’t forget to tag the label and post the buy link.
      </span>
      <span
        v-if="$device.mobile"
        class="label-text color-gray d-flex justify-content-center justify-content-lg-start mt-4 mb-4"
        style="max-width: 453px; font-size: 12px; font-family: Roboto-Mono; letter-spacing: normal;"
      >
        *Press and hold the image below to download to camera roll.
      </span>
    </div>
    <div
      class="spacer flex-column flex-grow-1 mt-5 py-3 py-lg-0 bg-gray px-4 d-flex align-items-center align-items-lg-start"
    >
      <a
        v-if="!played1"
        class="text-color-primary text-decoration-none my-4 my-lg-5 px-4"
        title="Selected DJS"
        :data-key="randomKey"
        >Save image
        </a>
        <picture-sharesheet 
          v-else-if="$device.mobile"
          :src=dataUrlLink 
          class="container-save"
          sheetcolor="#FFF" 
          iconcolor="#000" 
          fixed
        />
        <!-- <a 
          v-else-if="$device.mobile"
          @click="downloadImage"
          class="rounded-button text-decoration-none my-4 my-lg-5 px-4"
        >Save image</a>
        -->
      <SaveImageButton
        v-else
        :href="dataUrlLink"
        :data-key="randomKey"
        :filename="track.name + '.jpg'"
      >
        Save image
      </SaveImageButton>
    </div>

    <!-- Aslice logo svg -->
    <div style="display: none" ref="svgLogo">
      <svg
        width="181"
        height="46"
        viewBox="0 0 181 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :fill="currentColorScheme.descriptionColor"
          d="M20.499 6.16761C16.8267 6.16452 13.2271 7.19043 10.1082 9.12898C6.98926 11.0675 4.47591 13.8412 2.8531 17.1354C1.23029 20.4297 0.56296 24.1127 0.926766 27.7669C1.29057 31.4211 2.67097 34.9003 4.91143 37.8099L6.73347 35.9879C4.85195 33.4401 3.71442 30.4202 3.44751 27.2642C3.1806 24.1083 3.79478 20.9402 5.22168 18.1126C6.64858 15.285 8.8322 12.9089 11.5295 11.2488C14.2267 9.58868 17.3318 8.70971 20.499 8.70971C23.6662 8.70971 26.7713 9.58868 29.4686 11.2488C32.1658 12.9089 34.3495 15.285 35.7764 18.1126C37.2033 20.9402 37.8174 24.1083 37.5505 27.2642C37.2836 30.4202 36.1461 33.4401 34.2646 35.9879L36.0876 37.8099C38.3281 34.9002 39.7085 31.421 40.0723 27.7667C40.436 24.1124 39.7686 20.4293 38.1457 17.135C36.5228 13.8407 34.0093 11.0671 30.8902 9.12859C27.7712 7.19011 24.1714 6.16433 20.499 6.16761V6.16761ZM29.7277 31.4491C30.724 29.8112 31.2664 27.9377 31.2993 26.0209C31.3322 24.1041 30.8544 22.213 29.9149 20.5419C28.9754 18.8708 27.6081 17.4799 25.9534 16.5119C24.2986 15.5438 22.4161 15.0337 20.499 15.0337C18.5819 15.0337 16.6994 15.5438 15.0447 16.5119C13.3899 17.4799 12.0226 18.8708 11.0831 20.5419C10.1437 22.213 9.66582 24.1041 9.69872 26.0209C9.73161 27.9377 10.274 29.8112 11.2703 31.4491L13.1467 29.5727C12.5074 28.3153 12.2012 26.9149 12.2575 25.5054C12.3138 24.0959 12.7307 22.7243 13.4683 21.5219C14.2058 20.3195 15.2395 19.3263 16.4704 18.6373C17.7013 17.9483 19.0884 17.5865 20.499 17.5865C21.9096 17.5865 23.2967 17.9483 24.5276 18.6373C25.7586 19.3263 26.7922 20.3195 27.5298 21.5219C28.2673 22.7243 28.6842 24.0959 28.7405 25.5054C28.7968 26.9149 28.4907 28.3153 27.8514 29.5727L29.7277 31.4491ZM20.499 24.0266L7.53734 36.9922L5.72813 38.8004C7.42895 40.7435 9.49643 42.3319 11.8121 43.4746C14.1278 44.6173 16.6462 45.2919 19.2231 45.4596C21.7999 45.6274 24.3845 45.2851 26.8289 44.4524C29.2732 43.6196 31.5292 42.3128 33.4676 40.6067C34.1086 40.0448 34.7119 39.4414 35.2739 38.8004L33.4646 36.9922L20.499 24.0266ZM20.499 42.9452C16.4014 42.9497 12.4395 41.4772 9.33962 38.7975L20.499 27.6381L31.6584 38.7975C28.5585 41.4773 24.5967 42.9502 20.499 42.9462V42.9452Z"
        />
        <path
          :fill="currentColorScheme.descriptionColor"
          d="M74.5925 12.3636H78.9585V39.1264H74.5925L74.1659 35.662C73.0299 36.897 71.6511 37.8843 70.116 38.562C68.5808 39.2396 66.9224 39.5932 65.2443 39.6004C61.5898 39.5695 58.0954 38.0961 55.522 35.501C52.9487 32.9058 51.5049 29.3992 51.5049 25.7445C51.5049 22.0898 52.9487 18.5831 55.522 15.988C58.0954 13.3928 61.5898 11.9194 65.2443 11.8885C66.9271 11.894 68.5902 12.2514 70.1267 12.9378C71.6631 13.6243 73.039 14.6245 74.1659 15.8743L74.5925 12.3636ZM74.2133 25.745C74.1808 24.0006 73.6335 22.3048 72.6402 20.8705C71.6469 19.4362 70.2519 18.3274 68.6304 17.6835C67.009 17.0395 65.2333 16.8891 63.5267 17.2511C61.82 17.6131 60.2583 18.4714 59.0379 19.7182C57.8175 20.965 56.9928 22.5446 56.6673 24.2586C56.3418 25.9727 56.5301 27.7446 57.2086 29.352C57.887 30.9593 59.0253 32.3303 60.4805 33.2928C61.9357 34.2552 63.6428 34.7661 65.3875 34.7614C66.5658 34.7733 67.7343 34.5468 68.8228 34.0954C69.9113 33.644 70.8972 32.977 71.7212 32.1347C72.5452 31.2924 73.1904 30.2921 73.6178 29.194C74.0452 28.0959 74.2461 26.9227 74.2084 25.745H74.2133Z"
        />
        <path
          :fill="currentColorScheme.descriptionColor"
          d="M81.9004 36.1369L84.3219 32.1502C86.6655 33.9176 89.5005 34.9129 92.4347 34.9983C96.1874 34.9983 98.0341 34.0493 98.0341 31.6287C98.0341 29.6359 96.374 28.4972 92.5305 27.7852C85.9346 26.5014 83.1348 24.0324 83.1348 19.5282C83.1348 14.8778 87.0258 11.8885 93.1467 11.8885C96.2543 11.8461 99.3171 12.6325 102.02 14.1668L99.551 18.1526C97.6213 16.9906 95.3959 16.4136 93.1447 16.4915C90.0132 16.4915 88.0213 17.6301 88.0213 19.5282C88.0213 21.5211 89.2063 22.2805 93.8093 23.2809C99.9786 24.6576 102.968 27.3151 102.968 31.6327C102.968 36.6149 98.84 39.6042 92.4327 39.6042C88.6356 39.642 84.9325 38.423 81.9004 36.1369V36.1369Z"
        />
        <path
          :fill="currentColorScheme.descriptionColor"
          d="M106.432 31.771V0.5H111.369V31.1063C111.369 33.6216 111.938 35.0457 114.122 35.0457C115.071 35.0189 115.992 34.7226 116.779 34.1915L118.583 38.2721C117.118 39.1815 115.419 39.6432 113.695 39.6003C108.994 39.6003 106.432 36.5636 106.432 31.771Z"
        />
        <path
          :fill="currentColorScheme.descriptionColor"
          d="M120.525 4.77507C120.515 4.11603 120.702 3.46906 121.061 2.91641C121.42 2.36375 121.936 1.93041 122.542 1.67153C123.148 1.41265 123.817 1.33992 124.465 1.46259C125.112 1.58526 125.709 1.89777 126.178 2.36039C126.648 2.82302 126.969 3.41484 127.101 4.06056C127.233 4.70628 127.17 5.37671 126.921 5.98658C126.671 6.59644 126.245 7.11817 125.698 7.48539C125.15 7.85262 124.506 8.04875 123.847 8.04882C123.414 8.05286 122.984 7.9713 122.582 7.8088C122.18 7.64631 121.815 7.40609 121.506 7.10192C121.197 6.79775 120.952 6.43563 120.783 6.03634C120.615 5.63704 120.527 5.20841 120.525 4.77507V4.77507ZM121.332 39.1302V12.3674H126.269V39.1302H121.332Z"
        />
        <path
          :fill="currentColorScheme.descriptionColor"
          d="M130.063 25.7449C130.065 23.9016 130.434 22.0773 131.149 20.3783C131.864 18.6793 132.91 17.1397 134.226 15.8494C135.543 14.5592 137.103 13.5442 138.816 12.8636C140.529 12.183 142.36 11.8505 144.203 11.8855C147.695 11.8118 151.074 13.1258 153.599 15.5395L150.278 19.0947C148.608 17.5924 146.449 16.7498 144.203 16.7245C143.008 16.7068 141.821 16.927 140.712 17.3722C139.602 17.8173 138.592 18.4786 137.741 19.3176C136.889 20.1567 136.213 21.1566 135.752 22.2593C135.29 23.362 135.052 24.5455 135.052 25.7409C135.052 26.9363 135.29 28.1198 135.752 29.2225C136.213 30.3252 136.889 31.3252 137.741 32.1642C138.592 33.0032 139.602 33.6645 140.712 34.1097C141.821 34.5549 143.008 34.775 144.203 34.7573C146.449 34.732 148.608 33.8894 150.278 32.3872L153.647 35.9424C151.087 38.3302 147.704 39.6389 144.203 39.5963C142.361 39.6314 140.53 39.2991 138.818 38.619C137.105 37.9389 135.546 36.9246 134.229 35.6352C132.913 34.3458 131.867 32.8071 131.152 31.109C130.436 29.411 130.066 27.5874 130.063 25.7449Z"
        />
        <path
          :fill="currentColorScheme.descriptionColor"
          d="M180.459 27.0258H159.485C160.006 31.7236 163.708 34.9036 168.833 34.9036C171.472 34.9399 174.023 33.9532 175.951 32.1503L179.083 35.6146C177.725 36.9545 176.106 38 174.326 38.6858C172.546 39.3716 170.643 39.6829 168.737 39.6004C160.528 39.6004 154.598 33.8587 154.598 25.9346C154.549 24.1129 154.865 22.3 155.527 20.6021C156.189 18.9042 157.183 17.3556 158.451 16.047C159.719 14.7384 161.236 13.6962 162.912 12.9817C164.589 12.2671 166.391 11.8944 168.213 11.8856C169.85 11.8254 171.482 12.1036 173.007 12.7026C174.532 13.3017 175.917 14.2088 177.076 15.3673C178.234 16.5258 179.141 17.9108 179.74 19.4358C180.34 20.9607 180.618 22.5928 180.557 24.2301C180.617 25.163 180.584 26.0994 180.459 27.0258V27.0258ZM175.667 22.8978C175.62 19.3861 172.345 16.5864 168.17 16.5864C166.281 16.565 164.438 17.174 162.934 18.3171C161.43 19.4602 160.35 21.0721 159.865 22.8978H175.667Z"
        />
      </svg>
    </div>
    <!-- end Aslice logo svg -->
    <img
      class="d-none"
      v-show="image"
      :src="image"
      alt="image"
      ref="image"
      style="display: none"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SaveImageButton from "@/components/global/buttons/SaveImageButton.vue";
import imageRendererUtilsMixin from "@/mixins/imageRendererUtils.mixin";
import { get, uniq, difference } from "lodash";

function loadXHR(url) {
  return new Promise(function(resolve, reject) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      // HEADERS
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.setRequestHeader("Vary", "Origin");
      xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
      xhr.setRequestHeader("Access-Control-Max-Age", "1800");
      xhr.setRequestHeader("Access-Control-Allow-Headers", "content-type");
      xhr.setRequestHeader(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, PATCH, OPTIONS, HEADER"
      );
      xhr.setRequestHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      // GENERATE BLOB
      xhr.responseType = "blob";
      xhr.onerror = function(error) {
        console.log(error);
        reject("Network error.");
      };
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject("Loading error:" + xhr.statusText);
        }
      };
      xhr.send();
    } catch (err) {
      reject(err.message);
    }
  });
}

const blobToBase64 = blob => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};

export default {
  name: "TrackSharingPreview",
  mixins: [imageRendererUtilsMixin],
  components: {
    SaveImageButton
  },
  computed: {
    ...mapState("user", ["data"]),
    ...mapGetters("trackSharing", {
      track: "getTrack"
    }),
    ...mapGetters("user", {
      user: "getUser"
    }),
    playedBy() {
      return difference(
        uniq(
          this.track.playbackHistory.map(history =>
            get(history, "playlist.primeArtistName", "")
          )
        ),
        [null]
      );
    }
  },
  data() {
    return {
      userLabel: null,
      navigator: window.navigator,
      blob: null,
      randomKey: Math.ceil(Math.random() * Date.now()),
      canvas: {},
      ctx: {},
      dataUrlLink: "",
      uniquePerformersCount: 0,
      image: null,
      disabledSave: false,

      played1: null,
      played2: null,
      played3: null,

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
          descriptionColor: "#AAA3B1"
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
          descriptionColor: "#fff"
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
  methods: {
// ----------------------------

toDataURL(dataUrlLink, callback, outputFormat) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
          var canvas = document.createElement('CANVAS');
          var ctx = canvas.getContext('2d');
          var dataURL;
          canvas.height = this.naturalHeight;
          canvas.width = this.naturalWidth;
          ctx.drawImage(this, 0, 0);
          dataURL = canvas.toDataURL(outputFormat);
          callback(dataURL);
        };
        img.src = dataUrlLink;
        if (img.complete || img.complete === undefined) {
          img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
          img.src = dataUrlLink;
        }
      },
      downloadImage() {
        let link = document.createElement('a');
        this.toDataURL(
          this.dataUrlLink,
          function(dataUrl) {
            link.setAttribute('href', dataUrl);
            link.setAttribute('download', 'download.jpg');
            link.setAttribute('target', '_blank');
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        );
      },



// -----------------------------
    async ctxRerender(scheme) {
      // TODO: get logo
      const logo = this.$refs.svgLogo.innerHTML;
      this.ctx.fillStyle = scheme.primaryColor;
      this.ctx.fillRect(0, 0, 1080, 1080);
      await this.renderSvgToCanvas(logo, { x: 222, y: 980 });
      if (this.$refs.image) {
        this.ctx.drawImage(this.$refs.image, 610, 50, 420, 420);
      }
      this.ctx.fillStyle = scheme.descriptionColor;
      this.ctx.font = "normal 20px 'Graphik-Regular-Web'";
      this.ctx.fillText(`ARTIST:`, 50, 50, 1040);
      this.ctx.fillText(`TRACK:`, 50, 150, 1040);
      // TODO: REMIXER MUST BE OPTIONAL
      const remixers = this.track.remixers;
      if(remixers.length){
        this.track.name.length < 24 
          ? this.ctx.fillText(`REMIXED BY:`, 50, 250, 1040) 
          : this.ctx.fillText(`REMIXED BY:`, 50, 300, 1040)
      }  
      const label = this.track.userLabels;
      if(label.length && label[0].label.length > 0 && !remixers.length){
        this.track.name.length < 24 
          ? this.ctx.fillText(`LABEL:`, 50, 250, 1040) 
          : this.ctx.fillText(`LABEL:`, 50, 300, 1040)
      }else if(label.length && label[0].label.length && remixers.length){
        this.track.name.length < 24 
          ? this.ctx.fillText(`LABEL:`, 50, 350, 1040) 
          : this.ctx.fillText(`LABEL:`, 50, 400, 1040)
      }
      this.ctx.fillRect(50, 520, 980, 1);
      this.ctx.fillText(`WAS PLAYED BY:`, 50, 570, 1040);
      this.ctx.fillText(`SHARED VIA:`, 50, 1012, 1040);
      this.ctx.fillText(`ASLICE.COM`, 882, 1012, 1040);
      this.ctx.fillStyle = scheme.secondaryColor;
      this.ctx.font = "normal 32px 'Graphik-Regular-Web'";
      this.ctx.fillText(
        `${this.track.performers
          .map(el => el.displayedName || el.name)
          .join(", ")}`,
        50,
        105,
        1040
      );
      if(label.length && !remixers.length){
        this.track.name.length < 24 
          ? this.wrapText(this.ctx, this.track.userLabels[0].label, 50, 300, 500, 35)
          : this.wrapText(this.ctx, this.track.userLabels[0].label, 50, 350, 500, 35)
      }
      if(label.length && remixers.length){
        this.track.name.length < 24 
          ? this.wrapText(this.ctx, this.track.userLabels[0].label, 50, 400, 500, 35)
          : this.wrapText(this.ctx, this.track.userLabels[0].label, 50, 450, 500, 35)
      }
      this.wrapText(this.ctx, this.track.name , 50, 200, 500, 35);
      remixers.length && this.track.name.length < 24
        ? this.wrapText( this.ctx, remixers.map(el => el.name).join(", "),50,300,500,35)
        : this.wrapText( this.ctx, remixers.map(el => el.name).join(", "),50,350,500,35)
      this.ctx.font = "normal 80px 'Graphik-Regular-Web'";
      if (this.played1) {
        this.ctx.fillText(`${this.played1}`, 50, 650, 1040);
      }
      if (this.played2) {
        this.ctx.fillText(`${this.played2}`, 50, 750, 1040);
      }
      if (this.played3) {
        this.ctx.fillText(`${this.played3}`, 50, 850, 1040);
      }
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

      this.dataUrlLink = this.$refs.canvasPreviewImage.toDataURL(
        "image/jpeg",
        1.0
      );
    },
    alreadySelected(option) {
      const options = [this.played1, this.played2, this.played3];
      return !options.includes(option);
    },
    wrapText(context, text, x, y, lineWidth, lineHeight) {
      let line = "";
      const paragraphs = text.split("\n");
      for (let i = 0; i < paragraphs.length; i++) {
        const words = paragraphs[i].split(" ");
        for (let j = 0; j < words.length; j++) {
          let testLine = line + words[j] + " ";
          let metrics = context.measureText(testLine);
          let testWidth = metrics.width;
          if (testWidth > lineWidth && j > 0) {
            context.fillText(line, x, y);
            line = words[j] + " ";
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
        y += lineHeight;
        line = "";
      }
    }
  },

  watch: {
    currentColorScheme: {
      handler(next) {
        setTimeout(() => {
          this.ctxRerender(next);
        }, 100);
      },
      deep: true
    }
  },
  async mounted() {
    this.canvas = this.$refs.canvasPreviewImage;
    this.$set(this, "ctx", this.$refs.canvasPreviewImage.getContext("2d"));
    const url =  this.track.artworks && this.track.artworks.length > 1
        ? this.$aslice.getImage(
            this.track.artworks.find(artwork => artwork.user.id == this.data.id ).url
          )
        : this.$aslice.getImage(this.track.artworks.find(artwork => artwork.user.id).url);
    
    const blob = this.track.artworks.length > 0 || this.track.image !== null
      ? await loadXHR(url + "?c" || "/music.svg")
      : await loadXHR(url || "/music.svg");
    this.image = await blobToBase64(blob);

    await this.$nextTick(async () => {
      await this.ctxRerender(this.currentColorScheme);
    });
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

.radio {
  height: 30px;
}

input[type="radio"],
input[type="checkbox"] {
  position: fixed;
  left: -400vw;
}
.text-color-primary{
  color: #fff;
  background: #442671;
  opacity: 0.7;
  border: none;
  display: flex;
  width: max-content;
  align-items: center;
  transition: all 0.3s ease-in-out;
  font-family: "Graphik-Regular-Web";
  min-height: 40px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 14px;
  padding: 6px 13px 4px 13px;
  border-radius: 60px;
  cursor: pointer;
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

::v-deep .vs__dropdown-toggle {
  height: 30px;
  padding: 0 !important;
  width: 100% !important;
  border-radius: 2px !important;
  border: 1px solid #AAA3B1 !important;

  svg path {
    stroke: #AAA3B1;
  }
}

.v-select {
  cursor: pointer !important;
}

::v-deep .vs--searchable .vs__dropdown-toggle input {
  cursor: pointer !important;
}

::v-deep .vs--searchable .vs__dropdown-toggle {
  cursor: pointer !important;
}

::v-deep .vs__selected-options {
  width: calc(100% - 50px);
  padding: 5px 10px !important;
  margin-top: 0;
}
::v-deep .vs__selected {
  color: #442671 !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
}
::v-deep .vs__search {
  margin-top: 0;
  color: #442671 !important;
}

::v-deep .vs__dropdown-menu {
  padding-top: 0;
  padding-bottom: 0;
  max-height: 290px;
}

::v-deep .vs__dropdown-option {
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

::v-deep .active .vs__dropdown-toggle {
  border: solid 1px #442671 !important;
}

::v-deep .active .vs__selected {
  color: #442671 !important;
}

</style>
<style>
.sharesheet-container > .sharesheet{
  justify-content: center!important;
}
.sharesheet > :nth-child(-1n+3){
  display: none!important;
}
</style>
