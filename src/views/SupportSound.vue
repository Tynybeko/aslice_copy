<template>
  <div class="container-fluid">
    <AppModal
      v-if="showCopySuccessModal"
      closeIcon
      title="Copied to clipboard"
      @onClose="handleCloseCopySuccessModal"
    />
    <header class="support-sound__header app-modal__footer">
      <ButtonLine
        @click="copyText()"
        onmouseover="this.style.backgroundColor='#fff';"
        onmouseout="this.style.backgroundColor='transparent';"
        style="background: none !important; border: 1px solid var(--Purples-Lt-Purple, #442671); color: var(--Purples-Lt-Purple, #442671); margin-right: 20px;"
      >
        Copy text
      </ButtonLine>
      <a href="/" style="margin-right: 20px;">
        <button class="px-4 btn-support-close">
          Close
        </button></a
      >
    </header>
    <img
      src="@/assets/images/STS_Logo_Final.png"
      alt="logo-support"
      style="margin: 0 auto; display: block;"
    />
    <h1
      style="text-align: center; font-size: 34px; color: #2A2A31; font-weight: 600; margin-top: 50px;"
    >
      Suggested Email Template For DJs And Booking Agencies
    </h1>
    <h2
      style="text-align: center; font-size: 20px; color: #2A2A31; font-weight: 600; margin-top: 0px; margin-bottom: 50px;"
    >
      Updated 23.April.2024
    </h2>
    <div
      class=""
      style="padding: 0; margin: 0 auto; max-width: 80%;"
      ref="text"
    >
      <p class="gray-text">Dear Artists and Agents,</p>
      <br />
      <p class="gray-text">
        We are excited to have you at our upcoming event. We also want to share
        important news and a request involving all events we produce. 
      </p>
      <br />
      <p class="gray-text">:::::We Have Joined Support The Sound:::::</p>
      <br />
      <p class="gray-text">
        Support The Sound is a new initiative, kickstarted by Basement (New York)
        and Bassiani (Tbilisi), assembling a global network of members consisting
        of Dekmantel (Amsterdam), Fuse (Brussels), 6AM Group (Los Angeles),
        Synthetik Minds (Los Angeles), Vault Sessions (Amsterdam), Wire Festival
        (New York), and WOMB (Tokyo).
      </p>
      <br />
      <p class="gray-text">:::::About Support The Sound:::::</p>
      <br />
      <p class="gray-text">
        In 2024, we are focusing on raising awareness and would love for you
        to check out the initiative at
        <a
          href="https://supportthesound.org"
          target="_blanc"
          style="text-decoration: underline; color: #2A2A31;"
          >supportthesound.org</a
        >
      </p>
      <br />
      <p class="gray-text">
        In 2025 and onward, we ask that every DJ playing our events (including
        affiliate parties, sister festivals, label nights, etc.) use Aslice
        and submit their DJ playlist. 
      </p>
      <br />
      <p class="gray-text">
        Although clubs and festivals have a legal obligation to pay substantial
        licensing fees to local collection societies (PROs), our primary goal
        is to guarantee that the rightful artists are paid for the use of their
        work. With Aslice's revenue-sharing service and its ability to gather
        accurate data, we can ensure the money shared by DJs will get to the
        actual producers whose music is played.
      </p>
      <br />
      <p class="gray-text">:::::Details On How To Prepare And Share:::::</p>
      <br />
      <p class="gray-text">
        • Please sign up for free as a DJ/producer on
        <a
          href="https://aslice.com/"
          target="_blanc"
          style="text-decoration: underline; color: #2A2A31;"
          >aslice.com</a
        >
        | Download the Aslice desktop app.
      </p>
      <br />
      <p class="gray-text">
        • After playing a DJ set at any of our events, upload your playlist
        to the Aslice app. For tech support: 
        <a
          href="https://aslice.com/contact"
          target="_blanc"
          style="text-decoration: underline; color: #2A2A31;"
          >aslice.com/contact</a
        >
      </p>
      <br />
      <p class="gray-text">
        The amount DJs share with producers is their choice and always kept
        private. There are many affordable options to sharing with producers
        (playlist sharing starts at just 10 $/£/€). If a DJ wants to participate
        but is concerned about sharing even at the minimum, we can collaborate to
        find a solution. Please contact us directly. Ultimately, your participation
        matters more than the dollar amount. To learn more about Aslice benefits,
        please check their 
        <a
          href="https://drive.google.com/file/d/1n_G2lk5c7qFL4fRqMGDoiRj-keJsAbAL/view"
          target="_blanc"
          style="text-decoration: underline; color: #2A2A31;"
          >DJ One-Sheet.</a
        >
      </p>
      <br />
      <p class="gray-text">
        Please let us know if you have any questions. Thanks for supporting the
        sound!
      </p>
      <br />
    </div>
  </div>
</template>

<script>
import ButtonLine from "@/components/global/buttons/ButtonLine.vue";
import AppModal from "@/components/AppModal.vue";
export default {
  name: "SupportSound",
  components: {
    ButtonLine,
    AppModal
  },
  metaInfo: {
    title: "Support the Sound",
    meta: []
  },
  data() {
    return {
      showCopySuccessModal: false
    };
  },
  methods: {
    copyText() {
      let reducer = "";
      for (const child of this.$refs.text.children) {
        reducer += child.textContent + "\n";
      }
      try {
        navigator.clipboard.writeText(reducer);
        this.showCopySuccessModal = true;
      } catch (error) {
        console.log("error copy", error);
      }
    },
    handleCloseCopySuccessModal() {
      this.showCopySuccessModal = false;
    }
  }
};
</script>

<style scoped>
.container-fluid {
  padding-top: 250px;
  padding-bottom: 210px;
  min-height: calc(100vh - 365px);
  background: #fffefd;
}
.support-sound__header {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 72px;
  top: 0;
  width: 100%;
  background-color: #f2f1ef;
  z-index: 2;
}
.btn-support-close {
  font-family: Graphik App, sans-serif;
  padding: 5px 20px 8px 20px;
}
</style>
