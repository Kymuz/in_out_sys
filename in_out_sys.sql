-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2018 at 08:06 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `in_out_sys`
--

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `code` int(20) NOT NULL,
  `name` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` int(20) DEFAULT NULL,
  `address` char(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hawya`
--

CREATE TABLE `hawya` (
  `code` int(20) NOT NULL,
  `count` int(20) DEFAULT NULL,
  `Hawya_Type` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Operation_Code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `operation`
--

CREATE TABLE `operation` (
  `code` int(20) NOT NULL,
  `type` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `noo3` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `noo3_t3akod` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `se3r_sheraa` decimal(30,0) DEFAULT NULL,
  `se3r_bee3` decimal(30,0) DEFAULT NULL,
  `noo3_na2l` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `noo3_est5las` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HBL_IMG` blob,
  `MBL_IMG` blob,
  `HBL_NUM` int(20) DEFAULT NULL,
  `MBL_NUM` int(20) DEFAULT NULL,
  `tare5_ta7meeel` date DEFAULT NULL,
  `tare5_wosol` date DEFAULT NULL,
  `meena_ta7meeel` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `meena_wosol` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fatrt_sama7` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `khat_mela7y` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `client_code` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sys_user`
--

CREATE TABLE `sys_user` (
  `User_name` char(100) COLLATE utf8_unicode_ci NOT NULL,
  `Pass` char(100) COLLATE utf8_unicode_ci NOT NULL,
  `privilige` smallint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tard`
--

CREATE TABLE `tard` (
  `code` int(20) NOT NULL,
  `tool` decimal(25,0) DEFAULT NULL,
  `3ard` decimal(25,0) DEFAULT NULL,
  `ertfa3` decimal(25,0) DEFAULT NULL,
  `net_weight` decimal(25,0) DEFAULT NULL,
  `gross_weight` decimal(25,0) DEFAULT NULL,
  `Operation_Code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `worker`
--

CREATE TABLE `worker` (
  `Code` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `Supervisor` varchar(100) NOT NULL,
  `WorkerType` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `worker`
--

INSERT INTO `worker` (`Code`, `name`, `phone`, `Email`, `address`, `Supervisor`, `WorkerType`) VALUES
(1, 'Kareem', '01159694844', 'kareem@gmail.com', 'Rehab City', 'rezk', 1);

-- --------------------------------------------------------

--
-- Table structure for table `worker_operation`
--

CREATE TABLE `worker_operation` (
  `Operation_Code` int(11) NOT NULL,
  `Worker_Code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`code`);

--
-- Indexes for table `hawya`
--
ALTER TABLE `hawya`
  ADD PRIMARY KEY (`code`),
  ADD KEY `Operation_Code` (`Operation_Code`);

--
-- Indexes for table `operation`
--
ALTER TABLE `operation`
  ADD PRIMARY KEY (`code`),
  ADD KEY `client_code` (`client_code`);

--
-- Indexes for table `sys_user`
--
ALTER TABLE `sys_user`
  ADD PRIMARY KEY (`User_name`);

--
-- Indexes for table `tard`
--
ALTER TABLE `tard`
  ADD KEY `Operation_Code` (`Operation_Code`);

--
-- Indexes for table `worker`
--
ALTER TABLE `worker`
  ADD PRIMARY KEY (`Code`);

--
-- Indexes for table `worker_operation`
--
ALTER TABLE `worker_operation`
  ADD KEY `Op_cd` (`Operation_Code`),
  ADD KEY `Worker_cd` (`Worker_Code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `code` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hawya`
--
ALTER TABLE `hawya`
  MODIFY `code` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `operation`
--
ALTER TABLE `operation`
  MODIFY `code` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `worker`
--
ALTER TABLE `worker`
  MODIFY `Code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hawya`
--
ALTER TABLE `hawya`
  ADD CONSTRAINT `hawya_ibfk_1` FOREIGN KEY (`Operation_Code`) REFERENCES `operation` (`code`);

--
-- Constraints for table `operation`
--
ALTER TABLE `operation`
  ADD CONSTRAINT `operation_ibfk_1` FOREIGN KEY (`client_code`) REFERENCES `client` (`code`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `tard`
--
ALTER TABLE `tard`
  ADD CONSTRAINT `tard_ibfk_1` FOREIGN KEY (`Operation_Code`) REFERENCES `operation` (`code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `worker_operation`
--
ALTER TABLE `worker_operation`
  ADD CONSTRAINT `Op_cd` FOREIGN KEY (`Operation_Code`) REFERENCES `operation` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Worker_cd` FOREIGN KEY (`Worker_Code`) REFERENCES `worker` (`Code`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
