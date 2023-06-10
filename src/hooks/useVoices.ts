import { onMounted, ref } from "vue"
import axios from 'axios'
import { IVoice } from "../types/types"


export const useVoices = () => {
  const voices = ref<IVoice[] | []>([])

  const fetchVoices = async () => {
    try {
      const res = await axios.get<IVoice[]>('http://45.12.75.188:5000/voices')
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