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
                            <span class="newsz">
                                <a href="javascript:void(0);" title="Products">Products</a>
                            </span>
                            &gt;
                            <span class="present">
                                <h2>{{curName}}</h2>
                            </span>
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
                    <div class="mod mod-color mod-categories01">
                        <div class="mod-bg mod-bg-categories">
                            <div class="mod-title mod-title-categories">
                                <div class="title-bg title-bg-categories">
                                    <div class="title-left title-left-categories">Categories</div>
                                    <div class="title-right title-right-categories">
                                        <a href="//www.hshmachine.com/products-list.htm" rel="nofollow" target="_blank">More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="mod-content mod-content-categories">
                                <div class="content-bg content-bg-categories">
                                    <div class="categories-box categories-child show-type-tree">
                                        <ul class="categories-tabs">
                                            <li class="categories-tab categories-tab-first categories-tab-child" @click="clickTab(0);">
                                                <a class="categories-tab-link" href="javascript:void(0);" title="Spindle and Shaft Sleeve">
                                                    <span class="text">Spindle and Shaft Sleeve</span>
                                                    <i class="nocaret"></i>
                                                </a>
                                               
                                            </li>
                                            <li class="categories-tab categories-tab-2" @click="clickTab(1);">
                                                <a class="categories-tab-link" href="javascript:void(0);" title="Machining Parts">
                                                    <span class="text">Machining Parts</span>
                                                    <i class="caret"></i>
                                                </a>
                                            </li>
                                            <li class="categories-tab categories-tab-3 categories-tab-child" @click="clickTab(2);">
                                                <a class="categories-tab-link" href="javascript:void(0);" title="Cutter">
                                                    <span class="text">Cutter</span>
                                                    <i class="nocaret"></i>
                                                </a>
                                            </li>
                                            <li class="categories-tab categories-tab-4" @click="clickTab(3);">
                                                <a class="categories-tab-link" href="javascript:void(0);" title="Deep Hole Processing">
                                                    <span class="text">Deep Hole Processing</span>
                                                    <i class="caret"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="mod-bottom mod-bottom-categories">
                                <div class="bottom-bg bottom-bg-categories"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="right machining" v-show="curIndex==1">
                <div class="right-bg">
                    <div class="mod mod-color mod-productlist01">
                        <div class="mod-bg mod-bg-productlist">
                            <div class="mod-title mod-title-productlist">
                                <div class="title-bg title-bg-productlist">
                                    <div class="title-left title-left-productlist">
                                        <div class="category-title">
                                            <h1>Machining Parts</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mod-content mod-content-productlist">
                                <div class="content-bg content-bg-productlist">
                                    <div class="box-gallery">
                                        <div class="gallery-item" style="width:270px;" v-for="(mechinery, index) in productMechineryList" :key="index" >
                                            <div class="product-img savm">
                                                <a href="javascript:void(0);" :title="mechinery.name" class="mc-click-target" rel="nofollow">
                                                    <img :src="mechinery.url" width="270" height="270" :alt="mechinery.name">
                                                </a>
                                            </div>
                                            <div class="product-title">
                                                <a href="javascript:void(0);" :title="mechinery.name" class="mc-click-target">{{mechinery.name}}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="right cutter" v-show="curIndex==2">
                <div class="right-bg">
                    <div class="mod mod-color mod-productlist01">
                        <div class="mod-bg mod-bg-productlist">
                            <div class="mod-title mod-title-productlist">
                                <div class="title-bg title-bg-productlist">
                                    <div class="title-left title-left-productlist">
                                        <div class="category-title">
                                            <h1>Cutter</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mod-content mod-content-productlist">
                                <div class="content-bg content-bg-productlist">
                                    <div class="box-gallery">
                                        <div class="gallery-item" style="width:270px;" v-for="(cutter, index) in productCutterList" :key="index" >
                                            <div class="product-img savm">
                                                <a href="javascript:void(0);" :title="cutter.name" class="mc-click-target" rel="nofollow">
                                                    <img :src="cutter.url" width="270" height="270" :alt="cutter.name">
                                                </a>
                                            </div>
                                            <div class="product-title">
                                                <a href="javascript:void(0);" :title="cutter.name" class="mc-click-target">{{cutter.name}}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="right deep" v-show="curIndex==3">
                <div class="right-bg">
                    <div class="mod mod-color mod-productlist01">
                        <div class="mod-bg mod-bg-productlist">
                            <div class="mod-title mod-title-productlist">
                                <div class="title-bg title-bg-productlist">
                                    <div class="title-left title-left-productlist">
                                        <div class="category-title">
                                            <h1>Deep Hole Processing</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mod-content mod-content-productlist">
                                <div class="content-bg content-bg-productlist">
                                    <div class="box-gallery">
                                        <div class="gallery-item" style="width:270px;" v-for="(deep, index) in productDeepList" :key="index" >
                                            <div class="product-img savm">
                                                <a href="javascript:void(0);" :title="deep.name" class="mc-click-target" rel="nofollow">
                                                    <img :src="deep.url" width="270" height="270" :alt="deep.name">
                                                </a>
                                            </div>
                                            <div class="product-title">
                                                <a href="javascript:void(0);" :title="deep.name" class="mc-click-target">{{deep.name}}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="right shaft" v-show="curIndex==0">
                <div class="right-bg">
                    <div class="mod mod-color mod-productlist01">
                        <div class="mod-bg mod-bg-productlist">
                            <div class="mod-title mod-title-productlist">
                                <div class="title-bg title-bg-productlist">
                                    <div class="title-left title-left-productlist">
                                        <div class="category-title">
                                            <h1>Shaft and Shaft Sleeve</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mod-content mod-content-productlist">
                                <div class="content-bg content-bg-productlist">
                                    <div class="box-gallery">
                                        <div class="gallery-item" style="width:270px;" v-for="(shaft, index) in productShaftList" :key="index" >
                                            <div class="product-img savm">
                                                <a href="javascript:void(0);" :title="shaft.name" class="mc-click-target" rel="nofollow">
                                                    <img :src="shaft.url" width="270" height="270" :alt="shaft.name">
                                                </a>
                                            </div>
                                            <div class="product-title">
                                                <a href="javascript:void(0);" :title="shaft.name" class="mc-click-target">{{shaft.name}}</a>
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
  </div>
</template>

<script>

import productMechinery from '../../data/product_mechinery.js'
import productCutter from '../../data/product_cutter.js'
import productDeep from '../../data/product_deep.js'
import productShaft from '../../data/product_shaft.js'

export default {
  name: "products",
  components: {
  },
  data() {
    return {
      donationState: false,
      curName: 'Machining Parts',
      curIndex: 0,
      productMechineryList: productMechinery,
      productCutterList: productCutter,
      productDeepList: productDeep,
      productShaftList: productShaft
    };
  },
  computed: {

  },
  methods: {
    clickTab(ord) {
        ord = `${ord}`;
        this.curIndex = ord;
        switch (ord) {
          case '0':
            this.curName = 'Spindle and Shaft Sleeve';
            break;
          case '1':

            this.curName = 'Machining Parts';
            break;
          case '2':
            this.curName = 'Cutter';
            break;
          case '3':
            this.curName = 'Deep Hole Processing';
            break;
          default:
            break;
        }
        console.log(this.curName)
    },
    getParam(name) {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      const r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    }
  },
  mounted() {
    const typeIndex = this.getParam('type') || 0;
    console.log(typeIndex)
    this.clickTab(typeIndex)
  }
};
</script>

<style>
</style>
