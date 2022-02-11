import uuid from "react-uuid";

export const standardOperatingProceduresMockDataUtil = {
  sopsResults: {
    pipette_calibration: {
      status: 200,
      data: [
        {
          id: "31cf06-ac24-848-1ab-c7bdde3058e0",
          config: {
            container: {
              size: 1000,
              unit: "ml",
            },
            volume: 100,
            iterations: 3,
          },
          readings: [123, 248, 4440, 84934, 8943],
          results: {
            mean: 2123,
            std: 23232,
            accuracy: 12312312,
            precision: 34234,
          },
          isCompleted: true,
        },
        {
          id: "31cf06-ac24-848-1ab-c7bdde3058e1",
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            volume: 100,
            iterations: 3,
          },
          readings: [],
          results: {
            mean: 0,
            std: 0,
            accuracy: 0,
            precision: 0,
          },
          isCompleted: false,
        },
        {
          id: "31cf06-ac24-848-1ab-c7bdde3058e2",
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            volume: 100,
            iterations: 3,
          },
          readings: [123, 248, 4440, 84934, 8943],
          results: {
            mean: 2123,
            std: 23232,
            accuracy: 12312312,
            precision: 34234,
          },
          isCompleted: true,
        },
        {
          id: "31cf06-ac24-848-1ab-c7bdde3058e3",
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            volume: 100,
            iterations: 3,
          },
          readings: [],
          results: {
            mean: 0,
            std: 0,
            accuracy: 0,
            precision: 0,
          },
          isCompleted: false,
        },
        {
          id: "31cf06-ac24-848-1ab-c7bdde3058e4",
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            volume: 100,
            iterations: 3,
          },
          readings: [],
          results: {
            mean: 0,
            std: 0,
            accuracy: 0,
            precision: 0,
          },
          isCompleted: false,
        },
        {
          id: "31cf06-ac24-848-1ab-c7bdde3058e5",
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            volume: 100,
            iterations: 3,
          },
          readings: [],
          results: {
            mean: 0,
            std: 0,
            accuracy: 0,
            precision: 0,
          },
          isCompleted: false,
        },
        {
          id: "31cf06-ac24-848-1ab-c7bdde3058e6",
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            volume: 100,
            iterations: 3,
          },
          readings: [],
          results: {
            mean: 0,
            std: 0,
            accuracy: 0,
            precision: 0,
          },
          isCompleted: false,
        },
      ],
    },
  },
};
