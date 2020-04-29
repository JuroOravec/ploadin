import InstanceManager from 'instance-manager';

import type { Instance } from '../types';

/**
 * Entity that provides us with the access to classes and their instances
 */
export default new InstanceManager<Instance>();
