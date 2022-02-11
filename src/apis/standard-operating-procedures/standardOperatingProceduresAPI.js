// utils
import { standardOperatingProceduresMockDataUtil } from "../../utils/standard-operating-procedures/standardOperatingProceduresMockDataUtil";

export function getSopResults(activeSop) {
  /**
   * use activeSop as param in GET API call
   */
  const mockResponse =
    standardOperatingProceduresMockDataUtil.sopsResults[activeSop];
  return new Promise((resolve) => setTimeout(() => resolve(mockResponse), 500));
}

export function getSopResult(payload) {
  /**
   * use id and activeSop as params in GET API call
   */
  const { id, activeSop } = payload;
  let mockResponse =
    standardOperatingProceduresMockDataUtil.sopsResults[activeSop];
  mockResponse = mockResponse.data.find((item) => item.id === id);
  mockResponse = {
    status: 200,
    data: mockResponse,
  };
  return new Promise((resolve) => setTimeout(() => resolve(mockResponse), 500));
}

export function createSop(payload) {
  /**
   * use payload as body in POST API call
   */
  const mockResponse = {
    status: 200,
    data: payload,
  };
  return new Promise((resolve) => setTimeout(() => resolve(mockResponse), 500));
}

export function updateSop(payload) {
  /**
   * use id as param and restData as body in PATCH API call
   * const { id, ...restData } = payload;
   */
  const mockResponse = {
    status: 200,
    data: payload,
  };
  return new Promise((resolve) => setTimeout(() => resolve(mockResponse), 500));
}
