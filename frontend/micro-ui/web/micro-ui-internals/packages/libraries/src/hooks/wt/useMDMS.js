import { MdmsService } from "../../services/elements/MDMS";
import { useQuery } from "react-query";

const useMDMS = (tenantId, moduleCode, type, config = {}) => {

  const queryConfig = { staleTime: Infinity, ...config };

  const useVehicleType = () => {
    return useQuery(
      "WT_VEHICLE_TYPE",
      () => MdmsService.getVehicleType(tenantId, moduleCode, type),
      queryConfig
    );
  };

  switch (type) {
    case "VehicleMakeModel":
      return useVehicleType();

    case "VehicleType":
      return useVehicleType();

    default:
      return null;
  }
};

export default useMDMS;