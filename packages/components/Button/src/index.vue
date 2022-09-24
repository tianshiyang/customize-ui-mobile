<template>
  <div class="test">{{ props.title }}</div>
  <van-button type="primary" @click="alert">按钮</van-button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

const props = defineProps({
  title: {
    type: String,
    default: ""
  }
})

const alert = () => {
  console.log(1232321)
}
</script>

<script lang="ts">
export default {
  name: "TestButton"
}
</script>

<style scope>
.test {
  color: red;
  width: 200px;
  height: 200px;
  margin: auto auto;
  background: black;
}
</style>
