<template>
  <div>
    <input v-model="number" type="number" />
    <button @click="addNumber">Add new number</button>
  </div>
</template>
<script>
import { emitter } from "../event-bus.js";

export default {
  name: "UsersComponent",
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    addNumber(newNumber) {
      console.log(newNumber);
      emitter.emit("number-added", Number(this.number));
    },
  },
};
</script>
