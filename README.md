# jensen-tech-api
A tech test for Jensen Education

Task **one** should be found here: 
https://www.db-fiddle.com/f/85wKWxy4FKrziaT4TLgTZZ/1
![image](https://github.com/fahimers/jensen-tech-api/assets/29772677/63d4a081-f803-46f5-b5c2-7e9943933333)

![image](https://github.com/fahimers/jensen-tech-api/assets/29772677/76014569-3652-49d5-ac5e-93c3fbd8c0ef)



Task **two** is in this github repo.
![image](https://github.com/fahimers/jensen-tech-api/assets/29772677/b181989f-ea43-4bd8-83af-193fadf2dd14)

```
# Yelp API Node.js App

This Node.js application allows you to search for businesses and get business details from the Yelp API.
It is built using the Express framework and uses EJS for templating.

## Prerequisites

To run this application, you will need the following:

* Node.js installed on your system
* A Yelp API key (you can get one for free at https://www.yelp.com/developers/v3/manage_app)

## Installation

1. Clone this repository to your local machine.
2. Install the dependencies by running **npm install**.
3. Create a `.env` file in the root directory of the project, you can create it from env.example and
add your Yelp API key to it. The format of the `.env` file should be as follows:

# App >>
NODE_ENV=development
PORT=3000
# << App

# JWT >>
JWT_SECRET=secret
JWT_TTL=24h
# << JWT

# Yelp public API
YELP_API_KEY=fxITvnxV2kVzizZd5rGcdE3UX7-Jx43T4iAeVtwEzuKSGljN8NXyPVHuTs8L72FiBpPlmqjyflp7z0mXk0uuEuLEqBs7GbWN2VF-laR9aS41fNQ8HYtw1Uq4WR31ZHYx
YELP_ENDPOINT=https://api.yelp.com/v3

```
YELP_API_KEY=<your_yelp_api_key>

```

4. Start the application by running `npm run start:dev`.
It will run on http://localhost:3000/
![image](https://github.com/fahimers/jensen-tech-api/assets/29772677/24492124-d539-41e2-8eff-77eb720bf9d2)


## Usage

The application has two main endpoints:

* `/api/v1/businesses/search`: This endpoint allows you to search for businesses by name and location.
The request parameters are `term` (the name of the business) and `location` (the location of the business).
* `/api/v1/businesses/:id`: This endpoint allows you to get the details of a specific business.
The request parameter is `id` (the ID of the business).

To use the application, you can make requests to these endpoints using your favorite HTTP client. For example,
you can use cURL to search for businesses in New York City by running the following command:

```
curl -X GET "http://localhost:3000/api/v1/businesses/search?term=Starbucks&location=New+York+City"
```

This will return a list of businesses that match the search criteria. You can then use the ID of a business to get its details by running the following command:

```
curl -X GET "http://localhost:3000/api/v1/businesses/qcnoyytlFIuqlcjDXkXJiw"
```
This will return the details of the business with the ID `qcnoyytlFIuqlcjDXkXJiw`.

