<template>
    <div>
        <SliderTitle
            v-html="item_data.title"
        />
    </div>
</template>
 
<script>
import SliderTitle from '@/components/UI/SliderTitle';
    export default {
        name: "SliderItemVue",
        components: {SliderTitle},
        props: {
            item_data: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>
<style scoped>
.slider__images-title {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0,0,0,0.5);
    color: #fff;
    text-align: center;
    z-index: 1;
    padding: 7px 0;
  }
</style>