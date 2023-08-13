-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 13, 2023 at 05:05 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cafe-employee`
--
CREATE DATABASE IF NOT EXISTS `cafe-employee` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `cafe-employee`;

-- --------------------------------------------------------

--
-- Table structure for table `cafe`
--

DROP TABLE IF EXISTS `cafe`;
CREATE TABLE IF NOT EXISTS `cafe` (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cafe`
--

INSERT INTO `cafe` (`id`, `name`, `description`, `location`, `logo`) VALUES
('07458b2d-3618-11ee-8bb4-ac1f6bdb9b34', 'Cafe One', 'Cafe one description 1234555', 'Ireland', ''),
('63fe4ac6-361c-11ee-8bb4-ac1f6bdb9b34', 'Cafe Two', 'Cafe Two Description', 'Newyork', ''),
('cc4b49ed-8dd1-4370-8ee7-4e43d2636914', 'Cafe 101', 'Cafe 101 desc Malaysia ', 'Malaysia', ''),
('88b004d0-9e30-459a-a580-887b16ca841b', 'Cafe 909', 'USA cafe 909', 'USA', ''),
('dbd51a3d-71d6-44ff-8b57-2576928a3eab', 'My Cafe', 'newyork cafe', 'Newyork', ''),
('b094e149-47b2-49fb-8383-2167d50b1fdd', 'Cafe 777', 'Cafe one description 777', 'Ireland', '');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startdate` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cafe_id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `email`, `phone`, `gender`, `startdate`, `cafe_id`) VALUES
('UI0000001', 'John Doe', 'johndoe@gmail.com', '90090012', 'male', '2023-02-01', '88b004d0-9e30-459a-a580-887b16ca841b'),
('UI0000002', 'Sarah Anne', 'saraanne@gmail.com', '80089872', 'female', '2023-08-07', '63fe4ac6-361c-11ee-8bb4-ac1f6bdb9b34'),
('UI0000004', 'Sadun Kuma', 'sadun234@gmail.coa', '81333333', 'male', '2023-07-12', '63fe4ac6-361c-11ee-8bb4-ac1f6bdb9b34'),
('UI0000005', 'Fazal gg', 'fazal@gmail.com', '81231231', 'male', '2022-01-13', '07458b2d-3618-11ee-8bb4-ac1f6bdb9b34'),
('UI0000006', 'Sadun 2', 'sadun@gmail.com', '81312312', 'male', '2023-05-03', '63fe4ac6-361c-11ee-8bb4-ac1f6bdb9b34'),
('UI0000007', 'Vishwajith', 'vjayasinghe@abcd.com', '83098123', 'male', '2020-12-12', 'b094e149-47b2-49fb-8383-2167d50b1fdd'),
('UI0000008', 'Sarah luo', 'sarahluo@mymail.com', '89888998', 'female', '2023-07-30', '07458b2d-3618-11ee-8bb4-ac1f6bdb9b34'),
('UI0000009', 'hasitha', 'q@gmail.com', '89999999', 'male', '2023-08-10', 'cc4b49ed-8dd1-4370-8ee7-4e43d2636914');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
