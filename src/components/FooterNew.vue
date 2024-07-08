<template>
  <div>
    <div v-if="showSuccessSignModal" class="default-modal">
        <div class="default-modal__container">
          <img
            class="default-modal__close"
            src="@/assets/images/close-groups-modal.svg"
            @click="handleCloseSuccessSignModal"
          />
          <div class="default-modal__body">
            <h2 v-html="modalTitle" />
            <p v-html="modalDescription" />
          </div>
          <div class="default-modal__footer">
            <button class="button-default" @click="handleCloseSuccessSignModal">
              Close
            </button>
          </div>
        </div>
    </div>
    <div ref="screen-5" class="main-page__footer p-4">
        <div class="main-page__footer__container">
          <div class="main-page__footer__item">
            <img
              alt="logo"
              class="main-page__footer__mob-logo"
              src="@/assets/images/logo-beta.svg"
            />
          </div>
          <div class="main-page__footer__item link">
            <div
              v-for="route in routes.filter((rt) => rt.name !== 'Logout')"
              :key="route.name"
            >
              <router-link
                v-if="
                  (route.navFooter || route.logout) &&
                    (route.isAuthorized
                      ? route.isAuthorized == isAuthorized
                      : true)
                "
                :to="route.path"
                class="main-page__footer__link"
              >
                {{ route.name }}
              </router-link>
            </div>
          </div>
          <div class="main-page__footer__item main-page__footer__form">
            <h6>
              Sign Up For Aslice’s <br />
              Insider Newsletter:
            </h6>
            <form
              @submit.prevent="sendSubscribeNewsEmail(subscribeNewsEmail)"
              class="position-relative"
            >
              <label for="">Email</label>
              <input
                v-model="subscribeNewsEmail"
                placeholder="Enter Email"
                type="email"
                @blur="$v.subscribeNewsEmail.$touch()"
                @input="$v.subscribeNewsEmail.$reset()"
              />
              <button @keydown.prevent class="button">
                subscribe
              </button>
              <div
                v-if="
                  $v.subscribeNewsEmail.$dirty && $v.subscribeNewsEmail.$invalid
                "
                class="error px-3"
                style="bottom: -20px; font-size: 12px !important; left: 20px; background-color: rgba(68, 38, 113, .7); border-radius: 4px"
              >
                Incorrect email
              </div>
            </form>
          </div>
          <div class="main-page__footer__item main-page__footer__social">
            <div class="block-end">
              <a href="https://www.facebook.com/asliceofficial" target="_blanck">
                <img
                  alt=""
                  src="../assets/images/Facebook-f_Logo-Blue-Logo.svg"
                />
              </a>
              <a href="https://twitter.com/asliceofficial" target="_blanck">
                <img alt="" src="../assets/images/Twitter-Logo.wine.svg" />
              </a>
              <a
                href="https://www.instagram.com/asliceofficial/"
                target="_blanck"
              >
                <img alt="" src="../assets/images/Instagram.svg" />
              </a>
              <a href="https://linktr.ee/asliceofficial" target="_blanck">
                <img alt="" src="../assets/images/linktree-logo-icon.svg" />
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from "@/service/api";
import swal from "sweetalert2";
import findRoutesRecursive from "@/mixins/findRoutesRecursive";
import { email } from "vuelidate/src/validators";

export default {
  mixins: [findRoutesRecursive],
  data() {
    return {
      subscribeNewsEmail: "",
      showSuccessSignModal: false,
    }
  },
  validations: {
    subscribeNewsEmail: {
      email,
    },
  },
  watch: {
    subscribeNewsEmail(value) {
      console.log(value);
      if (!value) {
        this.$v.subscribeNewsEmail.$reset();
      }
    },
  },
  methods: {
    handleCloseSuccessSignModal() {
      this.showSuccessSignModal = false;
    },
    async sendSubscribeNewsEmail() {
      if (!this.$v.subscribeNewsEmail.$invalid) {
        try {
          swal.showLoading();
          const result = await api.postSubscribeNewslatterEmail({
            email: this.subscribeNewsEmail,
          });
          if (!result.Error) {
            swal.close();
            this.modalTitle =
              "Thank You For Signing Up To Aslice’s Insider Newsletter";
            this.modalDescription =
              `Please check your spam/promotions/social folder(s) and mark <b>info@aslice.com</b> as a trusted sender. You can also move us into your main inbox so that you don't miss any of our emails in the future.`;
            this.showSuccessSignModal = true;
            this.subscribeNewsEmail = "";
            this.$v.subscribeNewsEmail.$reset();
          } else {
            swal.close();
            this.modalTitle =
              "You’re Already Signed Up To The Newsletter!";
            this.modalDescription =
            `Thank you for your interest in Aslice’s Insider Newsletter. Please check your spam/promotions/social folder(s) and mark <b>info@aslice.com</b> as a trusted sender. You can also move us into your main inbox so that you don't miss any of our emails in the future.`;
            this.showSuccessSignModal = true;
          }
        } catch (error) {
          swal.fire({
            icon: "error",
            text: "Error! Try again latter",
          });
        }
      }
    },
  },
  computed: {
    ...mapState("user", ["data", "isAuthorized"]),
    routes() {
      return this.find((route) => {
        if (this.data?.id) {
          return route.navFooter || route.logout;
        }
        return route.navFooter && !route.isAuthorized;
      });
    },
  },
}
</script>

<style lang="scss" scoped>

.main-page__footer {
    padding: 0px;
    position: relative;
    background: #FEFEFD;
    &__link {
      color: #442671;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 135%;
      font-family: "Roboto-Mono";
    }
    &__social {
      // margin-top: 15px;
      .block-end {
        display: flex;
        justify-content: flex-end;
        a {
          transition: 0.1s;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      a + a {
        margin-left: 20px;
      }
    }
    &__container {
      display: flex;
      justify-content: space-between;
      // *{
      //   flex:1
      // }
      
    }
    &__item {
      padding: 0 23px;
      padding: 0 20px;
      flex: 1;
    }
    .link {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__form {
      h6 {
        color: #442671;
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 20px;
        font-family: "Graphik-Regular-Web";
      }
      form {
        display: flex;
        flex-direction: column;
        label {
          display: block;
          font-size: 9px;
          color: #d6bbfe;
          line-height: 10px;
          margin-bottom: 0px;
          font-family: "Graphik-Regular-Web";
          font-weight: 500;
          letter-spacing: 1.35px;
          text-transform: uppercase;
        }
        button {
          display: flex;
          height: 40px;
          padding: 10px 20px 10px 20px;
          justify-content: center;
          align-items: center;
          border: 1px solid #442671;
          color: #442671;
          max-width: 130px;
          transition: 0.2s;
          border-radius: 50px;
          border: 1px solid #442671;
          text-transform: uppercase;
          letter-spacing: 1.82px;
          background-color: inherit;
          font-family: "Graphik-Regular-Web";
          font-size: 14px;
          &:hover {
            color: #ffffff;
            background: #442671;
          }
        }
        input {
          padding: 0;
          width: 100%;
          height: 36px;
          display: block;
          font-size: 14px;
          color: #442671;
          margin-bottom: 20px;
          font-family: "Roboto-Mono";
          border-bottom: 1px solid #9856fc;
          &::placeholder {
            color: #442671;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 135%;
          }
        }
      }
    }
    &__logo {
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
    }
  }
@media (max-width: 768px){
  .main-page__footer{
      height: auto;
      min-height: unset;
      padding-top: 10px;
      &__container {
        flex-direction: column;
        .main-page__footer__container .main-page__footer__item + .main-page__footer__item{
          border-top: 1px solid #C2C1BF;
          padding: 30px 0;
        }
      }
      &__item{
        padding: 10px 0px 30px;
      }
      .link{
        div + div{
          margin-top: 20px;
        }
      }
      &__form {
        h6 {
          margin-bottom: 20px;
        }
        form {
          display: block;
          input {
            width: 100%;
            display: block;
            margin-bottom: 20px;
          }
          button {
            margin-left: 0px;
            
          }
        }
      }
      &__mob-logo {
        display: block;
        margin: 0px 0px;
      }
      &__logo {
        display: none;
      }
      &__social{
        padding: 30px 0px 10px !important;
        .block-end{
          justify-content: flex-start;
          
        }
      }
    }
    .main-page__footer__container .main-page__footer__item{
      border-left: none;
    }
    .main-page__footer__container .main-page__footer__item + .main-page__footer__item{
      border-top: 1px solid #C2C1BF;
      padding: 30px 0;
    }
}

</style>

<style scoped>
.main-page__footer__container .main-page__footer__item:not(:last-of-type){
  border-right: 1px solid #C2C1BF;
}
@media (max-width: 560px){
    .main-page__screen-3 .block-item:not(:last-of-type){
      padding-bottom: 60px;
    }
    .main-page__screen-3 .block-item:not(:last-of-type)::after{
      content: '';
      position: absolute;
      bottom: 40px;
      height: 1px;
      width: 89%;
      background:#C2C1BF;
    }
    .main-page__footer__container .main-page__footer__item:not(:last-of-type){
      border-right: none;
    }
    .main-page__screen-4 .block-item__gender__pseudo::before { 
      content: '';
      position: absolute;
      height: 1px;
      width: 90%;
      background: #C2C1BF;
      bottom: 40px;
      left: 0;
    }
    .main-page__screen-4 .block-item:nth-last-child(-n+4) .block-item__gender__pseudo::before { 
      content: '';
      position: absolute;
      height: 1px;
      width: 90%;
      background: #C2C1BF;
      bottom: 40px;
      left: 0;
    }
    .main-page__screen-4 .block-item:nth-last-child(-n+1){
      padding: 10px 0px 36px;
    }
    .main-page__screen-4 .block-item:nth-last-child(-n+1) .block-item__gender__pseudo::before { 
      content: none;
    }
}  
</style>