<template>
  <div id='app'>
    <div class="page-box page-box-businessprocess">
               <div class="page-box-bg">
                   <div class="main main-en">
                     <global-top></global-top>
                     <global-logo></global-logo>
                     <global-nav></global-nav>
                     <news-content></news-content>
                     <global-foot></global-foot>
                     <global-bottom></global-bottom>
                   </div>
               </div>
           </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      donationState: false,
    };
  },
  components: {
		'newsContent': () => import('../../components/news/content.vue'),
    'globalTop': () => import('../../components/global/top.vue'),
    'globalLogo': () => import('../../components/global/logo.vue'),
    'globalNav': () => import('../../components/global/nav.vue'),
    'globalFoot': () => import('../../components/global/foot.vue'),
    'globalBottom': () => import('../../components/global/bottom.vue')
  },
  computed: {

  },
  methods: {

  },
  created() {

  }
};
</script>

<style>
@import "../../assets/css/home.css";
</style>
