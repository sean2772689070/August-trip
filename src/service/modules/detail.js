import hyRequest from "@/service/request"

export function getInfosData(houseId) {
    return hyRequest.get({
        url: '/detail/infos',
        params: {
            houseId
        }
    })
}