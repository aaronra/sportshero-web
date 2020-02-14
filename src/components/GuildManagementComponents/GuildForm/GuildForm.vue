<template>
    <section id="GuildForm">
        <div class="is-flex is-justify-content-flex-end">
            <button @click="updateGuild()" class="button is-primary is-rounded p-x-50 is-uppercase"
                    v-if="isEditMode===true">Update
            </button>
            <button class="button is-primary is-rounded p-x-50 is-uppercase" v-else>create
            </button>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Guild Name:">
                    <b-input placeholder="Type Name" v-model="info.name"></b-input>
                </b-field>
            </div>
            <div class="column is-one-third">
                <b-field horizontal label="Active Time:">
                    <b-input placeholder="Text" v-model="info.activeTime"></b-input>
                </b-field>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal class="file" label="Upload Guild Image:">
                    <b-upload v-model="avatar.file" native>
                        <a class="button is-primary is-rounded is-outlined">
                            <span>Choose File</span>
                        </a>
                    </b-upload>
                    <span class="file-name" v-if="avatar.file">
                  {{ avatar.file.name }}
                   </span>
                    <span class="file-name has-text-grey-light" v-else>
                        No Selected
                    </span>
                </b-field>
            </div>
            <div class="column is-one-third">
                <b-field horizontal label="Minimum Bet:">
                    <b-input placeholder="Type Bet" v-model="info.bet"></b-input>
                    <b-input placeholder="Type Amount" v-model="info.amount"></b-input>
                </b-field>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Member Limit:">
                    <b-input placeholder="Type Limit" v-model="info.memberLimit"></b-input>
                </b-field>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Description:" class="is-align-item-baseline">
                    <b-input custom-class="no-resize" type="textarea" placeholder="Type Description"
                             v-model="info.description"></b-input>
                </b-field>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./GuildForm.ts"></script>
