<template>
    <section id="AvatarProfile">
        <div class="is-flex is-justify-content-flex-end">
            <router-link :to="{name:'AvatarManagement.Profile'}" class="is-size-6">
                <i class="is-size-6 fal fa-edit p-x-5"></i> Edit Profile
            </router-link>
        </div>
        <AvatarProfileInfo :showTrendModal="showTrendModal"/>
        <b-modal :active.sync="isAvatarProfileTrendsModalActive" has-modal-card width="960" :can-cancel="false">
            <AvatarProfileTrendsModal />
        </b-modal>
        <AvatarProfileTable class="m-t-40" :dataList="dataList"/>
    </section>
</template>

<script lang="ts" src="./AvatarProfile.ts"></script>
