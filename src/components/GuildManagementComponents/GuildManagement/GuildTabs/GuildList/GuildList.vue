<template>
    <section id="GuildList">
        <div class="is-flex is-flex-wrap">
            <p class="m-10 has-text-centered" v-for="(imgUrl, index) in paginatedItems()">
                <router-link :to="{name:'GuildManagement.Profile', params:{id: index + 1}}">
                    <img :src="imgUrl" class="image avatar is-96x96 is-rounded"/>
                    <label>Guild {{index + 1}}</label>
                </router-link>
            </p>
        </div>
        <div class="level">
            <div class="level-left"></div>
            <div class="level-right">
                <div class="level-item">
                    <b-pagination
                            :total="total"
                            :current.sync="current"
                            :rounded="isRounded"
                            :per-page="perPage"
                            :icon-prev="prevIcon"
                            :icon-next="nextIcon"
                            aria-next-label="Next page"
                            aria-previous-label="Previous page"
                            aria-page-label="Page"
                            aria-current-label="Current page">
                    </b-pagination>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./GuildList.ts"></script>


