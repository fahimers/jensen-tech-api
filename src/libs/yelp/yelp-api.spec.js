const axios = require('axios');
const YelpAPI = require('~libs/yelp'); // Adjust the import path as needed
const { YelpApiError } = require('~errors');
const logger = require('~utils/logger');

// Mock axios to simulate API responses
jest.mock('axios');

describe('YelpAPI', () => {
  let yelpAPI;

  beforeEach(() => {
    yelpAPI = new YelpAPI();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should search businesses successfully', async () => {
    const mockData = {
      businesses: [{ name: 'Business 1' }, { name: 'Business 2' }],
    };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await yelpAPI.searchBusinesses('restaurant', 'New York', 5);

    expect(axios.get).toHaveBeenCalledWith(
      `${yelpAPI.baseURL}/businesses/search`,
      {
        params: { term: 'restaurant', location: 'New York', limit: 5 },
        headers: { Authorization: `Bearer ${yelpAPI.token}` },
      },
    );

    expect(result).toEqual(mockData);
  });

  it('should handle API errors when searching businesses', async () => {
    const mockError = new Error('API error');
    axios.get.mockRejectedValue(mockError);

    await expect(
      yelpAPI.searchBusinesses('restaurant', 'New York', 5),
    ).rejects.toThrow(YelpApiError);

    expect(logger.error).toHaveBeenCalledWith(mockError);

    // You can also test the YelpApiError properties here
  });

  it('should get business details successfully', async () => {
    const mockBusiness = { name: 'Business 1', id: 'business_id' };
    axios.get.mockResolvedValue({ data: mockBusiness });

    const result = await yelpAPI.getBusinessDetails('business_id');

    expect(axios.get).toHaveBeenCalledWith(
      `${yelpAPI.baseURL}/businesses/business_id`,
      {
        headers: { Authorization: `Bearer ${yelpAPI.token}` },
      },
    );

    expect(result).toEqual(mockBusiness);
  });

  it('should handle API errors when getting business details', async () => {
    const mockError = new Error('API error');
    axios.get.mockRejectedValue(mockError);

    await expect(yelpAPI.getBusinessDetails('business_id')).rejects.toThrow(
      YelpApiError,
    );

    expect(logger.error).toHaveBeenCalledWith(mockError);

    // You can also test the YelpApiError properties here
  });
});
