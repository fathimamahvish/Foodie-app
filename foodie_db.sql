-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2025 at 12:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodie_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `items` text NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `payment_status` varchar(20) DEFAULT NULL,
  `booking_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `customer_name`, `email`, `phone`, `address`, `items`, `total_amount`, `payment_method`, `payment_status`, `booking_date`) VALUES
(1, 'John Doe', 'john@example.com', '9876543210', '123 Main Street', '[{\"dishId\":1,\"qty\":2},{\"dishId\":3,\"qty\":1}]', 450.00, 'COD', 'Pending', '2025-07-09 06:44:52');

-- --------------------------------------------------------

--
-- Table structure for table `dishes`
--

CREATE TABLE `dishes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dishes`
--

INSERT INTO `dishes` (`id`, `name`, `description`, `price`, `image_url`) VALUES
(1, 'Veg Biryani', 'Spicy rice with mixed vegetables', 150.00, 'https://example.com/veg-biryani.jpg'),
(2, 'Veg Biryani', 'Aromatic rice with vegetables and spices', 150.00, 'https://example.com/veg-biryani.jpg'),
(3, 'Chicken Biryani', 'Spicy basmati rice with chicken', 200.00, 'https://example.com/chicken-biryani.jpg'),
(4, 'Paneer Butter Masala', 'Cottage cheese in creamy tomato gravy', 180.00, 'https://example.com/paneer.jpg'),
(5, 'Butter Naan', 'Soft Indian bread with butter', 40.00, 'https://example.com/butter-naan.jpg'),
(6, 'Tandoori Chicken', 'Roasted chicken with Indian spices', 220.00, 'https://example.com/tandoori.jpg'),
(7, 'Masala Dosa', 'Crispy rice crepe with spicy potato filling', 90.00, 'https://example.com/dosa.jpg'),
(8, 'Idli Sambar', 'Steamed rice cakes with lentil soup', 70.00, 'https://example.com/idli.jpg'),
(9, 'Vada Pav', 'Spicy potato fritter in a bun', 30.00, 'https://example.com/vada-pav.jpg'),
(10, 'Pav Bhaji', 'Spiced vegetable mash with buttered buns', 80.00, 'https://example.com/pav-bhaji.jpg'),
(11, 'Chole Bhature', 'Spicy chickpeas with fried bread', 100.00, 'https://example.com/chole.jpg'),
(12, 'Fried Rice', 'Stir-fried rice with vegetables', 120.00, 'https://example.com/fried-rice.jpg'),
(13, 'Hakka Noodles', 'Spicy Indo-Chinese noodles', 130.00, 'https://example.com/noodles.jpg'),
(14, 'Manchurian', 'Fried vegetable balls in spicy sauce', 140.00, 'https://example.com/manchurian.jpg'),
(15, 'Spring Rolls', 'Crispy rolls stuffed with veggies', 100.00, 'https://example.com/spring-rolls.jpg'),
(16, 'Cheese Pizza', 'Classic pizza topped with cheese', 200.00, 'https://example.com/pizza.jpg'),
(17, 'Veg Burger', 'Grilled veggie patty with sauce and cheese', 90.00, 'https://example.com/veg-burger.jpg'),
(18, 'Chicken Wrap', 'Spicy grilled chicken in a wrap', 110.00, 'https://example.com/wrap.jpg'),
(19, 'French Fries', 'Crispy golden potato fries', 60.00, 'https://example.com/fries.jpg'),
(20, 'Cold Coffee', 'Chilled coffee with ice cream', 70.00, 'https://example.com/coffee.jpg'),
(21, 'Gulab Jamun', 'Sweet deep-fried dough balls in syrup', 50.00, 'https://example.com/gulab-jamun.jpg'),
(22, 'Momos', 'Steamed or fried dumplings filled with veggies or meat', 90.00, 'https://example.com/momos.jpg'),
(23, 'Rajma Chawal', 'Kidney beans curry served with steamed rice', 100.00, 'https://example.com/rajma-chawal.jpg'),
(24, 'Chocolate Brownie', 'Warm chocolate dessert served with nuts', 80.00, 'https://example.com/brownie.jpg'),
(25, 'Ice Cream Sundae', 'Layers of ice cream with toppings and syrup', 120.00, 'https://example.com/sundae.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dishes`
--
ALTER TABLE `dishes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dishes`
--
ALTER TABLE `dishes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
