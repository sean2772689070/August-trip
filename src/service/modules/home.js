import hyRequest from "@/service/request"

export function getHotSuggests() {
    return hyRequest.get({
        url: "/home/hotSuggests"
    })
}

export function getCategoriesData() {
    return hyRequest.get({
        url: "/home/"
    })
}