<template>
    <section id="dashboard-trends">
        <header class="card-header is-box-shadow-less">
            <p class="card-header-title has-text-weight-normal">
                Trends
            </p>
            <b-dropdown v-model="isPublic" aria-role="list" class="is-flex is-align-item-center p-15 p-b-0">
                <button class="button is-primary is-outlined is-rounded has-text-grey" type="button" slot="trigger">
                    <template v-if="isPublic">
                        <span>Last 30 Days</span>
                    </template>
                    <template v-else>
                        <span>Friends</span>
                    </template>
                    <b-icon pack="fal"
                            icon="angle-down">
                    </b-icon>
                </button>

                <b-dropdown-item :value="true" aria-role="listitem">
                    <div class="media">
                        <b-icon class="media-left" icon="earth"></b-icon>
                        <div class="media-content">
                            <h3>Last 30 Days</h3>
                        </div>
                    </div>
                </b-dropdown-item>

                <b-dropdown-item :value="false" aria-role="listitem">
                    <div class="media">
                        <b-icon class="media-left" icon="account-multiple"></b-icon>
                        <div class="media-content">
                            <h3>test</h3>
                        </div>
                    </div>
                </b-dropdown-item>
            </b-dropdown>
        </header>
        <LineBarChart v-if="dashboardTrends" :trends="dashboardTrends"/>
        <section class="p-50" v-else>
            <b-loading :is-full-page="false" :active="true"></b-loading>
        </section>
    </section>
</template>

<script lang="ts" src="./DashboardTrends.ts"></script>
