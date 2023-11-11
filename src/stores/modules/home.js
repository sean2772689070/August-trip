import {defineStore} from "pinia";
import {getHotSuggests} from "@/service";


const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: []
    }),
    actions: {
        async fetchHotSuggestsData() {
            const res = await getHotSuggests();
            this.hotSuggests = res.data;
        },
        async fetchCategoriesData() {

        }
    }
})

export default useHomeStore;