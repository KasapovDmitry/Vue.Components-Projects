<template>
    <div class="slider__dots">
        <div
        v-for="(image, index) in images"
            :key="image.id"
            :class="'slider__dots-item ' + `n${index} ` + `${index === this.actIndex? 'active' : ''}`"
            :data-index="`${index}`"
            @click="moveDots(index)"
        >
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyDots",
        props: {
            images: {
             type: Array, 
             default: () => []
            },
            actIndex: {
                type: Number,
                default: 0,
            }
        },
        methods: {
            moveDots(inx) {
                this.$emit('active', inx);
            },
        }
    }
</script>

<style scoped>
.slider__dots {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 100%;
  }
  
  .slider__dots-item {
    width: 10px;
    height: 10px;
    background: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background 0.4s ease;
  }
  
  .slider__dots-item:hover, .slider__dots-item.active {
    background: #000;
  }
</style>