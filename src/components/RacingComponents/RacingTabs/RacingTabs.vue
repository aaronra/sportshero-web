<template>
    <section id="RacingTabs" class="is-relative">
        <b-field class="search is-right">
            <b-input placeholder="Search by multi name"
                     type="search"
                     icon-pack="fal"
                     icon="search">
            </b-input>
        </b-field>
        <b-tabs v-model="activeTab">
            <b-tab-item label="Ongoing">
                <MultiTableList :dataList="racingOngoingTableList" class="m-t--1"/>
            </b-tab-item>

            <b-tab-item label="Pending">
                <MultiTableList :dataList="racingPendingTableList" class="m-t--1"/>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script lang="ts" src="./RacingTabs.ts"></script>
