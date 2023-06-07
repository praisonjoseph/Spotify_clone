const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

const options = {
    method: 'GET',
    url: `https://${process.env.API_URL}/track/2308858225`,
    headers: {
       'X-RapidAPI-Key': process.env.API_KEY,
       'X-RapidAPI-Host': process.env.API_URL
    }
  };

app.get('/song', async (req, res) => {
    try {
      const response = await axios.request(options); // Replace with your API endpoint
      const song = response.data; // Assuming the API response contains the song details
      res.json(song);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(process.env.PORT, () => {
  // console.log(`Server is running on port ${port}`);
  console.log(`Server is running on port ${process.env.PORT}`);
});