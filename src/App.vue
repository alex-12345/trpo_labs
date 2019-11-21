<template>
<div class="wrapper">
    <div class="select_wrapper">
        <h1>Choose your country...</h1>
        <select v-model="selected_country">
            <option v-for="option in countries" v-bind:value="option.code"> {{option.name}}</option>
        </select>
        <img v-if="selected_country" v-bind:src="getURL" />
    </div>
</div>
</template>

<script>
import {countries} from "./js/countries";


export default {
    name: 'app',
    data( ) {
        return {
            selected_country: null,
            countries: [{name:'', key:""}]
        }  
    },
    created(){
    this.countries = countries();
    },
    computed: {
    getURL( ){
      return "https://www.countryflags.io/" + this.selected_country + "/flat/64.png";
    }
  }
}
</script>

<style>
@import "./css/style.css";
</style>