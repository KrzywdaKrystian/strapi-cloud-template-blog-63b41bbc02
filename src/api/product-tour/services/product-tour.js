'use strict';

/**
 * product-tour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-tour.product-tour');
