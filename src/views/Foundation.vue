<template>
  <div class="container-fluid main-page">
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
    <div class="main-page__screen-1">
      <div class="row p-0 m-0">
        <div class="col-md-9 col-12 d-flex flex-column align-items-center justify-content-center block-banner">
          <div class="d-flex">
            <p class="button m-0">
              <span>the aslice foundation</span>
            </p>
          </div>
          <div class="py-4 text-center">
            <h2>
              for the 
              <br>
              <span> greater good</span>
            </h2>
          </div>
          <p class="text-center block-banner__info">
            We give back to community organizations that focus on music mentorship, creative arts education, and social welfare programs for individuals in need.
          </p>
        </div>
        <div class="col-md-3 col-12 rigth-sidebar">
          <h3 class="pb-4">
            We treat
            <span>
              unmatched royalties
            </span>
            differently.
          </h3>
          <p>
            The Aslice Foundation is a registered non-profit 501(c)(3) and sister organization of Aslice INC.
            <br>
            <br>
            The foundation provides annual donation(s) to charity from Aslice INC’s pool of unmatched earnings. Unmatched music earnings in the Aslice system account for less than 1% of the prior year’s total shared earnings. The Aslice Foundation was founded to donate that pool of unmatched royalty earnings back into the community.
          </p>
        </div>
      </div>
    </div>
    <div class="main-page__screen-2">
      <div class="row p-0 m-0">
        <div class="col-md-9 col-12 d-flex flex-wrap p-0 block-left">
          <div class="col-9 title ">The Donation Process</div>
          <div class="col-md-4 col-12 border-right d-flex flex-column block-item px-4">
            <div class="block-item-img">
              <img src="@/assets/images/info/process-icon-1.svg" alt="icon">
            </div>
            <h3 class="m-0">Nomination</h3>
            <p class="pb-md-0">The Contribution Committee nominates and vets a list of community organizations based on transparent and published criteria.</p>
          </div>
          <div class="col-md-4 col-12 border-right d-flex flex-column block-item px-4">
            <div class="block-item-img">
              <img src="@/assets/images/info/process-icon-2.svg" alt="icon">
            </div>
            <h3 class="m-0">Community Vote</h3>
            <p class="pb-md-0">Aslice users are invited to log into their account and vote for the organization/charity that they would like to receive the donation(s).</p>
          </div>
          <div class="col-md-4 col-12 border-right d-flex flex-column block-item px-4">
            <div class="block-item-img">
              <img src="@/assets/images/info/process-icon-3.svg" alt="icon">
            </div>
            <h3 class="m-0">Award</h3>
            <p class="pb-md-0">The committee reviews the voting results and awards the donation to the user-selected recipient on behalf of the Aslice community. </p>
          </div>
        </div>
        <div class="col-md-3 col-12 p-0">
          <img src="@/assets/images/info/process-img.png" alt="process-img">
        </div>
      </div>
    </div>
    <div class="main-page__screen-3 p-4">
      <h3 class="title">Meet The Aslice Foundation <br><span> Contribution Committee</span></h3>
      <div v-if="!$device.mobile" class="d-flex row">
        <div 
          v-for="item in infoCommittee" :key="item.id"
          class="col-lg-4 col-sm-6 col-12 block-item d-flex flex-column"
        >
          <div class="block-item__img">
            <img
              :src="require('@/assets/images/info/' + item.src)" alt="image">
          </div>
          <div class="d-flex flex-column block-item__background">
            <div class="block-item__name pt-4">
              {{ item.name }}
            </div>
            <div class="block-item__gender">
              {{ item.gender }}
            </div>
            <div class="block-item__info pt-4">
              {{ item.info }}
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <VueSlickCarousel v-bind="sliderCommittee">
          <div 
            v-for="item in infoCommittee" :key="item.id"
            class="col-lg-4 col-sm-6 col-12 block-item d-flex flex-column"
          >
            <div class="block-item__img">
              <img
                :src="require('@/assets/images/info/' + item.src)" alt="image">
            </div>
            <div class="d-flex flex-column block-item__background">
              <div class="block-item__name pt-md-4">
                {{ item.name }}
              </div>
              <div class="block-item__gender">
                {{ item.gender }}
              </div>
              <div class="block-item__info pt-4">
                {{ item.info }}
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <Footer> </Footer>
  </div>
</template>
<script>
import findRoutesRecursive from "@/mixins/findRoutesRecursive";
import Footer from "@/components/FooterNew";
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  // TODO: ADD RESOURCES PDF PAGE WITH QUERY PARAMS
  name: "The Aslice Foundation",
  metaInfo: {
    title: "Aslice Foundation",
    meta: []
  },
  mixins: [findRoutesRecursive],
  components: {
    VueSlickCarousel,
    Footer
  },
  data() {
    return {
      infoCommittee:[
        {
          src:'Nicky_Böhm.jpg',
          name:'Nicky Böhm', 
          gender: '(she / her)',
          info: 'Nicky Böhm is a senior project manager at Berlin Atonal and Refuge Worldwide Radio, where she also hosts the shows “Face The Music” and “Flip The Script”. Prior to that, she worked at Beatport and various indie labels (!K7, BPitch Control, Kitty-Yo). Nicky is the parenthood ambassador for the Berlin chapter of shesaid.so and co-founder of Parenthood In Music. She has mentored for shesaid.so x YouTube, VUT (Association Of Independent Musicians Music Companies), and Musicboard. Böhm was included in shesaid.so\'s 2021 Alternative Power 100 Music List.'
        },
        {
          src:'Eric_Dulan.jpg',
          name:'Eric Dulan', 
          gender: '(he / him)',
          info: 'Eric Dulan is best known in the electronic music community by his stage name, DJ Bone. An uncompromising champion of the underground, fiercely independent, and true virtuoso of three and four deck DJing. With an early start as a resident at Detroit’s legendary Motor Club and releases on Juan Atkins pioneering techno label Metroplex, Eric Dulan has gone on to create his own label, Subject Detroit, and event concept FURTHER. Beyond music, Dulan devotes his energy to giving back via his Homeless Homies fundraising platform designed to raise money to help the homeless in communities worldwide.'
        },
        {
          src:'Susanne_Kirchmayr.jpg',
          name:'Susanne Kirchmayr', 
          gender: '(she / her)',
          info: 'Susanne Kirchmayr, better known as Electric Indigo, is an Austrian DJ, composer, and musician who represents an intelligent and distinguished interpretation of techno and electronic music. Her DJ sets are characterized by a wide variety of influences, with a clarity of vision and a depth that comes from a deep understanding of the music and the art of DJing. Kirchmayr composes music for concert spaces and clubs, and occasionally for stage plays and short films. In 1998, she founded female:pressure, the international network for female, non-binary and transgender artists in electronic music.'
        },
        {
          src:'Alyce_Currier.jpg',
          name:'Alyce Currier', 
          gender: '(they / them)',
          info: 'Alyce Currier (Lychee) is a Brooklyn-based DJ and writer formerly of Boston, whose dance music culture zine Spontaneous Affinity has explored topics ranging from the labor behind the scenes of your favorite party to critical examinations of gender, race, and sexuality in the culture (as well as hosting some of our favorite mixes of recent years). In addition to playing out, Lychee has organized DJ/producer skillshare events, taught DJ workshops, and curated a speaker event about inclusivity in music technology.'
        }, 
        {
          src:'Zak_Khutoretsky.jpg',
          name:'Zak Khutoretsky', 
          gender: '(he / him)',
          info: 'Zak Khutoretsky, best known under his artist name DVS1, is one of the world\'s most revered DJs and prominent voices in the preservation of true club culture. DVS1\'s breakthrough as a music producer came with releases on Klockworks, Transmat, and his own imprint HUSH. In 2019, Khutoretsky launched S.O.S. (Support Organize Sustain), featuring educational panel discussions and informational seminars addressing diverse topics and issues facing the electronic music community. Shortly after, Khutoretsky launched Aslice in 2021 to help create a more equitable music ecosystem between working DJs and music producers.'
        }, 
      ],
      sliderCommittee:{
        "dots": true,
        "arrows": false,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": false,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.main-page{
  &__screen-1{
    background: #F2F1EF;
    .block-banner{
      height: calc(100vh - 57px);
      background-image: url("../assets/images/info/foundation-baner.png");
      background-size: cover;
      background-position: center center;
      padding: 20px;
      width: 100%;
      .button{
        display: flex;
        padding: 11px 14px 9px;
        align-items: flex-start;
        gap: 10px;
        border-radius: 50px;
        background: #D6BBFE;
        span{
          color: #442671;
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
        color: #D6BBFE;
        max-width: 690px;
        text-align: center;
        font-family: "Graphik-Regular-Web";
        font-size: 95px;
        font-style: normal;
        font-weight: 400;
        line-height: 105%; 
        text-transform: capitalize;
        span{
          color: #FEFEFD;
          font-family: "Graphik-Regular-Web";
          font-size: 95px;
          font-style: normal;
          font-weight: 400;
          line-height: 105%;
          text-transform: capitalize;
        }
      }
      &__info{
        color: #FEFEFD;
        max-width: 670px;
        text-align: center;
        font-family: "Graphik-Regular-Web";
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 112%; /* 28px */
      }
    }
    .rigth-sidebar{
      padding: 20px;
      h3{
        color: #442671;
        font-family: "Graphik-Regular-Web";
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 50px; /* 104.167% */
        text-transform: capitalize;
        span{
          color: #9856FC;
          font-family: "Graphik-Regular-Web";
          font-size: 48px;
          font-style: normal;
          font-weight: 400;
          line-height: 50px;
          text-transform: capitalize;
        }
      }
      p{
        color: #616060;
        font-family: "Roboto-Mono";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 135%; /* 18.9px */
      }
    }
  }
  &__screen-2{
    .block-left{
      padding: 20px 0px !important;
      .title{
        color:#442671;
        padding: 0px 20px 30px;
        font-family: "Graphik-Regular-Web";
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 50px; /* 104.167% */
        text-transform: capitalize;
      }
      .block-item{
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
          padding: 10px 0px;
        }
        p{
          align-self: stretch;
          color: #616060;
          font-family: "Roboto-Mono";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 135%; /* 18.9px */
          margin: 0;
          a{
            color:#616060;
            text-decoration-line: underline;
          }
        }
      }
      .border-right{
        border-right: 1px solid #C2C1BF!important;
      }
    }
    img{
      max-width: 100%;
      height: auto;
    }
  }
  &__screen-3{
    background: #F2F1EF;
    .title{
      color: #442671;
      font-family: "Graphik-Regular-Web";
      font-size: 95px;
      font-style: normal;
      font-weight: 400;
      line-height: 105px; /* 110.526% */
      text-transform: capitalize;
      margin: 0px;
      span{
        color: #9856FC;
      }
    }
    .row{
        padding: 10px;
      .block-item{
        padding: 10px;
        min-height: 723px;
        &__background{
          background: #FFFFFF;
          border-radius: 0 0 5px 5px;
          padding: 0 20px;
          flex-grow: 1;
        }
        &__img{
          
          img{
            max-width: 100%;
            border-radius: 5px 5px 0 0 ;
          }
          
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
          color:#9856FC;
          font-family: "Roboto-Mono";
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px; /* 133.333% */
        }
        &__info{
          color: #75707B;
          font-family: "Roboto-Mono";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 135%; /* 18.9px */
          padding-bottom: 36px;
        }
      }
    }
  }
  &__footer {
    padding: 0px;
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
}
@media (max-width: 768px){
  .main-page {
    &__screen-1{
      background: #F2F1EF;
      .block-banner{
        height: calc(100vh - 57px);
        background-image: url("../assets/images/info/foundation-baner.png");
        background-size: cover;
        background-position: center center;
        padding: 20px;
        width: 100%;
        .button{
          display: flex;
          padding: 11px 14px 9px;
          align-items: flex-start;
          gap: 10px;
          border-radius: 50px;
          background: #D6BBFE;
          span{
            color: #442671;
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
          font-size: 48px;
          span{
            font-size: 48px;
          }
        }
        &__info{
          font-size: 18px;
        }
      }
      .rigth-sidebar{
        h3{
          padding: 20px 0 40px!important;
          margin: 0;
        }
        p{
          padding-bottom: 40px;
          margin: 0;
        }
      }
    }
    &__screen-2{
      padding: 40px 0px 0px!important;
      .block-left{
        padding: 00px 0px !important;
        .title{
          color:#442671;
          padding: 0px 20px 0px!important;
          font-family: "Graphik-Regular-Web";
          min-width: 360px;
        }
        .block-item{
          padding: 40px 20px!important;
          border-bottom: 1px solid #C2C1BF;
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
            padding: 10px 0px;
          }
          p{
            align-self: stretch;
            color: #616060;
            font-family: "Roboto-Mono";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 135%; 
            padding-bottom: 10px;
            a{
              color:#616060;
              text-decoration-line: underline;
            }
          }
        }
      }
      img{
        max-width: 100%;
        height: auto;
      }
    }
    &__screen-3{
      background: #F2F1EF;
      padding: 0px 0px 60px!important;
      .title{
        font-size: 48px;
        line-height: 50px;
        margin: 0px;
        padding: 40px 20px;
      }
      .row{
          padding: 10px;
        .block-item{
          padding: 10px;
          min-height: 723px;
          &__background{
            background: #FFFFFF;
            border-radius: 0 0 5px 5px;
            padding: 0 20px;
            flex-grow: 1;
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
            color:#9856FC;
            font-family: "Roboto-Mono";
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 133.333% */
          }
          &__info{
            color: #75707B;
            font-family: "Roboto-Mono";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 135%; /* 18.9px */
            padding-bottom: 0px;
          }
        }
      }
    }
    &__footer {
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
}
@media (max-width: 375px){
  .main-page{
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
@media (max-width: 768px) {
  .main-page__screen-2 .block-item{
    border-bottom: none;
  }
  .main-page__screen-2 .block-item:not(:last-of-type){
    border-bottom: 1px solid #C2C1BF;
  }
  .slick-slide img{
    max-width: 100%;
    display: block;
    border-radius: 5px 5px 0 0 ;
  }
  .slick-slide .block-item{
    padding: 0px 20px 00px!important;
  }
  .slick-slide .block-item .block-item__background{
    background: #FFFFFF;
    padding: 10px 20px 20px!important;
    border-radius: 0 0 5px 5px;
  }
  .slick-slide .block-item .block-item__background .block-item__name{
    color:#442671;
    font-family: "Graphik-Regular-Web";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    padding: 10px 0px 0px;
  }
  .slick-slide .block-item .block-item__background .block-item__gender{
    color: #9856FC;
    font-family: "Roboto-Mono";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; 
  }
  .slick-slide .block-item .block-item__background  .block-item__info{
    color: #75707B;
    font-family: "Roboto-Mono";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 135%; /* 18.9px */
    padding-bottom: 30px;
  }
  .slick-slide .slick-dots{
    bottom: -15px!important;
  }
  .slick-slide .slick-dots li{
    margin: 0px!important;
  }
  .main-page__footer__container .main-page__footer__item:not(:last-of-type){
    border-right: none;
  }
}

</style>