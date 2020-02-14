<template>
    <section id="SportsTabs" class="is-relative">
        <b-field class="search is-right">
            <b-input placeholder="Search by multi name"
                     type="search"
                     icon-pack="fal"
                     icon="search">
            </b-input>
        </b-field>
        <b-tabs v-model="activeTab">
            <b-tab-item label="Ongoing">
                <MultiTableList :dataList="onGoingDataList" class="m-t--1"/>
            </b-tab-item>

            <b-tab-item label="Pending">
                <MultiTableList :dataList="pendingDataList" class="m-t--1"/>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script lang="ts" src="./SportsTabs.ts"></script>
