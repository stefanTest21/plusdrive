<?php

$config = [
	'enabled' => class_exists('WooCommerce'),
	'selective_refresh' => ['has_cart_dropdown', 'mini_cart_type']
];
