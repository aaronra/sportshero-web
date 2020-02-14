<template>
    <section id="AvatarProfileInfo">
        <div class="columns">
            <div class="column is-3 is-justify-content-flex-end is-flex-tablet">
                <figure class="image is-96x96 m-0">
                    <img src="https://bulma.io/images/placeholders/96x96.png" class="is-rounded">
                </figure>
            </div>
        </div>
        <dl class="columns is-multiline">
            <dt class="column is-3 p-b-0">
                Avatar Name:
            </dt>
            <dd class="column is-9 p-b-0">
                Racing Avatar
            </dd>
            <dt class="column is-3 p-b-0">
                Date Upload:
            </dt>
            <dd class="column is-9 p-b-0">
                May 1, 2016
            </dd>
            <dt class="column is-3 p-b-0">
                Winning bets to gain this avatar:
            </dt>
            <dd class="column is-9 p-b-0">
                20
            </dd>
            <dt class="column is-3 p-b-0">
                Total No. of User:
            </dt>
            <dd class="column is-9 p-b-0">
                30 <i class="fad fa-chart-bar has-text-primary pointer" @click="showTrendModal()"></i>
            </dd>
        </dl>
    </section>
</template>

<script lang="ts" src="./AvatarProfileInfo.ts"></script>
