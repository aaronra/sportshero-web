<template>
    <section id="FlaggedTableList">
        <b-table
                class="is-border-less is-medium"
                ref="table"
                detailed
                :show-detail-icon="showDetailIcon"
                :data="tableProperty.isEmpty ? [] : dataList"
                :bordered="tableProperty.isBordered"
                :striped="tableProperty.isStriped"
                :narrowed="tableProperty.isNarrowed"
                :hoverable="tableProperty.isHoverable"
                :loading="isLoading"
                :focusable="tableProperty.isFocusable"
                :paginated="tableProperty.pagination.paginated"
                :per-page="tableProperty.pagination.perPage"
                :mobile-cards="tableProperty.hasMobileCards">
            <template slot-scope="props">
                <b-table-column field="from" label="From" centered>
                    {{props.row.from}}
                </b-table-column>
                <b-table-column field="message" label="Message" centered>
                    {{props.row.message}}
                </b-table-column>
                <b-table-column field="dateSent" label="Date Sent" centered>
                    {{props.row.dateSent}}
                </b-table-column>
                <b-table-column field="reason" label="Reason" centered>
                    {{props.row.reason}}
                </b-table-column>
                <b-table-column label="Action" centered>
                    <template v-if="props.row.status === 'blocked'">
                        <button class="button is-warning m-x-5">Unblock</button>
                        <button class="button is-outlined m-x-5">Cancel</button>
                    </template>
                    <template v-else>
                        <button class="button is-danger m-x-5">Block</button>
                        <button class="button is-outlined m-x-5">Cancel</button>
                    </template>

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
            <MultiTableRowDetails :data="props.row" slot="detail" slot-scope="props"/>
        </b-table>
    </section>
</template>

<script lang="ts" src="./FlaggedTableList.ts"></script>
