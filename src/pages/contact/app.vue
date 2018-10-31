<template>
  <div id='app'>
    <div class="page-box page-box-contactus">
            <div class="page-box-bg">
                <div class="main main-en">
                  <global-top></global-top>
                  <global-logo></global-logo>
                  <global-nav></global-nav>
                  <contact-content></contact-content>
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
    'contactContent': () => import('../../components/contact/content.vue'),
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
