<template>
    <section id="SportsMultiBetsTabs" class="is-relative">
        <b-field class="search is-right">
            <b-input placeholder="Search by multi name"
                     type="search"
                     icon-pack="fal"
                     icon="search">
            </b-input>
        </b-field>
        <b-tabs v-model="activeTab" v-if="multiType===3">
            <b-tab-item label="Australia">
                <SportsMultiTypeTableList/>
            </b-tab-item>
            <b-tab-item label="All Region">
                <SportsMultiTypeTableList/>
            </b-tab-item>
        </b-tabs>
        <b-tabs v-model="activeTab" v-else>
            <b-tab-item label="USA">
                <SportsMultiTypeTableList/>
            </b-tab-item>
            <b-tab-item label="Australia">
                <SportsMultiTypeTableList/>
            </b-tab-item>
            <b-tab-item label="Rest of the World">
                <SportsMultiTypeTableList/>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script lang="ts" src="./SportsMultiBetsTabs.ts"></script>
