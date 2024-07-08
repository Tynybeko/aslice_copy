<template>
  
  <div class="container-fluid main-page">
    <div class="main-page__block-banner parent-container">
      <div class="parent-container d-flex flex-column align-self-end">
        <div class="mt-auto">
          <div class="d-flex ">
            <p class="button">
              <span>About Us</span>
            </p>
          </div>
          <div class="py-4">
            <h2>
              We Work For 
              <br>
              <span>the Global music community</span>
            </h2>
          </div>
          <p class="">
            Our company was built for artists, by artists. The team behind Aslice represents a diverse cross-section of the electronic music community. From working DJs to music producers, PR and industry professionals, former journalists, and tech experts, we are all united through our common goal of creating a fairer music ecosystem.
          </p>
        </div>
      </div>
    </div>
    <div class="main-page__screen-1 row m-0 p-0">
      <div class="col-12 col-md-6 p-0 d-flex justify-items-center block-img">
        <img 
        src="@/assets/images/info/map.png" 
        alt="image"
        >
      </div>
      <div class="col-12 col-md-6 d-flex flex-column">
        <div class="parent-container d-flex flex-column align-self-end p-md-4 py-4">
          <div class="mt-auto">
            <div class="d-flex ">
              <p class="button">
                <span>vision statement</span>
              </p>
            </div>
            <div class="py-4">
              <h2>
                Reshaping The  
                <br> 
                <span>Music Industry</span>
              </h2>
            </div>
            <p class="">
              Our vision is to help lessen the income disparity between working DJs and the producers whose music they play at paid performances, in order to create a more sustainable music scene that benefits everyone involved – all through the simple act of sharing. To learn more, <a v-aslice-resources-href="'Aslice_Presentation.pdf'"> Download Our Presentation</a>. 
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-page__screen-2 row m-0 py-3 d-block">
      <marquee-text :duration="50">
        <div class="slider-item" v-for="item in sliderPerks" :key="item.id"> 
          <div class="slider-item__block justify-content-center">
            <img src="@/assets/images/info/icon-logo.svg" alt="image">
            <p class="p-0 m-0">{{ item.perk }}</p>
          </div>
        </div>
      </marquee-text>
    </div>
    <div class="main-page__screen-3 row m-0  pb-3">
      <div class="title col-12 text-md-center">
        The Bigger Picture
      </div>
      <div class="row m-0 p-0">
        <div class="col-md-4 col-12 border-right d-flex flex-column block-item px-4">
          <div class="block-item-img">
            <img src="@/assets/images/info/icon-1.svg" alt="icon">
          </div>
          <h3 class="py-4 m-0">Setting A New Precedent</h3>
          <p class="pb-md-0">Aslice can not be compared or categorized alongside traditional collection societies or performance rights organizations (PROs), nor do we seek to replace the current system. Aslice’s innovative technology is a vital source of information for publishers and collection societies around the world. Our service collects highly accurate playlist data – which has traditionally been difficult to obtain in a large sector of the music ecosystem.</p>
        </div>
        <div class="col-md-4 col-12 border-right d-flex flex-column block-item px-4">
          <div class="block-item-img">
            <img src="@/assets/images/info/icon-2.svg" alt="icon">
          </div>
          <h3 class="py-4 m-0">Accuracy Is Key</h3>
          <p class="pb-md-0">Powered by algorithmic analysis, machine-learning technology, and human admin verification, Aslice simplifies playlist reporting with more than +99% accuracy and distributes the shared amount equally to the producers on the playlist. The remaining less than 1% of unmatched earnings in the Aslice system is donated to charitable organizations, voted on by registered Aslice users every year. <router-link :to="{ name: 'The Aslice Foundation' }">Visit The Aslice Foundation</router-link> page to learn how we reinvest into charitable community organizations. </p>
        </div>
        <div class="col-md-4 col-12 d-flex flex-column block-item px-4">
          <div class="block-item-img">
            <img src="@/assets/images/info/icon-3.svg" alt="icon">
          </div>
          <h3 class="py-4 m-0">Equity And Sustainability </h3>
          <p>Earning a living through music production has become a challenge for artists worldwide. The income disparity between working DJs and music producers continues to grow, although both roles depend on each other. Without music makers, there would be no music for our industry to thrive – no labels, no DJ gigs, no festivals, no agencies, no public relations and artist management teams, and no money flowing back to the source. We have created a simple sharing service that creates long-lasting sustainability and equity throughout the entire music industry. </p>
        </div>
      </div>
    </div>
    <div class="main-page__screen-4 row m-0 p-0">
      <div class="title col-12">
        Meet The 
        <br>
        <span>aslice team</span>
      </div>
      <div class="row col-12 px-4 m-0">
        <div v-for="item in infoPost" :key="item.id" class="col-md-3 col-12 block-item">
          <p class="block-item__post m-0">{{ item.post }}</p>
          <p class="block-item__name m-0">{{ item.name }}</p>
          <p class="block-item__gender m-0">{{ item.gender }}</p>
          <span class="block-item__gender__pseudo"></span>
        </div>
      </div>
    </div>
      <Footer> </Footer>
  </div>
</template>
<script>
import Footer from "@/components/FooterNew.vue";
import findRoutesRecursive from "@/mixins/findRoutesRecursive";
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import MarqueeText from 'vue-marquee-text-component';

export default {
  name: "About Us",
  metaInfo: {
    title: "About Us",
    meta: [
      {
        property: "og:description",
        content:
          "Aslice is an innovative software-based service and community platform for international DJs and music producers, offering valuable professional tools for working artists to succeed and support each other – including simple playlist reporting, revenue sharing, track play statistics and insights, digital promo assets, and a community of like-minded artists to connect with. Meet The Aslice Team.",
      },
      {
        name: "description",
        content:
          "Aslice is an innovative software-based service and community platform for international DJs and music producers, offering valuable professional tools for working artists to succeed and support each other – including simple playlist reporting, revenue sharing, track play statistics and insights, digital promo assets, and a community of like-minded artists to connect with. Meet The Aslice Team.",
      },
    ],
  },
  mixins: [findRoutesRecursive],
  components: {
    MarqueeText,
    Footer
  },
  data() {
    return {
      infoPost:[
        {name:'Zak Khutoretsky', post: 'Founder', gender: '(he / him)'},
        {name:'Ethan Holben ', post: 'CEO', gender: '(he / him)'},
        {name:'Sebastian Weiß', post: 'PR & Artist Relations', gender: '(he / him)'},
        {name:'Ben Hribar', post: 'Design Director', gender: '(he / him)'},
        {name:'Celina Dzyacky ', post: 'Digitial Media Director', gender: '(she / her)'}, 
        {name:'Eric Cloutier', post: 'Data Integrity Lead', gender: '(he / him)'}, 
        {name:'Marlene Rietschel ', post: 'Administration', gender: '(she / her)'}, 
        {name:'Nicky Böhm', post: 'Contribution Committee Member', gender: '(she / her)'}, 
        {name:'Eric Dulan ', post: 'Contribution Committee Member', gender: '(he / him)'}, 
        {name:'Susanne Kirchmayr', post: 'Contribution Committee Member', gender: '(she / her)'}, 
        {name:'Alyce Currier', post: 'Contribution Committee Member', gender: '(they / them)'}, 
        {name:'A♭ Minor', post: 'Software Development Team', gender: ''},
      ],
      sliderPerks:[
        {id:1, perk: 'respect'},
        {id:2, perk: 'Equity'},
        {id:3, perk: 'Support'},
        {id:4, perk: 'Community'},
        {id:5, perk: 'Action'},
        {id:6, perk: 'connection'},
        {id:7, perk: 'Inspire'},
      ],
      perks:{
        "dots": false,
        "arrows": false,
        "infinite": true,
        "slidesToShow": 6,
        "slidesToScroll": 1,
        "autoplay": true,
        "speed": 3000,
        "autoplaySpeed": 0,
        "pauseOnHover": false,
        "responsive": [
          {
            "breakpoint": 980,
            "settings": {
              "arrows": false,
              "centerMode": false,
              "infinite": true,
              "slidesToShow": 3,
              "slidesToScroll": 1,
              "autoplay": true,
              "speed": 3000,
              "autoplaySpeed": 0,
              "pauseOnHover": false,
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "arrows": false,
              "infinite": true,
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "autoplay": true,
              "speed": 3000,
              "autoplaySpeed": 0,
              "pauseOnHover": false,
            }
          }
        ]
      },
    };
  },
  mounted() {
    this.$mixpanel.track("About Page Visitor");
  },
};
</script>
<style lang="scss" scoped>
.main-page {
  &__block-banner{
    height: calc(100vh - 57px);
    background-image: url("../assets/images/info/header-banner--about.png");
    background-size: cover;
    background-position: center center;
    padding: 20px;
    width: 100%;
      .parent-container{
        height: 100%;
        .button{
          display: flex;
          padding: 11px 14px 8px;
          align-items: flex-start;
          gap: 10px;
          border-radius: 50px;
          background:  #D6BBFE;
          margin: 0;
          span{
            color:  #442671;
            text-align: center;
            font-family: "Graphik-Medium";
            font-size: 9px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 1.35px;
            text-transform: uppercase;
          }
        }
      }
      h2{
        color: #9856FC;
        font-family: "Graphik-Regular-Web";
        font-size: 95px;
        font-style: normal;
        font-weight: 400;
        line-height: 105%;
        text-transform: capitalize;
        span{
          color: #FEFEFD
        }
      }
      p{
        color: #FEFEFD;
        max-width: 960px;
        font-family: "Graphik-Regular-Web";
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 125% */
      }
  }
  &__screen-1{
    background: #F2F1EF;
    .block-img{
      background: #ffffff;
      img{
        max-width: 100%;
        margin: 0 auto;
      }
    }
    .button{
        display: flex;
        padding: 11px 14px 8px;
        align-items: flex-start;
        gap: 10px;
        border-radius: 50px;
        background:  #D6BBFE;
        margin: 0;
        span{
          color:  #442671;
          text-align: center;
          font-family: "Graphik-Medium";
          font-size: 9px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.35px;
          text-transform: uppercase;
        }
      }
    h2{
      color: #7A45CA;
      font-family: "Graphik-Regular-Web";
      font-size: 48px;
      font-style: normal;
      font-weight: 400;
      line-height: 52px;
      text-transform: capitalize;
      span{
        color: #442671
      }
    }
    p{
      color: #616060;
      font-family: "Roboto-Mono";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 135%;
      a{
        color:#616060;
        text-decoration-line: underline;
      }
    }
  }
  &__screen-2{
    background:#9856FC;
    padding: 0px 45px;
    padding: 0px 0px;
    .slider-item__block{
      display: flex;
      img{
        padding: 0px 25px;
        padding: 0px 27px;
      }
      p{
        color: #442671;
        font-family: "Graphik-Regular-Web";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 42px; /* 131.25% */
        text-transform: capitalize;
      }
    }
    
  }
  &__screen-3{
    .title{
      display: flex;
      justify-content: center;
      padding: 60px 0px;
      color: #442671;
      font-family: "Graphik-Regular-Web";
      font-size: 95px;
      font-style: normal;
      font-weight: 400;
      line-height: 105%; /* 99.75px */
      text-transform: capitalize;
    }
    .border-right{
      border-right:1px solid #C2C1BF!important;
    }
    
    .block-item{
      min-height: 530px;
      .block-item-img{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        width: 75px;
        height: 75px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background:#9856FC;
        border-radius: 150px;
      }
      h3{
        color: #442671;
        font-family: "Graphik-Regular-Web";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 42px; /* 131.25% */
        text-transform: capitalize;
      }
      p{
        align-self: stretch;
        color: #616060;
        font-family: "Roboto-Mono";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 135%; /* 18.9px */
        a{
          color:#616060;
          text-decoration-line: underline;
        }
      }
    }
  }
  &__screen-4{
    background: #F2F1EF;
    .title{
      padding: 20px 20px 30px;
      color: #442671;
      font-family: "Graphik-Regular-Web";
      font-size: 95px;
      font-style: normal;
      font-weight: 400;
      line-height: 105%; /* 99.75px */
      text-transform: capitalize;
      span{
        color: #9856FC;
      }
    }
    .block-item{
      padding: 10px 0px 20px;
      &__post{
        color: #AD78FD;
        font-family: "Graphik-Regular-Web";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 21.6px */
      }
      &__name{
        color:#442671;
        font-family: "Graphik-Regular-Web";
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 125% */
      }
      &__gender{
        color: #AD78FD;
        font-family: "Roboto-Mono";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 133.333% */
        padding-bottom: 20px ;
        display: block;
      }
      
    }
  }
}
@keyframes scrollAnimation {
  0% {
    transform: translateX(0); /* Start at the beginning */
  }
  100% {
    transform: translateX(-100%); /* Scroll to the left -100% */
  }
}
@media (max-width: 768px){
  .main-page {
    &__block-banner{
    height: calc(100vh - 57px);
    background-image: url("../assets/images/info/header-banner--about.png");
    background-size: cover;
    background-position: center center;
    padding: 20px;
    width: 100%;
      .parent-container{
        height: 100%;
        .button{
          display: flex;
          padding: 11px 14px 8px;
          align-items: flex-start;
          gap: 10px;
          border-radius: 50px;
          background:  #D6BBFE;
          span{
            color:  #442671;
            text-align: center;
            font-family: "Graphik-Medium";
            font-size: 9px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 1.35px;
            text-transform: uppercase;
          }
        }
      }
      h2{
        color: #9856FC;
        font-family: "Graphik-Regular-Web";
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 105%;
        text-transform: capitalize;
        span{
          color: #FEFEFD
        }
      }
      p{
        color: #FEFEFD;
        max-width: 960px;
        font-family: "Graphik-Regular-Web";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 112% 
      }
    }
    &__screen-3{
      .block-item{
        min-height: 400px;
        h3{
          font-size: 24px;
        }
      }
      .title{
        justify-content: flex-start;
        font-size: 48px;
        padding: 40px 20px;
      }
    }
    &__screen-4{
      .title{
        font-size: 48px;
      }
      .block-item{
        padding: 10px 0px 40px;
        &__gender::before{
          width: 100%;
        }
      }
    }
  }
}
</style>
<style scoped>
.main-page__screen-4 .block-item__gender__pseudo::before { 
  content: '';
  position: absolute;
  height: 1px;
  width: 90%;
  background: #C2C1BF;
  bottom: 20px;
  left: 0;
}
.main-page__screen-4 .block-item:nth-last-child(-n+4) .block-item__gender__pseudo::before { 
  content: none;
}
.marquee-text-text{
  display: flex;
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