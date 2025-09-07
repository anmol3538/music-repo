# Finactify

A modern music library web application built with React that allows users to browse, search, and filter songs by genre and artist.

![Finactify](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC) ![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

## Features ✨

- Browse songs by genre (Bollywood, Hollywood, Punjabi, Tamil, Telugu)
- Search songs by name or artist
- Pagination support (10 items per page)
- Responsive and modern UI with Tailwind CSS
- Fast and lightweight
- Beautiful user interface

## Live Demo

The application is deployed on Vercel: [https://music-repo-mja8-git-master-anmol-aggarwals-projects.vercel.app](https://music-repo-mja8-git-master-anmol-aggarwals-projects.vercel.app)

## Technologies 🛠️

- **Frontend Framework**: React.js 
- **Styling**: Tailwind CSS 
- **HTTP Client**: Axios for API calls 
- **Deployment**: Vercel 
- **Version Control**: Git & GitHub 

## APIs Used 📡

This project uses **JioSaavn Unofficial APIs** for fetching music data:

- **Search Songs**  
  `https://saavn.me/search/songs?query={song_name}&page=1&limit=10`

- **Search Artists**  
  `https://saavn.me/search/artists?query={artist_name}&page=1&limit=10`

- **Get Songs by Genre**  
  `https://saavn.me/songs?genre={genre}`

*(Replace `{}` with the actual query or ID in your API calls)*

## Credentials
-   Just use user mode while logging in the website for getting all songs.
-   Just use admin mode while logging in the website for adding/deleting all songs.

## Deploy on Vercel
- Go to vercel.com
- Click "Sign Up" and create an account (or log in)
- Click "New Project"
- Import your GitHub repository
- Authorize Vercel to access your GitHub account if prompted
- Select your finactify repository
- Configure project settings:
- Framework Preset: Vite
- Root Directory: music
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install
- Click "Deploy"
