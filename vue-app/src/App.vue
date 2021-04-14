<template>
  <div class="container">
    <div class="card">
      <!-- Import Bootstrap -->
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossorigin="anonymous"
      />

      <!-- Main Header -->
      <QueueHeader />

      <!-- On Cutter -->
      <CutterHeader
        v-bind:onCutterRows="onQueue" 
      />
      <CutterTable 
        :onCutterRows="onCutter"
        :timeOnRows="timeOn"
        :timeRows="times"
        :cutTimeRows="cutTimes"
      />

      <!-- Sign Up Form -->
      <SignUpHeader />
      <SignUpForm 
        :onQueueRows="onQueue"
        :timeInRows="timeIn"
      />

      <!-- On Queue -->
      <OnQueueHeader />
      <OnQueueTable v-if="this.onQueue.length > 0"
        :onQueueRows="onQueue"
        :timeInRows="timeIn"
        :onCutterRows="onCutter"
        :timeOnRows="timeOn"
        :timeRows="times"
        :time="time"
      />
    </div>
  </div>
</template>

<script>
import CutterHeader from "./components/CutterHeader";
import CutterTable from "./components/CutterTable";
import OnQueueHeader from "./components/OnQueueHeader";
import OnQueueTable from "./components/OnQueueTable";
import QueueHeader from "./components/QueueHeader";
import SignUpForm from "./components/SignUpForm";
import SignUpHeader from "./components/SignUpHeader";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App',
  components: {
    CutterHeader,
    CutterTable,
    OnQueueHeader,
    OnQueueTable,
    QueueHeader,
    SignUpForm,
    SignUpHeader
  },
  data() {
    return {
      onQueue: [],
      onCutter: [],
      timeIn: [],
      timeOn: [],
      times: [],
      cutTimes: [],
      time: 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
