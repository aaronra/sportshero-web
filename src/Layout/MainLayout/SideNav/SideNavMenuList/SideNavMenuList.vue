<template>
    <section class="menu" id="side-nav-menu-list">
        <ul class="menu-list">
            <router-link @click.native="showSideNav()" class="p-y-10 is-flex is-align-item-center"
                         :to="{name:'Dashboard'}">
                <span class="m-l-10 m-r-20 icon dashboard"></span>
                <span>Dashboard</span>
            </router-link>
            <router-link class="p-y-10 is-flex is-align-item-center" @click.native="showSideNav()"
                         :to="{name:'Racing'}">
                <span class="m-l-10 m-r-20 icon horse-head"></span>
                <span>Racing</span>
            </router-link>
            <router-link class="p-y-10 is-flex is-align-item-center" @click.native="showSideNav()"
                         :to="{name:'Sports'}">
                <span class="m-l-10 m-r-20 icon helmet"></span>
                <span>Sports</span>
            </router-link>
            <router-link class="p-y-10 is-flex is-align-item-center" @click.native="showSideNav()"
                         :to="{name:'AvatarManagement'}">
                <span class="m-l-10 m-r-20 icon avatar"></span>
                <span>Avatar Management</span>
            </router-link>
            <router-link class="p-y-10 is-flex is-align-item-center" @click.native="showSideNav()"
                         :to="{name:'GuildManagement'}">
                <i class=" m-l-10 m-r-20 fas fa-users"></i>
                <span>Guild Management</span>
            </router-link>
        </ul>
    </section>
</template>

<script lang="ts" src="./SideNavMenuList.ts"></script>
