import {defineStore} from "pinia";
import {getCategoriesData, getHotSuggests, getHouseList} from "@/service";


const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: [],
        currentPage: 1,
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
            const res = await getHouseList(this.currentPage);
            this.houseList.push(...res.data);
            this.currentPage++;
        }
    }
})

export default useHomeStore;