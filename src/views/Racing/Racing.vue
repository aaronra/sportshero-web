<template>
    <section id="racing" class="card">
        <div class="card-content p-x-15">
            <div class="is-flex is-justify-content-flex-end">
                <router-link :to="{name:'Racing.MultiBets'}" class="button is-primary is-outlined p-x-25 is-rounded">
                    Create Multi
                </router-link>
            </div>
            <MultiTableFilters tabTitle="racing"/>
            <RacingTabs class="m-t-50"/>
        </div>
    </section>
</template>

<script lang="ts" src="./Racing.ts"></script>

