<template>
  <div
    v-if="!hideModal"
    id="left-side-menu"
    :class="isAuthorized && showCharityEventBanner ? 't-120' : ''"
    :style="showBonusLine && $device.mobile ? { top: '118px' } : ''"
  >
    <div
      v-for="(menu, index) in tabs"
      :key="menu.id"
      :id="`menu-tooltip-${index}`"
      style="position: relative;"
    >
      <router-link
        class="menu-link"
        :class="{
          'menu-link-active': menu.active,
          'menu-link--promoter': isPromoter
        }"
        v-html="menu.svgIcon"
        :to="menu.routeTo"
        @click.stop
      ></router-link>
      <div
        style="cursor: pointer;"
        :key="'green' + menu.id"
        class="green-circle"
        v-if="menu.name === 'Messages'"
      ></div>
      <b-tooltip
        :target="`menu-tooltip-${index}`"
        placement="right"
        noninteractive
      >
        {{ menu.name }}
      </b-tooltip>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      hideModal: false,
      menuArr: [
        {
          name: "Overview",
          id: 1,
          routeTo: { name: "Overview" },
          active: ["Overview", "OverviewType"].includes(
            this.$router.currentRoute.name
          ),
          svgIcon: `<svg width="40px" height="40px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0002 30.6669C25.8912 30.6669 30.6668 25.8913 30.6668 20.0002C30.6668 14.1092 25.8912 9.33356 20.0002 9.33356C14.1091 9.33356 9.3335 14.1092 9.3335 20.0002C9.3335 25.8913 14.1091 30.6669 20.0002 30.6669Z" stroke="white" stroke-miterlimit="10"/>
<path d="M9.3335 20.0003H20.0002L14.6668 10.6669" stroke="white" stroke-miterlimit="10"/>
</svg>

`
        },
        {
          name: "Playlists",
          id: 2,
          routeTo: { name: "Playlists" },
          active:
            this.$router.currentRoute.name === "Playlists" ||
            this.$router.currentRoute.name === "Playlist Sharing" ||
            this.$router.currentRoute.name === "Playlist Sharing Preview" ||
            this.$router.currentRoute.name === "Playlist Sharing List",
          svgIcon: `<svg width="40px" height="40px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.8224 27.5524C24.1636 27.5524 25.2508 26.4652 25.2508 25.1241C25.2508 23.7829 24.1636 22.6957 22.8224 22.6957C21.4813 22.6957 20.394 23.7829 20.394 25.1241C20.394 26.4652 21.4813 27.5524 22.8224 27.5524Z" stroke="#442671" stroke-miterlimit="10"/>
<path d="M25.251 25.3629V13.3772L28.471 12.8472" stroke="#442671" stroke-miterlimit="10"/>
<path d="M22.6665 16.0002H14.6665" stroke="#442671" stroke-miterlimit="10"/>
<path d="M22.6665 20.0002H14.6665" stroke="#442671" stroke-miterlimit="10"/>
<path d="M18.6665 24.0002H14.6665" stroke="#442671" stroke-miterlimit="10"/>
<path d="M30.1335 9.33356H9.86683C9.57228 9.33356 9.3335 9.57234 9.3335 9.86689V30.1336C9.3335 30.4281 9.57228 30.6669 9.86683 30.6669H30.1335C30.428 30.6669 30.6668 30.4281 30.6668 30.1336V9.86689C30.6668 9.57234 30.428 9.33356 30.1335 9.33356Z" stroke="#442671" stroke-miterlimit="10"/>
</svg>
`
        },
        {
          name: "Tracks",
          id: 3,
          routeTo: { name: "Tracks" },
          active:
            this.$router.currentRoute.name === "Tracks" ||
            this.$router.currentRoute.name === "Track" ||
            this.$router.currentRoute.name === "Track Sharing" ||
            this.$router.currentRoute.name === "Track Sharing Preview",
          svgIcon: `<svg width="40px" height="40px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6665 28.0002V10.6669L29.3332 8.00024V24.0002" stroke="#442671" stroke-miterlimit="10"/>
<path d="M10.6665 32.0002C12.8756 32.0002 14.6665 30.2094 14.6665 28.0002C14.6665 25.7911 12.8756 24.0002 10.6665 24.0002C8.45737 24.0002 6.6665 25.7911 6.6665 28.0002C6.6665 30.2094 8.45737 32.0002 10.6665 32.0002Z" stroke="#442671" stroke-miterlimit="10"/>
<path d="M25.3335 28.0002C27.5426 28.0002 29.3335 26.2094 29.3335 24.0002C29.3335 21.7911 27.5426 20.0002 25.3335 20.0002C23.1244 20.0002 21.3335 21.7911 21.3335 24.0002C21.3335 26.2094 23.1244 28.0002 25.3335 28.0002Z" stroke="#442671" stroke-miterlimit="10"/>
</svg>
`
        },
        {
          name: "Accounting",
          id: 4,
          routeTo: { name: "Accounting" },
          active: this.$router.currentRoute.name === "Accounting",
          svgIcon: `<svg width="40px" height="40px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.808 19.7063C17.6754 19.7063 19.9998 17.3843 19.9998 14.5199C19.9998 11.6556 17.6754 9.33356 14.808 9.33356C11.9407 9.33356 9.61621 11.6556 9.61621 14.5199C9.61621 17.3843 11.9407 19.7063 14.808 19.7063Z" stroke="#442671" stroke-miterlimit="10"/>
<path d="M25.1918 30.373C28.0592 30.373 30.3836 28.051 30.3836 25.1866C30.3836 22.3223 28.0592 20.0002 25.1918 20.0002C22.3244 20.0002 20 22.3223 20 25.1866C20 28.051 22.3244 30.373 25.1918 30.373Z" stroke="#442671" stroke-miterlimit="10"/>
<path d="M28 12.0002L12 28.0002" stroke="#442671" stroke-miterlimit="10"/>
</svg>
`
        },
        // TODO: Uncomment when it will be finished
        //         {
        //           name: "Messages",
        //           id: 5,
        //           routeTo: { name: "Messages" },
        //           active: this.$router.currentRoute.name === "Messages",
        //           svgIcon: `<svg width="40px" height="40px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        // <path d="M30.0002 9.33356H10.0002C9.82335 9.33356 9.65378 9.40379 9.52876 9.52882C9.40373 9.65384 9.3335 9.82341 9.3335 10.0002V24.6669C9.3335 24.8437 9.40373 25.0133 9.52876 25.1383C9.65378 25.2633 9.82335 25.3336 10.0002 25.3336H12.0359V28.9521C12.0359 29.0839 12.075 29.2128 12.1483 29.3225C12.2215 29.4321 12.3257 29.5175 12.4475 29.568C12.5693 29.6185 12.7033 29.6317 12.8326 29.606C12.962 29.5802 13.0808 29.5167 13.174 29.4235L17.2642 25.3336H30.0002C30.177 25.3336 30.3465 25.2633 30.4716 25.1383C30.5966 25.0133 30.6668 24.8437 30.6668 24.6669V10.0002C30.6668 9.82341 30.5966 9.65384 30.4716 9.52882C30.3465 9.40379 30.177 9.33356 30.0002 9.33356Z" stroke="#442671" stroke-miterlimit="10"/>
        // </svg>
        // `
        //         },
        {
          name: "Preferences",
          id: 6,
          routeTo: { name: "Preferences" },
          active:
            this.$router.currentRoute.name === "Preferences" ||
            this.$router.currentRoute.name === "GroupEdit",
          svgIcon: `<svg width="40px" height="40px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 24.0002C22.2091 24.0002 24 22.2094 24 20.0002C24 17.7911 22.2091 16.0002 20 16.0002C17.7909 16.0002 16 17.7911 16 20.0002C16 22.2094 17.7909 24.0002 20 24.0002Z" stroke="#442671" stroke-miterlimit="10"/>
<path d="M30.0002 17.3336H28.0475C27.9157 17.3336 27.7868 17.2945 27.6772 17.2212C27.5675 17.1479 27.4821 17.0438 27.4316 16.922C27.3812 16.8002 27.368 16.6662 27.3937 16.5368C27.4194 16.4075 27.4829 16.2887 27.5761 16.1955L28.8621 14.9095C28.924 14.8476 28.9731 14.7741 29.0066 14.6932C29.0401 14.6124 29.0574 14.5257 29.0574 14.4381C29.0574 14.3506 29.0401 14.2639 29.0066 14.183C28.9731 14.1021 28.924 14.0286 28.8621 13.9667L26.0337 11.1383C25.9086 11.0133 25.7391 10.943 25.5623 10.943C25.3854 10.943 25.2159 11.0133 25.0909 11.1383L23.8049 12.4242C23.7117 12.5175 23.5929 12.581 23.4636 12.6067C23.3342 12.6324 23.2002 12.6192 23.0784 12.5688C22.9566 12.5183 22.8524 12.4329 22.7792 12.3232C22.7059 12.2136 22.6668 12.0847 22.6668 11.9528V10.0002C22.6668 9.82341 22.5966 9.65384 22.4716 9.52882C22.3465 9.40379 22.177 9.33356 22.0002 9.33356H18.0002C17.8234 9.33356 17.6538 9.40379 17.5288 9.52882C17.4037 9.65384 17.3335 9.82341 17.3335 10.0002V11.9528C17.3335 12.0847 17.2944 12.2136 17.2211 12.3232C17.1479 12.4329 17.0438 12.5183 16.922 12.5688C16.8001 12.6192 16.6661 12.6324 16.5368 12.6067C16.4074 12.581 16.2887 12.5175 16.1954 12.4242L14.72 10.9488C14.6581 10.8869 14.5846 10.8378 14.5037 10.8043C14.4228 10.7708 14.3361 10.7535 14.2486 10.7535C14.161 10.7535 14.0743 10.7708 13.9934 10.8043C13.9125 10.8378 13.8391 10.8869 13.7771 10.9488L10.9487 13.7772C10.8868 13.8391 10.8377 13.9126 10.8042 13.9935C10.7707 14.0744 10.7535 14.1611 10.7535 14.2486C10.7535 14.3362 10.7707 14.4229 10.8042 14.5037C10.8377 14.5846 10.8868 14.6581 10.9487 14.72L12.4242 16.1955C12.5174 16.2887 12.5809 16.4075 12.6066 16.5368C12.6324 16.6661 12.6192 16.8002 12.5687 16.922C12.5182 17.0438 12.4328 17.1479 12.3232 17.2212C12.2135 17.2945 12.0846 17.3336 11.9528 17.3336H10.0002C9.82335 17.3336 9.65378 17.4038 9.52876 17.5288C9.40373 17.6538 9.3335 17.8234 9.3335 18.0002V22.0002C9.3335 22.177 9.40373 22.3466 9.52876 22.4716C9.65378 22.5967 9.82335 22.6669 10.0002 22.6669H11.9528C12.0846 22.6669 12.2135 22.706 12.3232 22.7792C12.4328 22.8525 12.5182 22.9566 12.5687 23.0784C12.6192 23.2003 12.6324 23.3343 12.6066 23.4636C12.5809 23.5929 12.5174 23.7117 12.4242 23.805L10.9487 25.2804C10.8868 25.3423 10.8377 25.4158 10.8042 25.4967C10.7707 25.5776 10.7535 25.6643 10.7535 25.7518C10.7535 25.8394 10.7707 25.9261 10.8042 26.007C10.8377 26.0878 10.8868 26.1613 10.9487 26.2232L13.7771 29.0517C13.8391 29.1136 13.9125 29.1627 13.9934 29.1962C14.0743 29.2297 14.161 29.2469 14.2486 29.2469C14.3361 29.2469 14.4228 29.2297 14.5037 29.1962C14.5846 29.1627 14.6581 29.1136 14.72 29.0517L16.1954 27.5762C16.2887 27.483 16.4074 27.4195 16.5368 27.3937C16.6661 27.368 16.8001 27.3812 16.922 27.4317C17.0438 27.4821 17.1479 27.5676 17.2211 27.6772C17.2944 27.7868 17.3335 27.9157 17.3335 28.0476V30.0002C17.3335 30.177 17.4037 30.3466 17.5288 30.4716C17.6538 30.5967 17.8234 30.6669 18.0002 30.6669H22.0002C22.177 30.6669 22.3465 30.5967 22.4716 30.4716C22.5966 30.3466 22.6668 30.177 22.6668 30.0002V28.0476C22.6668 27.9158 22.7059 27.7869 22.7792 27.6772C22.8524 27.5676 22.9566 27.4821 23.0784 27.4317C23.2002 27.3812 23.3342 27.368 23.4636 27.3937C23.5929 27.4195 23.7117 27.483 23.8049 27.5762L25.0908 28.8622C25.1528 28.9241 25.2262 28.9732 25.3071 29.0067C25.388 29.0402 25.4747 29.0574 25.5623 29.0574C25.6498 29.0574 25.7365 29.0402 25.8174 29.0067C25.8983 28.9732 25.9718 28.9241 26.0337 28.8622L28.8621 26.0337C28.924 25.9718 28.9731 25.8983 29.0066 25.8174C29.0401 25.7366 29.0574 25.6499 29.0574 25.5623C29.0574 25.4748 29.0401 25.3881 29.0066 25.3072C28.9731 25.2263 28.924 25.1528 28.8621 25.0909L27.5761 23.805C27.4829 23.7117 27.4194 23.5929 27.3937 23.4636C27.368 23.3343 27.3812 23.2003 27.4316 23.0784C27.4821 22.9566 27.5675 22.8525 27.6772 22.7792C27.7868 22.706 27.9157 22.6669 28.0475 22.6669H30.0002C30.177 22.6669 30.3465 22.5967 30.4716 22.4716C30.5966 22.3466 30.6668 22.177 30.6668 22.0002V18.0002C30.6668 17.8234 30.5966 17.6538 30.4716 17.5288C30.3465 17.4038 30.177 17.3336 30.0002 17.3336V17.3336Z" stroke="#442671" stroke-miterlimit="10"/>
</svg>
`
        }
      ]
    };
  },
  computed: {
    ...mapState("user", ["data", "isAuthorized"]),
    ...mapState("app", ["showCharityEventBanner"]),
    ...mapGetters("djdashboard", ["showBonusLine"]),
    ...mapGetters("user", ["isPromoter"]),
    tabs() {
      let result = this.menuArr;

      if (this.isPromoter) {
        result = result.filter(v => v.name !== "Tracks");
        result = result.map(v => {
          if (v.name === "Accounting") {
            return {
              ...v,
              name: "Reports",
              svgIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M30.2646 30.6666H9.73576C9.51363 30.6666 9.3335 30.4865 9.3335 30.2644V9.73558C9.3335 9.51345 9.51363 9.33331 9.73576 9.33331H24.0002L30.6668 16V30.2644C30.6668 30.4865 30.4867 30.6666 30.2646 30.6666Z" stroke="#616060" stroke-miterlimit="10"/>
  <path d="M30.6667 16H24.4C24.1791 16 24 15.8209 24 15.6V9.33331" stroke="#616060" stroke-miterlimit="10"/>
  <path d="M13.3335 13.3713L20.0002 13.4151" stroke="#616060" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M13.3335 16H20.0002" stroke="#616060" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M13.3335 18.6667H16.0002" stroke="#616060" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M13.3335 21.3333H16.0002" stroke="#616060" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M13.3335 24H16.0002" stroke="#616060" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M13.3335 26.6667H16.0002" stroke="#616060" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M22.6665 26.6667C24.8756 26.6667 26.6665 24.8758 26.6665 22.6667C26.6665 20.4575 24.8756 18.6667 22.6665 18.6667C20.4574 18.6667 18.6665 20.4575 18.6665 22.6667C18.6665 24.8758 20.4574 26.6667 22.6665 26.6667Z" stroke="#616060" stroke-miterlimit="10"/>
  <path d="M18.6665 22.6667H22.6665L20.6665 19.1667" stroke="#616060" stroke-miterlimit="10"/>
</svg>
              `
            };
          } else if (v.name === "Overview") {
            return {
              ...v,
              routeTo: { name: "OverviewType", params: { type: "promoter" } }
            };
          }

          return v;
        });
      }

      return result;
    }
  },
  mounted() {
    const {
      name,
      query: { msg_id: msgId }
    } = this.$route;
    if (name === "Groups" && msgId) {
      this.hideModal = true;
    }
  }
};
</script>

<style lang="scss">
#left-side-menu {
  position: sticky;
  display: flex;
  width: 100%;
  z-index: 998;
  top: 48px;
  left: 0;
  background-color: white;
}
.t-120 {
   top: 120px!important;
}

@media screen and (min-width: 992px) {
  #left-side-menu {
    width: 70px;
    min-height: 100%;
    position: fixed;
    display: block;
    left: 0;
    top: 60px;
    background: #fff;
    box-shadow: 1px 0 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
  }
}
.menu-link {
  cursor: pointer;
  width: 65px;
  height: 65px;
  position: relative;
  display: block;
}
@media (min-width: 992px) {
  .menu-link {
    width: 70px;
    height: 70px;
  }
}

@media (max-width: 500px) {
  #left-side-menu {
    justify-content: space-between;
  }
  .menu-link {
    width: 50px;
    height: 50px;
  }
}
// Needs to deep routing
.menu-link-active {
  background: #442671;
}
.menu-link svg {
  margin: auto auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.menu-link svg path {
  stroke: #442671;
}
.menu-link-active svg path {
  stroke: #fff;
}

#left-side-menu {
  z-index: 100;
  .menu-link {
    &.router-link-active {
      background: #442671;
      svg path {
        stroke: #fff;
      }
    }

    &--promoter {
      svg path {
        stroke: var(--Core-Grayscale-900, #616060);
      }

      &.router-link-active {
        background: var(--Core-Grayscale-900, #616060);
      }
    }
  }
}

.green-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #31bcb2;
  position: absolute;
  left: 42px;
  top: 21px;
  z-index: 11;
}
.show-tooltip {
  display: block;
}
.hidden-tooltip {
  display: none;
}
.menu-tooltip {
  position: absolute;
  right: -60px;
  top: -5px;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 9px;
  padding: 7px 14px;
  color: #442671;
  z-index: 91;
  letter-spacing: 4px;
}
.menu-tooltip:hover {
  text-decoration: none;
  color: #442671;
}
</style>
