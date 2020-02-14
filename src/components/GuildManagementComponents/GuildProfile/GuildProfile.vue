<template>
    <section id="GuildProfile">
        <CreateGuild :guildInfo="guildInfo" v-if="isEditMode"/>
        <GuildProfileInfo :guildInfo="guildInfo" v-else/>
        <GuildUserListTable class="m-t-40" :dataList="dataList"/>
    </section>
</template>

<script lang="ts" src="./GuildProfile.ts"></script>
