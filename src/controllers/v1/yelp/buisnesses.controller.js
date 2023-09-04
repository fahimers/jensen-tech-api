const YelpAPI = require('@src/libs/yelp');

const api = new YelpAPI();

class BuisnessesController {
  async search(req, res, next) {
    try {
      const data = await api.searchBusinesses(
        req.query?.term,
        req.params.location,
      );

      res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async details(req, res, next) {
    try {
      const data = await api.getBusinessDetails(req.params.id);

      res.json(data);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = BuisnessesController;
