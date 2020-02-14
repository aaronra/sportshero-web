<template>
    <div id="AvatarProfileTrendsModal" class="modal-content">
        <div class="box">
            <i class="far fa-times-circle is-size-6 pointer has-text-grey-light" @click="$parent.close()"></i>
            <DashboardTrends/>
        </div>
    </div>
</template>

<script lang="ts" src="./AvatarProfileTrendsModal.ts"></script>
