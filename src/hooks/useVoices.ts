import { onMounted, ref } from "vue"
import { IVoice } from "../types/types"
import $api from "../api/api"


export const useVoices = () => {
  const voices = ref<IVoice[] | []>([])

  const fetchVoices = async () => {
    try {
      const res = await $api.get<IVoice[]>('/api/voices')
      voices.value = res.data
    }catch(e) {
      console.log(e);
    }
  }

  onMounted(() => fetchVoices())

  return {
    voices
  }
}