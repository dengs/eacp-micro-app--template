import modules from "./modules";
const { microAppName } = require("./Context").env;
const { Navigation } = modules;

const openTab = (options = {}) => Navigation.openTab({ appKey: microAppName, ...options });

const openMicroAppTab = (options = {}) => Navigation.openMicroAppTab({ appKey: microAppName, ...options });

export default { ...Navigation, openTab, openMicroAppTab };
