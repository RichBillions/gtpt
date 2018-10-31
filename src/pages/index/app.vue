<template>
  <div id='app'>
    <div class="page-box page-box-default">
        <div class="page-box-bg">
            <div class="main main-en">
                <global-top></global-top>
                <global-logo></global-logo>
                <global-nav></global-nav>
                <global-banner></global-banner>
                <home-content></home-content>
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
		'homeContent': () => import('../../components/home/content.vue'),
    'globalTop': () => import('../../components/global/top.vue'),
    'globalLogo': () => import('../../components/global/logo.vue'),
    'globalNav': () => import('../../components/global/nav.vue'),
    'globalBanner': () => import('../../components/global/banner.vue'),
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
