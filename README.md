# Game Hub

Welcome to the Game Hub! This web application is built using **React** and provides a smooth and interactive experience for browsing games, filtering them by various criteria, and accessing game details and media. The app is optimized to minimize client-side overload and enhance the user experience.

## Features

- **Infinite Scroll**: Browse through an extensive list of games with infinite scrolling, ensuring smooth loading without overloading the client.
- **Optimized Game Card Display**: Games are displayed dynamically based on the viewport size, helping to minimize unnecessary resource usage and optimizing performance.
- **Search and Filter**: Users can search for games by name or description, filter them by platform, and reorder the results based on different criteria such as popularity or release date.
- **Game Details and Media**: Each game card routes to a detailed page containing game information, images, and trailers, providing a comprehensive view of the game.

## Data Source

All game data is fetched from a free backend vendor using an API key. The vendor supplies the game information, images, and trailers that power the Game Hub.

## Caching

The app utilizes **React Query** to cache game data and minimize redundant API calls, ensuring faster load times and an optimized user experience.

## Deployment

The site is deployed on **Vercel**. You can visit it here: [Game Hub on Vercel](https://game-mgqc4ecbr-darlevys-projects.vercel.app/)

