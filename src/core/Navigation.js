const { Modules = {} } = require("./Based");
const { Navigation = {} } = Modules;
const { microAppName } = require("./Context").env;

const openTab = (options = {}) => Navigation.openTab({ appKey: microAppName, ...options });

const openMicroAppTab = (options = {}) => Navigation.openMicroAppTab({ appKey: microAppName, ...options });

export default { ...Navigation, openTab, openMicroAppTab };
