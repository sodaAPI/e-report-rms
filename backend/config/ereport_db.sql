-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2023 at 03:07 AM
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
  `userId` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `uuid`, `meeting_name`, `meeting_desc`, `online_meeting_link`, `meeting_date`, `userId`, `createdAt`, `updatedAt`) VALUES
(14, '4ac53c5e-441a-40c5-b200-3eff02236948', 'Tindak lanjut perbaikan redeploy Enhancement Management Stock Penyesuaian Service Update Data BTN Properti', '', 'https://zoom.us/j/95705964936?pwd=UlJUbFErcjFiSWFMU2duVlRFYlpWUT09', '2022-11-18', 0, '2022-11-18', '2022-11-18'),
(55, '4ac53c5e-441a-40c5-b200-3eff02236999', 'Tindak lanjut perbaikan redeploy Enhancement Management Stock Penyesuaian Service Update Data BTN Properti', 'Tindak lanjut perbaikan redeploy Enhancement Management Stock Penyesuaian Service Update Data BTN Properti', 'https://zoom.us/j/95705964936?pwd=UlJUbFErcjFiSWFMU2duVlRFYlpWUT09', '2023-01-22', 98, '2022-11-21', '2022-12-27'),
(56, 'dfdaee13-52ae-4aca-b1bd-539dc0667ea1', 'BTANIDJA: Implementation ASU 20220-08 in SAA Dev Environment', 'Deploy BTANIDJA 123asdasdasdasdasd', 'https://meetswift.webex.com/webappng/sites/meetswift/meeting/info/b9900bb24c6e43b8aaeda6b4be8828be?siteurl=meetswift&MTID=mafef8ecf5544af3660529cf67127ecd4&meetingAuthToken=QUhTSwAAAAW6gId2k4pcb%2FA5ULlWkFrQ3wzkBNgo4jcSar7qSPZArOP32WHX6HcoZF4%2F8wJKryuTYr', '2023-02-01', 98, '2022-12-05', '2022-12-27'),
(63, 'b211f08c-ea13-4723-83ba-e2becf311a28', 'New Year', 'New Year Meeting\n', 'https://www.google.com/', '2022-12-31', 0, '2022-12-19', '2022-12-19'),
(64, 'd281b9d4-8af8-44fe-9fc5-395cf4e86a71', 'Christmas Day', 'Christmas Day', 'https://www.google.com/', '2023-01-25', 98, '2022-12-19', '2022-12-27'),
(65, 'e7fe37f2-972a-43ca-9b07-7183e5c6b164', 'Eve Christmas', 'Eve Christmas', 'https://www.google.com/', '2023-01-01', 105, '2022-12-19', '2022-12-27'),
(67, 'e01be9cd-5abc-4baa-b729-6e1d33a76a26', 'Meeting Testing Meeting Test', 'Testing Meeting', 'http://localhost:3000/dashboard/meeting/add', '2022-12-30', 98, '2022-12-27', '2022-12-27');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `text` longtext DEFAULT NULL,
  `room` varchar(255) DEFAULT 'Global Chat',
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `uuid`, `text`, `room`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'd0592ec0-dfc0-44c0-81cb-e557373566ed', 'Hello World', 'Global Chat', 98, '2023-01-03 13:33:50', '2023-01-03 13:33:50'),
(2, 'ed5f80d2-b416-44c6-b910-ee912cad89e2', 'Hello John!', 'Global Chat', 105, '2023-01-03 13:34:06', '2023-01-03 13:34:06'),
(3, '1244052b-1a35-4928-a19a-4cdbde06444a', 'Whats uo', 'Global Chat', 105, '2023-01-03 13:34:15', '2023-01-03 13:34:15'),
(5, 'f61c11ee-5aaa-46b4-87d0-33d914b97f42', 'Hellooo', 'Global Chat', 99, '2023-01-03 13:35:15', '2023-01-03 13:35:15'),
(6, '475460ba-6219-4c70-b0e2-9042e9e6111c', 'Testing', 'Global Chat', 98, '2023-01-03 13:35:30', '2023-01-03 13:35:30'),
(7, '67065335-f3cb-4551-a916-c8a0ad270b4c', 'test', 'Global Chat', 98, '2023-01-03 13:35:43', '2023-01-03 13:35:43'),
(9, '641296d4-606c-42de-919c-2ad3325e2069', 'Testing New Date', 'Global Chat', 98, '2023-01-04 07:39:55', '2023-01-04 07:39:55'),
(10, 'b6d59bc1-d3d9-405c-badb-dc043de7e7bf', 'Testing', 'Global Chat', 98, '2023-01-04 08:38:02', '2023-01-04 08:38:02'),
(11, '45ef5a8a-9eea-4c68-af50-cdc38f70f660', 'Hello', 'Global Chat', 98, '2023-01-04 08:38:07', '2023-01-04 08:38:07'),
(13, '26c265dc-9c49-41ed-aba9-1377f6254c2a', 'Delete This', 'Global Chat', 105, '2023-01-04 08:43:36', '2023-01-04 08:43:36'),
(29, '475383ec-e4c0-4b85-9436-001c9a39bedc', 'Testing Placeholder', 'Global Chat', 105, '2023-01-04 08:48:36', '2023-01-04 08:48:36'),
(30, '5c80e732-9e28-429b-a73c-ae38b010d624', 'http://localhost:3000/dashboard/discussion', 'Global Chat', 98, '2023-01-04 08:54:38', '2023-01-04 08:54:38'),
(32, '6c79fadd-f282-4c9c-bc27-dcbba60b54eb', 'hello', 'Global Chat', 98, '2023-01-04 08:55:20', '2023-01-04 08:55:20'),
(33, 'f0bd001e-6469-4b92-8f3c-26a972de8a77', 'hello', 'Global Chat', 105, '2023-01-04 08:55:23', '2023-01-04 08:55:23'),
(34, '1c21092f-2a14-4084-9594-ea210c879c51', 'hi', 'Global Chat', 98, '2023-01-04 08:56:29', '2023-01-04 08:56:29');

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
  `userId` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `uuid`, `project_code`, `promote_name`, `promote_status`, `promote_pic`, `promote_desc`, `src_file`, `changes`, `promote_date`, `execute_week`, `request_week`, `side_promote`, `userId`, `createdAt`, `updatedAt`) VALUES
(15, '3fc2fca6-1ace-4acf-b7c9-c51143359f2d', 'Dolorem aut quasi co', 'Excepteur iusto offi', 'In Progress', 'Sunt minim corrupti', 'Totam in enim velit ', NULL, 'Consequatur Delectu', '2009-10-09', '2003-W21', '2015-W17', 'Hic enim lorem dolor', 0, '2022-11-15', '2022-11-18'),
(19, '48906ff6-3f88-4fe2-a731-4467faf5fefd', 'Libero reiciendis el', 'Ad nihil consequatur', 'In Progress', 'Vel laborum Nam even', 'Consectetur ducimus', NULL, 'Rerum autem quae ex ', '1984-12-07', '2016-W13', '1998-W14', 'Ea laborum Laborum ', 0, '2022-11-16', '2022-12-16'),
(20, 'ab6db444-d616-4acb-9b7b-cac2193963cb', 'Ut quo iure fuga Co', 'Incididunt est id co', 'In Progress', 'Porro eos est vitae ', 'Sed eos nisi sunt n', NULL, 'Cillum nulla laboris', '1983-06-13', '2017-W18', '2009-W38', 'Dolorum quisquam et ', 0, '2022-11-16', '2022-12-16'),
(21, '7967b890-c2e6-45af-bbe6-9598e926df81', 'Quis sint odio offic', 'Consequatur debitis', 'In Progress', 'Eligendi minus debit', 'Amet voluptas earum', NULL, 'Ut cillum eos volup', '1994-05-07', '1985-W08', '2011-W44', 'Quia ut nemo ad veni', 0, '2022-11-16', '2022-12-16'),
(22, 'a3aa8911-466d-463d-bbbe-aabf996183c9', 'Quisquam eaque dolor', 'Voluptatem irure se', 'In Progress', 'Fuga Harum et est v', 'Et molestiae dolor e', NULL, 'Quibusdam eos adipis', '1983-05-22', '2016-W31', '2013-W47', 'Laboriosam perspici', 0, '2022-11-16', '2022-12-16'),
(23, '25169842-c089-4537-8fc4-4aa06330d571', 'Rerum esse aut ut v', 'Repudiandae illo in ', 'Complete', 'Est molestiae soluta', 'Culpa dolore eos d', NULL, 'Quibusdam totam ea n', '2015-01-14', '1982-W36', '2000-W14', 'Eos soluta reprehen', 0, '2022-11-16', '2022-12-14'),
(24, 'e69e1d88-c7a1-4327-808d-daa1db8f99ac', 'Veniam in minima de', 'Sed nulla in ad dese', 'In Progress', 'Nam eaque odit ad ut', 'Optio omnis enim ab', NULL, 'Et culpa non at ali', '1989-11-08', '1998-W01', '1991-W08', 'POK Promote', 0, '2022-12-05', '2022-12-05'),
(25, '783c1d88-ee68-432e-8bb1-03db952f8df3', 'Ad magna voluptatem ', 'Ab quo sint repudian', 'In Progress', 'Et necessitatibus ma', 'Do quibusdam dolore ', NULL, 'Blanditiis incididun', '2015-08-09', '1989-W09', '2009-W47', 'Hasil Promote', 0, '2022-12-05', '2022-12-14'),
(26, '85aa5578-0bbb-4da6-9a63-00c8ac003a80', 'Tempore ut veniam ', 'Ut eaque velit bland', 'In Progress', 'Est hic sint volupta', 'Doloremque et volupt', NULL, 'Laborum aspernatur e', '2002-05-27', '1973-W28', '1997-W41', 'Checklist Promote', 0, '2022-12-05', '2022-12-12'),
(27, '95b862ba-f2b9-4c47-8b33-16cb87c008ce', 'Praesentium quae aut', 'Aut proident aperia', 'In Progress', 'Dolor laborum dolore', 'Non voluptas harum s', NULL, 'Unde esse sunt culp', '2005-08-09', '1980-W37', '1981-W12', 'Other', 0, '2022-12-05', '2022-12-05'),
(28, 'fa522f9e-e3db-4da5-886a-31ffc1f35438', 'Et consectetur inve', 'Quam autem repudiand', 'In Progress', 'Sunt ut aut sit qui', 'Voluptates omnis odi', NULL, 'Ipsum ut aut eum dol', '2005-07-04', '1975-W08', '1976-W34', 'Hasil Promote', 0, '2022-12-05', '2022-12-05'),
(29, 'c7d8795b-7f03-4803-ba25-9a5999d36148', 'Id omnis ab eligend', 'Nobis minim quaerat ', 'In Progress', 'Eaque exercitationem', 'Aut officiis sed sus', 'C:\\fakepath\\Checklist Promote Penambahan Fee Admin Fitur Pembelian dan Pembayaran di ATM Jalin Fase IV (Middleware) Sisi Middleware.doc', 'Voluptatum in nobis ', '2023-01-03', '2010-W25', '1985-W34', 'Checklist Promote', 98, '2022-12-05', '2023-01-03'),
(32, 'b34173d4-fdc1-4b9e-b5e8-bfb03f515d7b', 'Cupiditate exercitat', 'Quasi sed ea iste do', 'In Progress', 'Rerum magni aut et a', 'Id eum consequatur', NULL, 'Repudiandae qui aute', '1973-06-03', '1994-W12', '2007-W22', 'Hasil Promote', 0, '2022-12-05', '2022-12-16'),
(33, '2d10a24a-0849-449c-beaf-f889b8b9b15c', 'Nihil et dicta possi', 'Doloremque et quia t', 'Complete', 'Odio impedit volupt', 'Quia mollitia minima', NULL, 'Voluptas voluptas vo', '1985-11-05', '1971-W03', '1991-W14', 'Hasil Promote', 0, '2022-12-05', '2022-12-05'),
(34, '53968498-2c7d-4344-930c-9c830e82d43a', 'Quis excepturi rerum', 'Voluptas porro et et', 'Complete', 'Veritatis consequat', 'Aut aliqua Elit ul', NULL, 'Esse architecto nob', '2013-03-13', '1978-W12', '2015-W52', 'POK Promote', 0, '2022-12-05', '2022-12-05'),
(35, '32ada600-86d9-4ee7-b3de-39c45463d82b', 'Sapiente quis mollit', 'Commodi facilis temp', 'In Progress', 'Vel dignissimos vita', 'Dolorem quos deserun', NULL, 'Illo eligendi repudi', '1990-10-02', '1991-W34', '1984-W06', 'POK Promote', 0, '2022-12-05', '2022-12-16'),
(36, 'b9cfe9c1-5a30-47a3-997e-d577d254314a', 'Architecto dolorum a', 'Aute cumque sunt con', 'In Progress', 'Voluptas dolore temp', 'Tempora adipisci ali', '', '• test\n• est123\n• test123123setest\n• 123123set', '1996-09-04', '1995-W03', '1976-W45', 'POK Promote', 0, '2022-12-12', '2022-12-12'),
(37, 'e977e228-124f-4c2a-a290-280aa4d85d23', 'Proident voluptatem', 'Molestiae deserunt i', 'In Progress', 'Iure lorem earum mag', 'Cupiditate molestiae', 'C:\\fakepath\\Hasil Promote Jalin phase 4 Middleware_v1.0.docx', 'Veniam quia quas al', '2013-10-12', '2003-W26', '1986-W10', 'POK Promote', 0, '2022-12-12', '2022-12-14'),
(38, 'd706719f-2d5a-4554-adef-580d9da36912', 'Laboris et sint lab', 'Eu aliquid velit nu', 'In Progress', 'Qui enim vero alias ', 'Qui et irure eaque d', 'C:\\fakepath\\Checklist Promote Enhancement Struk VA PLN untuk Instansi Vertikal.doc', 'Ad quam facere volup', '1976-04-16', '2010-W27', '1972-W19', 'POK Promote', 0, '2022-12-13', '2022-12-13'),
(39, '8bc2c290-2aa2-4c16-9e9c-4a65121f1350', 'Aliqua Minim sed qu', 'Culpa numquam quisq', 'Complete', 'Nostrud vel quis id ', 'Cillum reiciendis in', '', 'Non consequuntur ea ', '2017-09-13', '1991-W02', '1985-W28', 'POK Promote', 0, '2022-12-15', '2022-12-15'),
(40, 'fb35a1f7-77ff-4c48-a309-a0cd8f5534af', 'Facilis id labore m', 'Magna voluptatibus v', 'In Progress', 'Aut est voluptas ali', 'Consequatur Maiores', '', 'Velit sint iste te', '1976-12-08', '1972-W34', '1983-W18', 'POK Promote', 0, '2022-12-21', '2022-12-21'),
(41, '876af0be-77fd-48b8-b221-7ccfab131f2b', 'Recusandae Et vel i', 'Facere consequat Ut', 'In Progress', 'Minus illum eiusmod', 'Reprehenderit fugiat', '', 'Aliqua Eveniet lab', '1987-12-08', '1975-W31', '1980-W51', 'POK Promote', 98, '2022-12-22', '2022-12-22');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('16AM69Sw_aewQpx19jXnCtE0gsyHZ1bh', '2023-01-04 14:42:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:42:32', '2023-01-04 08:42:32'),
('1azjDL3tnLTHor98R5ZVy83cRj1NuzBH', '2023-01-04 14:48:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:48:21', '2023-01-04 08:48:21'),
('1xgbL7cKJV-ck2uh3mmIjbnTvbxOKu2H', '2023-01-04 14:51:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:51:21', '2023-01-04 08:51:21'),
('1Y-Eps-cbnh-XWMonZRvVKY545MmFfor', '2023-01-04 14:51:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:51:28', '2023-01-04 08:51:28'),
('2RIRZwSpbJuEHAPQKI_7a35PNwXru8-Y', '2023-01-04 14:45:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:45:34', '2023-01-04 08:45:34'),
('2szyVCTz8WKs88dwVU9yNHkGiS2EQ60j', '2023-01-04 14:37:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:37:38', '2023-01-04 08:37:38'),
('32Q_NucEqvgnJpoO_rTKTIWdt36vd6tR', '2023-01-04 14:39:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:44', '2023-01-04 08:39:44'),
('3NTaixXv4f8ZiYAjvfNs6XYmBtL4-RF3', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('5YvWzZ8i7XhG1D9MuSdNT3BMY7QQu_h1', '2023-01-04 15:02:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:02:51', '2023-01-04 09:02:51'),
('6CffnwEwHqo0tWUADZnq3yFNEsGmEpOu', '2023-01-04 14:39:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:44', '2023-01-04 08:39:44'),
('6IxXWwobHnKMPUIqNy9u1CCZtiTSrfOq', '2023-01-04 15:03:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:03:26', '2023-01-04 09:03:26'),
('7d3bVuPy_e9Gz7b3LnQw7GcA0BeOyr4J', '2023-01-04 14:43:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:43:44', '2023-01-04 08:43:44'),
('8wugrn_KaS_5YcSjXE4WzU1EG6UOAmh0', '2023-01-04 14:58:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:58:17', '2023-01-04 08:58:17'),
('9TARDEp6C4cVQ4hIk9ASRMocEh748DMs', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('axo8mhN_PQbCI_Z46OBz9wTLvCIyW67a', '2023-01-04 15:00:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:00:24', '2023-01-04 09:00:24'),
('b5OfTWPf16ZEyhH6K2_a2bTRpINsHGy3', '2023-01-04 13:39:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 07:39:54', '2023-01-04 07:39:54'),
('BM4dVJq_YU2aDNPjJcnIxV-RyUISZZ6n', '2023-01-04 15:00:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:00:24', '2023-01-04 09:00:24'),
('BuGKZJqt3ZdPsFQv2SF8PLZdKG0Ym9xW', '2023-01-04 14:39:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:39', '2023-01-04 08:39:39'),
('Bwavw2dxevzW8vZZTqv8zohXSiTGf6py', '2023-01-04 14:35:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:35:24', '2023-01-04 08:35:24'),
('c1myuybJ-PyheF9YI2YBx9Yg9lWPPnA1', '2023-01-04 14:58:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:58:17', '2023-01-04 08:58:17'),
('c1SI-AyYSxdieSmehW9twS4mJwM5G9el', '2023-01-04 15:03:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:03:22', '2023-01-04 09:03:22'),
('C5qJGmpdgEIm3efNSlrIqtN0OTFdT_gO', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('cHgIkhvWDIOGNDAYCv-8m6OMwftTnLSU', '2023-01-04 14:55:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:55:23', '2023-01-04 08:55:23'),
('D1ZOnCr9HabjnMNWLNXRztknBbS3AnT-', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('d9JDS05O9cTZ8QOiAooygg8N6jHgE5IU', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('DjMvcQ5Trkb998Erk2ms8Dr0TL_M0J4b', '2023-01-04 15:00:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:00:24', '2023-01-04 09:00:24'),
('D_TSAo2qm0gYDFaUF2D3JtPZRWNova26', '2023-01-04 14:46:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:46:25', '2023-01-04 08:46:25'),
('ENd9BBflkolghqZID9hh6D4WAuSgS3YE', '2023-01-04 14:45:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:45:45', '2023-01-04 08:45:45'),
('eNSbvQpwPEGEioacVfK17YghsoDEjSaW', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('eOV-1AUW8H8NlAuY9_nFe4IZQ5TSZzwZ', '2023-01-04 14:46:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:46:20', '2023-01-04 08:46:20'),
('ey95Tv3OuEfvOZ-_mEIyj6nD7bextRNM', '2023-01-04 15:02:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:02:54', '2023-01-04 09:02:54'),
('flLrkpHntiQCJsMtOnd8cFRBQ8DV67vm', '2023-01-04 14:57:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"fa2fc7f4-9f1e-47e1-bbd7-a56c24de6702\"}', '2023-01-04 08:54:28', '2023-01-04 08:57:09'),
('fp4CAEN9Q39PnYEVD8OBl1ic8v6Lmftg', '2023-01-04 14:58:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:58:17', '2023-01-04 08:58:17'),
('FwQy31UdLUUOAsPetq5VXXmgXME63cgk', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('g00jPnY3hsADMQunf1Js3QsffYc7puqj', '2023-01-04 14:58:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:58:21', '2023-01-04 08:58:21'),
('G88BqHMs1YlK0QpL1qPaovt_xf1z_siI', '2023-01-04 14:45:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:45:39', '2023-01-04 08:45:39'),
('G8pMI4wI6-aVzfISQjn0bp8iIJt-wDZG', '2023-01-04 14:46:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:46:24', '2023-01-04 08:46:24'),
('gjTcrGJ9YqBnnEpSzxr7hTBmojsiDJa7', '2023-01-04 14:38:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:38:02', '2023-01-04 08:38:02'),
('gpGNVcMB8QRn80tf2DIubyEwADnZQD3V', '2023-01-04 15:00:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:00:17', '2023-01-04 09:00:17'),
('H9q50jpJr6dwlIDIy_6Fz0TSWCVT8u10', '2023-01-04 14:39:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:57', '2023-01-04 08:39:57'),
('HKxIO7zjHnIs67JITQQt7nxamy1OqWdT', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('hMmkeNj6EqHkDiF5VXWQmWuJWb2WydVf', '2023-01-04 14:50:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:50:41', '2023-01-04 08:50:41'),
('HzILVJ2R_ST13f8hBRYIOKBGJCcorDkZ', '2023-01-04 14:46:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:46:26', '2023-01-04 08:46:26'),
('HzLjbAkBH1uWdjnB7UD4MCjiRf7B6QPP', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('i7rx3o0xUVt3pLRpOkEmiLeZiSEHI7cx', '2023-01-04 14:48:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:48:36', '2023-01-04 08:48:36'),
('iEGUQBRAUyorzx1miMhsEMbi3bhljtzv', '2023-01-04 14:58:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:58:17', '2023-01-04 08:58:17'),
('Ir5QTfsEoiolRgbvSzZNmGxzQGDmtrt2', '2023-01-04 15:00:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:00:37', '2023-01-04 09:00:37'),
('iTh6NBDSlpYte4zGR2XwFflDilmQR4TJ', '2023-01-04 14:42:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:42:24', '2023-01-04 08:42:24'),
('iwRpGi8EXYxL55sRkU5pZKvPuvHAoJdB', '2023-01-04 14:46:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:46:23', '2023-01-04 08:46:23'),
('IZPVXegzXgM-AW9n5pjjce0QrUuYbPAI', '2023-01-04 14:51:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:51:28', '2023-01-04 08:51:28'),
('JLcwIZ4_dgtF_uchhQe0eaLMTS1AsOke', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('kD8Kl0vAvjuffxYm0DTB0HJNtmZJK64j', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('kko4yTcvCvTcGg0WdBlo1xTxqnNJ4UIy', '2023-01-04 14:42:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:42:02', '2023-01-04 08:42:02'),
('KLOAfYK7PhAtowyWzI8fliscWZG2f4jQ', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('KmQ9G8yrHCnQvfzZxceuj0_8i9Sd7SQh', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('kQ7GpnsefV6vJ7Oxw1u9u8CiA6aF9Tun', '2023-01-04 14:39:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:44', '2023-01-04 08:39:44'),
('kXA9SF9f1NrIitYdL-MqhjySm6lA-a7o', '2023-01-04 14:54:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:54:28', '2023-01-04 08:54:28'),
('LXQPXHJzWnZ4iL-sKmtSKP5yWXswVW1L', '2023-01-04 14:42:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:42:36', '2023-01-04 08:42:36'),
('m1j7mUXEi_8ueJioTGFb93yQW8bnLGGO', '2023-01-04 14:54:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:54:32', '2023-01-04 08:54:32'),
('MG0MHiTMSb0ixvXZVPJdqsJfK5j0F_22', '2023-01-04 14:51:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:51:28', '2023-01-04 08:51:28'),
('Mrd-B1zPorCH0OdmgcVOI8QTXOa-eWEw', '2023-01-04 14:42:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:42:08', '2023-01-04 08:42:08'),
('N8Rl5ipbTXHqX-i9-ucofQlgQtA1dZUf', '2023-01-04 14:48:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:48:29', '2023-01-04 08:48:29'),
('naaIpB_AbK7ovRSn58CV-6ESwzihF2XF', '2023-01-04 15:05:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"fa2fc7f4-9f1e-47e1-bbd7-a56c24de6702\"}', '2023-01-04 09:05:08', '2023-01-04 09:05:28'),
('NcF5zxTMFXBp0BGm2sh-b6x26bUE1LVc', '2023-01-04 14:39:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:44', '2023-01-04 08:39:44'),
('nQtXQrm6szkDtrhVsiYppd1z8XVIQVAW', '2023-01-04 14:45:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:45:43', '2023-01-04 08:45:43'),
('NWsqoHqL1g0Uh7cDEACq4ArL0m0EKFuU', '2023-01-04 15:02:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:02:29', '2023-01-04 09:02:29'),
('o3ZXFnMcljNENhUMGcAlV6cWBj8rLzHj', '2023-01-04 15:00:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:00:24', '2023-01-04 09:00:24'),
('OAlfDr_THVkNdQX0Iz6zRX2P5LXETW47', '2023-01-04 14:46:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:46:19', '2023-01-04 08:46:19'),
('oS9h4JcPRgVc2G-dmzUyaTLnKsxbzOYn', '2023-01-04 14:44:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:44:41', '2023-01-04 08:44:41'),
('p3mJ7SycVOUFbHMY5KMMZ1BlrZdHOA9z', '2023-01-04 14:58:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:58:17', '2023-01-04 08:58:17'),
('PUxlGETA1hJSWVTlJcGP717mg6gHTfWy', '2023-01-04 14:39:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:44', '2023-01-04 08:39:44'),
('q27n1P2IiYR3pZ8UQPDjiMbkgC_IXkCP', '2023-01-04 14:46:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:46:21', '2023-01-04 08:46:21'),
('QaSaVGURbXiZoRvMxjt6cegPTLBuHRD6', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('QGi9oC9SjDAOJK7CyPV_qWJeNcMtyaj7', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('RJnfdMGffHWhNbcLiTke_neC6fTc8m0C', '2023-01-04 14:42:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:42:51', '2023-01-04 08:42:51'),
('rON2fx3s5DNXOfaS_xWZFnGXZ5wSmqu5', '2023-01-04 15:00:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:00:24', '2023-01-04 09:00:24'),
('rTuAfOZ_hOqVgsGklbB4to6fc4uZWnKX', '2023-01-04 14:45:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:45:41', '2023-01-04 08:45:41'),
('rvqab54PArJrrhoZ3G3Qznwupd48GYRY', '2023-01-04 15:00:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:00:24', '2023-01-04 09:00:24'),
('s-MfllNqfwL-ALrDdMsQ0qUO04E2lsHz', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('sqk2UKE9T5FpbKa_N5zq5C-V1hp7Zw69', '2023-01-04 14:54:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:54:28', '2023-01-04 08:54:28'),
('suxiz-ONLHevk9CW--DJtgLhYOvt005v', '2023-01-04 15:00:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:00:29', '2023-01-04 09:00:29'),
('t-X3kd2buARczxXqf8yHkf0_6nAZ2EDX', '2023-01-04 14:56:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:56:29', '2023-01-04 08:56:29'),
('T0yLXKg6MjqiQXcVPrGmzSKT5a_ZSXHj', '2023-01-04 14:43:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:43:36', '2023-01-04 08:43:36'),
('TEOSzesEZlvFJzyjYLHJENju_FlFhrR7', '2023-01-04 14:36:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:36:21', '2023-01-04 08:36:21'),
('TIUvmCfJuLkYGo4NRn21CL4-1I2d6g-q', '2023-01-04 14:54:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:54:17', '2023-01-04 08:54:17'),
('tPF_rNknSvWDUXEoFlyCBhOmqLX3_MBO', '2023-01-04 14:46:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:46:14', '2023-01-04 08:46:14'),
('TtTr5tz3C_RvIKlk0pjg7JLyQ1qWh9GJ', '2023-01-04 14:36:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:36:08', '2023-01-04 08:36:08'),
('TVFLBJCtmU-Gf_rDLUJFNZPAJe-uwyOH', '2023-01-04 14:54:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:54:22', '2023-01-04 08:54:22'),
('U0vwA7k0t7ccREFiuJWC8JCqNj19Ukko', '2023-01-04 14:54:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:54:17', '2023-01-04 08:54:17'),
('UJaruJWzJto54r3FdV76NDNOqGAaJcZM', '2023-01-04 14:42:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:42:15', '2023-01-04 08:42:15'),
('UptuoySdUG98UQoLAD-aEMyi4BW6fOeg', '2023-01-04 14:39:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:50', '2023-01-04 08:39:50'),
('Upxx3Exx3gBMiltqZF02GhDqpzYSoApu', '2023-01-04 14:44:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:44:31', '2023-01-04 08:44:31'),
('Ut8nIzz5PHg5VJea0IB18_zGWSi9_MfF', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('UVtYquR17wT9rqWfKxC7U3p8eLPY0i4t', '2023-01-04 14:40:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:40:15', '2023-01-04 08:40:15'),
('vAm_6Ut0nXEpwS6Eaa-bHsACGyInH8CR', '2023-01-04 14:58:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:58:17', '2023-01-04 08:58:17'),
('vOVUCtGY1GizKOP0-6_LSa9gpq7i3kUW', '2023-01-04 14:58:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:58:17', '2023-01-04 08:58:17'),
('vPqr3sRx_sWuJl7iMpgsSoPvSnB4CksN', '2023-01-04 14:43:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:43:33', '2023-01-04 08:43:33'),
('vPX13FObehzgnJn4fo979AA6WA30f5be', '2023-01-04 14:35:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:35:01', '2023-01-04 08:35:01'),
('vqjtRiRu-dIySoEp08wC9QdSZ5pmu-oX', '2023-01-04 14:45:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:45:27', '2023-01-04 08:45:27'),
('vQNBVo4skFJeC215uLZtv_T3X1EXDSZR', '2023-01-04 14:39:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:44', '2023-01-04 08:39:44'),
('vRQJxPBZ5eBJreeKZ0tSIOSxVxhfUX22', '2023-01-04 14:51:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:51:28', '2023-01-04 08:51:28'),
('vyQOxBtYFAU0FHaHGtnXkOvQqxdCFdi7', '2023-01-04 14:45:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:45:46', '2023-01-04 08:45:46'),
('W33h26umWVlty9xiqG39TWkwQIoo886o', '2023-01-04 14:39:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:44', '2023-01-04 08:39:44'),
('w3YxektOjfmD8Y-X6805vGXJG6k4MeKc', '2023-01-04 14:55:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:55:13', '2023-01-04 08:55:13'),
('wIAPV789LK5pj0X3vC2v6Jcnn7RXm5RK', '2023-01-04 14:55:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:55:20', '2023-01-04 08:55:20'),
('x3nFYMuH-qx60uwhqissbOPTwYmJ2O8o', '2023-01-04 14:58:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:58:17', '2023-01-04 08:58:17'),
('Xe43XCYxBrXGlQf94mJ3S22q2KXhSxhX', '2023-01-04 15:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:01:20', '2023-01-04 09:01:20'),
('xwiRdaF74mPL3xaJt7-ZOVnZ0KjSezd4', '2023-01-04 14:54:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:54:17', '2023-01-04 08:54:17'),
('Y3TFhkP_ocjND5u9L5-h7YxZZ4CjEaUS', '2023-01-04 14:54:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:54:38', '2023-01-04 08:54:38'),
('YiR-fyQk6w2iin9Lj5tJlYi5Thxq2DY-', '2023-01-04 14:35:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:35:42', '2023-01-04 08:35:42'),
('Yn1sPw29Er3yVp_veLgWVURwVTC1UmQ7', '2023-01-04 15:00:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 09:00:24', '2023-01-04 09:00:24'),
('z6d7djpcGc0xM65G43MYIDS_AmXvKp-k', '2023-01-04 15:07:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"fa2fc7f4-9f1e-47e1-bbd7-a56c24de6702\"}', '2023-01-04 09:03:22', '2023-01-04 09:07:13'),
('zDBrWKdI7RbTwtQQ5yi_jIWm3SIZDIfO', '2023-01-04 14:58:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:58:17', '2023-01-04 08:58:17'),
('zKWe8umkh6E7BH85pFOVzhoZ-OPMimOK', '2023-01-04 14:39:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:39:44', '2023-01-04 08:39:44'),
('_l7mgrxLwNApScbzuBtVGKl4qWi58_45', '2023-01-04 14:48:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-04 08:48:27', '2023-01-04 08:48:27');

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
  `userId` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `uuid`, `name`, `status`, `description`, `deadline`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'd84f6f34-5c25-44f8-a084-60f250b6bb47', 'Christmas', 'Completed', 'To Do Task', '2022-12-25', 98, '2022-12-21', '2022-12-26'),
(2, 'b486a0de-c275-481a-b249-a938548be19b', 'New Year', 'Completed', 'Celebrate', '2022-12-31', 99, '2022-12-21', '2023-01-03'),
(4, 'b0376463-6749-4aee-b47b-fbd442ba4960', 'Create Profile Picture File Upload Function on Backend', 'Uncompleted', 'Create Profile Picture File Upload Function on Backend', '1993-02-03', 105, '2022-12-22', '2023-01-04'),
(5, '1cc74525-5c2c-4923-a2c3-cc989892afe9', 'Push Github', 'Completed', 'Push', '2022-12-27', 105, '2022-12-27', '2023-01-04'),
(6, '57804a8a-879b-4b00-8d90-b139ef998389', 'Reprehenderit proid', 'Completed', 'Assumenda modi place', '1999-05-02', 98, '2022-12-27', '2023-01-03'),
(7, '7bb81d11-1989-45f1-877f-051e32be7670', 'Quisquam maiores est', 'Uncompleted', 'Dolor voluptas lauda', '2019-04-18', 98, '2022-12-27', '2022-12-27'),
(8, '0d682339-8b6d-48a5-9fde-250f34b8fb50', 'Ipsum blanditiis id ', 'Completed', 'Aspernatur enim et r', '2008-06-08', 98, '2022-12-27', '2023-01-03');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
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

INSERT INTO `users` (`id`, `uuid`, `name`, `username`, `division`, `status`, `birth`, `email`, `phone`, `email_verified_at`, `password`, `remember_token`, `createdAt`, `updatedAt`, `roles`) VALUES
(98, 'fa2fc7f4-9f1e-47e1-bbd7-a56c24de6702', 'Admin', 'adm123', 'AS', 'Active', '2016-12-26', 'adminis_mator@btn.id', '+1 (472) 878-1924', NULL, '$argon2id$v=19$m=65536,t=3,p=4$CPz3nM/b8fKV8YeGEkZNFA$Zzyp6vl5F1TiskFKHb0sY4cLgUD6W2JsUVJjv8DQdZo', NULL, '2022-12-20', '2023-01-03', 'admin'),
(99, '11e5252b-a0d1-4917-88b2-2e793ccfc02e', 'Zane Madden', 'adm1234', 'AS', 'Active', '1995-07-01', 'xohoryhaku@mailinator.com', '+1 (556) 496-6822', NULL, '$argon2id$v=19$m=65536,t=3,p=4$2Rwg5nLswdNseNM3j3KIBw$kHJ1KyW2jisKoNK9RWtzuwx0WNAlBatX4Y/i62UXZoA', NULL, '2022-12-21', '2022-12-21', 'user'),
(100, '1965baf6-0155-44a5-8a55-44d949dfe522', 'Administrator', 'adminbtn', 'CMT', 'Active', '2022-12-21', 'adm@btn.co.id', '1234567890', NULL, '$argon2id$v=19$m=65536,t=3,p=4$FB1TxHeXXf5W04jiHis+ow$l7DQwdEE1nCH1gdyGB7zY9uMRbjxh0ut5MAo3DauFCs', NULL, '2022-12-21', '2022-12-21', 'admin'),
(103, '9d290879-09ed-42bd-86bd-ee29a9402dd3', 'user123', 'user123btn', 'DBA', 'Active', '1973-11-24', 'user123@btn.id', '+1 (298) 376-4556', NULL, '$argon2id$v=19$m=65536,t=3,p=4$ywDRago8cpD9yZIn9T7PIQ$OTtYuF2FygNdzJy1lhOm9A/7UPwX4anqJbitL2c75i0', NULL, '2022-12-22', '2022-12-22', 'admin'),
(104, '9365d621-fe46-4f49-beee-ad034bcf52f3', 'admin123', 'admin123btn', 'AS', 'Active', '2022-12-22', 'admin123@btn.id', '123123123', NULL, '$argon2id$v=19$m=65536,t=3,p=4$RqEJ6GlSt/EnjN1CGS/9qQ$E916aHBb7cBfdv++QSQgIhL2c5TbuYqwsPGzGXOao90', NULL, '2022-12-22', '2022-12-26', 'admin'),
(105, 'e733c80b-5695-4d8b-8c8c-7ad50a747de3', 'Landlord', 'user123', 'CMT', 'Active', '1999-05-12', 'xybefybih@mailinator.com', '+1 (703) 519-2889', NULL, '$argon2id$v=19$m=65536,t=3,p=4$aGE2lEEUYt2qjDbSadq6Ng$UNoIkAznSy0vxnTe5Hqi7e8KzpUojlj6Aq1Ofz55xO4', NULL, '2022-12-22', '2022-12-27', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `meetings_ibfk_1` (`userId`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `message_ibfk_1` (`userId`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `report_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
