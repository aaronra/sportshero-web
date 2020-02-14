<template>
    <section id="dashboard">
        <div class="columns is-multiline">
            <div class="column is-12 p-y-0">
                <h3 class="title is-size-5">Pick A Winner</h3>
            </div>
            <div class="column is-3">
                <DashboardBets v-if="dashboardSummary.numberOfBets" title="Number of Bets"
                               :betCount="dashboardSummary.numberOfBets"></DashboardBets>
                <section class="card p-50" v-else>
                    <b-loading :is-full-page="false" :active="true"></b-loading>
                </section>
            </div>
            <div class="column is-3">
                <DashboardBets v-if="dashboardSummary.totalHold" title="Total Hold"
                               :betCount="dashboardSummary.totalHold"/>
                <section class="card p-50" v-else>
                    <b-loading :is-full-page="false" :active="true"></b-loading>
                </section>
            </div>
            <div class="column is-3">
                <DashboardBets v-if="dashboardSummary.averageBetSize" title="Average Bet Size"
                               :betCount="dashboardSummary.averageBetSize"/>
                <section class="card p-50" v-else>
                    <b-loading :is-full-page="false" :active="true"></b-loading>
                </section>
            </div>
            <div class="column is-3">
                <DashboardBets v-if="dashboardSummary.uniqueCustomers" title="Number of Unique Customers"
                               :betCount="dashboardSummary.uniqueCustomers"/>
                <section class="card p-50" v-else>
                    <b-loading :is-full-page="false" :active="true"></b-loading>
                </section>
            </div>
            <div class="column is-12">
                <DashboardTrends class="card"/>
            </div>
            <div class="column is-6">
                <DashboardUpcomings title="Racing"/>
            </div>
            <div class="column is-6">
                <DashboardUpcomings title="Sports"/>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./Dashboard.ts"></script>

