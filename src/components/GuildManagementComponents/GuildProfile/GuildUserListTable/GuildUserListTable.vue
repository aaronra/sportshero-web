<template>
    <section id="GuildUserListTable">
        <b-table
                class="is-border-less is-medium"
                :data="tableProperty.isEmpty ? [] : dataList"
                :bordered="tableProperty.isBordered"
                :striped="tableProperty.isStriped"
                :narrowed="tableProperty.isNarrowed"
                :hoverable="tableProperty.isHoverable"
                :loading="tableProperty.isLoading"
                :focusable="tableProperty.isFocusable"
                :paginated="tableProperty.pagination.paginated"
                :per-page="tableProperty.pagination.perPage"
                :mobile-cards="tableProperty.hasMobileCards">
            <template slot-scope="props">
                <b-table-column field="Users" label="Users" centered>
                    {{props.row.user}}
                </b-table-column>
                <b-table-column field="Email" label="Email" centered>
                    {{props.row.email}}
                </b-table-column>
                <b-table-column field="Joined Date" label="Joined Date" centered>
                    {{props.row.dateGranted}}
                </b-table-column>
                <b-table-column field="Bets" label="Bets" centered>
                    {{props.row.winnings}}
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

<script lang="ts" src="./GuildUserListTable.ts"></script>
