<template>
  <div class="container">
    <div class="card">
      <!-- Main Header -->
      <h1 class="card-header main-header" style="text-align: center;">
        <img style="margin-right: 55px;" src="./assets/beam-logo.png" alt="">
        LASER CUTTER QUEUE
      </h1>

      <!-- On Cutter -->
      <CutterHeader />
      <CutterTable />

      <!-- Queue Header -->
      <QueueHeader />

      <!-- Sign Up Form -->
      <SignUpHeader />
      <SignUpForm />

      <!-- On Queue -->
      <OnQueueHeader />
      <OnQueueTable />
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
