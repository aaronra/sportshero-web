<template>
    <section id="AvatarTabs" class="is-relative">
        <b-tabs v-model="activeTab" class="m-x--15">
            <b-tab-item label="Pixels">
                <AvatarList class="p-15" :avatarList="avatarPixelList"/>
            </b-tab-item>

            <b-tab-item label="Upgraded">
                <AvatarList class="p-15" :avatarList="avatarUpgradedList"/>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script lang="ts" src="./AvatarTabs.ts"></script>
