<template>
    <section id="MultiTableFilters">
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Location:">
                    <b-select placeholder="Select Location" expanded>
                        <option
                                v-for="option in location"
                                :value="option.id"
                                :key="option.id">
                            {{ option.location }}
                        </option>
                    </b-select>
                </b-field>
            </div>
            <div class="column is-two-fifths">
                <b-field horizontal label="Date/Time Picker:">
                    <p class="control has-icons-right">
                        <flat-pickr name="dateTimeFrom"
                                    placeholder="Select Date and Time"
                                    :config="config"
                                    editable
                                    class="input"
                                    v-model="date">
                        </flat-pickr>
                        <span class="icon is-small is-right">
                            <i class="far fa-calendar-alt"></i>
                        </span>
                    </p>
                </b-field>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Type of Multi:">
                    <b-select placeholder="Select Type" v-model="multiType" expanded>
                        <option
                                v-for="option in data"
                                :value="option.id"
                                :key="option.id">
                            {{ option.type }}
                        </option>
                    </b-select>
                </b-field>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./MultiTableFilters.ts"></script>
