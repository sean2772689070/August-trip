import {onActivated, onDeactivated, onMounted, onUnmounted, ref} from "vue";
import {throttle} from 'underscore';

export default function useScroll() {
    const isReachBottom = ref(false);
    const clientHeight = ref(0);
    const scrollTop = ref(0);
    const scrollHeight = ref(0);
    const scrollEventListenerHandler = throttle(() => {
        clientHeight.value = document.documentElement.clientHeight;
        scrollTop.value = document.documentElement.scrollTop;
        scrollHeight.value = document.documentElement.scrollHeight;
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            isReachBottom.value = true;
        }
    }, 100)

    onMounted(() => {
        window.addEventListener("scroll", scrollEventListenerHandler)
    })
    onActivated(() => {
        window.addEventListener("scroll", scrollEventListenerHandler)
    })
    onUnmounted(() => {
        window.removeEventListener("scroll", scrollEventListenerHandler)
    })

    onDeactivated(() => {

        window.removeEventListener("scroll", scrollEventListenerHandler)
    })
    return {isReachBottom, clientHeight, scrollTop, scrollHeight};
}