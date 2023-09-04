const axios = require('axios');
const { YelpApiError } = require('@src/errors');
const logger = require('@src/utils/logger');

class YelpAPI {
  constructor() {
    this.token = process.env.YELP_API_KEY;
    this.baseURL = process.env.YELP_ENDPOINT;
  }

  async searchBusinesses(term, location, limit = 10) {
    const params = {
      location,
      limit,
    };

    if (term) params.term = term;

    try {
      const response = await axios.get(`${this.baseURL}/businesses/search`, {
        params,
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      return response.data;
    } catch (error) {
      logger.error(error);

      throw new YelpApiError(
        `Yelp API request failed: ${error.message}`,
        error.response.status,
      );
    }
  }

  // Add more methods for other Yelp API endpoints as needed

  // Example method for getting business details by ID
  async getBusinessDetails(id) {
    try {
      const response = await axios.get(`${this.baseURL}/businesses/${id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      return response.data;
    } catch (error) {
      logger.error(error);

      throw new YelpApiError(`Yelp API request failed: ${error.message}`);
    }
  }
}

module.exports = YelpAPI;
