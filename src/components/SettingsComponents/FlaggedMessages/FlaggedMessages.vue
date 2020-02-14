<template>
    <section id="FlaggedMessages">
        <h4 class="title is-4">Flagged Messages</h4>
        <div class="is-relative">
            <b-field class="search is-right">
                <b-input placeholder="Search"
                         type="search"
                         icon-pack="fal"
                         icon="search">
                </b-input>
            </b-field>
            <b-tabs>
                <b-tab-item label="Blocked">
                    <FlaggedTableList :dataList="blockedList"></FlaggedTableList>
                </b-tab-item>

                <b-tab-item label="Unblocked">
                    <FlaggedTableList :dataList="unblockedList"></FlaggedTableList>
                </b-tab-item>
            </b-tabs>
        </div>
    </section>
</template>

<script lang="ts" src="./FlaggedMessages.ts"></script>
