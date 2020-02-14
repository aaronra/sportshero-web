<template>
    <section id="AvatarList" class="is-flex is-flex-wrap">
        <p class=" m-10" v-for="imgUrl in avatarList">
            <b-tooltip label="Avatar Name">
                <router-link :to="{name:'AvatarManagement.Profile'}">
                    <img :src="getImgUrl(imgUrl)" class="image avatar is-96x96 is-rounded"/>
                </router-link>
            </b-tooltip>
        </p>
    </section>
</template>

<script lang="ts" src="./AvatarList.ts"></script>


