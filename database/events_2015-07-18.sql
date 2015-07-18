# ************************************************************
# Sequel Pro SQL dump
# Version 4135
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.42)
# Database: events
# Generation Time: 2015-07-18 16:39:13 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Events
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Events`;

CREATE TABLE `Events` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `datum` date NOT NULL,
  `city` char(50) NOT NULL DEFAULT '',
  `location` char(50) NOT NULL DEFAULT '',
  `country` char(50) NOT NULL DEFAULT '',
  `feat` char(50) NOT NULL DEFAULT '',
  `artist` char(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Events` WRITE;
/*!40000 ALTER TABLE `Events` DISABLE KEYS */;

INSERT INTO `Events` (`id`, `datum`, `city`, `location`, `country`, `feat`, `artist`)
VALUES
	(1,'2015-06-06','test','test','test','test','test'),
	(2,'2015-05-05','test','test','test','test','test'),
	(4,'2015-07-09','test','test','test','test','test'),
	(5,'2015-07-09','test','test','test','test','test'),
	(6,'2015-07-09','test','test','test','test','test'),
	(7,'2015-07-09','test','test','test','test','test'),
	(8,'2015-07-09','test','test','test','test','test'),
	(9,'2015-07-09','test','test','test','test','test'),
	(10,'2015-07-09','test','test','test','test','test'),
	(11,'2015-07-09','test','test','test','test','test'),
	(12,'2015-07-09','test','test','test','test','test');

/*!40000 ALTER TABLE `Events` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
