const ServiceName = {
  WALLET: 'corpochain_wallet',
  FULL_NODE: 'corpochain_full_node',
  FARMER: 'corpochain_farmer',
  HARVESTER: 'corpochain_harvester',
  SIMULATOR: 'corpochain_full_node_simulator',
  DAEMON: 'daemon',
  PLOTTER: 'corpochain_plotter',
  TIMELORD: 'corpochain_timelord',
  INTRODUCER: 'corpochain_introducer',
  EVENTS: 'wallet_ui',
  DATALAYER: 'corpochain_data_layer',
  DATALAYER_SERVER: 'corpochain_data_layer_http',
} as const;

type ObjectValues<T> = T[keyof T];

export type ServiceNameValue = ObjectValues<typeof ServiceName>;

export default ServiceName;
