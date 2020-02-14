<template>
    <section id="dashboard-bets">
        <div class="card">
            <header class="card-header is-box-shadow-less">
                <p class="card-header-title has-text-weight-normal">
                    {{title}}
                </p>
            </header>
            <div class="card-content p-x-15">
                <div class="columns">
                    <div class="column is-flex is-justify-content-space-between">
                       <span>
                            <p class="is-size-4	has-text-weight-semibold">
                            {{betCount| addComma}}
                        </p>
                        <p class="is-size-7 has-text-weight-semibold has-text-danger">
                            <i class="fas fa-long-arrow-alt-down"></i>
                            <span class="m-l-5">33.8%</span>
                        </p>
                       </span>

                        <!--<span class="sparkline">
          <span class="index"><span class="count" style="height: 27%;">(60,</span> </span>
          <span class="index"><span class="count" style="height: 97%;">220,</span> </span>
          <span class="index"><span class="count" style="height: 62%;">140,</span> </span>
          <span class="index"><span class="count" style="height: 35%;">80,</span> </span>
          <span class="index"><span class="count" style="height: 49%;">110,</span> </span>
          <span class="index"><span class="count" style="height: 40%;">90,</span> </span>
          <span class="index"><span class="count" style="height: 80%;">180,</span> </span>
          <span class="index"><span class="count" style="height: 62%;">140,</span> </span>
          <span class="index"><span class="count" style="height: 53%;">120,</span> </span>
          <span class="index"><span class="count" style="height: 71%;">160,</span> </span>
          <span class="index"><span class="count" style="height: 78%;">175,</span> </span>
          <span class="index"><span class="count" style="height: 100%;">225,</span> </span>
          <span class="index"><span class="count" style="height: 78%;">175,</span> </span>
          <span class="index"><span class="count" style="height: 56%;">125)</span> </span>
        </span>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./DashboardBets.ts"></script>
