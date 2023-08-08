const areaEndpoints = {
  getAllAreas: `/setting/area/list`,
  getAreaById: (id) => `/setting/area/${id}`,
  addArea: `/setting/area/new`,
  updateArea: (id) => `/setting/area/update/${id}`,
  deleteArea: (id) => `/setting/area/delete/${id}`,
};

const tableEndpoints = {
  getAllTables: `/setting/table/list`,
  getTableById: (id) => `/setting/table/${id}`,
  addTable: `/setting/table/new`,
  updateTable: (id) => `/setting/table/update/${id}`,
  deleteTable: (id) => `/setting/area/delete/${id}`,
};

const deliveryPartnerEndpoints = {
  getAllDeliveryPartners: `/setting/deliveryPartner/list`,
  getDeliveryPartnerById: (id) => `/setting/deliveryPartner/${id}`,
  addDeliveryPartner: `/setting/deliveryPartner/new`,
  updateDeliveryPartner: (id) => `/setting/deliveryPartner/update/${id}`,
  deleteDeliveryPartner: (id) => `/setting/deliveryPartner/delete/${id}`
};

export { areaEndpoints, tableEndpoints, deliveryPartnerEndpoints };
