<template>
    <section id="SportsMultiTypeTableList">
        <b-table
                class="is-border-less is-table-header-hidden"
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
                <b-table-column field="game" width="140" centered>
                    <div class="game">
                        <div class="has-text-black">Game {{props.row.id}}</div>
                        <p v-if="multiType!==3" class="is-size-7">Head to Head</p>
                    </div>
                </b-table-column>
                <b-table-column field="leftBet" v-if="multiType !== 3" centered>
                    <div class="is-flex is-align-item-center is-justify-content-flex-end">
                        <span class="pointer m-x-10 is-mobile order-2" @click="isCardModalActive = true">
                            <i class="fal fa-plus-circle"></i></span>

                        <template v-if="multiType === 1">
                            <div class="is-flex">
                                <span class="box bet-margin">1-4</span>
                                <span class="box bet-margin">5-6</span>
                                <span class="box bet-margin">7-17</span>
                                <span class="box bet-margin">18+</span>
                                <span class="box bet-margin">7-18</span>
                                <span class="box bet-margin">18-69</span>
                            </div>
                        </template>
                        <template v-else-if="multiType=== 2">
                            <button class="button p-x-20 m-x-5 is-small is-rounded">Over</button>
                            <button class="button p-x-20 m-x-5 is-small is-rounded">Under</button>
                        </template>
                    </div>
                </b-table-column>
                <b-table-column field="vsTeam">
                    <section class="is-flex is-align-item-center"
                             :class="{'is-justify-content-center': multiType !== 3}">
                        <div class="is-flex is-align-item-center">
                            <div class="image is-32x32 m-x-5">
                                <img class="is-rounded" :src="props.row.avatar">
                            </div>
                            <div class="has-text-black">{{props.row.team1}}</div>
                        </div>
                        <div class="m-x-20">
                            vs
                        </div>
                        <div class="is-flex is-align-item-center">
                            <div class="image is-32x32 m-x-5 ">
                                <img class="is-rounded" :src="props.row.avatar">
                            </div>
                            <div class="has-text-black">{{props.row.team2}}</div>
                        </div>
                        <div class="m-l-20 is-flex is-align-item-center" v-if="multiType===3">
                            <v-popover
                                    trigger="click"
                                    placement="right"
                                    offset="15">
                                <!-- This will be the popover target (for the events and position) -->
                                <i class="fa fa-info-circle has-text-info is-size-5 pointer"></i>

                                <!-- This will be the content of the popover -->
                                <template slot="popover">
                                    <FirstGoalScorerToolTip :team="props.row"/>
                                </template>
                            </v-popover>

                        </div>
                    </section>
                </b-table-column>
                <b-table-column field="leftBet" v-if="multiType !== 3" centered>
                    <div class="is-flex is-align-item-center">
                        <template v-if="multiType === 1">
                            <div class="is-flex">
                                <span class="box bet-margin">1-4</span>
                                <span class="box bet-margin">5-6</span>
                                <span class="box bet-margin">7-17</span>
                                <span class="box bet-margin">18+</span>
                                <span class="box bet-margin">7-18</span>
                                <span class="box bet-margin">18-69</span>
                            </div>
                        </template>
                        <template v-else-if="multiType === 2">
                            <button class="button p-x-20 m-x-5 is-small is-rounded">Over</button>
                            <button class="button p-x-20 m-x-5 is-small is-rounded">Under</button>
                        </template>
                        <span class="pointer m-x-10" @click="isCardModalActive = true">
                            <i class="fal fa-plus-circle"></i></span>
                    </div>
                </b-table-column>
                <b-table-column field="action" class="action-td" width="100" centered>
                    <div class="action">
                        <i v-if="multiType===3" class="fal fa-edit p-x-10 pointer"
                           @click="isEditCardModalActive=true"></i>
                        <i v-else="multiType===3" class="fal fa-edit p-x-10 pointer"></i>
                        <i class="fal fa-trash-alt p-x-10"></i>
                    </div>
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
        <b-modal :active.sync="isCardModalActive" has-modal-card scroll="keep" :can-cancel="false">
            <MultiTypeAddModal :sports="selectedSport.sport" :multiType="multiType"/>
        </b-modal>
        <b-modal v-if="multiType===3" :active.sync="isEditCardModalActive" has-modal-card :can-cancel="false">
            <EditGameModal :sports="selectedSport.sport"/>
        </b-modal>
    </section>
</template>

<script lang="ts" src="./SportsMultiTypeTableList.ts"></script>

