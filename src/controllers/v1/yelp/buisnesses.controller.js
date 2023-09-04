// Import the YelpAPI module from the '@src/libs/yelp' package
const YelpAPI = require('@src/libs/yelp');

// Create an instance of the YelpAPI class
const api = new YelpAPI();

// Define a class named BuisnessesController to handle business-related operations
class BuisnessesController {
  // Define an asynchronous method named 'search' to search for businesses
  async search(req, res, next) {
    try {
      // Use the 'api' instance to call the 'searchBusinesses' method with parameters from the request
      const data = await api.searchBusinesses(
        req.query?.term, // Search term from the request query parameters
        req.params.location // Location from the request parameters
      );

      // Send the retrieved data as a JSON response
      res.json(data);
    } catch (e) {
      // Handle errors by passing them to the 'next' middleware
      next(e);
    }
  }

  // Define an asynchronous method named 'details' to retrieve business details
  async details(req, res, next) {
    try {
      // Use the 'api' instance to call the 'getBusinessDetails' method with the business ID from the request parameters
      const data = await api.getBusinessDetails(req.params.id);

      // Send the retrieved data as a JSON response
      res.json(data);
    } catch (e) {
      // Handle errors by passing them to the 'next' middleware
      next(e);
    }
  }
}

// Export the BuisnessesController class for use in other parts of the application
module.exports = BuisnessesController;