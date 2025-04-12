# Airbnb Clone

This project is a clone of Airbnb, built using React and Vite. It provides a platform for users to book vacation rentals, cabins, beach houses, and more. The application includes features for both guests and hosts, allowing users to sign up, sign in, view listings, book stays, and manage their bookings.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

#### Features

- **User Authentication**: Sign up and sign in functionality for guests and hosts.
- **Listings**: View all available listings, search by title or category, and view - detailed information about each listing.
- **Booking**: Book stays, view your bookings, and manage bookings as a host.
- **Host Dashboard**: Manage your listings, add new listings, and edit or delete existing listings.
- **Responsive Design**: Optimized for both desktop and mobile devices.

#### Installation

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Abdullah-Masood-5/webproject.git
cd airbnb-clone
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

#### Usage

After starting the development server, open your browser and navigate to `http://localhost:3000` to view the application. You can sign up as a guest or host, view listings, book stays, and manage your bookings.

#### Project Structure

The project structure is as follows:

```plaintext
.env
.gitignore
eslint.config.js
index.html
package.json
public/
README.md
src/
    App.jsx
    index.css
    main.jsx
    assets/
    Components/
        BookingList.jsx
        BookingPage.jsx
        Footer.jsx
        HomeListings.jsx
        HorizontalScrollList.jsx
        HostBookings.jsx
        HostDashboard.jsx
        ListingDetailsPage.jsx
        Navbar.jsx
        Profile.jsx
        SearchListings.jsx
        SignIn.jsx
        SignUp.jsx

    Styles/
        BookingList.css
        BookingPage.css
        Footer.css
        HomeListings.css
        HorizontalScrollList.css
        HostBookings.css
        HostDashboard.css
        ListingDetailsPage.css
        Navbar.css
        Profile.css
        SearchListings.css
        SignIn.css
        SignUp.css
vite.config.js
```

- **Components**: Contains all the React components used in the application.
- **Styles**: Contains CSS files for styling the components.
- **assets**: Contains static assets like images and icons.
- **index.html**: The main HTML file.
- **main.jsx**: The entry point of the React application.
- **App.jsx**: The main application component that includes routing.

### Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.
