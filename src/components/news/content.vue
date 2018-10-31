<template>
  <div>
    <div class="layout layout-sys1 layout-current" layout-guid="7" layout-no-guid="dcc8e447-bce0-4f01-9934-6cc8c61dc0fd">
                   <div class="layout-bg">
                       <div class="mod mod-color mod-current01">
                           <div class="mod-bg mod-bg-current01">
                               <div class="mod-title mod-title-current01">
                                   <div class="title-bg title-bg-current01"></div>
                               </div>
                               <div class="mod-content mod-content-current01">
                                   <div class="content-bg content-bg-current01">
                                       <span class="here">
                                           <a href="javascript:void(0);" rel="nofollow">Home</a>
                                       </span>
                                       &gt;<span class="present" @click="clickNew()">News</span>
                                   </div>
                               </div>
                               <div class="mod-bottom mod-bottom-current01">
                                   <div class="bottom-bg bottom-bg-current01"></div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="layout layout-sys2 layout-page" layout-guid="8" layout-no-guid="7606154e-2135-44f8-8881-ae2a95e91390">
                   <div class="layout-bg">
                       <div class="left">
                           <div class="left-bg">
                               <div class="mod mod-color mod-group mod-news-group01">
                                   <div class="mod-bg mod-bg-group">
                                       <div class="mod-title mod-title-group">
                                           <div class="title-bg title-bg-group">
                                               <div class="title-left title-left-group">News Group</div>
                                               <div class="title-right title-right-group"></div>
                                           </div>
                                       </div>
                                       <div class="mod-content mod-content-group">
                                           <div class="content-bg content-bg-group">
                                               <div class="group-box">
                                                   <ul class="group-tabs">
                                                       <li class="group-tab group-tab-first" @click="clickNew()">
                                                           <a class="group-link" href="javascript:void(0);" title="Company News">
                                                               <span>Company News</span>
                                                           </a>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                       <div class="mod-bottom mod-bottom-group">
                                           <div class="bottom-bg bottom-bg-group"></div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div class="right" v-if="!singleState">
                           <div class="right-bg">
                               <div class="mod mod-color mod-list mod-news-list01">
                                   <div class="mod-bg mod-bg-list">
                                       <div class="mod-title mod-title-list">
                                           <div class="title-bg title-bg-list">
                                               <div class="title-left title-left-list">News</div>
                                               <div class="title-right title-right-list"></div>
                                           </div>
                                       </div>
                                       <div class="mod-content mod-content-list">
                                           <div class="content-bg content-bg-list">
                                               <div class="list-box">
                                                   <ul class="list-tabs">
                                                        <!-- v-for="(mechinery, index) in productMechineryList" :key="index" -->
                                                       <li class="list-tab" v-for="(snew, index) in homeNewList" :key="index" @click="switchNew(index);">
                                                           <a target="_blank" class="list-link" href="javascript:void(0);" :title="snew.name">{{snew.name}}</a>
                                                           <span class="list-time">{{snew.time}}</span>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div class="right" v-else>
                           <div class="right-bg">
                               <div class="mod mod-color mod-list mod-news-list01">
                                   <div class="mod-bg mod-bg-list">
                                       <div class="mod-title mod-title-list">
                                           <div class="title-bg title-bg-list" style="position:relative;">
                                               <div class="title-left title-left-list">{{title}}</div>
                                               <div class="title-right title-right-list" style="position:absolute;right: 10px;top:0px;font-size: 16px;" @click="clickNew()">Return</div>
                                           </div>
                                       </div>
                                       <div class="mod-content mod-content-list">
                                           <div class="content-bg content-bg-list">
                                               <div class="list-box">
                                                   <p style="font-size:20px;">
                                                     {{singleNew.text}}
                                                   </p>
                                                   <div style="margin-top:10px;" v-if="singleNew.video1">
                                                     <video :src="singleNew.video1" controls width="465px" height="261px"></video>
                                                   </div>
                                                   <div style="margin-top:10px;" v-if="singleNew.video2">
                                                     <video :src="singleNew.video2" controls width="465px" height="261px"></video>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                   </div>
               </div>
  </div>
</template>

<script>

import homeNew from '../../data/home_new.js'

export default {
  name: "news",
  components: {
  },
  data() {
    return {
      donationState: false,
      homeNewList: homeNew,
      singleState: false,
      title: '',
      singleNew: {}
    };
  },
  computed: {

  },
  methods: {
    switchNew(i) {
      this.singleNew = this.homeNewList[i];
      this.singleState = true;
      this.title = this.singleNew.name;
    },
    clickNew() {
      this.singleNew = {};
      this.title = '';
      this.singleState = false;
    }
  },
  created() {

  }
};
</script>

<style>
</style>
