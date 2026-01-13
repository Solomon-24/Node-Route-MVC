-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2026 at 06:41 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trainee_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`id`, `name`, `email`, `age`, `created_at`) VALUES
(1, 'solomon', 'solomon@gmail.com', '33', '2026-01-06 15:26:25'),
(12, 'solomon', 'solomon+2@gmail.com', '30', '2026-01-06 17:14:18'),
(13, 'solomon', 'solomon+9@gmail.com', '33', '2026-01-06 17:14:23'),
(14, 'solomon', 'solomon+4@gmail.com', '30', '2026-01-06 17:14:27'),
(15, 'solomon', 'solomon+5@gmail.com', '30', '2026-01-06 17:14:31'),
(16, 'solomon', 'solomon+6@gmail.com', '30', '2026-01-06 17:14:36'),
(17, 'solomon', 'solomon+7@gmail.com', '30', '2026-01-06 17:14:41'),
(18, 'solomon', 'solomon+8@gmail.com', '30', '2026-01-06 17:14:45'),
(22, 'solomon', 'solomon+59@gmail.com', '30', '2026-01-07 16:23:36'),
(23, 'solomon', 'solomon+e59@gmail.com', '30', '2026-01-07 16:36:51'),
(24, 'solomon', 'solomon@trawex.com', '30', '2026-01-12 17:26:35'),
(31, 'solomon', 'solomon.2@trawex.com', '30', '2026-01-12 18:17:50'),
(32, 'solomon', 'solomon.22@trawex.com', '30', '2026-01-12 18:31:23'),
(34, 'solomon', 'solomon.62@trawex.com', '30', '2026-01-13 10:07:42'),
(35, 'solomon', 'solomon.6@trawex.com', '30', '2026-01-13 10:17:58'),
(36, 'solomon', 'solomon.69@trawex.com', '30', '2026-01-13 10:36:18'),
(38, 'solomon', 'solomon.619@trawex.com', '30', '2026-01-13 10:55:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
