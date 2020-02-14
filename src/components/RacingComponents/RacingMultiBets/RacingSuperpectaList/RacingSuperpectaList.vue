<template>
    <section id="RacingSuperpectaList" class="columns is-flex is-multiline is-marginless">
        <div class="leg-item is-flex is-align-item-center" v-for="(item,index) in raceDetailList">
            <div class="image is-32x32 m-x-5">
                <img class="is-rounded" :src="item.avatar">
            </div>
            <div class="is-size-7">
                <p class="has-text-black">{{index + 1}}. {{item.name}}</p>
                <p>J: {{item.J}}</p>
                <p>T: {{item.T}}</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./RacingSuperpectaList.ts"></script>
