<a name="readme-top"></a>

  <h3 align="center">E-Report Management System (RMS)</h3>

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

<div>
<h3>E-Report Management System (RMS),</h3>
<p align="justify">The E-Report Management System is a software application that allows users to create, read, update, and delete reports, as well as manage users, meetings, tasks, and notifications. The system includes authentication features to ensure secure access, and supports multiple user roles. The system also uses a MySQL database to store data and has a built-in chatting feature for messaging.</p>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This Project is built with :

* [![ReactJs][React.js]][React-url]
* [![NodeJs][Node.js]][Nodejs-url]
* [![MySQL DB][MySQL]][MySQL-url]
* [![Sequelize ORM][Sequelize]][Sequelize-url]
* [![ExpressJs][Expressjs]][Express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Follow the instruction below to install the project locally.

### Installation

Follow the steps below for installation of this project.

1. Clone the repo.
   ```sh
   git clone https://github.com/sodaAPI/e-report-cms.git
   ```
2. Install NPM packages in ./backend/ and ./frontend/
   ```sh
   npm install
   ```
   or
   ```sh
   npm install --force
   ```
3. Setting your databases in ./backend/config/database.js, setting your .env file and make sure you already create database in your local server.
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
4. Run your MySQL server (i'm using XAMPP).
5. Start Front-End on folder frontend
   ```js
   npm start
   ```
6. Start Back-End in ./backend/ folder.
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
    - [x] Users Page (Admin Only)
    - [x] Profile Page
    - [x] My Task Page
    - [x] FAQ Page
- [x] Add Databases
- [x] Add Controllers
- [x] Add Middleware
- [x] Add Models
- [x] Add Routes
- [x] Add Authentication & Multi Roles
- [x] Add Chat Feature
- [x] Add CRUD Function
- [x] Add Chart
- [x] Add Email Web Push Notification Schedule
- [x] Add Document Template 
- [ ] Add Auto Create Zoom Meeting Room
- [ ] Add Realtime Chat
- [ ] Add New Chat Channels
- [ ] Add Chat Customization
- [ ] Add Themes
    - [x] Dark Mode
    - [ ] Light Mode

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/newFeature`)
3. Commit your Changes (`git commit -m 'Add some newFeature'`)
4. Push to the Branch (`git push origin feature/newFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `License.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[example-screenshot]: /frontend/public/Screenshot.png
[React.js]: https://img.shields.io/badge/React_Js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Node.js]: https://img.shields.io/badge/Node_Js-20232A?style=for-the-badge&logo=node.js&logoColor=339933
[MySQL]: https://img.shields.io/badge/MySQL-20232A?style=for-the-badge&logo=mysql&logoColor=4479A1
[Sequelize]: https://img.shields.io/badge/Sequelize-20232A?style=for-the-badge&logo=sequelize&logoColor=52B0E7
[Expressjs]: https://img.shields.io/badge/Express_Js-20232A?style=for-the-badge&logo=express&logoColor=000000
[Express-url]: https://expressjs.com/
[Sequelize-url]: https://sequelize.org/
[MySQL-url]: https://www.mysql.com/
[Nodejs-url]: https://nodejs.org/en/
[React-url]: https://reactjs.org/
