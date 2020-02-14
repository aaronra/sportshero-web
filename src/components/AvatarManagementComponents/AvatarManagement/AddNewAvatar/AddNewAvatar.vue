<template>
    <section id="AddNewAvatar">
        <div class="is-flex is-justify-content-flex-end">
            <button class="button is-primary is-rounded p-x-50 is-uppercase">add</button>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Avatar Name:">
                    <b-input v-model="avatar.name" placeholder="Type Name"></b-input>
                </b-field>
            </div>
            <div class="column is-two-fifths">
                <b-field custom-class="is-size-7" horizontal>
                    <b-numberinput v-model="avatar.dateTime" :controls="false"
                                   placeholder="Type Number"></b-numberinput>
                    <template slot="label">
                        <p>Winning Bets to gain</p>
                        <p>this avatar:</p>
                    </template>
                </b-field>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal class="file" label="Upload Avatar:">
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
        </div>

    </section>
</template>

<script lang="ts" src="./AddNewAvatar.ts"/>
