const utils = require('@strapi/utils');
const { ApplicationError } = utils.errors;

module.exports = {
  async beforeDelete(event) {
    const { model, params } = event;
    const data = await strapi.entityService.findOne(model.uid, params.where.id)

    if (data.preventDelete && data.preventDelete === true) {
      throw new ApplicationError('This item cannot be deleted');
    }
  },
};
