import {Component, Prop, Vue} from 'vue-property-decorator';
// @ts-ignore
import numeral from 'numeral';

// @ts-ignore
import Chart from 'chart.js';

@Component({
  name: 'LineBarChart',
  components: {},
})
export default class LineBarChart extends Vue {
  // Component Props
  @Prop({}) readonly trends: any;
  // Data property

  // Lifecycle hook
  mounted() {
    this.roundedBarChart();
    const planetChartData = {
      type: 'roundedBar',
      data: {
        datasets: [{
          label: 'Number of Bets',
          yAxisID: 'A',
          backgroundColor: '#d3d3d3bf',
          data: this.trends.numberOfBets,
        }, {
          label: 'Today\'s Bets',
          yAxisID: 'B',
          data: this.trends.todaysBets,

          // Changes this dataset to become a line
          type: 'line',
          borderColor: '#00DAA2',
          fill: false,
        }],
        labels: this.trends.dates,
      },
      options: {
        barRoundness: 1,
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          position: 'top',
          align: 'start',
          display: true,
          labels: {
            boxWidth: 20,
          },
        },
        scales: {
          yAxes: [{
            id: 'A',
            type: 'linear',
            position: 'left',
            ticks: {
              beginAtZero: true,
              callback: (value: any) => numeral(value).format('$0,0'),
            },
          }, {
            id: 'B',
            type: 'linear',
            position: 'right',
            ticks: {
              beginAtZero: true,
              callback: (value: any) => numeral(value).format('$0,0'),
            },
          },
          ],
        },
      },
    };
    this.createChart('chart-trends', planetChartData);
  }

  // Component method

  roundedBarChart() {
    // draws a rectangle with a rounded top
    Chart.helpers.drawRoundedTopRectangle = (ctx: any, x: any, y: any, width: any, height: any, radius: any) => {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      // top right corner
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      // bottom right	corner
      ctx.lineTo(x + width, y + height);
      // bottom left corner
      ctx.lineTo(x, y + height);
      // top left
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    };

    Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
      draw() {
        const ctx = this._chart.ctx;
        const vm = this._view;
        let left;
        let right;
        let top;
        let bottom;
        let signX;
        let signY;
        let borderSkipped;
        let borderWidth = vm.borderWidth;

        if (!vm.horizontal) {
          // bar
          left = vm.x - vm.width / 2;
          right = vm.x + vm.width / 2;
          top = vm.y;
          bottom = vm.base;
          signX = 1;
          signY = bottom > top ? 1 : -1;
          borderSkipped = vm.borderSkipped || 'bottom';
        } else {
          // horizontal bar
          left = vm.base;
          right = vm.x;
          top = vm.y - vm.height / 2;
          bottom = vm.y + vm.height / 2;
          signX = right > left ? 1 : -1;
          signY = 1;
          borderSkipped = vm.borderSkipped || 'left';
        }

        // Canvas doesn't allow us to stroke inside the width so we can
        // adjust the sizes to fit if we're setting a stroke on the line
        if (borderWidth) {
          // borderWidth shold be less than bar width and bar height.
          const barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
          borderWidth = borderWidth > barSize ? barSize : borderWidth;
          const halfStroke = borderWidth / 2;
          // Adjust borderWidth when bar top position is near vm.base(zero).
          const borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
          const borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
          const borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
          const borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
          // not become a vertical line?
          if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
          }
          // not become a horizontal line?
          if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
          }
        }

        // calculate the bar width and roundess
        const barWidth = Math.abs(left - right);
        const roundness = this._chart.config.options.barRoundness || 0.5;
        const radius = barWidth * roundness * 0.5;

        // keep track of the original top of the bar
        const prevTop = top;

        // move the top down so there is room to draw the rounded top
        top = prevTop + radius;
        const barRadius = top - prevTop;

        ctx.beginPath();
        ctx.fillStyle = vm.backgroundColor;
        ctx.strokeStyle = vm.borderColor;
        ctx.lineWidth = borderWidth;

        // draw the rounded top rectangle
        Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - barRadius + 1), barWidth, bottom - prevTop, barRadius);

        ctx.fill();
        if (borderWidth) {
          ctx.stroke();
        }

        // restore the original top value so tooltips and scales still work
        top = prevTop;
      },
    });

    Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);

    Chart.controllers.roundedBar = Chart.controllers.bar.extend({
      dataElementType: Chart.elements.RoundedTopRectangle,
    });
  }

  createChart(chartId: string, chartData: { type: any; data: any; options: any; }) {
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    });
  }
}
