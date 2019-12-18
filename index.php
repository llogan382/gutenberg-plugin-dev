<?php

/**
 * Plugin Name: Gutenberg Examples Basic EsNext
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'gutenberg_examples_01_esnext_load_textdomain' );

function gutenberg_examples_01_esnext_load_textdomain() {
	load_plugin_textdomain( 'gutenberg-examples', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function gutenberg_examples_01_esnext_register_block() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'gutenberg-examples-01-esnext',
		plugins_url( 'build/index.js', __FILE__ ),
		array(
			'wp-blocks',
			'wp-element',
			'wp-editor'
		),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	wp_register_style(
		'gutenberg-examples-02-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
	wp_register_style(
		'gutenberg-examples-02',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );

	register_block_type( 'gutenberg-examples/example-01-basic-esnext', array(
		'style' => 'gutenberg-examples-02',
		'editor_style' => 'gutenberg-examples-02-editor',
		'editor_script' => 'gutenberg-examples-01-esnext',
	) );


}
add_action( 'init', 'gutenberg_examples_01_esnext_register_block' );
