'use strict';

/**
 * demo-shortcut router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::demo-shortcut.demo-shortcut');
