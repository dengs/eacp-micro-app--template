const { app: mainApp } = window.microApp.getData();

export const openMicroAppTab = ({ key, title, bread, appKey, params = {} } = {}) => {
  mainApp.openTab({ key, title, bread, appKey, params, isMicroApp: true });
};

export default { openMicroAppTab };
