<template>
    <section id="MultiTableRowDetails">
        <template v-if="multiType === 1">

            <h4 class="m-y-5 title has-text-centered is-4 is-uppercase is-flex is-justify-content-center is-align-item-center">
                <span><i class="m-r-10 custom-icon horse-racing has-background-black"></i></span>
                <span>
                    horse racing - australia, new zealand, {{data.location}}
                </span></h4>
            <RacingMultiBetsPickTheWinnerList/>
        </template>
        <template v-else>
            <RacingSuperpectaList/>
        </template>
    </section>
</template>

<script lang="ts" src="./MultiTableRowDetails.ts"></script>
