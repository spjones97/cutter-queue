<template>
  <div class="container">
    
  </div>
</template>

<script>
import CutterHeader from "./components/CutterHeader";
import CutterTable from "./components/CutterTable";
import LaserQueue from "./components/LaserQueue";
import OnQueueHeader from "./components/OnQueueHeader";
import OnQueueTable from "./components/OnQueueTable";
import QueueHeader from "./components/QueueHeader";
import SignUpForm from "./components/SignUpForm";
import SignUpHeader from "./components/SignUpHeader";

export default {
  name: 'App',
  components: {
    CutterHeader,
    CutterTable,
    LaserQueue,
    OnQueueHeader,
    OnQueueTable,
    QueueHeader,
    SignUpForm,
    SignUpHeader
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
