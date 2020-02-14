<template>
    <section id="dashboard-upcoming-table">
        <b-table
                :data="tableProperty.isEmpty ? [] : dataList"
                :bordered="tableProperty.isBordered"
                :striped="tableProperty.isStriped"
                :narrowed="tableProperty.isNarrowed"
                :hoverable="tableProperty.isHoverable"
                :focusable="tableProperty.isFocusable"
                :mobile-cards="tableProperty.hasMobileCards">

            <template slot-scope="props">
                <b-table-column field="icon">
                    <img :src="getIconUrl(props.row.icon)" class="is-small"/>
                </b-table-column>

                <b-table-column field="event">
                    {{ props.row.event }}
                </b-table-column>

                <b-table-column field="date">
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </b-table-column>

                <b-table-column field="time">
                    {{ props.row.time }}
                </b-table-column>

                <b-table-column view="viewPath">
                    <router-link :to="props.row.viewPath" class="has-text-primary">View</router-link>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                    icon="emoticon-sad"
                                    size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>
    </section>
</template>

<script lang="ts" src="./DashboardUpcomingTable.ts"></script>

