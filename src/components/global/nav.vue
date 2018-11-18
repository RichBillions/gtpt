<template>
  <div class="layout layout-sys1 layout-nav" layout-guid="7" layout-no-guid="812590e4-a68d-4b51-6a42-4ba9ce10db59">
      <div class="layout-bg">
          <div class="mod mod-color mod-nav01">
              <div class="mod-bg mod-bg-nav">
                  <div class="mod-title mod-title-nav">
                      <div class="title-bg title-bg-nav"></div>
                  </div>
                  <div class="mod-content mod-content-nav">
                      <div class="content-bg content-bg-nav">
                          <ul class="nav-tabs">
                              <li class="nav-tab nav-tab-first nav-tab-1 nav-tab-nochild">
                                  <div class="nav-tab-span">
                                      <a class="nav-tab-link" href="/index.html" rel="nofollow">
                                          Home<i class="nocaret"></i>
                                      </a>
                                  </div>
                              </li>
                              <li class="nav-tab nav-tab-2 nav-tab-2 nav-tab-nochild">
                                  <div class="nav-tab-span">
                                      <a class="nav-tab-link" href="/about.html" rel="nofollow">
                                          About us<i class="nocaret"></i>
                                      </a>
                                  </div>
                              </li>
                              <li class="nav-tab nav-tab-3 nav-tab-3 nav-tab-nochild">
                                  <div class="nav-tab-span" @mouseover="mouseOver();" @mouseout="mouseOut();">
                                      <a class="nav-tab-link" href="/products.html" rel="nofollow">
                                          products<i class="nocaret"></i>
                                      </a>
                                  </div>
                                  <div class="nav-dropdown" @mouseover="mouseOver();" @mouseout="mouseOut();" :style="{display:productState?'block':'none'}">
                                      <div class="nav-dropdown-title"></div>
                                      <div class="nav-dropdown-content">
                                          <ul class="dropdown-tabs">
                                              <li class="dropdown-tab dropdown-tab-first">
                                                  <a class="dropdown-tab-link" href="/products.html?type=0">Spindle and Shaft Sleeve</a>
                                              </li>
                                              <li class="dropdown-tab dropdown-tab-2">
                                                  <a class="dropdown-tab-link" href="/products.html?type=1">Machining Parts</a>
                                              </li>
                                              <li class="dropdown-tab dropdown-tab-3">
                                                  <a class="dropdown-tab-link" href="/products.html?type=2">Cutter</a>
                                              </li>
                                              <li class="dropdown-tab dropdown-tab-4">
                                                  <a class="dropdown-tab-link" href="/products.html?type=3">Deep Hole Processing</a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div class="nav-dropdown-bottom"></div>
                                  </div>
                              </li>
                              <li class="nav-tab nav-tab-6 nav-tab-6 nav-tab-child">
                                  <div class="nav-tab-span">
                                      <a class="nav-tab-link" href="/qc.html" rel="nofollow">
                                          QC<i class="caret"></i>
                                      </a>
                                  </div>
                              </li>
                              <li class="nav-tab nav-tab-7 nav-tab-7 nav-tab-child">
                                  <div class="nav-tab-span">
                                      <a class="nav-tab-link" href="/news.html" rel="nofollow">
                                          News<i class="caret"></i>
                                      </a>
                                  </div>
                              </li>
                              <li class="nav-tab nav-tab-8 nav-tab-8 nav-tab-nochild">
                                  <div class="nav-tab-span">
                                      <a class="nav-tab-link" href="/contact.html" rel="nofollow">
                                          Contact us<i class="nocaret"></i>
                                      </a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="mod-bottom mod-bottom-nav">
                      <div class="bottom-bg bottom-bg-nav"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "navc",
  components: {
  },
  data() {
    return {
      productState: false
    };
  },
  computed: {

  },
  methods: {
    mouseOver() {
      console.log(11112222);
      this.productState = true;
    },
    mouseOut() {
      this.productState = false;
    }
  },
  created() {

  }
};
</script>

<style>
</style>
