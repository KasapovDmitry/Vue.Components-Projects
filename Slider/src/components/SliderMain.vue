<template>
    <div class="slider__images">
        <SliderItemVue
          v-for="(image, index) in images"
          :key="image.id"
          :item_data="image"
          :class="'image ' + `n${index} ` + `${index === activeIndex ? 'active' : ''}`"
          :style="`background-image:url(${ image.url })`"
          :data-index="`${index}`"
        />
    </div>
    <div class="slider__arrows">
      <MyArrow
        v-if="this.arrows"
        :actIndex="this.activeIndex"
        @listen="moveSlide"
      />
    </div>
    <MyDots
      v-if="this.dots"
      :images="this.images"
      :actIndex="this.activeIndex"
      @active="moveDots"
    />
</template>

<script>
import SliderItemVue from '@/components/SliderItem';
import MyArrow from '@/components/UI/SliderArrow'
import MyDots from '@/components/UI/SliderDots';
    export default {
      name: "MySlider",
      components: {
        SliderItemVue,
        MyDots,
        MyArrow,
      },
      props: {
          images: {
            type: Array, 
            default: () => []
          },
          interval: {
            type: Number,
            default: 0,
          },
          arrows: {
            type: Boolean,
            default: true,
          },
          dots: {
            type: Boolean,
            default: true,
          }
      },
      data() {
      return {
          activeIndex: 0,
          }
      },
      mounted: function () {
        if (this.interval > 0) {
          this.initAutoplay();
        }
      },
      methods: {
        moveSlide(ind, dir) {
            if(dir === 'right') {
                if (ind >= this.images.length-1) this.activeIndex = 0;
                else this.activeIndex += 1;
            } else {
                if (ind === 0) this.activeIndex = this.images.length - 1;
                else this.activeIndex -= 1;
            }
          },
          moveDots(inx) {
            this.activeIndex = inx;
          },
          initAutoplay: function() {
              setInterval(() => {
              if (this.activeIndex >= this.images.length-1) {
              this.activeIndex = 0;
              } else {
              this.activeIndex += 1;
              } 
          }, this.interval);
        }
      },
    }
</script>

<style scoped>
.slider__images {
    position: relative;
    width: 500px;
    height: 250px;
  }
  .slider__images .image {
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 800ms ease;
  }
  
  .slider__images .image.active {
    opacity: 1;
  }
  .slider__arrows {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
  }
</style>