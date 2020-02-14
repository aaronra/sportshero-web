<template>
    <section id="MultiTableList">
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
                <b-table-column field="name" label="Multi Name" centered>
                    {{props.row.name}}
                </b-table-column>

                <b-table-column field="type" label="Multi Type" centered>
                    {{props.row.type}}
                </b-table-column>

                <b-table-column field="description" label="Description" centered>
                    {{props.row.description}}
                </b-table-column>

                <b-table-column field="location" label="Location" centered>
                    <span class="is-capitalized">{{props.row.location}}</span>
                </b-table-column>

                <b-table-column field="startTime" label="Start Time" centered>
                    {{props.row.startTime}}
                </b-table-column>
                <b-table-column field="startTime" label="End Time" centered>
                    {{props.row.endTime}}
                </b-table-column>
                <b-table-column field="startTime" label="Status" centered>
                    {{props.row.status}}
                </b-table-column>
                <b-table-column v-if="props.row.status === 'Pending'" label="Action" centered>
                    <i class="fal fa-edit p-x-10"></i>
                    <i class="fal fa-trash-alt p-x-10"></i>
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

<script lang="ts" src="./MultiTableList.ts"></script>


