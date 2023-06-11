import { Ref, computed, ref } from "vue"
import { IVoice } from "../types/types"

export const useSortedAndSearchedVoices = (voices:Ref<IVoice[]>) => {
  const sex = ref<string | null>(null)
  const searchValue = ref<string>('')

  const setSex = (value:string) => {
    sex.value = value
  }

  console.log(voices);
  

  const sortedAndSearchedVoices = computed(() => voices.value.filter(voice => {
    if (sex.value) {
      return voice.sex === sex.value && 
      (
        voice.name.RU.toLowerCase().includes(searchValue.value.toLowerCase())
          || 
        voice.name.EN.toLowerCase().includes(searchValue.value.toLowerCase())
      )
    }
    return voice.name.RU.toLowerCase().includes(searchValue.value.toLowerCase()) 
      || 
    voice.name.EN.toLowerCase().includes(searchValue.value.toLowerCase())
  }))

  return {
    sortedAndSearchedVoices,
    sex,
    setSex,
    searchValue
  }

}