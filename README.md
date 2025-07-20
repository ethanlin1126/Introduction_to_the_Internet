# 🌍 Travel Assistant App
A web-based International Travel Assistant built with React.js, offering helpful tools for travelers including weather updates, currency conversion, a trip planner calendar, and an interactive map—all accessible from a clean and intuitive interface.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Introduction
This project is a multi-functional travel assistant designed to help users plan and navigate their trips with ease. It includes weather checking, currency exchange tools, a calendar for planning events, and an embedded map. Built entirely with React, it is deployed on Render for public access.

## Features
🌤️ Weather Forecast – Check current weather conditions for any city
💱 Currency Converter – Convert between major world currencies in real-time
🗓️ Travel Calendar – Add and view your trip plans or important dates
🗺️ Interactive Map – Explore and locate global destinations
🏠 Home Page – Navigate all tools easily from one central dashboard

## Usage
▶️ To run the app locally:
```text
npm start
```
Open your browser and go to:
```text
http://localhost:3000
```

## Project Structure
```text
travel-assistant/
│
├── App.js                      # Main React application with routing setup
├── App.css                     # Global styling for the app
├── index.js                    # React entry point (mounts app to the DOM)
├── index.css                   # Styles for index.js
│
├── pages/                      # Folder for feature page components
│   ├── WeatherPage.js          # Weather feature page component
│   ├── Weather.css             # Styles for the weather page
│   ├── CurrencyConverterPage.js# Currency converter feature page
│   ├── CurrencyConverter.css   # Styles for the currency converter page
│   ├── CalendarPage.js         # Calendar page with add/view event functionality
│   ├── CalendarPage.css        # Styles for the calendar page
│   ├── MapPage.js              # Map embedding feature page
│   └── MapPage.css             # Styles for the map page
│
└── public/                     # Public folder for static assets and index.html
```
[Code](https://github.com/ethanlin1126/Web/tree/main/Final%20Project)<br>
[APP Website](https://web-main-172e.onrender.com/)<br>
