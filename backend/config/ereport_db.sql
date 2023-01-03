-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2023 at 07:05 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+07:00";


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
  `users` int(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `uuid`, `text`, `users`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '60bb8c81-1c6a-42dd-b694-10133c227fe1', 'Hello Testing', 1, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(2, 'd0bbd839-6a41-40af-b99f-9df9deaa2bd1', 'Hello Testing', 1, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(3, '8bc75633-73e5-4b1b-8197-f599ed30880c', 'Hello Testing No Users', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(4, '8488ed53-6e7f-4237-a85f-b48130ded0d4', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(5, '2d3bfa6f-b303-4d50-92eb-873e7200a47f', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(6, '2a79b8ef-6cf8-4c92-9601-a7acf210dfa9', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(7, '3742ae63-afc5-4eca-8740-929f5b952772', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(8, '500450b6-dbd0-4c7a-8098-6bd5aeb97e3e', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(9, '1beeff99-68c0-4e3a-ba26-ed2cc0a9e541', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(10, '6f40ca02-2dcb-4fd2-a174-bc054d746d4e', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(11, '79e81ad7-883c-4d56-9b93-633b2082094a', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(12, '7c1c1b50-8103-4e0b-abe7-8ae674b7246c', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(13, 'd5ba9a1d-1540-463e-a20f-fbc647338a7d', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(14, 'a0e71eac-eaea-4094-a776-06bc91b2f4ea', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(15, '95f19804-df3d-4e49-ab12-46e26feb55fa', 'Hello Testing Time', NULL, 98, '2023-01-03 00:00:00', '2023-01-02 00:00:00'),
(16, 'a8118313-ed41-4017-9c7e-ae08120b700f', 'Hello Testing Time', NULL, 98, '2023-01-03 13:50:15', '2023-01-02 00:00:00'),
(17, 'fbe7ae22-1166-4ce8-b63b-da45d738b93d', 'Hello Testing Time', NULL, 98, '2023-01-03 13:50:47', '2023-01-02 00:00:00'),
(18, '972b59e5-6985-4b8c-a636-eabed498fed9', 'Hello Testing Time', NULL, 98, '2023-01-03 13:51:05', '2023-01-02 00:00:00'),
(19, 'ea83c215-db3a-4d76-89c1-fddc5362a739', 'Hello Testing Time', NULL, 98, '2023-01-03 13:51:41', '2023-01-02 00:00:00'),
(20, '5d2df6e0-62cb-41ab-94ca-dd23e3a07494', 'user123', NULL, 105, '2023-01-03 14:18:07', '2023-01-02 14:18:07'),
(21, '4e65124f-0c71-4279-9ac3-610e68d90c20', 'asd', NULL, 98, '2023-01-03 14:46:46', '2023-01-02 14:46:46'),
(22, '5a6c0e61-0599-4c8b-ba25-836ab3fbc0ec', 'new message here', NULL, 105, '2023-01-03 14:53:39', '2023-01-02 14:53:39'),
(24, '7cb0da9f-a505-456b-8d8e-cf2eca593318', 'new message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message mes', NULL, 105, '2023-01-03 14:56:30', '2023-01-02 14:56:30'),
(25, '84d32762-f0b0-4e2a-9661-19d434a76396', 'date time', NULL, 98, '2023-01-03 15:39:00', '2023-01-02 15:39:00'),
(26, '8a9a9618-8c33-4876-bab8-02a3540234e4', 'new message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message mes', NULL, 98, '2023-01-03 15:58:04', '2023-01-02 15:58:04'),
(27, '023d8dac-38a7-477e-824a-49703fac33c7', 'new message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message mesnew message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message mesnew message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message mesnew message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message mes', NULL, 98, '2023-01-03 15:59:07', '2023-01-02 15:59:07'),
(28, 'c1777537-3301-482a-b26a-dfb92a2916c7', 'asd', NULL, 98, '2023-01-03 11:56:49', '2023-01-03 11:56:49'),
(29, '0c3e49fb-9103-4529-a6b1-3a77da844e52', 'test', NULL, 98, '2023-01-03 11:57:02', '2023-01-03 11:57:02'),
(30, '0a81d4c6-1305-4e5a-a216-59a75aa2538c', 'test', NULL, 98, '2023-01-03 11:57:04', '2023-01-03 11:57:04'),
(31, '39540e23-6c12-4fdb-bc0a-f4fa5c1301bf', 'test', NULL, 98, '2023-01-03 11:57:17', '2023-01-03 11:57:17'),
(32, '027a2182-69a8-4715-a102-036a0565171e', 'test testing', NULL, 98, '2023-01-03 11:58:48', '2023-01-03 11:58:48'),
(33, '5f6b5d80-81f0-4ab7-9f3e-5e99ef0d09b8', 'test testing', NULL, 98, '2023-01-03 11:58:50', '2023-01-03 11:58:50'),
(34, '3d9f3e36-f3f6-4ae6-b731-322833b70046', 'test', NULL, 98, '2023-01-03 12:16:40', '2023-01-03 12:16:40'),
(35, '77130046-1adc-41c0-b807-ee0740b01074', 'asd asd test', NULL, 98, '2023-01-03 12:39:47', '2023-01-03 12:39:47'),
(36, 'edcfe52d-4121-49c0-9931-6a1cd780fc9b', 'AAAAAAAAAAAAAAAAAAAAAAAAAAA', NULL, 98, '2023-01-03 12:55:19', '2023-01-03 12:55:19'),
(37, '1120ca13-cae8-47ca-b4eb-8807184c0bd8', 'test', NULL, 98, '2023-01-03 12:55:56', '2023-01-03 12:55:56'),
(38, '32c3fe29-2bc3-4a0e-81e0-8454a03db9f8', 'test', NULL, 98, '2023-01-03 12:56:00', '2023-01-03 12:56:00'),
(39, '818f1412-7850-4bef-882b-da7cd46c4aba', 'Testing', NULL, 98, '2023-01-03 12:56:09', '2023-01-03 12:56:09'),
(40, 'f1f5df16-f3a1-447b-8cf2-1a6187608ba0', 'Testing', NULL, 98, '2023-01-03 12:56:11', '2023-01-03 12:56:11'),
(41, '6d13a76b-dd9a-4b47-bf38-3f10b9023a77', 'test', NULL, 98, '2023-01-03 12:57:04', '2023-01-03 12:57:04'),
(42, '9f06e8b5-9976-4520-a09c-fafda0cdab15', '123 123 test', NULL, 98, '2023-01-03 12:57:13', '2023-01-03 12:57:13');

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
('17oq3_18b08mGaOn73UvTN8O6DUv-x1M', '2023-01-03 14:29:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 08:29:57', '2023-01-03 08:29:57'),
('1wMNxqategmYOb8P44e4M3YJLn3hOO4Q', '2023-01-03 18:57:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 12:57:04', '2023-01-03 12:57:04'),
('3f3M6XfRBriqMs3WVoLWoOPjGLhDjYb7', '2023-01-03 14:30:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 08:30:06', '2023-01-03 08:30:06'),
('3u5FPHmj-sIH0E7Dkbtj7qz1UTG2C6nE', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('5N8nf62kGHf8VpOktCexI-Ymr4SBf5Qw', '2023-01-03 18:39:47', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 12:39:47', '2023-01-03 12:39:47'),
('7N2BZYVrw5scvxO3Lp-jdWt_unAv42ci', '2023-01-03 18:16:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 12:16:40', '2023-01-03 12:16:40'),
('9LO5hepwufvKhSNxYT6bWwPhmP7758pp', '2023-01-03 16:56:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:56:52', '2023-01-03 10:56:52'),
('a3PbGoaXGsL9C8cIrj5HSvqvaEDAn0WI', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('AiRKrISlIp3JgHzeQWSnV5b0SyC74-qw', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('bzu7gvWP9xqAxc10YQq0Zw6dIe2DuCUu', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('CHYWLI1YDopzKxtopiGCPpJRb_9MPzr0', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('Cx4f5F1Picw6MeUEjpRSrkanFRBDzHRP', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('D57yyPLO4i9ibxhYvIviBNfEuOgxgmqZ', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('Dk0vlq39mAvSBMmzrryg36TnffYYS2Vg', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('EtsVgKp8H7kEc_Ikm9WlmE7rssOpRvxe', '2023-01-03 18:55:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 12:55:56', '2023-01-03 12:55:56'),
('Fxx7aD0_zS1fVi96AJeG0OieJj80VZdo', '2023-01-03 18:56:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 12:56:09', '2023-01-03 12:56:09'),
('IGRQ2JFBtcMbMlSqgU_0_WzQHpZgSN4u', '2023-01-03 18:57:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 12:57:13', '2023-01-03 12:57:13'),
('jyOiTu4HwWWLUB-J93iLGZAlUF87q_Iw', '2023-01-03 17:57:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 11:57:17', '2023-01-03 11:57:17'),
('L-jbTLSGYFbT96L35wxtwdcEG5Mx1OZs', '2023-01-03 14:30:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 08:30:15', '2023-01-03 08:30:15'),
('nQsLBk6lQXWtmjd2Jlji_72ka-3UswYy', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('oF3bS_DAszFedx0ZrH0TShKh7C7o9L9L', '2023-01-03 17:57:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 11:57:02', '2023-01-03 11:57:02'),
('PC8EwxhZ-0_m6aw2XqenlmLt_c8WTVH3', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('q6Axgk5QaANqwlW__-dmsC6y-RviRKeh', '2023-01-03 17:58:48', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 11:58:48', '2023-01-03 11:58:48'),
('Ru5NN30ENxdWKKyBHj5F63MR8Jxcex6L', '2023-01-03 14:56:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 08:56:19', '2023-01-03 08:56:19'),
('SmFwcZFQrvW7EeP6Y_Y-fiDyWfVdVJh5', '2023-01-03 18:55:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 12:55:19', '2023-01-03 12:55:19'),
('tIx3SUP10gal0AgVkbrsthgd0EUfPgJD', '2023-01-03 18:18:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"fa2fc7f4-9f1e-47e1-bbd7-a56c24de6702\"}', '2023-01-03 12:18:24', '2023-01-03 12:18:32'),
('TYK5Hrpd8uU_0u2SI9HjnKDZxnfGA5Rf', '2023-01-03 19:03:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"fa2fc7f4-9f1e-47e1-bbd7-a56c24de6702\"}', '2023-01-03 10:53:07', '2023-01-03 13:03:06'),
('VoY-Z6DzISHQI1fnyccuqAf1gfrgGwzv', '2023-01-03 14:29:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 08:29:53', '2023-01-03 08:29:53'),
('X3SvOSAmiEEL-z8OrLstSXfTN2Afy3Xz', '2023-01-03 17:56:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 11:56:49', '2023-01-03 11:56:49'),
('x7iWuBmFQabUNGaE685qKl9n9jKjcS6l', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('xcvkoXreTCLsrKLlsuOkrk31GeM6ow03', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('Y85cRFJ0jg8CFX7qdr6omFF5BJ90fGDa', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07'),
('YlU0gSZIzfmbyUw5v11lT-uQHjewCZHp', '2023-01-03 14:59:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 08:59:20', '2023-01-03 08:59:20'),
('zZi8nbt7-sy__wsqRnDaY_BSnWlFHe9f', '2023-01-03 16:53:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-03 10:53:07', '2023-01-03 10:53:07');

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
(4, 'b0376463-6749-4aee-b47b-fbd442ba4960', 'Create Profile Picture File Upload Function on Backend', 'Completed', 'Create Profile Picture File Upload Function on Backend', '1993-02-03', 105, '2022-12-22', '2023-01-03'),
(5, '1cc74525-5c2c-4923-a2c3-cc989892afe9', 'Push Github', 'Uncompleted', 'Push', '2022-12-27', 105, '2022-12-27', '2022-12-27'),
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
(98, 'fa2fc7f4-9f1e-47e1-bbd7-a56c24de6702', 'John', 'adm123', 'AS', 'Active', '2016-12-26', 'adminis_mator@btn.id', '+1 (472) 878-1924', NULL, '$argon2id$v=19$m=65536,t=3,p=4$R6q+73RWG7uAyJ2JHzQ3/w$MnE+5J8GUpO8m/nt6w8/nKTmZw8ji2hNdjTy5qI+Jd0', NULL, '2022-12-20', '2022-12-26', 'admin'),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

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
