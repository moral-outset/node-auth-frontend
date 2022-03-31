This is a scuffed frontend built for my other node-auth repo that serves as the backend
This project is just an exercise in making my own login and auth system and be able to use it for basic user creation and profile editing
Still don't really get how proxies work :/

## Pages
1. Default or /
From this page, you can access login, signup and users
2. Registration
Has 4 input fields to fill out, upon submit, requesthandler is run that sends a post request to backend, and then routes to profile page
5. Login
Has 2 input fields to fill out, upon submit, requesthandler is run that sends a post request to backend, and then routes to profile page
7. Profile
Cookies are gotten through proxy and set in browser, and sent during SSR of page to get profile data
9. Users Page
Static generation is used to generate paths and pages. Go to /users/userid to view a user's profile
11. User Page
Uses staticprops to generate user cards with name and picture, then displays on this page

## Technologies used:
Nextjs (SSR and static generation)
httpproxymiddleware
Fetch

## Getting Started
1. Download node-auth as well
2. Install packages for both
3. cd to api on node-auth
4. npm run dev on both
5. This project should be on port 3000, while the other should be on port 5000\


