<template>
  <div
    v-in-dev
    id="dashboard-content-page"
    class="container-fluid online-dashboard-container d-flex px-0 py-0"
  >
    <div
      class="d-flex d-lg-none h-100 w-100"
      style="padding: 60px 20px; background-color: #442671;"
    >
      <h1 class="text-white">
        There is too much information on this page to display correctly. Try
        resizing or please open the page from your laptop/desktop.
      </h1>
    </div>

    <div
      :style="{
        maxWidth: '423px',
        width: '100%',
        height: 'inherit'
      }"
      class="messages__menu d-lg-flex d-none flex-column"
    >
      <!-- SEARCH -->
      <div class="messages__field--search position-relative">
        <div
          ref="messagesSearch"
          class="messages__search-input-wrapper py-3 px-4"
        >
          <div class="messages__search-input__rounded">
            <input
              id="search-message"
              placeholder="Search"
              type="text"
              v-model="q"
            />
          </div>
        </div>
        <label
          :style="{
            top: 0,
            margin: 0
          }"
          class="w-100 h-100 position-absolute"
          for="search-message"
        >
        </label>
      </div>
      <!-- END SEARCH -->
      <!-- MESSAGES -->
      <simplebar class="messages__list" ref="intersectionRoot">
        <!-- MESSAGE -->
        <div
          v-for="msg in filterMessages"
          :key="msg.id"
          class="py-3 px-4 d-flex align-items-center position-relative message__item"
          @click="(message = msg), markAsRead({ payload: msg })"
        >
          <div
            class="position-absolute"
            :class="{
              'message__badge-isnt-read': !msg.isRead
            }"
          ></div>
          <div class="message__avatar">
            <div class="message__avatar-item">
              <img alt="avatar" src="@/assets/images/icon-aslice.svg" />
            </div>
          </div>

          <div class="message__short-info" style="max-width: calc(100% - 72px)">
            <div class="d-flex flex-column">
              <p class="message__subject d-flex w-100 mb-1">
                {{ msg.performer ? msg.performer.name : "Aslice" }}
                <span class="ml-auto message__date-info">{{
                  momentDate(msg.created)
                }}</span>
              </p>

              <span
                :id="`message-tooltip-${msg.id}`"
                class="message__mail-subject mt-2 item-cell d-block"
                style="width: inherit"
              >
                {{ msg.subject }}
                <b-tooltip :target="`message-tooltip-${msg.id}`">{{
                  msg.subject
                }}</b-tooltip>
              </span>
            </div>
          </div>
        </div>
        <!-- END MESSAGE -->
        <div
          class="messages-intersection-observer"
          ref="messagesIntersectionObserver"
        ></div>
      </simplebar>
      <!-- END MESSAGES -->
    </div>

    <div
      :style="{
        height: 'inherit'
      }"
      class="message__wrapper d-lg-flex d-none flex-column w-100"
    >
      <iframe
        v-if="message"
        class="message-body w-100 h-100"
        :srcdoc="message.html"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import momentDate from "@/mixins/momentDate";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import { markAsRead } from "@/utils/messages";

export default {
  name: "Messages",
  mixins: [momentDate],
  components: {
    simplebar
  },
  data() {
    return {
      messageHeaderHeight: "0px",
      q: "",
      message: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      const intersectionTarget = this.$refs["messagesIntersectionObserver"];
      const root = this.$refs["intersectionRoot"].$el;
      const callback = async function(entries) {
        if (
          this.messages.length > 0 &&
          root.clientHeight > 0 &&
          entries[0].isIntersecting &&
          !this.maximumPages
        ) {
          await this.loadMoreMessages({
            page: this.page,
            take: this.take
          });
          console.log("ПЕРЕСЕЧЕНИЕ");
        }
      };
      const contextedCallback = callback.bind(this);
      const observer = new IntersectionObserver(contextedCallback, {
        root: root,
        rootMargin: "0px",
        threshold: 1.0
      });
      observer.observe(intersectionTarget);
    });
  },
  computed: {
    ...mapGetters("messages", {
      messages: "getMessages",
      page: "getPage",
      take: "getLimitPerPage",
      maximumPages: "getMessagesListState"
    }),
    filterMessages() {
      return this.messages.filter(
        message =>
          message.subject.toLowerCase().includes(this.q.toLowerCase()) ||
          message.performer?.name.toLowerCase().includes(this.q.toLowerCase())
      );
    }
  },
  methods: {
    ...mapActions("messages", ["loadMoreMessages"]),
    markAsRead
  }
};
</script>

<style lang="scss" scoped>
#messages {
  margin-left: 70px;
  min-height: calc(100vh - 60px);
  padding: 22px;
}

.messages {
  &__menu {
    background: #f2f1ef;
    border-right: 1px solid #aaa3b1;
    max-height: calc(100vh - 60px);
  }

  &__field--search {
    max-height: 72px;
  }

  &__list {
    max-height: calc(100% - 72px);
  }

  &__search-input {
    &-wrapper {
      border-bottom: 1px solid #aaa3b1;
    }

    &__rounded {
      padding: 12px 30px;
      background-color: white;
      border-radius: 30px;

      input[type="text"] {
        padding: 0;
        margin: 0;
        border: none;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #aaa3b1;
      }
    }
  }
}

.message {
  &__item {
    border-bottom: 1px solid #aaa3b1;
    cursor: pointer;
  }

  &__badge-isnt-read {
    width: 10px;
    height: 10px;
    min-width: 10px;
    min-height: 10px;
    border-radius: 5px;
    background-color: #442671;
  }

  &__avatar {
    width: 54px;
    height: 54px;
    min-width: 54px;
    min-height: 54px;
    margin-left: 18px;
    padding: 7px;

    &-item {
      width: 100%;
      height: 100%;
      background-color: #442671;
      border-radius: 27px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__short-info {
    width: 100%;
  }

  &__subject {
    color: #aaa3b1;
    font-family: "Graphik-Regular-Web", "Arial", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
  }

  &__date-info {
    font-family: "Graphik-Regular-Web", "Arial", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 10px;
    letter-spacing: 0.25em;
  }

  &__mail-subject {
    font-family: "Graphik-Regular-Web", "Arial", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #75707b;
  }
}

::v-deep .simplebar-scrollbar:before {
  color: #c4c4c4;
  width: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

::v-deep .messages__list:hover .simplebar-scrollbar:before {
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
}

.messages-intersection-observer {
  height: 300px;
  position: absolute;
  bottom: 0;
  background-color: white;
  z-index: 100;
}

::v-deep .simplebar-content {
  position: relative;
}

iframe {
  outline: none;
  border: none;
}
</style>
