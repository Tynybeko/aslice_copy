import api from "@/service/api";
import { errorHandler } from "@/utils/errorHandler";
import swal from "sweetalert2";
import { downloadFile } from "@/utils/files";

export const actions = {
  start({ commit }) {
    let quarter = 0;
    const quarters = [];
    const quartersProducer = [];

    const date = new Date();
    const currentYear = date.getUTCFullYear();
    const month = date.getUTCMonth();

    for (let year = currentYear; year >= 2021; year -= 1) {
      const currentYearQuarters = [
        // {
        //   label: `${year} - Year (Jan - Dec)`,
        //   from: `${year}-01-01`,
        //   to: `${year}-12-31`
        // },
        {
          label: `${year} - Q4 (Oct, Nov, Dec)`,
          from: `${year}-10-01`,
          to: `${year}-12-31`
        },
        {
          label: `${year} - Q3 (Jul, Aug, Sep)`,
          from: `${year}-07-01`,
          to: `${year}-09-30`
        },
        {
          label: `${year} - Q2 (Apr, May, Jun)`,
          from: `${year}-04-01`,
          to: `${year}-06-30`
        },
        {
          label: `${year} - Q1 (Jan, Feb, Mar)`,
          from: `${year}-01-01`,
          to: `${year}-03-31`
        }
      ];
      const currentYearQuartersProducer = [
        {
          label: `${year} - Q4 (Oct, Nov, Dec)`,
          from: `${year}-10-1`,
          to: `${year}-12-31`
        },
        {
          label: `${year} - Q3 (Jul, Aug, Sep)`,
          from: `${year}-07-01`,
          to: `${year}-09-30`
        },
        {
          label: `${year} - Q2 (Apr, May, Jun)`,
          from: `${year}-04-01`,
          to: `${year}-06-30`
        },
        {
          label: `${year} - Q1 (Jan, Feb, Mar)`,
          from: `${year}-01-01`,
          to: `${year}-03-31`
        }
      ];
      if (year === currentYear) {
        quarter = Math.floor((month + 3) / 3);
        currentYearQuarters.splice(0, currentYearQuarters.length - quarter);
        currentYearQuartersProducer.splice(
          0,
          currentYearQuartersProducer.length - quarter
        );
      }
      quarters.push(...currentYearQuarters);
      quartersProducer.push(...currentYearQuartersProducer);
    }
    commit("INIT_DATE_RANGES_PRODUCER", {
      fieldName: "quartersProducer",
      quartersProducer
    });
    commit("INIT_DATE_RANGES", { fieldName: "quarters", quarters });
  },

  async init({ commit }, { djTotalAmount, producerTotalAmount }) {
    commit("INIT_TOTAL_AMOUNT", {
      fieldName: "djTotalAmount",
      totalAmount: djTotalAmount
    });

    commit("INIT_TOTAL_AMOUNT", {
      fieldName: "producerTotalAmount",
      totalAmount: producerTotalAmount
    });
  },

  async loadReport(commit, { apiMethod, userId, from, to, role, filename }) {
    swal.fire({
      width: "425px",
      padding: 0,
      html: `
        <h2 class="complicated-modal__title mb-4 mt-5 text-left complicated-modal__item">Generating Report</h2>
        <p class="mb-4 text-left complicated-modal__item">This process can take a few minutes.</p>
        <p class="pb-4 text-left complicated-modal__item">Please do not close this window or click the back button in your browser.</p>
        <div class="background-gray mt-4 h-70 border-bottom-4"></div>      
      `,
      showConfirmButton: false,
      timerProgressBar: true
    });
    const response = await api[apiMethod](from, to, userId);
    try {
      let title = "";
      let description = "";
      if (role === "dj") {
        title = "DJ";
        description =
          "There are no playlists to report from the chosen quarter. Please select another date range.";
      }
      if (role === "producer") {
        title = "Producer";
        description =
          "There are no track plays to report from the chosen quarter. Please select another date range.";
      }
      if (role === "promoter") {
        title = "Promoter";
        description =
          "There are no playlists to report from the chosen quarter. Please select another date range.";
      }
      errorHandler(
        response,
        () => {
          console.log(response.Data.type);
          const blob = new Blob([response.Data], {
            type: "application/pdf"
          });
          swal.close();
          downloadFile(blob, filename);
        },
        () => {
          swal.fire({
            width: "425px",
            padding: 0,
            html: `
              <h2 class="complicated-modal__title mb-4 mt-5 text-left complicated-modal__item">${title} accounting Message</h2>
              <p class="mb-4 text-left complicated-modal__item">${description}</p>
            `,
            customClass: "custom",
            cancelButtonAriaLabel: "close",
            cancelButtonText: "close",
            cancelButtonColor: "white",
            showCancelButton: false,
            timerProgressBar: true
          });
        }
      );
    } catch (error) {
      swal.fire({
        icon: "error",
        text: error.message
      });
    }
  }
};
