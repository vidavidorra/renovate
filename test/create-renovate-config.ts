import RenovateConfig from './renovate-config';

const renovateConfig = new RenovateConfig('dist/test/config.json');
renovateConfig.write();
