import uuid from "react-uuid";

export const standardOperatingProceduresMockDataUtil = {
  sopsResults: {
    pipette_calibration: {
      status: 200,
      data: [
        {
          id: uuid(),
          config: {
            container: {
              size: 1000,
              unit: "ml",
            },
            iterations: 5,
          },
          readings: [123, 248, 4440, 84934, 8943],
          results: {
            mean: 2123,
            standard_deviation: 23232,
            accuracy: 12312312,
            precision: 34234,
          },
          isCompleted: true,
        },
        {
          id: uuid(),
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            iterations: 3,
          },
          readings: [123, 248, 4440],
          results: {
            mean: 2123,
            standard_deviation: 23232,
            accuracy: 12312312,
            precision: 34234,
          },
          isCompleted: false,
        },
        {
          id: uuid(),
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            iterations: 3,
          },
          readings: [123, 248, 4440],
          results: {
            mean: 2123,
            standard_deviation: 23232,
            accuracy: 12312312,
            precision: 34234,
          },
          isCompleted: false,
        },
        {
          id: uuid(),
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            iterations: 3,
          },
          readings: [123, 248, 4440],
          results: {
            mean: 2123,
            standard_deviation: 23232,
            accuracy: 12312312,
            precision: 34234,
          },
          isCompleted: false,
        },
        {
          id: uuid(),
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            iterations: 3,
          },
          readings: [123, 248, 4440],
          results: {
            mean: 2123,
            standard_deviation: 23232,
            accuracy: 12312312,
            precision: 34234,
          },
          isCompleted: false,
        },
        {
          id: uuid(),
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            iterations: 3,
          },
          readings: [123, 248, 4440],
          results: {
            mean: 2123,
            standard_deviation: 23232,
            accuracy: 12312312,
            precision: 34234,
          },
          isCompleted: false,
        },
        {
          id: uuid(),
          config: {
            container: {
              size: 800,
              unit: "ml",
            },
            iterations: 3,
          },
          readings: [123, 248, 4440],
          results: {
            mean: 2123,
            standard_deviation: 23232,
            accuracy: 12312312,
            precision: 34234,
          },
          isCompleted: false,
        },
      ],
    },
  },
};
