<template>
  <VoiceTypeSwitcher
    :sex="sex"
    @setSex="setSex"
  />
  <SearchInput class="mt-10" v-model="searchValue"/>
    <TransitionGroup name="list" tag="ul" class="voices">
      <li
        v-for="voice in sortedAndSearchedVoices"
        :key="voice.voice_id"
        class="voice-item"
        @click="sendDataToTelegram(voice.voice_id)"
      >
        <p class="voice-item-block">
          <span class="bold">{{ voice.name?.RU }}</span>
          <small class="gray">{{ voice.name.EN }}</small>
        </p>
        <p class="voice-item-block">{{ voice.description.RU }}</p>
      </li>
    </TransitionGroup>
</template>

<script setup lang="ts">
import { onMounted, TransitionGroup } from 'vue';

import VoiceTypeSwitcher from "./components/VoiceTypeSwitcher.vue";
import SearchInput from "./components/SearchInput.vue";


import { useVoices } from "./hooks/useVoices";
import { useSortedAndSearchedVoices } from './hooks/useSortedAndSearchedVoices';


const { voices } = useVoices();
const { sex, sortedAndSearchedVoices, setSex, searchValue } = useSortedAndSearchedVoices(voices)
const tg = (window as any).Telegram.WebApp;

onMounted(() => {
  tg.ready()
  tg.expand()
})


const sendDataToTelegram = (id: number) => {
  tg.sendData(String(id));
};

</script>

<style scoped>
.voices {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 15px;
  padding: 0 1%;
  width: 100%;
}.voice-item {
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  list-style-type: none;
  border: 1px solid lightgray;
  width: 100%;
  align-items: center;
}

.voice-item-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
