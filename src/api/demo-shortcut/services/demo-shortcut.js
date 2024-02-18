'use strict';

/**
 * demo-shortcut service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-shortcut.demo-shortcut');
