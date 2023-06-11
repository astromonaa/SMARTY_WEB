import { Ref, onUpdated, ref } from "vue";




export const useDebounce = (value:Ref, interval:number) => {

  const debounce = ref('')
  let timeout = ref<number | undefined>()

  onUpdated(() => {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      debounce.value = value.value
    }, interval)
  })

  return debounce
}