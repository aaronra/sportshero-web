<template>
    <section id="PublicLayout" class="hero">
        <div class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="column is-4 is-offset-4 is-paddingless">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./PublicLayout.ts"></script>

