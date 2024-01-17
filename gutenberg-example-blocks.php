<?php
/**
 * Plugin Name:       Gutenberg example blocks
 * Description:       Plugin with Gutenberg example blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Marcin Szczepkowski
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenbergexampleblocks
 */

if (!defined('ABSPATH')) {
	exit;
}

function _get_plugin_directory()
{
	return __DIR__;
}

function _get_plugin_url()
{
	static $plugin_url;

	if (empty($plugin_url)) {
		$plugin_url = plugins_url(null, __FILE__);
	}

	return $plugin_url;
}

add_action('enqueue_block_editor_assets', 'enqueue_block_editor_assets');
function enqueue_block_editor_assets()
{
	$block_path = '/assets/js/editor.blocks.js';
	$style_path = '/assets/css/blocks.editor.css';

	wp_enqueue_script(
		'jsforwp-blocks-js',
		_get_plugin_url() . $block_path,
		['wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor'],
		filemtime(_get_plugin_directory() . $block_path)
	);

	wp_enqueue_style(
		'jsforwp-blocks-editor-css',
		_get_plugin_url() . $style_path,
		[],
		filemtime(_get_plugin_directory() . $style_path)
	);
}

add_action('enqueue_block_assets', 'enqueue_assets');
function enqueue_assets()
{
	$style_path = '/assets/css/blocks.style.css';

	wp_enqueue_style(
		'jsforwp-blocks',
		_get_plugin_url() . $style_path,
		null,
		filemtime(_get_plugin_directory() . $style_path)
	);
}

add_action('enqueue_block_assets', 'enqueue_frontend_assets');
function enqueue_frontend_assets()
{
	if (is_admin()) {
		return;
	}

	$block_path = '/assets/js/frontend.blocks.js';

	wp_enqueue_script(
		'jsforwp-blocks-frontend',
		_get_plugin_url() . $block_path,
		[],
		filemtime(_get_plugin_directory() . $block_path)
	);
}
