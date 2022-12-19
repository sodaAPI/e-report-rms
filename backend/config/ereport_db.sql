-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2022 at 05:22 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ereport_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `meeting_name` varchar(255) DEFAULT NULL,
  `meeting_desc` varchar(255) DEFAULT NULL,
  `online_meeting_link` varchar(255) DEFAULT NULL,
  `meeting_date` date DEFAULT NULL,
  `edited_by` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `uuid`, `meeting_name`, `meeting_desc`, `online_meeting_link`, `meeting_date`, `edited_by`, `createdAt`, `updatedAt`) VALUES
(5, 'c612815d-c38b-442b-8ee0-b45df0d91c94', 'In autem libero pers', 'Ea enim veritatis si', 'https://www.google.com/', '1978-11-13', NULL, '2022-11-15', '2022-11-15'),
(14, '4ac53c5e-441a-40c5-b200-3eff02236948', 'Tindak lanjut perbaikan redeploy Enhancement Management Stock Penyesuaian Service Update Data BTN Properti', '', 'https://zoom.us/j/95705964936?pwd=UlJUbFErcjFiSWFMU2duVlRFYlpWUT09', '2022-11-18', NULL, '2022-11-18', '2022-11-18'),
(15, '2547c5e6-53ab-4e0b-a4ae-cc399632dabe', 'Cillum modi et et qu', 'Est eos anim laborum', 'https://www.btn.co.id', '2012-10-03', NULL, '2022-11-18', '2022-11-18'),
(55, '4ac53c5e-441a-40c5-b200-3eff02236999', 'Tindak lanjut perbaikan redeploy Enhancement Management Stock Penyesuaian Service Update Data BTN Properti', '', 'https://zoom.us/j/95705964936?pwd=UlJUbFErcjFiSWFMU2duVlRFYlpWUT09', '2022-11-21', NULL, '2022-11-21', '2022-11-21'),
(56, 'dfdaee13-52ae-4aca-b1bd-539dc0667ea1', 'BTANIDJA: Implementation ASU 20220-08 in SAA Dev Environment', 'Deploy BTANIDJA', 'https://meetswift.webex.com/webappng/sites/meetswift/meeting/info/b9900bb24c6e43b8aaeda6b4be8828be?siteurl=meetswift&MTID=mafef8ecf5544af3660529cf67127ecd4&meetingAuthToken=QUhTSwAAAAW6gId2k4pcb%2FA5ULlWkFrQ3wzkBNgo4jcSar7qSPZArOP32WHX6HcoZF4%2F8wJKryuTYr', '2022-12-05', NULL, '2022-12-05', '2022-12-05');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `project_code` varchar(255) NOT NULL,
  `promote_name` varchar(255) NOT NULL,
  `promote_status` varchar(255) NOT NULL DEFAULT 'In Progress',
  `promote_pic` varchar(255) NOT NULL,
  `promote_desc` varchar(255) DEFAULT NULL,
  `src_file` varchar(255) DEFAULT NULL,
  `changes` varchar(255) NOT NULL,
  `promote_date` date DEFAULT NULL,
  `execute_week` varchar(255) DEFAULT NULL,
  `request_week` varchar(255) DEFAULT NULL,
  `side_promote` varchar(255) NOT NULL,
  `edited_by` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `uuid`, `project_code`, `promote_name`, `promote_status`, `promote_pic`, `promote_desc`, `src_file`, `changes`, `promote_date`, `execute_week`, `request_week`, `side_promote`, `edited_by`, `createdAt`, `updatedAt`) VALUES
(15, '3fc2fca6-1ace-4acf-b7c9-c51143359f2d', 'Dolorem aut quasi co', 'Excepteur iusto offi', 'In Progress', 'Sunt minim corrupti', 'Totam in enim velit ', NULL, 'Consequatur Delectu', '2009-10-09', '2003-W21', '2015-W17', 'Hic enim lorem dolor', NULL, '2022-11-15', '2022-11-18'),
(19, '48906ff6-3f88-4fe2-a731-4467faf5fefd', 'Libero reiciendis el', 'Ad nihil consequatur', 'N/A', 'Vel laborum Nam even', 'Consectetur ducimus', NULL, 'Rerum autem quae ex ', '1984-12-07', '2016-W13', '1998-W14', 'Ea laborum Laborum ', NULL, '2022-11-16', '2022-11-18'),
(20, 'ab6db444-d616-4acb-9b7b-cac2193963cb', 'Ut quo iure fuga Co', 'Incididunt est id co', 'Active', 'Porro eos est vitae ', 'Sed eos nisi sunt n', NULL, 'Cillum nulla laboris', '1983-06-13', '2017-W18', '2009-W38', 'Dolorum quisquam et ', NULL, '2022-11-16', '2022-11-16'),
(21, '7967b890-c2e6-45af-bbe6-9598e926df81', 'Quis sint odio offic', 'Consequatur debitis', 'Active', 'Eligendi minus debit', 'Amet voluptas earum', NULL, 'Ut cillum eos volup', '1994-05-07', '1985-W08', '2011-W44', 'Quia ut nemo ad veni', NULL, '2022-11-16', '2022-11-16'),
(22, 'a3aa8911-466d-463d-bbbe-aabf996183c9', 'Quisquam eaque dolor', 'Voluptatem irure se', 'Active', 'Fuga Harum et est v', 'Et molestiae dolor e', NULL, 'Quibusdam eos adipis', '1983-05-22', '2016-W31', '2013-W47', 'Laboriosam perspici', NULL, '2022-11-16', '2022-11-16'),
(23, '25169842-c089-4537-8fc4-4aa06330d571', 'Rerum esse aut ut v', 'Repudiandae illo in ', 'Complete', 'Est molestiae soluta', 'Culpa dolore eos d', NULL, 'Quibusdam totam ea n', '2015-01-14', '1982-W36', '2000-W14', 'Eos soluta reprehen', NULL, '2022-11-16', '2022-11-18'),
(24, 'e69e1d88-c7a1-4327-808d-daa1db8f99ac', 'Veniam in minima de', 'Sed nulla in ad dese', 'In Progress', 'Nam eaque odit ad ut', 'Optio omnis enim ab', NULL, 'Et culpa non at ali', '1989-11-08', '1998-W01', '1991-W08', 'POK Promote', NULL, '2022-12-05', '2022-12-05'),
(25, '783c1d88-ee68-432e-8bb1-03db952f8df3', 'Ad magna voluptatem ', 'Ab quo sint repudian', 'In Progress', 'Et necessitatibus ma', 'Do quibusdam dolore ', NULL, 'Blanditiis incididun', '2015-08-09', '1989-W09', '2009-W47', 'Hasil Promote', NULL, '2022-12-05', '2022-12-05'),
(26, '85aa5578-0bbb-4da6-9a63-00c8ac003a80', 'Nulla odio deleniti ', 'Non nisi nobis saepe', 'In Progress', 'Provident voluptati', 'Eos eligendi veniam', NULL, 'Laborum Modi autem ', '2020-12-07', '2008-W28', '2012-W14', 'Checklist Promote', NULL, '2022-12-05', '2022-12-05'),
(27, '95b862ba-f2b9-4c47-8b33-16cb87c008ce', 'Praesentium quae aut', 'Aut proident aperia', 'In Progress', 'Dolor laborum dolore', 'Non voluptas harum s', NULL, 'Unde esse sunt culp', '2005-08-09', '1980-W37', '1981-W12', 'Other', NULL, '2022-12-05', '2022-12-05'),
(28, 'fa522f9e-e3db-4da5-886a-31ffc1f35438', 'Et consectetur inve', 'Quam autem repudiand', 'In Progress', 'Sunt ut aut sit qui', 'Voluptates omnis odi', NULL, 'Ipsum ut aut eum dol', '2005-07-04', '1975-W08', '1976-W34', 'Hasil Promote', NULL, '2022-12-05', '2022-12-05'),
(29, 'c7d8795b-7f03-4803-ba25-9a5999d36148', 'Id omnis ab eligend', 'Nobis minim quaerat ', 'Complete', 'Eaque exercitationem', 'Aut officiis sed sus', NULL, 'Voluptatum in nobis ', '2018-04-27', '2010-W25', '1985-W34', 'Checklist Promote', NULL, '2022-12-05', '2022-12-05'),
(32, 'b34173d4-fdc1-4b9e-b5e8-bfb03f515d7b', 'Cupiditate exercitat', 'Quasi sed ea iste do', 'N/A', 'Rerum magni aut et a', 'Id eum consequatur', NULL, 'Repudiandae qui aute', '1973-06-03', '1994-W12', '2007-W22', 'Hasil Promote', NULL, '2022-12-05', '2022-12-05'),
(33, '2d10a24a-0849-449c-beaf-f889b8b9b15c', 'Nihil et dicta possi', 'Doloremque et quia t', 'Complete', 'Odio impedit volupt', 'Quia mollitia minima', NULL, 'Voluptas voluptas vo', '1985-11-05', '1971-W03', '1991-W14', 'Hasil Promote', NULL, '2022-12-05', '2022-12-05'),
(34, '53968498-2c7d-4344-930c-9c830e82d43a', 'Quis excepturi rerum', 'Voluptas porro et et', 'Complete', 'Veritatis consequat', 'Aut aliqua Elit ul', NULL, 'Esse architecto nob', '2013-03-13', '1978-W12', '2015-W52', 'POK Promote', NULL, '2022-12-05', '2022-12-05'),
(35, '32ada600-86d9-4ee7-b3de-39c45463d82b', 'Sapiente quis mollit', 'Commodi facilis temp', 'N/A', 'Vel dignissimos vita', 'Dolorem quos deserun', NULL, 'Illo eligendi repudi', '1990-10-02', '1991-W34', '1984-W06', 'POK Promote', NULL, '2022-12-05', '2022-12-05');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT 'Uncompleted',
  `description` varchar(255) DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `by_user` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `uuid`, `name`, `status`, `description`, `deadline`, `by_user`, `createdAt`, `updatedAt`) VALUES
(2, 'fc191354-8eaa-4c72-856b-25a23432427ba', 'Meeting Online Weekly', 'Uncompleted', 'Meeting', '2022-12-06', 'Administrator', '2022-12-06', '2022-12-06'),
(3, 'b3fe51c2-114c-466d-a6d2-e8c2984a9888', 'Meeting Online BTNIDJA', 'Uncompleted', 'Deployment AS', '2022-12-05', 'Administrator', '2022-12-06', '2022-12-06'),
(4, '4189e962-abc7-4ea5-a194-106dddb7a8f5', 'Meeting Online API Deployment', 'Completed', 'Deployment API', '2022-12-06', 'Administrator', '2022-12-06', '2022-12-06'),
(5, '6692f239-cd29-47ea-bde7-c27cf9d5f303', 'Checklist Promote API Deployment', 'Completed', 'Doc Deployment API', '2022-12-06', 'Administrators', '2022-12-06', '2022-12-07'),
(6, '0e8a1729-6fd7-45a9-9181-7fdb94260ee3', 'Error nostrum amet ', 'Completed', 'Nihil eiusmod tempor', '2013-04-05', 'User', '2022-12-07', '2022-12-07'),
(9, '7f547565-7f2b-4da7-908c-9009fdbf72f1', 'Update Task', 'Uncompleted', 'Incidunt suscipit d', '2022-12-07', 'Admin', '2022-12-07', '2022-12-07');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `division` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `birth` date NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `roles` varchar(255) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `username`, `picture`, `division`, `status`, `birth`, `email`, `phone`, `email_verified_at`, `password`, `remember_token`, `createdAt`, `updatedAt`, `roles`) VALUES
(1, 'asd123asd123', 'Admin', 'admin12', 'admin123', 'CMT', 'Active', '2022-11-07', 'admin@admin.com', '08512345678', '2022-11-06 17:00:00', 'admin123123', '', '2022-11-07', '2022-11-08', 'admin'),
(2, 'asd123asd123', 'Admin', 'admin12', 'admin123', 'CMT', 'Active', '2022-11-07', 'admin@admin.com', '08512345678', NULL, 'admin123123', NULL, '2022-11-07', '2022-11-22', 'admin'),
(3, 'asd123asd123', '1Admin', '1admin12', 'admin123', 'CMT', 'Active', '2022-11-07', '1admin@admin.com', '08512345678', NULL, 'admin123123', NULL, '2022-11-07', '2022-11-15', 'admin'),
(37, '792fb207-6ce1-42c2-807b-9d55e9584b76', 'Dolores qui ea et co', 'Excepturi ad laborio', NULL, 'CMT', 'Active', '1988-08-18', 'dyri@mailinator.com', 'Commodo natus quia l', NULL, 'Rerum deserunt fugit', NULL, '2022-11-08', '2022-11-08', 'user'),
(56, '7cfbedb7-444e-4334-a3ea-2078468fd035', 'Rafi', 'rafi123', NULL, 'CMT', 'Active', '2022-11-14', 'rafi@mail', '085123456789', NULL, 'rafi123', NULL, '2022-11-14', '2022-11-14', 'user'),
(57, '38f7a19a-37ba-4251-93df-e6ff71999b7e', 'Fugiat beatae consec', 'Ipsam id architecto', NULL, 'CMT', 'Active', '1977-09-06', 'honefude@mailinator.com', 'Et nesciunt reprehe', NULL, 'Pa$$w0rd!', NULL, '2022-11-15', '2022-11-15', 'user'),
(58, '7906362e-7da7-4414-aac3-d2bb351a97b6', 'Et ut voluptatibus i', 'Dolor recusandae Po', NULL, 'CMT', 'Active', '1979-11-12', 'domif@mailinator.com', 'Voluptas culpa repu', NULL, 'Pa$$w0rd!', NULL, '2022-11-15', '2022-11-15', 'user'),
(63, '7bc15d1a-221c-4504-8d65-bc395e2064e4', 'Saepe sunt quam quas', 'Tempora quis aut ea ', NULL, 'CMT', 'Active', '1978-10-20', 'nexyj@mailinator.com', 'Qui lorem numquam de', NULL, 'Pa$$w0rd!', NULL, '2022-11-16', '2022-11-16', 'user'),
(64, '690a0e79-6c99-48a8-942a-e48ebd3b4ac7', 'Quam sit laudantium', 'Repellendus Animi ', NULL, 'CMT', 'Active', '1982-06-12', 'zowolydo@mailinator.com', 'Cumque quidem rerum ', NULL, 'Pa$$w0rd!', NULL, '2022-11-16', '2022-11-16', 'user'),
(65, 'f7a4acf5-8b6d-41a8-95b2-5a8147d179b1', 'Aut officiis mollit ', 'Omnis aliquid volupt', NULL, 'CMT', 'Active', '2000-03-16', 'reniniquce@mailinator.com', 'Commodi dolores fugi', NULL, 'Pa$$w0rd!', NULL, '2022-11-16', '2022-11-16', 'user'),
(66, '3a0f877e-ccec-41e5-8e1f-03c74c2b2525', 'Quis ut est laborum', 'Veniam duis quisqua', NULL, 'CMT', 'Active', '2008-05-12', 'wenofix@mailinator.com', 'Culpa ut neque accu', NULL, 'Pa$$w0rd!', NULL, '2022-11-16', '2022-11-16', 'user'),
(67, 'f00e8641-82fe-4314-9fa6-93ece9d5a403', 'Ea quae libero qui n', 'Illum aut suscipit ', NULL, 'CMT', 'Active', '2021-10-07', 'qycetuxejy@mailinator.com', 'Expedita temporibus ', NULL, 'Pa$$w0rd!', NULL, '2022-11-16', '2022-11-16', 'user'),
(68, '862810b1-e213-4e4e-983d-e53f8ec218b6', 'Aut et maiores verit', 'Anim corporis fuga ', NULL, 'CMT', 'Active', '1990-05-28', 'madifam@mailinator.com', 'Laudantium aliquip ', NULL, 'Pa$$w0rd!', NULL, '2022-11-16', '2022-11-16', 'user'),
(69, 'e973e9ae-e2e5-4d52-a4c5-8d1418280c2f', 'Natus voluptatibus t', 'Architecto deleniti ', NULL, 'CMT', 'Active', '2010-11-24', 'pykys@mailinator.com', 'Deserunt incidunt q', NULL, 'Pa$$w0rd!', NULL, '2022-11-16', '2022-11-16', 'user'),
(72, '64d11b99-a4c4-47b8-9d61-e827162debc6', 'Dolor est et autem ', 'adminadmin', NULL, 'CMT', 'Active', '2005-11-03', 'ricu@mailinator.com', '+1 (521) 532-7195', NULL, 'admin123', NULL, '2022-11-22', '2022-11-22', 'user'),
(76, '72e25e47-5b09-4475-99ec-6fc19d482a6d', 'Pariatur Aliquip te', 'Dolorem voluptatem ', NULL, 'CMT', 'Active', '1971-03-25', 'ryhufe@mailinator.com', '+1 (243) 631-7761', NULL, 'Pa$$w0rd!', NULL, '2022-11-23', '2022-11-23', 'user'),
(77, 'aaf06521-5096-4133-9319-4648b4a22d26', 'Quibusdam esse offi', 'test123', NULL, 'CMT', 'Active', '2004-03-19', 'bever@mailinator.com', '+1 (428) 386-2035', NULL, 'test123', NULL, '2022-11-23', '2022-11-23', 'user'),
(80, '22c39aac-a87e-4555-b638-b29dcfa28e04', 'Et maxime vitae esse', 'test', NULL, 'CMT', 'Active', '1988-04-06', 'zerisu@mailinator.com', '+1 (353) 246-9642', NULL, 'test123', NULL, '2022-11-23', '2022-11-23', 'user'),
(81, '0cc05a5f-ff6d-485a-970c-a2b7969d4f06', 'Hello World', 'admin123', NULL, '', 'Active', '0000-00-00', 'world@hello.com', '', NULL, 'test123123', NULL, '2022-11-28', '2022-11-28', 'user'),
(82, '404af422-3154-4987-9e91-21a2d285e396', 'Hello World', 'admin123123', NULL, '', 'Active', '0000-00-00', 'world@hello123.com', '', NULL, 'test123123', NULL, '2022-11-28', '2022-11-28', 'user'),
(83, '8310ac5d-2904-48fe-9c87-87bf27fc7652', 'Hello World', 'admin123123123', NULL, '', 'Active', '0000-00-00', 'world@hello123123.com', '', NULL, 'test123123', NULL, '2022-11-28', '2022-11-28', 'user'),
(84, 'c954a0c0-4f0a-40f5-8351-e50b11c74436', 'Hello World', 'admin123123123123', NULL, '', 'Active', '0000-00-00', 'world@hello123123123.com', '', NULL, 'test123123', NULL, '2022-11-28', '2022-11-28', 'user'),
(85, 'd0033ffa-655b-42a1-8413-b25bf311652f', '', '', NULL, 'CMT', 'Active', '0000-00-00', '', '', NULL, '', NULL, '2022-12-05', '2022-12-05', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `roles`
--
ALTER TABLE `roles`
  ADD CONSTRAINT `roles_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
