import { defineStore } from "pinia";

let images = [{
    url: "https://img.favcars.com/mini/hatch/mini_hatch_2010_wallpapers_14_1280x960.jpg",
    title: "Mini Cooper черный"
  }, {
    url: "https://img.favcars.com/mini/cabrio/mini_cabrio_2009_pictures_5_1280x960.jpg",
    title: "Mini Cooper красный"
  }, {
    url: "https://www.t-r-n.ru/files/modification-images/cb/a8/5c/f9/40061_tmb940.jpg",
    title: "Mini Cooper синий"
  }, {
    url: "https://a.d-cd.net/af41e8cs-960.jpg",
    title: "Mini Cooper бордовый"
  }, {
    url: "https://i1.7fon.org/thumb/m604508.jpg",
    title: "Mini Cooper белый"
}];

export const useImagesStore = defineStore("images", {
  state: () => ({ images }),
});
