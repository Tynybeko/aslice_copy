<script>
import { Doughnut } from "vue-chartjs";

export default {
  props: ["monthLabels", "chartData"],
  extends: Doughnut,
  mounted() {
    const colorsArray = [
      "#AFA1CE",
      "#9482B3",
      "#7D699F",
      "#563C7E",
      "#442671",
      "#271A56",
      "#AAA3B1",
      "#97919E",
      "#79747E",
      "#6C6770",
      "#5E5B64",
      "#48474C"
    ];
    this.renderChart(
      {
        labels: this.monthLabels,

        datasets: [
          {
            backgroundColor: colorsArray,
            borderWidth: 2,
            data: this.chartData,
            hoverBorderWidth: 10,
            hoverBackgroundColor: colorsArray,
            hoverBorderColor: colorsArray,
            borderAlign: "center",
            borderColor: colorsArray
          }
        ]
      },
      {
        onClick: (evt, item) => {
          if (!item[0]) {
            return;
          }
          this.$emit("onClick", item[0]._index);
        },
        responsive: true,
        legend: {
          display: false
        },
        cutoutPercentage: 70,
        tooltips: {
          callbacks: {
            title: function(tooltipItem, data) {
              return data["labels"][tooltipItem[0]["index"]]
                ?.split("")
                .join(" ")
                .toUpperCase();
            },
            label: () => ""
          },

          backgroundColor: "#FFF",
          cornerRadius: 4,
          xPadding: 33,
          yPadding: 20,
          borderColor: "#fcfcfc",
          borderWidth: 1,
          titleFontSize: 12,
          titleFontFamily: "Avenir, Helvetica, Arial, sans-serif",
          titleSpacing: 10,
          titleAlign: "center",
          titleMarginBottom: -3,
          caretSize: 0,
          titleFontColor: "#442671",
          displayColors: false
        },
        padding: 6
      }
    );
  }
};
</script>
