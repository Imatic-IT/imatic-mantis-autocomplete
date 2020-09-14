<?php

class ImaticAutocompletePlugin extends MantisPlugin {
	
	public function register(): void
	{
		$this->name = 'Imatic autocomplete';
		$this->description = 'Autocomplete';
		$this->page = 'config';
		$this->version = '0.0.1';
		$this->requires = [
			'MantisCore' => '2.0.0',
		];

		$this->author = 'Imatic Software s.r.o.';
		$this->contact = 'info@imatic.cz';
		$this->url = 'https://www.imatic.cz/';
	}

	public function hooks(): array
	{
		return [
			'EVENT_LAYOUT_BODY_END' => 'layout_body_end_hook',
		];
	}

	public function layout_body_end_hook()
	{
		return '<link rel="stylesheet" type="text/css" href="' . plugin_file('styles.css') . '&v=' . $this->version . '" />'
			.'<script data-imatic-autocomplete-url="' . htmlspecialchars(plugin_page('autocomplete_username_ajax_request')) . '" src="' . plugin_file( 'autocomplete.js' ) . '&v=' . $this->version . '"></script>';
	}
}
