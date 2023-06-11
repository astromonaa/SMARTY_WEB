<template>
  <ul :class="$style.voices">
    <li
      v-for="voice in voices"
      :key="voice.voice_id"
      :class="$style['voice-item']"
      @click="sendDataToTelegram(voice.voice_id)"
    >
      <p :class="$style['voice-item-block']">
        <span class="bold">{{ voice.name?.RU }}</span>
        <small class="gray">{{ voice.name.EN }}</small>
      </p>
      <p :class="$style['voice-item-block']">{{ voice.description.RU }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useVoices } from "./hooks/useVoices";
import { onMounted } from 'vue';

const { voices } = useVoices();
const tg = (window as any).Telegram.WebApp;

onMounted(() => {
  tg.ready()
  tg.expand()
  tg.MainButton.show()
  tg.MainButton.onClick(() => {
    debugger
    tg.sendData("some string that we need to send")
    (window as any).Telegram.WebApp.sendData("some string that we need to send")
  })
})


const sendDataToTelegram = (id: number) => {
  tg.sendData(String(id));
};

tg.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
	//при клике на основную кнопку отправляем данные в строковом виде
});
</script>

<style module>
.voices {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.voice-item {
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
</style>
