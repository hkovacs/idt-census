-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 29, 2022 at 05:06 PM
-- Server version: 8.0.27
-- PHP Version: 7.2.24-0ubuntu0.18.04.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `us_census`
--
CREATE DATABASE IF NOT EXISTS `us_census` DEFAULT CHARACTER SET utf16 COLLATE utf16_general_ci;
USE `us_census`;

-- --------------------------------------------------------

--
-- Table structure for table `us_county`
--

DROP TABLE IF EXISTS `us_county`;
CREATE TABLE `us_county` (
  `id` int NOT NULL,
  `us_state_id` int NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- --------------------------------------------------------

--
-- Table structure for table `us_county_details`
--

DROP TABLE IF EXISTS `us_county_details`;
CREATE TABLE `us_county_details` (
  `id` int NOT NULL,
  `us_county_id` int NOT NULL,
  `population` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- --------------------------------------------------------

--
-- Table structure for table `us_state`
--

DROP TABLE IF EXISTS `us_state`;
CREATE TABLE `us_state` (
  `id` int NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- --------------------------------------------------------

--
-- Table structure for table `us_state_details`
--

DROP TABLE IF EXISTS `us_state_details`;
CREATE TABLE `us_state_details` (
  `id` int NOT NULL,
  `us_state_id` int NOT NULL,
  `population` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `us_county`
--
ALTER TABLE `us_county`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `us_county_details`
--
ALTER TABLE `us_county_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `us_state`
--
ALTER TABLE `us_state`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `us_state_details`
--
ALTER TABLE `us_state_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `us_county`
--
ALTER TABLE `us_county`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `us_county_details`
--
ALTER TABLE `us_county_details`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `us_state`
--
ALTER TABLE `us_state`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `us_state_details`
--
ALTER TABLE `us_state_details`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
