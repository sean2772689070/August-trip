import {defineStore} from "pinia";
import {getCategoriesData, getHotSuggests, getHouseList} from "@/service";


const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: [],
        houseList: [],
    }),
    actions: {
        async fetchHotSuggestsData() {
            const res = await getHotSuggests();
            this.hotSuggests = res.data;
        },
        async fetchCategoriesData() {
            const res = await getCategoriesData();
            this.categories = res.data;
        },
        async fetchHouseListData() {
            const res = await getHouseList();
            this.houseList = res.data;
        }
    }
})

export default useHomeStore;