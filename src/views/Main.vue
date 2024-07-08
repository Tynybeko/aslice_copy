<template>
  <div>
    <div class="main-page">
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
      <LoginModal
        :showLoginModal="showLoginModal"
        @onCloseLoginModal="handleCloseLoginModal"
      />
      <b-sidebar id="sidebar-right" right shadow  backdrop backdrop-variant="dark">
        <div id="navigation-elements" class="px-3 py-2">
          <template v-for="option in routes">
            <div 
              :key="option.name"
              v-if="(option.navFooter || option.logout) && (option.isAuthorize ? option.isAuthorized == isAuthorized : true)"
            >
              <b-nav-item
                :to="{ name: option.name }"
                @click="hideShadow(option)"
              >
                {{ option.name }}
              </b-nav-item>
            </div>
          </template>
        </div>
      </b-sidebar>
      <div class="main-page__header">
        <img alt="" src="@/assets/images/logo-beta.svg" />
        <div class="main-page__header__nav">
          <button
            v-if="!isAuthorized"
            class="button btn-login"
            @click="handleShowLoginModal"
          >
            Login
          </button>
          <PrimaryButton v-if="!$device.mobile" @click="scrollToElement('screen-4')">
            Sign up
          </PrimaryButton>
          <div  v-b-toggle.sidebar-right class="navbar-right" style="margin-left: 10px;">
            <svg
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1.28262" x2="20" y2="1.28262" stroke="#442671" />
              <line y1="11.2826" x2="20" y2="11.2826" stroke="#442671" />
            </svg>
          </div>
        </div>
      </div>


      <div ref="screen-1" class="main-page__screen">
        <div class="block-video">
          <video
            src="@/assets/images/main/Aslice_BKG.mp4"
            type="video/mp4"
            autoplay
            muted
            loop
            playsinline
          ></video>
        </div>
        <h1>Creating a Fairer Music Ecosystem</h1>
        <p>
          Aslice is the revolutionary, new software-based service and community platform that allows working DJs to share earnings directly with the music producers they play at paid gigs. 
        </p>
        <button class="button" @click="scrollToElement('screen-4')">
          <span>Sign up</span>
        </button>
        <img
          alt=""
          class="main-page__screen__screens"
          src="@/assets/images/main/Product.png"
        />
      </div>
      <div ref="screen-2" class="main-page__how">
        <div>
          <h2 class="main-page__title">How Aslice works</h2>
        </div>
        <div class="row main-list">
          <div class="col-lg-2 col-md-4 col-sm-12 main-list__item">
            <div class="d-flex">
              <span>1</span>
            </div>
            <img alt="" class="child-image" src="@/assets/images/main/headphones.svg" />
            <p>DJ plays a paid gig/performance</p>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12 main-list__item">
            <div class="d-flex">
              <span>2</span>
            </div>
            <img alt="" class="child-image" src="@/assets/images/main/USB.svg" />
            <p>
              DJ inserts external media (USB) into computer and opens the Aslice Desktop App
            </p>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12 main-list__item">
            <div class="d-flex">
              <span>3</span>
            </div>
            <img alt="" class="child-image" src="@/assets/images/main/playlist.svg" />
            <p>
              DJ imports playlist and enters gig details (additional tracks and/or vinyl records can be manually added)
            </p>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12 main-list__item">
            <div class="d-flex">
              <span>4</span>
            </div>
            <img alt="" class="child-image" src="@/assets/images/main/percent.svg" />
            <p>
              DJ submits playlist and shares a small percentage of gig fee (suggested 5%)
            </p>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12 main-list__item">
            <div class="d-flex">
              <span>5</span>
            </div>
            <img alt="" class="child-image" src="@/assets/images/main/producer.svg" />
            <p>
              Aslice distributes the money shared to producers on the playlist
            </p>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12 main-list__item">
            <div class="d-flex">
              <span>6</span>
            </div>
            <img alt="" class="child-image" src="@/assets/images/main/giving.svg" />
            <p>
              Money allocated for songs not identified gets donated to a charitable organization voted on by Aslice users every year
            </p>
          </div>
        </div>
      </div>
      <div class="block-slider comments">
        <div class="slider-title">
          <h3>
              What the community is saying
          </h3>
        </div>
        <VueSlickCarousel v-bind="settings">
          <div class="slider-item" v-for="item in sliderInfo" :key="item.id">
            <div v-if="$device.mobile" class="block-img" >
              <img :src="require('../assets/images/main/slider/' + item.imageMobile)" alt="image">
            </div>
            <img v-else :src="require('../assets/images/main/slider/' + item.image)" alt="image">
            <div class="block-info">
              <p class="block-info--text">
                “{{item.text}}”
              </p>
              <p class="block-info--name">
                {{item.name}}
              </p>
              <p class="block-info--status">
                ({{item.status}})
              </p>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <div ref="screen-3" class="main-page__second-screen">
        <h2>Empowering <br> Music Makers</h2>
        <p>
          We are presenting Aslice at panels and conferences around the world. Dig deeper into our story and learn how Aslice is actively restructuring how music makers get paid their fair share.
        </p>
        <!-- <img
          src="@/assets/images/white-arrow-down.svg"
          @click="scrollToElement('screen-4')"
        /> -->
        <a
          v-aslice-resources-href="'Aslice_Presentation.pdf'"
          class="button text-decoration-none"
        >
          download our presentation
        </a>
      </div>
      <div class="block-slider featured">
        <div class="slider-title">
          <h3>
            Featured in
          </h3>
        </div>
        <VueSlickCarousel v-bind="settingsFeatured">
          <div class="slider-item" v-for="item in sliderFeatured" :key="item.id">
            <div class="slider-item__block">
              <img :src="require('../assets/images/main/slider/' + item.urlImage)" alt="image">
              <a :href="item.urlRead" target="_blanck"> 
                READ
              </a>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <div ref="screen-4" class="main-page__forms position-relative">
        <span
          class="position-absolute"
          id="sign-up-section"
          style="top: -60px"
        ></span>
        <div>
          <h2 class="main-page__title">Sign Up Now</h2>
          <h4 class="text-bottom__title">Registration Is Free! Join The Community.</h4>
          <p>
            Please select the category that best represents you and provide your email address. If you happen to be both a DJ and a producer, you will have the opportunity to connect both roles after completing the registration process.
          </p>
        </div>
        <div class="row">
          <div
            :class="[
              'main-page__forms__item col-lg-4',
              { 'main-page__forms__item_opened': signupType === SIGN_TYPES.DJ }
            ]"
          >
            <div v-if="signupType !== SIGN_TYPES.DJ" @click="handleSetSignType(SIGN_TYPES.DJ)" class="pointer">
              <div class="main-page__forms__item__row">
                <h5>DJ</h5>
                <img
                  alt=""
                  src="@/assets/images/plus.svg"
                />
              </div>
              <h5 class="subheading">Registration</h5>
              <p>
                I make money from performances. I will be sharing playlists via Aslice. I want to help music creators/producers.
              </p>
            </div>
            <div v-else @click="handleSetSignType(null)" class="pointer">
              <div class="main-page__forms__item__row">
                <h5>DJ</h5>
                <img
                  alt=""
                  src="@/assets/images/cross.svg"
                />
              </div>
              <h5 class="subheading">Registration</h5>
              <p>
                I make money from performances. I will be sharing playlists via Aslice. I want to help music creators/producers.
              </p>
            </div>
            <div class="block-form">
              <form @submit="signup($event, SIGN_TYPES.DJ)">
                <label for="">Email</label>
                <input
                  v-model="form[SIGN_TYPES.DJ]"
                  placeholder="Enter Email"
                  type="email"
                />
                <button class="button">Sign up</button>
              </form>
            </div>
          </div>
          <div
            :class="[
              'main-page__forms__item col-lg-4',
              {
                'main-page__forms__item_opened':
                  signupType === SIGN_TYPES.PRODUCER
              }
            ]"
          >
            <div v-if="signupType !== SIGN_TYPES.PRODUCER" @click="handleSetSignType(SIGN_TYPES.PRODUCER)" class="pointer">
              <div class="main-page__forms__item__row">
                <h5>Music Producer</h5>
                <img
                  alt=""
                  src="@/assets/images/plus.svg"
                />
              </div>
              <h5 class="subheading">Registration</h5>
              <p>
                I produce music, either released or not, and my music gets played by DJs. I want to get unique insights about my track plays.
              </p>
            </div>
            <div v-else @click="handleSetSignType(null)" class="pointer">
              <div class="main-page__forms__item__row">
                <h5>Music Producer</h5>
                <img
                  alt=""
                  src="@/assets/images/cross.svg"
                />
              </div>
              <h5 class="subheading">Registration</h5>
              <p>
                I produce music, either released or not, and my music gets played by DJs. I want to get unique insights about my track plays.
              </p>
            </div>
            <div class="block-form">
              <form @submit="signup($event, SIGN_TYPES.PRODUCER)">
                <label for="">Email</label>
                <input
                  v-model="form[SIGN_TYPES.PRODUCER]"
                  placeholder="Enter Email"
                  type="email"
                />
                <button class="button">Sign up</button>
              </form>
            </div>
          </div>
          <div
            :class="[
              'main-page__forms__item col-lg-4',
              { 'main-page__forms__item_opened': signupType === SIGN_TYPES.FAN }
            ]"
          >
            <div v-if="signupType !== SIGN_TYPES.FAN" @click="handleSetSignType(SIGN_TYPES.FAN)" class="pointer">
              <div class="main-page__forms__item__row">
                <h5>Industry Professional</h5>
                <img
                  v-if="signupType !== SIGN_TYPES.FAN"
                  alt=""
                  src="@/assets/images/plus.svg"
                />
              </div>
              <h5 class="subheading">Registration</h5>
              <p>
                I want access to insights and information about the community of DJs and music producers using Aslice.
              </p>
            </div>
            <div v-else @click="handleSetSignType(null)" class="pointer">
              <div class="main-page__forms__item__row">
                <h5>Industry Professional</h5>
                <img
                  alt=""
                  src="@/assets/images/cross.svg"
                />
              </div>
              <h5 class="subheading">Registration</h5>
              <p>
                I want access to insights and information about the community of DJs and music producers using Aslice.
              </p>
            </div>
            <div class="block-form">
              <form @submit="signup($event, SIGN_TYPES.FAN)">
                <label for="">Email</label>
                <input
                  v-model="form[SIGN_TYPES.FAN]"
                  placeholder="Enter Email"
                  type="email"
                />
                <button class="button">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="block-slider">
        <div class="slider-title">
          <h3>
            our trusted partners
          </h3>
        </div>
        <div class="d-flex block-partners">
          <div v-for="item in trustedPartners" :key="item.id">
            <img :src="require('../assets/images/main/slider/' + item.src)" alt="image">
          </div>
        </div>
      </div> 
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Footer from "@/components/FooterNew";
import api from "@/service/api";
import swal from "sweetalert2";
import LoginModal from "@/components/LoginModal.vue";
import PrimaryButton from "@/components/global/buttons/PrimaryButton.vue";
import { email } from "vuelidate/src/validators";
import findRoutesRecursive from "@/mixins/findRoutesRecursive";
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

const SIGN_TYPES = {
  DJ: "dj",
  FAN: "fan",
  PRODUCER: "producer"
};

const MODAl_TEXTES = {
  [SIGN_TYPES.DJ]: {
    title: "Thank You For <br/>Signing Up",
    description: email => `
    A verification email has been sent to ${email} with instructions on how to register.
    <br/><br/>
    Please check your spam/promotions/social folder(s) and mark info@aslice.com as a trusted sender.
    `
  },
  [SIGN_TYPES.FAN]: {
    title: "Thank you for Signing up As An Industry Professional",
    description: () =>
      "We will reach out to you when the Aslice Professional Page opens to the public."
  },
  [SIGN_TYPES.PRODUCER]: {
    title: "Thank You For <br/>Signing Up",
    description: email => `
    A verification email has been sent to ${email} with instructions on how to register.
    <br/><br/>
    Please check your spam/promotions/social folder(s) and mark info@aslice.com as a trusted sender.
    `
  }
};

export default {
  name: "MainPage",
  metaInfo: {
    title: "Aslice",
    meta: [
      {
        property: "og:description",
        content:
          "Aslice: Creating A Fairer Music Ecosystem | Registration is Free. Sign Up And Join The Community! Aslice is the revolutionary, new software-based service and community platform that allows working DJs to share earnings directly with the music producers they play at paid gigs. Follow us on social media: @asliceofficial"
      },
      {
        name: "description",
        content:
          "Aslice: Creating A Fairer Music Ecosystem | Registration is Free. Sign Up And Join The Community! Aslice is the revolutionary, new software-based service and community platform that allows working DJs to share earnings directly with the music producers they play at paid gigs. Follow us on social media: @asliceofficial"
      }
    ]
  },
  mixins: [findRoutesRecursive],
  components: {
    LoginModal,
    VueSlickCarousel,
    Footer,
    PrimaryButton
  },
  data() {
    return {
      trustedPartners:[
        {id:1, src: 'FATdrop.svg'},
        {id:2, src: 'TRAKTOR.svg'},
        {id:3, src: 'Beatport.svg'},
        {id:8, src:'Support_the_sound.svg'},
        {id:4, src: 'Warehouse.svg'},
        {id:5, src: 'Buma_Stemra.svg'},
        {id:6, src: 'Socan.svg'},
        {id:7, src: 'AFEM.svg'},
      ],
      sliderInfo:[
        {
          id:1,
          image: 'Waajeed.jpg',
          imageMobile: 'Waajeed.jpg',
          text: 'Equity in action.',
          name: 'Waajeed',
          status: 'DJ, Producer'
        },
        {
          id:2,
          image: 'Nastia.jpg',
          imageMobile: 'slide1_2.png',
          text: 'Gratitude and recognition – this is my motivation to share my funds via Aslice with artists who deserve to be paid. Who and where would I be without the producers?',
          name: 'Nastia',
          status: 'DJ'
        },
        {
          id:3,
          image: 'Richie_Hawtin.jpg',
          imageMobile: 'slide1_3.png',
          text: 'Aslice is one of the most important, exciting, and altruistic projects our scene has ever seen! It shines a light on the disparity in economics between producers and DJs and recognizes the intrinsic value music has for every performance.',
          name: 'Richie Hawtin',
          status: 'DJ, Producer'
        },
        {
          id:4,
          image: 'Mina.jpg',
          imageMobile: 'slide1_4.png',
          text: "Many touring DJs make a large amount of money playing other people's music. I would encourage producers and DJs around the world to sign up.",
          name: 'Mina',
          status: 'DJ, Producer'
        },
        {
          id:5,
          image: 'James_Ruskin.jpg',
          imageMobile: 'slide1_5.png',
          text: 'Aslice sends a strong message to the next generation of producers and DJs about the strength of the community.',
          name: 'James Ruskin',
          status: 'DJ, Producer'
        },
        {
          id:6,
          image: 'Lindsey_Herbert.jpg',
          imageMobile: 'slide1_6.png',
          text: 'It feels good to be part of the solution, being able to give back, give recognition to, and hopefully inspire the artists whose music we play.',
          name: 'Lindsey Herbert',
          status: 'DJ, Producer'
        },
        {
          id:7,
          image: 'MARRØN.jpg',
          imageMobile: 'slide1_7.png',
          text: 'Aslice is the key to bringing the music industry back to the straight out of passion mentality.',
          name: 'MARRØN',
          status: 'DJ'
        },
        {
          id:8,
          image: 'JakoJako.jpg',
          imageMobile: 'slide1_8.png',
          text: 'What I love about Aslice is that it has opened up a meaningful feedback loop between producers and DJs.',
          name: 'JakoJako',
          status: 'DJ, Producer'
        },
        {
          id:9,
          image: 'Gerd_Janson.jpg',
          imageMobile: 'slide1_9.png',
          text: 'There wouldn’t be DJs without music – and the people who make it.',
          name: 'Gerd Janson',
          status: 'DJ, Producer'
        },
        {
          id:10,
          image: 'A.mo.jpg',
          imageMobile: 'slide1_10.png',
          text: "I'm far from earning big fees, but I believe that any DJ who is paid for playing other people`s music should pay back.",
          name: 'A.mo',
          status: 'DJ'
        }
      ],
      sliderFeatured:[
        {
          id: 4,
          urlImage: 'image4.svg',
          urlRead: 'https://pitchfork.com/thepitch/inside-the-fight-to-fix-economic-inequality-in-dj-culture/',
        },
        {
          id: 1,
          urlImage: 'image1.png',
          urlRead: 'https://ra.co/news/77033',
        },
        {
          id: 5,
          urlImage: 'image5.svg',
          urlRead: 'https://djmag.com/features/aslice-wants-fix-imbalance-between-dj-and-producer-incomes-heres-how-it-works',
        },
        {
          id: 11,
          urlImage: 'image11.svg',
          urlRead: 'https://www.tagesspiegel.de/berlin/berliner-wirtschaft/techno-produzenten-fairer-entlohnen-wie-ein-start-up-aus-der-berliner-technoszene-wachst-10637059.html',
        },
        {
          id: 3,
          urlImage: 'image3.svg',
          urlRead: 'https://xlr8r.com/news/dvs1-launches-software-to-enable-djs-to-donate-percentage-of-gig-fees-to-producers/',
        },
        {
          id: 2,
          urlImage: 'image2.png',
          urlRead: 'https://mixmag.net/read/new-service-aslice-aims-to-create-a-fairer-ecosystem-between-djs-and-producers-news',
        },
        {
          id: 6,
          urlImage: 'image6.png',
          urlRead: 'https://groove.de/2022/03/29/dj-gagen-dvs1-startet-plattform-aslice-zu-umverteilung-an-produzentinnen',
        },
        {
          id: 7,
          urlImage: 'image7.svg',
          urlRead: 'https://www.musicradar.com/news/aslice-software-tool-electronic-music-producers-get-paid',
        },
        {
          id: 8,
          urlImage: 'image8.png',
          urlRead: 'https://www.attackmagazine.com/features/long-read/aslice-can-an-altruistic-dj-payment-program-work/',
        },
        {
          id: 9,
          urlImage: 'image9.svg',
          urlRead: 'https://crackmagazine.net/article/profiles/with-aslice-dvs1-is-addressing-the-pay-gap-between-djs-and-producers/',
        },
        {
          id: 10,
          urlImage: 'image10.svg',
          urlRead: 'https://inverted-audio.com/tech/dvs1-launches-aslice/',
        }
      ],
      settings:{
        "dots": true,
        "centerMode": true,
        "centerPadding": "25%",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 1,
        "speed": 500,
        "adaptiveHeight": false,
        "responsive": [
          {
            "breakpoint": 980,
            "settings": {
              "arrows": false,
              "centerMode": false,
              "slidesToShow": 1,
              "slidesToScroll": 1,
              // "adaptiveHeight": true
            }
          }
        ]
      },
      settingsFeatured:{
        "dots": true,
        "focusOnSelect": true,
        "speed": 500,
        "slidesToShow": 5,
        "slidesToScroll": 5,
        "touchThreshold": 5,
        "responsive": [
        {
            "breakpoint": 1200,
            "settings": {
              "arrows": true,
              "centerMode": true,
              "slidesToShow": 3,
              "slidesToScroll": 3,
              // "adaptiveHeight": true
            }
          },
          {
            "breakpoint": 780,
            "settings": {
              "arrows": false,
              "centerMode": false,
              "slidesToShow": 1,
              "slidesToScroll": 1,
              // "adaptiveHeight": true
            }
          }
        ]
      },
      SIGN_TYPES,
      signupType: null,
      showSuccessSignModal: false,
      form: {
        [SIGN_TYPES.DJ]: "",
        [SIGN_TYPES.FAN]: "",
        [SIGN_TYPES.PRODUCER]: ""
      },

      subscribeNewsEmail: "",
      modalTitle: "",
      modalDescription: "",
      showLoginModal: false,
    };
  },
  computed: {
    ...mapState("user", ["data", "isAuthorized"]),
    routes() {
      return this.find(route => {
        if (this.data?.id) {
          return route.navFooter || route.logout;
        }
        return route.navFooter && !route.isAuthorized;
      });
    },
  },
  validations: {
    subscribeNewsEmail: {
      email
    }
  },
  watch: {
    subscribeNewsEmail(value) {
      console.log(value);
      if (!value) {
        this.$v.subscribeNewsEmail.$reset();
      }
    }
  },
  methods: {
    ...mapActions("app", ["hideBackground"]),
    handleShowLoginModal() {
      this.showLoginModal = true;
    },
    handleCloseLoginModal() {
      this.showLoginModal = false;
    },
    async Logout() {
      await this.$store.dispatch("user/logout");
      this.$store.commit("djdashboard/clearAllData");
    },
    hideShadow(option) {
      this.hideBackground("false");
      if (option.logout) {
        this.Logout();
      }
    },
    handleCloseSuccessSignModal() {
      this.showSuccessSignModal = false;
    },
    scrollToElement(ref) {
      if (this.$refs[ref]) {
        const y = this.$refs[ref].offsetTop - 60;
        window.scroll({
          top: y,
          behavior: "smooth"
        });
      }
    },
    handleSetSignType(type) {
      if(this.signupType === null && type !== null){
        this.signupType = type
      }else if(this.signupType !== null && type !== null){
        this.signupType = null
        this.signupType = type
      }else{
        this.signupType = null
      }
    },
    signup(event, role) {
      event.preventDefault();
      swal.showLoading();
      api
        .authSignup({ email: this.form[role], role })
        .then(res => {
          if (res.Error) {
            swal.close();
            if((res.Error === "User with that email already exists" || res.Error === "You've already in fan's waiting list") && role === 'fan'){
              this.modalTitle =
                "You’re Already Signed Up!";
              this.modalDescription =
                "Thank you for your interest in the upcoming Industry Professionals Page. We will reach out to you when this section is open to the public.";
              this.showSuccessSignModal = true;
            }else if(res.Error === "User with that email already exists" && role === 'dj'){
              this.modalTitle =
                "You’re Already Signed Up!";
              this.modalDescription =
                "A user with that email is already in our system. Please <b>log in</b> or <b>complete registration</b> via the confirmation link provided to your email address. <br><br> Please check your spam/promotions/social folder(s) and mark info@aslice.com as a trusted sender.<br><br> For Tech Support: info@aslice.com";
                this.showSuccessSignModal = true;
            }else if(res.Error === "User with that email already exists" && role === 'producer'){
              this.modalTitle =
                "You’re Already Signed Up!";
              this.modalDescription =
                "A user with that email is already in our system. Please <b>log in</b> or <b>complete registration</b> via the confirmation link provided to your email address. <br><br> Please check your spam/promotions/social folder(s) and mark info@aslice.com as a trusted sender.<br><br> For Tech Support: info@aslice.com";
                this.showSuccessSignModal = true;
            }else{
              const error = res.Error
              swal.fire({
                icon: "error",
                text: error
              });
            }
          } else {
            swal.close();
            this.modalTitle = MODAl_TEXTES[role].title;
            this.modalDescription = MODAl_TEXTES[role].description(
              this.form[role]
            );
            this.showSuccessSignModal = true;
            this.form[role] = "";
          }
        })
        .catch(err => {
          swal.close();
          console.log(err);
        });
    },
    async sendSubscribeNewsEmail() {
      if (!this.$v.subscribeNewsEmail.$invalid) {
        try {
          swal.showLoading();
          const result = await api.postSubscribeNewslatterEmail({
            email: this.subscribeNewsEmail
          });
          if (!result.Error) {
            swal.close();
            this.modalTitle =
              "Thank you for signing up to aslice’s Insider newsletter";
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
            text: "Error! Try again latter"
          });
        }
      }
    }
  },
  mounted() {
    if (
      this.$route.query &&
      this.$route.query.id &&
      this.$route.query.access_token
    ) {
      this.$bvModal.show("restore-modal");
    }
    this.$mixpanel.track('Main Page Visitor');
  },
};
</script>

<style lang="scss" scoped>
// slider

.block-slider{
  background: #F2F1EF;
  .block-partners{
    display: flex!important;
    justify-content: space-around;
    align-items: center;
    padding: 40px 0px 60px;
    opacity: 0.5;
    flex-wrap: wrap;
    div{
      padding: 30px 15px;
    }
  }
  .slick-slider{
    padding: 0px 0 31px;
  }
  .slider-title{
    display: flex;
    padding: 20px 0 10px;
    align-items: center;
    gap: 10px;
    justify-content: center;
    h3{
      font-family: "Graphik-Medium" !important ;
      border-radius: 50px;
      background: #D6BBFE;
      color: #442671;
      text-align: center;
      font-size: 9px;
      padding: 10px 14px 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.35px;
      text-transform: uppercase;
      margin: 0;
    } 
  }
  .slider-item{
    display: flex !important;
    align-items:center;
    background: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 10px 7px 25px 5px rgba(0, 0, 0, 0.10);
    width: 100%;
    max-width: 570px;
    margin: 0 auto;
    
    .block-info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      &--text{
        font-family: "Graphik-Regular-Web";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        color:#442671;
        margin-bottom: 10px;
      }
      &--name{
        font-family: "Graphik-Regular-Web";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        color: #9856FC;
        // text-transform: capitalize;
        margin-bottom: 0;
      }
      &--status{
        font-family: "Roboto-Mono";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        margin-bottom: 0;
        color:#91918F;
      }
    }
  }
}

.button {
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  color: #442671;
  border-radius: 50px;
  letter-spacing: 0.13em;
  background: transparent;
  text-transform: uppercase;
  border: 1px solid #442671;
  font-family: "Graphik-Regular-Web";
  display: flex;
  align-items: center;
}

.btn-login{
  background: #ffffff;
    color: #442671;
  margin-left: 10px;
  transition: .2s;
  &:hover{
    background: #442671;
    color: #ffffff;
  }
}

.main-page {
  
  &__title {
    font-size: 98px;
    color: #442671;
    line-height: 110px;
    font-family: "Graphik-Regular-Web", serif;
    margin-bottom: 20px;
    font-weight: 400;
    text-transform: capitalize;
  }

  &__header {
    top: 0px;
    left: 0px;
    z-index: 2;
    width: 100%;
    height: 60px;
    display: flex;
    padding: 0 20px;
    position: fixed;
    align-items: center;
    background: #fcfbf9;
    justify-content: space-between;

    &__nav {
      display: flex;
      align-items: center;
    }
  }

  &__burger {
    width: 20px;
    height: 10px;
    cursor: pointer;
    margin-left: 20px;
    border-top: 1px solid #442671;
    border-bottom: 1px solid #442671;
  }

  &__screen {
    margin-top: 60px;
    position: relative;
    height: calc(100vh - 60px);
    background-size: cover;
    height: 100%;
    .block-video{
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 80%;
      overflow: hidden;
      video{
        position: relative;
        z-index: 1;
        width: 100%;
      }
    }
    h1 {
      margin: 0;
      color: #ffffff;
      font-family: "Graphik-Regular-Web";
      font-size: 95px;
      line-height: 112%;
      position: relative;
      text-transform: capitalize;
      z-index: 1;
      padding: 20px;
      max-width: 1560px;
    }

    p {
      font-family: "Graphik-Regular-Web";
      margin: 0 0 35px;
      max-width: 940px;
      position: relative;
      color: #C19AFD;
      z-index: 1;
      padding: 0px 20px;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
    }
    button {
      height: 78px;
      color: #ffffff;
      background:rgba(152, 86, 252, 1);
      justify-content: center;
      position: relative;
      // top:45%;
      z-index: 1;
      margin: 15px 20px;
      transition: .3s; 
      padding: 30px 60px 28px;
      &:hover{
        background:rgba(173, 120, 253, 1);
        box-shadow: 15px 10px 30px 5px rgba(0, 0, 0, 0.10);
      }
      span{
        font-size: 18px;
      }
    }
    img {
      cursor: pointer;
      display: block;
      margin-top: -100px;
      position: relative;
      width: 100%;
    }

    &__screens {
      margin: 0;
      text-align: center;
      // right: 0px;
      // bottom: 0px;
      cursor: default !important;
      pointer-events: none;
      position: relative;
      z-index: 1;
      // top: 50%;
    }
  }

  &__how {
    display: flex;
    flex-direction: column;
    // height: calc(100vh - 60px);
    padding: 20px 20px 0px 20px;
    // margin-top: 10%;
    h2{
      text-align: center;
      font-size: 95px;
    }
    p {
      max-width: 450px;
      color: #75707b;
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 20px;
    }
  }

  .main-list {
    flex-grow: 1;
    align-items: stretch;
    margin: 70px -20px 0px -20px;

    &__item {
      // padding: 20px;
      margin-bottom: 20px;
      max-height: 375px;
      span {
        font-family: "Graphik-Regular-Web";
        background:rgba(152, 86, 252, 1);
        color: #ffffff;
        display: flex;
        width: 40px;
        height: 40px;
        padding: 10px;
        border-radius: 50%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
      }
      .child-image{
        margin-top: 60px;
      }

      p {
        font-family: "Roboto-Mono";
        margin-top: 60px;
        color: #616060;
        font-size: 14px;
        line-height: 135%;
        // margin: 40px 0px 0px 0px;
      }
    }

    .main-list__item + .main-list__item {
      border-left: 1px solid #aaa3b1;
    }
  }

  &__second-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
    height: calc(100vh - 60px);
    background: url("../assets/images/Presentation.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    h2 {
      color: #fff;
      font-size: 98px;
      line-height: 110px;
      font-family: "Graphik-Regular-Web";
      text-transform: capitalize;
      text-align:center
    }

    p {
      margin: 20px 0px;
      font-size: 14px;
      max-width: 600px;
      line-height: 135%;
      color: #f2f1ef;
      text-align: center;
      font-family: "Roboto-Mono";
    }

    .button {
      top: 50%;
      left: 50%;
      height: 78px;
      color: #fff;
      padding: 0px 60px;
      border-color: #fff;
      justify-content: center;
      margin: 15px 10px;
      font-family: "Graphik-Regular-Web";
      font-size: 18px;
      transition: .2s;
    }

    img {
      cursor: pointer;
    }
  }

  &__forms {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #442671;
    // height: calc(100vh - 60px);
    .main-page__title{
      color: #FEFEFD;
    }
    .text-bottom__title{
      font-family: "Graphik-Regular-Web";
      color:#9856FC;
      margin-bottom: 20px;
      font-size: 24px;
    }
    p {
      font-family: "Roboto-Mono";
      font-size: 14px;
      color: #FEFEFD;
      line-height: 135%;
      max-width: 687px;
      margin-bottom: 20px;
    }

    img {
      cursor: pointer;
    }

    .row {
      flex-grow: 1;
    }

    &__item {
      height: 100%;
      padding: 20px 20px 80px;
      min-height: 450px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div{
        h5 {
          color: #FEFEFD;
          font-size: 32px;
          font-style: normal;
          font-weight: 400;
          line-height: 42px;
          text-transform: capitalize;
          // margin-bottom: 20px;
        } 

        p {
          max-width: 100%;
          font-size: 14px;
          line-height: 135%;
          min-height: 48px;
          font-family: "Roboto-Mono";
          margin-bottom: 40px;
        }
      }
      .subheading{
        color: #9856FC;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 42px;
        text-transform: capitalize;
        margin-bottom: 20px;
      }

      .block-form{
        position: relative;
        max-width: 100%;
        height: 100%;
        min-height: 135px;
        bottom: 0;
        form{
          position: absolute;
          width: 100%;
          // bottom: -130px;
          label {
            display: block;
            font-size: 9px;
            color: #D6BBFE;
            line-height: 10px;
            margin-bottom: 0px;
            font-family: "Graphik-Regular-Web";
            font-weight: 500;
            letter-spacing: 1.35px;
            text-transform: uppercase;
          }

          input {
            padding: 0;
            width: 100%;
            height: 36px;
            display: block;
            font-size: 14px;
            color: #FEFEFD;
            margin-bottom: 40px;
            font-family: "Roboto-Mono";
            border-bottom: 1px solid #9856FC;
            &::placeholder{
              color: #FEFEFD;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 135%;
            }
          }
        }
      }
      
      button{
        display: flex;
        height: 40px;
        padding: 10px 20px 10px 20px;
        justify-content: center;
        align-items: center;
        border: 1px solid #FEFEFD;
        color: #FEFEFD;
        transition: .2s;
      }
      &__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h5{
          color: #FEFEFD;
          font-size: 32px;
          font-style: normal;
          font-weight: 400;
          line-height: 42px;
          text-transform: capitalize;
          margin-bottom: 0px;
        }
        img {
          display: none;
        }
      }
    }

    .main-page__forms__item + .main-page__forms__item {
      border-left: 1px solid #9856FC;
    }
  }

  &__footer {
    padding: 20px;
    position: relative;
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
      .block-end{
        display: flex;
        justify-content: flex-end;
        a{
          transition: .1s;
          &:hover{
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
      .main-page__footer__item + .main-page__footer__item {
        border-left: 1px solid #C2C1BF;
        
      }
    }
    &__item{
      padding: 0 20px;
      flex:1
    }
    .link{
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
        
        label{
          display: block;
          font-size: 9px;
          color: #D6BBFE;
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
          transition: .2s;
          &:hover{
            color: #ffffff;
            background: #442671
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
          border-bottom: 1px solid #9856FC;
          &::placeholder{
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
}

@media (max-width: 1440px){
  .main-page__screen__screens{
    width: 100%;
  }
}
@media (max-width: 1350px) {
  .main-page {
    &__forms__item{
      padding:20px 20px 60px
    }
    &__screen {
      h1 {
        font-size: 80px;
        line-height: normal;
      }
      img{
        margin-top: 0;
      }
    }
  }
  .main-page__screen__screens{
  }
}
@media (max-width: 1180px){

  .main-page{
    &__forms__item{
      padding:20px 20px 40px
    }
  }
}
@media (max-width: 992px) {
  .main-page {
    &__how {
      height: auto;
      min-height: unset;
      margin-bottom: 0px;
    }

    &__forms {
      height: auto;
      min-height: unset;
      padding-bottom: 0px;

      .row {
        flex-grow: unset;
        margin: 20px -20px 0px -20px;
      }

      &__item {
        height: 120px;
        min-height: 120px;
        overflow: hidden;
        padding-bottom: 50px;
        border-top: 1px solid #aaa3b1;
        .pointer{
          cursor:pointer
        }

        &_opened {
          height: auto;
        }

        &__row {
          position: relative;
          img {
            display: block;
            position: absolute;
            right: 0px;
            top: 32px;
          }
        }

        input {
          font-size: 12px !important;
        }
      }

      .main-page__forms__item + .main-page__forms__item {
        border-left: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .main-page {
    &__title {
      font-size: 48px;
      line-height: 58px;
    }

    &__screen {
      height: 100%;
      min-height: unset;
      padding-bottom: 0px;
      background-position: left top;
      .block-video{
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 80%;
        overflow: hidden;
        video{
          position: relative;
          z-index: 1;
          width: auto;
        }
      }
      h1 {
        font-size: 48px;
        line-height: 50px;
        text-align: left;
      }

      p {
        margin:  0px;
        font-size: 18px;
        line-height: 120%;
        padding: 0 20px;
      }
      button{
        margin: 20px 20px;
      }
      img {
        margin-top: 10px;
        margin-bottom: -50px;
      }

      &__screens {
        // position: static;
        // margin-left: 20px;
        margin-bottom: 0px !important;
      }
    }

    .main-list {
      margin: 20px 0px 0px 0px;

      .main-list__item {
        height: auto;
        min-height: auto;
        margin-bottom: 0px;
        padding: 0;
        span {
          margin-bottom: 0px;
        }
        img{
          margin-top: 20px;
        }
        p {
          margin-top: 20px;
        }
      }

      .main-list__item + .main-list__item {
        border-left: none;
        border-top: 1px solid #aaa3b1;
        padding-top: 10px;
      }
    }

    &__second-screen {
      height: auto;
      min-height: unset;
      padding-bottom: 40px;

      h2 {
        margin: 0;
        font-size: 48px;
        line-height: 58px;
      }
      p{
        margin: 40px 0px 0px;
      }
      .button {
        width: 100%;
        max-width: 255px;
        padding: 30px 20px;
        text-align: center;
        position: static;
        transform: none;
        margin-top: 50px;
      }
    }
    .block-slider{
      .block-partners{
        padding: 0;
        div{
          padding: 15px 15px;
        }
      }
    } 
    &__footer {
      height: auto;
      min-height: unset;
      padding-top: 10px;

      &__container {
        flex-direction: column;
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
  .main-page__screen__screens{
  }
  .main-page__how{
    h2{
      font-size: 48px;
    }
  }
  
}

@media (max-width: 500px) {
  .main-page {
    &__screen {
      button {
        // width: 100%;
      }
    }
    &__forms{
      &__item{
        height: 100px;
        min-height: 100px;
        .subheading{
          font-size: 24px;
          line-height: 30px;
          
        }
        div{
          h5{
            font-size: 24px;
            line-height: 30px;
          }
        }
        &_opened{
          height:auto;
        }
        &__row {
          position: relative;
          img {
            display: block;
            position: absolute;
            right: 0px;
            top: 20px;
          }
        }
      }
    }
  }
  .block-slider{
    .slider-item{
      flex-direction: column;
      max-width: 340px;
      align-items: flex-start;
      min-height: 540px;
      .block-info{
        justify-content: center;
        flex-grow: 1;
      }
    }
  } 
}

@media (min-width: 992px) and (max-height: 775px) {
  .main-page {
    &__screen,
    &__second-screen,
    &__forms{
      min-height: 775px;
    }
  }
}

@media (min-width: 768px) and (max-width: 992px) and (max-height: 775px) {
  .main-page {
    &__screen {
      height: auto;
      padding-bottom: 0px;

      img {
        margin-bottom: -50px;
      }

      &__screens {
        position: static;
        margin-left: 20px;
        margin-bottom: 0px !important;
      }
    }

    &__second-screen {
      min-height: 600px;
    }
  }
}
@media (max-width: 375px){
  .main-page {
    &__title {
      font-size: 48px;
      line-height: 58px;
    }

    &__screen {
      height: 100%;
      min-height: unset;
      padding-bottom: 0px;
      background-position: left top;
      .block-video{
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 80.6%;
        overflow: hidden;
        video{
          position: relative;
          z-index: 1;
          width: auto;
        }
      }
      h1 {
        font-size: 48px;
        line-height: 50px;
        text-align: left;
      }

      p {
        margin:  0px;
        font-size: 18px;
        line-height: 120%;
        padding: 0 20px;
      }
      button{
        height: 70px;
        margin: 20px 20px;
        padding: 30px 50px 30px;
      }
      img {
        margin-top: 10px;
        margin-bottom: -50px;
      }

      &__screens {
        // position: static;
        // margin-left: 20px;
        margin-bottom: 0px !important;
      }
    }

    .main-list {
      margin: 20px 0px 0px 0px;

      .main-list__item {
        height: auto;
        min-height: auto;
        margin-bottom: 0px;
        padding: 0;
        span {
          margin-bottom: 0px;
        }
        img{
          margin-top: 20px;
        }
        p {
          margin-top: 20px;
        }
      }

      .main-list__item + .main-list__item {
        border-left: none;
        border-top: 1px solid #aaa3b1;
        padding-top: 10px;
      }
    }

    &__second-screen {
      height: auto;
      min-height: unset;
      padding-bottom: 40px;

      h2 {
        margin: 0;
        font-size: 48px;
        line-height: 58px;
      }
      p{
        margin: 40px 0px 0px;
      }
      .button {
        width: 100%;
        max-width: 255px;
        padding: 30px 20px;
        text-align: center;
        position: static;
        transform: none;
        margin-top: 50px;
      }
    }
    .block-slider{
      .block-partners{
        padding: 0;
        div{
          padding: 15px 15px;
        }
      }
    } 
    &__footer {
      height: auto;
      min-height: unset;
      padding-top: 10px;

      &__container {
        flex-direction: column;
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
}
@media (max-width: 370px){
  .main-page {
    &__title {
      font-size: 48px;
      line-height: 58px;
    }

    &__screen {
      height: 100%;
      min-height: unset;
      padding-bottom: 0px;
      background-position: left top;
      .block-video{
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 82%;
        overflow: hidden;
        video{
          position: relative;
          z-index: 1;
          width: auto;
        }
      }
      h1 {
        font-size: 48px;
        line-height: 50px;
        text-align: left;
      }

      p {
        margin:  0px;
        font-size: 18px;
        line-height: 120%;
        padding: 0 20px;
      }
      button{
        height: 70px;
        margin: 20px 20px;
        padding: 25px 45px 25px;
      }
      img {
        margin-top: 10px;
        margin-bottom: -50px;
      }

      &__screens {
        // position: static;
        // margin-left: 20px;
        margin-bottom: 0px !important;
      }
    }

    .main-list {
      margin: 20px 0px 0px 0px;

      .main-list__item {
        height: auto;
        min-height: auto;
        margin-bottom: 0px;
        padding: 0;
        span {
          margin-bottom: 0px;
        }
        img{
          margin-top: 20px;
        }
        p {
          margin-top: 20px;
        }
      }

      .main-list__item + .main-list__item {
        border-left: none;
        border-top: 1px solid #aaa3b1;
        padding-top: 10px;
      }
    }

    &__second-screen {
      height: auto;
      min-height: unset;
      padding-bottom: 40px;

      h2 {
        margin: 0;
        font-size: 48px;
        line-height: 58px;
      }
      p{
        margin: 40px 0px 0px;
      }
      .button {
        width: 100%;
        max-width: 255px;
        padding: 30px 20px;
        text-align: center;
        position: static;
        transform: none;
        margin-top: 50px;
      }
    }
    .block-slider{
      .block-partners{
        padding: 0;
        div{
          padding: 15px 15px;
        }
      }
    } 
    &__footer {
      height: auto;
      min-height: unset;
      padding-top: 10px;

      &__container {
        flex-direction: column;
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
}

</style>

<style lang="css">
.block-slider.featured .slick-list{
  max-width: 1200px!important;
  margin: 0 auto !important;
}
.default-modal__container h2{
  text-transform: capitalize;
}
  .block-slider.comments .slick-slide{
    opacity: 0.5;
    transition: .3s;
  }
  .block-slider.comments .slick-slide.slick-active{
    opacity: 1;
  }
  .block-slider .slick-prev{
    left: 23%!important;
    top: calc(50% - 17px)!important;
    transition: .1s;
  }
  .block-slider .slick-next{
    right: 23%!important;
    top: calc(50% - 17px)!important;
  }
  .block-slider .slick-prev:hover, .block-slider .slick-next:hover{
    background:#EADDFE!important;
    border: 1px solid #442671 !important;
    
  }
  .block-slider .slick-prev:hover::before, .block-slider .slick-next:hover::before{
    color: #442671 !important;
  }
  
  .block-slider .slick-dots{
    bottom: 15px !important;
  }
  .block-slider .slick-dots li{
    margin: 0 -2px !important;
  }
  .block-slider .slick-dots li button:before{
    font-size: 7px !important;
  }
  .block-slider .slick-initialized .slick-slide {
    min-height: 310px !important;
    padding-top: 20px !important;
  }
  .block-slider.featured .slick-slider{
    padding: 0px 0 10px;
  }
  .block-slider.featured .slick-initialized .slick-slide{
    /* min-height: 200px !important;
    max-height: 200px !important; */
    /* max-width: 200px; */
    padding-top: 0px !important;
    min-height: auto!important;
  }
  .block-slider.featured .slick-initialized .slick-slide .slider-item{
    background: none;
    flex-direction: column;
    align-items:center;
    justify-items: center;
    min-height: 245px !important;
    box-shadow:none
  }
  .block-slider.featured .slider-title{
    padding: 20px 0 58px;
  }
  .block-slider.featured .slick-initialized .slick-track{
    margin-bottom: 58px;
  }
  .block-slider.featured .slick-initialized .slick-slide .slider-item .slider-item__block{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    height: 200px !important;
    width: 200px;
    position: relative;
    top: 15px;
    right: 10px;
    /* box-shadow: 8px 8px 30px 5px rgba(0, 0, 0, 0.10); */
  }
  .block-slider.featured .slick-initialized .slick-slide .slider-item .slider-item__block:hover{
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 8px 8px 30px 5px rgba(0, 0, 0, 0.10);
  }
  .block-slider.featured .slick-initialized .slick-slide .slider-item .slider-item__block img{
    margin-top: -50px;
  }
  .block-slider.featured .slick-initialized .slick-slide .slider-item .slider-item__block a{
    font-family: "Graphik-Regular-Web";
    color:#442671;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.82px;
    line-height: 20px;
    padding: 20px 10px;
    position: absolute;
    margin: 0 auto;
    width: 100%;
    bottom: 30px;
  }
  .block-slider.featured .slick-dots{
    bottom: 20px !important;
  }
  .block-slider.featured .slick-next{
    right: 40px!important;
    top: calc(50% - 51px)!important;
  }
  .block-slider.featured .slick-prev{
    left: 40px!important;
    top: calc(50% - 51px)!important;
  }
  .main-page__forms__item button:hover, .main-page__second-screen .button:hover{
    border-color: #442671;
    color: #442671;
    background: #EADDFE;
  }

  @media (max-width: 575px){
    .block-slider .slick-initialized .slick-slide {
      min-height: 575px !important;
      padding-top: 10px !important;
      /* top: 10px; */
      position: relative;
    }
    .slick-list, .slick-track, .vue-slides, .slick-track div {
      /* height: auto !important; */
    }
    .block-slider .slick-slider{
        padding: 0px 0 35px !important;
      }
    .block-slider  .slick-dots {
      bottom: 15px !important;
    }
    .block-img{
      width: 360px;
      height: 260px;
      overflow: hidden;
      display: block;
    }
    .slick-slide img {
      width: 100%;
      object-fit: contain;
    }
    .block-slider.featured .slick-slide img {
      width: auto;
      
    }
    .block-slider.featured .slider-title{
      padding: 20px 0 30px;
    }
    .block-slider.featured .slick-initialized .slick-track{
      margin-bottom: 20px;
    }
    .block-slider.featured .slick-slider{
      padding: 0px 0 25px !important;
    }
    .block-slider.featured .slick-initialized .slick-slide .slider-item{
      height: 225px !important;
    }
    .block-slider.featured .slick-initialized .slick-slide{
      padding-top: 0px !important;
    }
    .block-slider.featured .slick-initialized .slick-slide .slider-item .slider-item__block a{
      bottom: 0px;
    }
  }
  .slick-slide img[data-v-e4caeaf8] {
    display: block;
    max-width: 190px;
    height: auto;
  }
  @media (max-width: 768px){
    .slick-slide img[data-v-e4caeaf8] {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
</style>


