<template>
  <ul :class="$style.voices">
    <li v-for="voice in voices" :key="voice.voice_id" :class="$style['voice-item']">
      <p :class="$style['voice-item-block']">
        <span class="bold">{{ voice.name?.RU }}</span>
        <small class="gray">{{ voice.name.EN }}</small>
      </p>
      <p :class="$style['voice-item-block']">{{ voice.description.RU}}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onUpdated } from "vue";
import { useVoices } from "./hooks/useVoices";

const { voices } = useVoices();
const tg = window.Telegram?.WebApp

onUpdated(() => console.log(tg))
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
