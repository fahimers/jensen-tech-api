const axios = require('axios');
const { YelpApiError } = require('~src/errors');
const logger = require('~src/utils/logger');

class YelpAPI {
  constructor() {
    this.token = process.env.YELP_API_KEY; // Store the Yelp API key from environment variables
    this.baseURL = process.env.YELP_ENDPOINT; // Store the base URL for Yelp API from environment variables
  }

  // Asynchronous method to search for businesses
  async searchBusinesses(term, location, limit = 10) {
    const params = {
      location,
      limit,
    };

    if (term) params.term = term; // Add the search term to the parameters if provided

    try {
      // Make an HTTP GET request to Yelp API's business search endpoint
      const response = await axios.get(`${this.baseURL}/businesses/search`, {
        params, // Include the parameters in the request URL
        headers: {
          Authorization: `Bearer ${this.token}`, // Set the authorization header with the API key
        },
      });

      return response.data; // Return the response data (businesses)
    } catch (error) {
      logger.error(error);

      throw new YelpApiError(
        `Yelp API request failed: ${error.message}`,
        error.response.status,
      ); // Handle and throw an error if the request fails
    }
  }

  // Add more methods for other Yelp API endpoints as needed

  // Example method for getting business details by ID
  async getBusinessDetails(id) {
    try {
      // Make an HTTP GET request to Yelp API's business details endpoint for a specific business ID
      const response = await axios.get(`${this.baseURL}/businesses/${id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`, // Set the authorization header with the API key
        },
      });

      return response.data; // Return the response data (business details)
    } catch (error) {
      logger.error(error);

      throw new YelpApiError(
        `Yelp API request failed: ${error.message}`,
        error.response.status,
      ); // Handle and throw an error if the request fails
    }
  }
}

module.exports = YelpAPI; // Export the YelpAPI class for use in other parts of the application
