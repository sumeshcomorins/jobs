-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2022 at 10:32 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `activity_record`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `gender` varchar(15) DEFAULT NULL,
  `workstatus` varchar(30) DEFAULT NULL,
  `jobcategory` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `phone`, `gender`, `workstatus`, `jobcategory`) VALUES
(1, 'miller094@gmail.com', 'miller094@gmail.com', 'goodluck', NULL, NULL, NULL, NULL),
(2, 'test@gmail.com', 'test@gmail.com', 'goodluck', NULL, NULL, NULL, NULL),
(6, 'Vramesh@gmail.com', 'Vramesh@gmail.com', 'goodluck', NULL, NULL, NULL, NULL),
(7, 'Dhoni@gmail.com', 'Dhoni@gmail.com', 'goodluck', NULL, NULL, NULL, NULL),
(10, 'idea@gmail.com', 'idea@gmail.com', 'goodluck', NULL, NULL, NULL, NULL),
(11, 'Xgabara@gmail.com ', 'Xgabara@gmail.com ', '1234', NULL, NULL, NULL, NULL),
(12, 'rameshdreamweb@gmail.com ', 'rameshdreamweb@gmail.com ', 'Goodluck', NULL, NULL, NULL, NULL),
(13, 'suvendu2020@gmail.com', 'suvendu2020@gmail.com', '1234', NULL, NULL, NULL, NULL),
(14, 'rameshdemo@gmail.com', 'rameshdemo@gmail.com', 'goodluck', NULL, NULL, NULL, NULL),
(41, 'John doe', 'JohnDoe@gmail.com', 'goodluck', '2323234545', 'male', 'fresher', 'Web devloper'),
(42, 'Clark Man', 'ClarkMan@gmail.com', 'goodluck', '111111111', 'male', 'fresher', 'designer'),
(43, 'Mark Doe', 'MarkDoe@yahoo.com', 'goodluck', '2323434343', 'male', 'fresher', 'UX designer'),
(44, 'ramesh test', 'RameshTest@icloud.com', 'goodluck', '454535353', 'male', 'fresher', 'full stack developer'),
(45, 'ramesh test2', 'Rameshtest2@gmail.com', 'goodluck', '5656464646', 'male', 'fresher', 'ui designer');

-- --------------------------------------------------------

--
-- Table structure for table `user_activities`
--

CREATE TABLE `user_activities` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `activity` varchar(30) DEFAULT NULL,
  `cdate` varchar(30) DEFAULT NULL,
  `start_time` varchar(30) DEFAULT NULL,
  `end_time` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_activities`
--

INSERT INTO `user_activities` (`id`, `user_id`, `activity`, `cdate`, `start_time`, `end_time`) VALUES
(4, 1, 'Sleeping', '12 Apr 2022', '8:45 pm', '8:45 pm'),
(5, 1, 'Reading', '12 Apr 2022', '8:45 pm', '11:16 pm'),
(6, 1, 'Reading', '11 Apr 2022', '3:45 pm', '4:45 pm'),
(24, 1, 'Cooking', '12 Apr 2022', '11:41 pm', '11:44 pm'),
(25, 1, 'Sleeping', '12 Apr 2022', '11:48 pm', '11:48 pm'),
(26, 1, 'Sleeping', '13 Apr 2022', '12:13 pm', '12:14 pm'),
(27, 1, 'Sleeping', '13 Apr 2022', '12:23 pm', '12:23 pm'),
(28, 1, 'Sleeping', '13 Apr 2022', '12:23 pm', '12:23 pm'),
(38, 1, 'Sleeping', '13 Apr 2022', '12:41 pm', '12:41 pm'),
(39, 1, 'Sleeping', '13 Apr 2022', '12:52 pm', '12:52 pm'),
(40, 1, 'Sleeping', '13 Apr 2022', '2:58 pm', '3:00 pm'),
(41, 1, 'Walking', '13 Apr 2022', '3:28 pm', '3:28 pm'),
(42, 1, 'Working', '13 Apr 2022', '3:28 pm', '3:28 pm'),
(43, 1, 'Sleeping', '13 Apr 2022', '4:21 pm', '4:21 pm'),
(44, 1, 'Sleeping', '13 Apr 2022', '4:28 pm', '4:29 pm'),
(45, 1, 'Sleeping', '13 Apr 2022', '4:36 pm', '4:37 pm'),
(46, 1, 'Sleeping', '13 Apr 2022', '6:39 pm', '6:40 pm'),
(47, 1, 'Sleeping', '13 Apr 2022', '6:57 pm', '6:58 pm'),
(48, 1, 'Sleeping', '13 Apr 2022', '7:30 pm', '7:31 pm'),
(49, 1, 'Sleeping', '19 Apr 2022', '10:27 pm', '10:28 pm'),
(50, 1, 'Sleeping', '19 Apr 2022', '10:29 pm', '10:30 pm'),
(51, 14, 'Sleeping', '21 Apr 2022', '6:02 pm', '6:02 pm'),
(52, 14, 'Sleeping', '21 Apr 2022', '6:07 pm', '6:12 pm'),
(53, 14, 'Sleeping', '21 Apr 2022', '6:36 pm', '6:46 pm'),
(54, 14, 'Sleeping', '21 Apr 2022', '6:46 pm', NULL),
(55, 14, 'Sleeping', '21 Apr 2022', '6:47 pm', '6:48 pm'),
(56, 14, 'Sleeping', '21 Apr 2022', '6:49 pm', '6:50 pm'),
(57, 14, 'Sleeping', '21 Apr 2022', '6:52 pm', '6:53 pm'),
(58, 14, 'Sleeping', '21 Apr 2022', '6:53 pm', NULL),
(59, 14, 'Sleeping', '21 Apr 2022', '6:56 pm', '6:56 pm'),
(60, 14, 'Sleeping', '23 Apr 2022', '10:53 pm', '10:54 pm'),
(61, 14, 'Sleeping', '23 Apr 2022', '10:55 pm', '10:55 pm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_activities`
--
ALTER TABLE `user_activities`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `user_activities`
--
ALTER TABLE `user_activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
