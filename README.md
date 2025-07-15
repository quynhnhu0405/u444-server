# WiFi Landing Page - Backend

This is the backend server for the WiFi Landing Page system. It collects user information (such as age, laguage, birth year, and access time) when they connect to public WiFi via a landing page. The data can be used for marketing, analytics, or access tracking purposes.

## Features

- Receive and store user information from the landing page
- Save data to MongoDB
- Record access time and device type
- Admin API to view and filter collected user data

## Tech Stack

| Technology | Description |
|------------|-------------|
| Node.js + Express | Server-side framework |
| MongoDB | NoSQL database for storing user data |
| Mongoose | ORM for MongoDB |
| dotenv | Environment variable management |
| Helmet, CORS | Basic security and request protection |

---

## Installation

# 1. Clone the repository
git clone git@github.com:quynhnhu0405/u444-server.git
cd u444-server

# 2. Install dependencies
npm install
