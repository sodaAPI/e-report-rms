<a name="readme-top"></a>

<!-- LOGO -->
<br />
<div align="center">
 <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->
</div>

  <h3 align="center">E-Report Management System (CMS)</h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About

![Project Screen Shot][example-screenshot]

E-Report Management System (CMS)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This Project is built with :

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/sodaAPI/e-report-cms.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Setting your databases in ./backend/config/database.js
   ```sh
   const db = new Sequelize("your_databases", "root", "", {
   host: "localhost",
   dialect: "mysql",
   timezone: "+07:00", // Set your timezone
   pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    },
   });
   ```
4. Run your database server (i'm using XAMPP)
5. Start Front-End on folder frontend
   ```js
   npm start
   ```
6. Start Back-End on folder backend
   ```js
   nodemon
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Add Home Page
- [x] Add Login & Register Page
- [x] Add Dashboard Page
    - [x] Home Dashboard
    - [x] Reports Page
    - [x] Discussion/Chat Page
    - [x] Meeting Page
    - [x] Users Page
    - [x] Profile Page
    - [x] My Task Page
    - [x] FAQ Page
- [x] Add Databases
- [x] Add Controllers
- [x] Add Models
- [x] Add Routes
- [x] Add Authentication & Multi Roles
- [x] Add Chat Feature
- [x] Add CRUD Function
- [x] Add Chart
- [ ] Add Web Push Notification Schedule
- [ ] Add New Chat Channels
- [ ] Add Automation Notification Bot
- [ ] Add Chat Customization
    - [x] Dark Mode
    - [ ] Light Mode

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `License.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[example-screenshot]: /frontend/public/Screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
