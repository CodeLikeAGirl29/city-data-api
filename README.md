# City Snapshot

City Snapshot is a web application that allows users to search for any city and view relevant data and an image representing the city. This project leverages the City Data API from [API Ninjas](https://api.api-ninjas.com/) for city statistics and the [Unsplash API](https://unsplash.com/developers) for city images.

## Features

- **Search Functionality**: Users can search for cities by name.
- **Dynamic Data Display**: Displays city details, including:
  - Location Name
  - Country
  - Population
  - Region
  - Longitude
  - Latitude
- **City Image**: Fetches and displays a representative image of the city.

## Technologies Used

- **Frontend**: React.js, Vite, HTML, CSS, JavaScript
- **APIs**:
  - [City Data API](https://api.api-ninjas.com/) for city information
  - [Unsplash API](https://unsplash.com/developers) for city images

## Getting Started

### Prerequisites

- A modern web browser
- Access to the City Data API and Unsplash API (API keys required)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/codelikeagirl29/city-data-api.git
   cd city-data-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your API keys:

   #### Setting Up the `.env` File
   Create a `.env` file in the root directory of your project and add the following lines:
   ```env
   VITE_API_KEY=""
   VITE_UNSPLASH_API_KEY=""
   ```

   - Replace the value of `VITE_API_KEY` with your City Data API key.
   - Replace the value of `VITE_UNSPLASH_API_KEY` with your Unsplash API key.

   These variables will be automatically injected into the application by Vite. Ensure you have configured your React project to use these variables correctly, as Vite prefixes environment variables with `VITE_` to distinguish them from others.

4. Start the development server:
   ```bash
   npm run dev
   ```

### Running the Application

1. Start the application:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to the URL displayed in the terminal, typically `http://localhost:5173`.

## How It Works

1. **Search**: The user enters a city name in the search bar.
2. **Fetch Data**: The app fetches city data from the City Data API and an image from the Unsplash API.
3. **Display Results**: A card displays the following:
   - City Name
   - Country
   - Population
   - Region
   - Longitude and Latitude
   - Image of the city

## API Details

### City Data API
- **Endpoint**: `https://api.api-ninjas.com/v1/city`
- **Parameters**: `name` (city name)

### Unsplash API
- **Endpoint**: `https://api.unsplash.com/search/photos`
- **Parameters**: `query` (city name), `client_id` (API key)

## Project Structure

```plaintext
city-snapshot/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── index.jsx
│   ├── styles/
│   └── assets/
├── .env
├── vite.config.js
├── package.json
└── README.md
```

## Demo

[Live Demo](https://city-data-api.vercel.app/)

## Screenshots

### Search Interface
![Search Interface](#)

### City Card Example
![City Card Example](#)

## Future Enhancements

- Add more detailed city information (e.g., weather, landmarks).
- Enable suggestions for city names during search.
- Implement a favorites feature to save searched cities.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## Acknowledgments

- [API Ninjas](https://api.api-ninjas.com/) for city data
- [Unsplash](https://unsplash.com/developers) for beautiful city images

