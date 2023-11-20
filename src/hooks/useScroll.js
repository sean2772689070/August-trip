import {onActivated, onDeactivated, onMounted, onUnmounted, ref} from "vue";
import {throttle} from 'underscore';

export default function useScroll(elRef) {
    let el = window;
    const isReachBottom = ref(false);
    const clientHeight = ref(0);
    const scrollTop = ref(0);
    const scrollHeight = ref(0);
    const scrollEventListenerHandler = throttle(() => {
        if (el === window) {
            clientHeight.value = document.documentElement.clientHeight;
            scrollTop.value = document.documentElement.scrollTop;
            scrollHeight.value = document.documentElement.scrollHeight;
        } else {
            clientHeight.value = el.clientHeight;
            scrollTop.value = el.scrollTop;
            scrollHeight.value = el.scrollHeight;
        }
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            isReachBottom.value = true;
        }
    }, 100)

    onMounted(() => {
        if (elRef) {
            el = elRef.value;
        }
        el.addEventListener("scroll", scrollEventListenerHandler)
    })
    onActivated(() => {
        if (elRef) {
            el = elRef.value;
        }
        el.addEventListener("scroll", scrollEventListenerHandler)
    })
    onUnmounted(() => {
        el.removeEventListener("scroll", scrollEventListenerHandler)
    })

    onDeactivated(() => {
        el.removeEventListener("scroll", scrollEventListenerHandler)
    })
    return {isReachBottom, clientHeight, scrollTop, scrollHeight};
}