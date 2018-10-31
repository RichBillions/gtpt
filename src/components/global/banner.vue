<template>
  <div class="layout layout-sys1 layout-banner" layout-guid="7" layout-no-guid="590191ef-b2fe-497d-a8d8-fdbf47235646">
      <div class="layout-bg">
          <div class="mod mod-color mod-othercontent01">
              <div class="mod-bg mod-bg-othercontent">
                  <div class="mod-title mod-title-othercontent">
                      <div class="title-bg title-bg-othercontent"></div>
                  </div>
                  <div class="mod-content mod-content-othercontent">
                      <div class="content-bg content-bg-othercontent">
                          <div class="slide animation-2d banner-swiper-container">
                              <div class="swiper-wrapper" style="height:550px;">
                                  <div class="item item-1 swiper-slide" v-for="(banner, index) in bannerList" v-bind:class="{'item-1':index==0}" :key="index" v-bind:style="{'display':'inline-block','height':'550px'}" >
                                      <div class="slide-content" v-bind:style="{'background': 'url('+banner.url+') 100% 100% no-repeat','background-size':'contain','width':'1264px','height':'550px'}">
                                      </div>
                                  </div>
                              </div>
                              <a class="prev" href="javascript:;">
                                  <span class="fa fa-angle-left" aria-hidden="true" style="font-style: italic;"></span>
                              </a>
                              <a class="next" href="javascript:;">
                                  <span class="fa fa-angle-right" aria-hidden="true" style="font-style: italic;"></span>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="mod-bottom mod-bottom-othercontent">
                      <div class="bottom-bg bottom-bg-othercontent"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

import bannerData from '../../data/banner.js'
import Swiper from 'swiper';
//background: url() 50% 50% no-repeat;
export default {
  name: "banner",
  components: {
  },
  data() {
    return {
      showIndex: 0,
      donationState: false,
      bannerList: bannerData
    };
  },
  computed: {

  },
  methods: {
    switchTab(i) {
      if (i == 0) {
        if (this.showIndex == 0){
          this.showIndex = 2;
        } else {
          this.showIndex--;
        }
      } else if (i == 1) {
        if (this.showIndex == 2){
          this.showIndex = 0;
        } else {
          this.showIndex++;
        }
      }
    }
  },
  created() {
    //console.log(bannerData)
  },
  mounted() {
    new Swiper('.banner-swiper-container',{
      loop: true,
      autoplay: 4000,
      autoplayStopOnLast: true,
      setWrapperSize: true,
      paginationClickable: false,
      mousewheelControl: false,
      observeParents: true,
      preventClicks: false,
      preventLinksPropagation: false,
      nextButton: '.next',
      prevButton: '.prev'
    })
    // setInterval(() => {
    //   this.switchTab(1)
    // }, 5000)
  }
};
</script>

<style>
</style>
