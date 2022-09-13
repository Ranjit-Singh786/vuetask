<template>
  <div>
    <h1></h1>
    <h2 style="color:green;">Event Bus:::{{ numbers }}</h2>
  </div>
</template>
<script>
import { emitter } from "../event-bus.js";

export default {
  name: "SuspenseComponent",
  data() {
    return {
      numbers: [1, 2, 3],
    };
  },
  created() {
    emitter.on("number-added", (number) => {
      this.numbers.push(number);
    });
  },
};
</script>