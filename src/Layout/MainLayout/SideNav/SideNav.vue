<template>
    <aside id="side-nav" class="menu is-full-height" :class="{ 'is-active': navIsActive }">
        <SideNavUserProfile/>
        <SideNavMenuList/>
    </aside>
</template>

<script lang="ts" src="./SideNav.ts"></script>
