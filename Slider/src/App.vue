<template>
    <section class="slider">
      <MySlider  
      :interval="0"
      :arrows="true"
      :dots="true"
      :images="imagesStore.images"
      />
     
      
    </section>
</template> 

<script>
import MySlider from '@/components/SliderMain';
import { useImagesStore } from "./store/index.js";
import { mapStores } from "pinia";
export default {
  components: {
    MySlider,
  },
  computed: {
    //imagesStore: mapStores(useImagesStore).images
    ...mapStores(useImagesStore),
  },
}
</script>

<style>
</style>
