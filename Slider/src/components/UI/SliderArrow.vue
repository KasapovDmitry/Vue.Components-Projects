<template>
        <div
          class="slider__arrow left"
          @click="moveSlide('left')"
          >
          &#9668;
        </div>
        <div 
          class="slider__arrow right"
          @click="moveSlide('right')"
          >&#9658;
        </div>

</template>

<script>
    export default {
        name: "MyArrow",
        props: {
            actIndex: {
                type: Number,
                default: 0,
            },
        },
        emits: ['listen'],
        methods: {
            moveSlide(dir) {
                let ind = this.actIndex;
                this.$emit('listen', ind, dir);
            }
        },
    }
</script>

<style scoped>
.slider__arrows {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
  }
  
  .slider__arrow {
    position: absolute;
    width: 15%;
    height: 100%;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    opacity: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: opacity 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .slider__arrow:hover {
    opacity: 1;
  }
  
  .slider__arrow.left {
    left: 0;
  }
  
  .slider__arrow.right {
    right: 0;
  }
</style>