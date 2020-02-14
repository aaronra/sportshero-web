<template>
    <section id="AvatarTabs" class="is-relative">
        <b-field class="search is-right">
            <b-input placeholder="Search Guild"
                     type="search"
                     icon-pack="fal"
                     icon="search">
            </b-input>
        </b-field>
        <b-tabs v-model="activeTab" class="m-x--15">
            <b-tab-item label="Guilds">
                <GuildList class="p-15"/>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script lang="ts" src="./GuildTabs.ts"></script>
