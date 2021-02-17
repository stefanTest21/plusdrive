<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'plusdrive_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'jh0Y_k]07?.k*{cXx@f<^ewsF[t)OgoGHzzkKC~OO+#a[Q/Jrf^@[dZ.A~3[EXky' );
define( 'SECURE_AUTH_KEY',  'qZ}#A//~*yaH`2!ce2x}_X>*Q`r9D=u9,I#`=r+-a^6i 2),Wtx]kZ7|lf|,9+dn' );
define( 'LOGGED_IN_KEY',    '1N,CCo$AiHS}``Xrq]dACj]^v#oBY93 OPn(*j84;Ja@n3U1$*R=bKrw|]/QW+Bu' );
define( 'NONCE_KEY',        'MM/T25c X$,DSv[}BBd`)7oPXd-;iif@ , CVf*SoKcN&D+iQp<x~QN?ycozJ^]/' );
define( 'AUTH_SALT',        'Z/t&B/yaTrXhA+Tt(xG .-s/59ic]G]HJ]fj[c(+/`AdW37UB>v*V+N76r?>A2iP' );
define( 'SECURE_AUTH_SALT', 'b.c!@bh(Gwi+6VRD(jiFhtUGdL{u<L^+{_r(@aQllM-~2o?lhm$iYD%F5#eLwJZF' );
define( 'LOGGED_IN_SALT',   'T}+fzf9 :g&rBM^#EAK2pQ0xK_#|BUoa$aPSg_X$?:ztg=jH+7XEf8Pb)vp0Tzdg' );
define( 'NONCE_SALT',       ' ofY1vG+v#=ro^A)}XBw(2BUW:bYTX*r$Nwr>BCxfB}!#ix=+MI.}2l9 nAbk5>#' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
