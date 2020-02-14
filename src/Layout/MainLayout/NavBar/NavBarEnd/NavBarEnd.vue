<template>
    <section id="nav-bar-end" class="navbar-menu">
        <div class="navbar-end">
            <div class="navbar-item">
                <router-link :to="{name:'FlaggedMessages'}">
                    <i class="fas fa-cog"></i>
                </router-link>
            </div>
            <div class="navbar-item">
                <i class="fas fa-comments"></i>
            </div>
            <div class="navbar-item">
                <i class="fas fa-bell"></i>
            </div>
            <hr class="vertical-divider">
            <div class="navbar-item">
                <span class="icon"><i class="fal fa-fa-angle-down fa-lg"></i></span>
                <b-dropdown position="is-bottom-left"
                            aria-role="menu">
                    <div class="navbar-item pointer"
                         slot="trigger"
                         role="button">
                        <span>Admin</span>
                        <b-icon pack="fal"
                                icon="angle-down">
                        </b-icon>
                    </div>

                    <b-dropdown-item custom aria-role="menuitem">
                        Logged as <b>Admin</b>
                    </b-dropdown-item>
                    <hr class="dropdown-divider" aria-role="menuitem">
                    <b-dropdown-item has-link aria-role="menuitem">
                        <a @click="logOut()">
                            <b-icon pack="fal"
                                    icon="fa-sign-out-alt"></b-icon>
                            Logout
                        </a>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./NavBarEnd.ts"></script>
