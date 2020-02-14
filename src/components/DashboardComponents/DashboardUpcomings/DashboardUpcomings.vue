<template>
    <section id="dashboard-upcomings">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title has-text-weight-normal">
                    Upcoming {{title}}
                </p>
            </header>
            <div class="card-content is-paddingless m-t-5">
                <DashboardUpcomingTable :dataList="dataList"/>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item p-y-5">
                    <router-link class="has-text-primary" :to="{name:title}">
                        <b>Show more</b>
                    </router-link>
                </p>
            </footer>
        </div>
    </section>
</template>

<script lang="ts" src="./DashboardUpcomings.ts"></script>

