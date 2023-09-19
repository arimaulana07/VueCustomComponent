<script setup>
  import { ref, onMounted } from "vue";
  const baseURL = 'https://booking.royalsignature.co.id/api/frame/';
  const departure = ref({});
  const destinations = ref({});
  const selectedDeparture = ref(40);
  const date = ref(null);

  const selectDeparture = async () => {
    console.log(selectedDeparture.value);
     const response = await fetch(`${baseURL}tujuan/${selectedDeparture.value}`);
     const json = await response.json();
     destinations.value = json.tujuan;
     console.log('this is destinations', destinations.value);
  } 

  const dateChange = () => {
    console.log(date.value);
  }

  onMounted( async () => {
    const responseDeparture = await fetch(baseURL + 'asal');
    const jsonDeparture = await responseDeparture.json();
    await selectDeparture();
   
    departure.value = jsonDeparture;
  });
</script>

<template>
  Asal
  <select @change="selectDeparture" v-model="selectedDeparture" v-html="departure.asal"></select><br>

  Tujuan
  <select  v-html="destinations"></select><br>

  Jumlah Penumpang
  <select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select><br>

  Tanggal Berangkat
  <input @change="dateChange" v-model="date" type="date">
</template>

<style scoped>
  .fontCol {
    color: red;
  }
</style>
