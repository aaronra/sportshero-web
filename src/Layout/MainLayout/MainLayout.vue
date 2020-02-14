<template>
    <section class="wrapper" :class="{'is-active':navIsActive}">
        <NavBar/>
        <section class="main-wrapper is-flex">
            <SideNav/>
            <main class="column main">
                <router-view></router-view>
            </main>
        </section>
    </section>
</template>

<script lang="ts" src="./MainLayout.ts"></script>
