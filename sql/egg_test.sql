/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost
 Source Database       : egg_test

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : utf-8

 Date: 05/03/2018 20:01:38 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` int(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `photo` text,
  `createAt` datetime NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('f3ef7a38-4080-47ba-91d5-6dac4dc4adf2', '1053475583@qq.com', '123456', '56', '刘德华', '18501660323', null, '2018-05-03 19:02:58'), ('f59b48ab-797d-4d36-96a0-d775ff2a46bf', '1053475583@qq.com', '123456', '56', '刘德华', '18501660323', null, '2018-05-03 18:21:10');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
