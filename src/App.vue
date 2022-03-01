<template>

  <div id="app">
    <TitleBar />

    <mu-flex class="flex-wrapper" align-items="center">
      <mu-flex class="flex-demo" justify-content="center" fill>
        <MultipleXAxisLine />
      </mu-flex>
      <mu-flex class="flex-demo" justify-content="center" fill>
        <LargeAreaChart />
      </mu-flex>
      <mu-flex class="flex-demo" justify-content="center" fill></mu-flex>
    </mu-flex>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue'
import MultipleXAxisLine from './components/MultipleXAxisLine'
import LargeAreaChart from "./components/LargeAreaChart";


export default {
  name: 'App',
  components: {
      TitleBar, MultipleXAxisLine, LargeAreaChart
  },
  methods: {
  }
}
</script>

<style>
</style>
