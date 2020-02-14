<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="@/assets/logo.png"/>
            </a>

            <a role="button" class="navbar-burger burger"
               @click="showSideNav()"
               :class="{ 'is-active': navIsActive }" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <b-input placeholder="Search..."
                             type="search"
                             icon-pack="fal"
                             icon="fa-search">
                    </b-input>
                </div>
            </div>
        </div>
        <NavBarEnd/>
    </nav>
</template>

<script lang="ts" src="./NavBar.ts"></script>
