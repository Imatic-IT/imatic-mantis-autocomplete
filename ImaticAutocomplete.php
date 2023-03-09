<?php

class ImaticAutocompletePlugin extends MantisPlugin {

	public function register(): void
	{
		$this->name = 'Imatic autocomplete';
		$this->description = 'Autocomplete';
		$this->page = '';
		$this->version = '0.0.4';
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
		// var_dump('ocns');
		return '<link rel="stylesheet" type="text/css" href="' . plugin_file('styles.css') . '&v=' . $this->version . '" />'
			.'<script  src="' . plugin_file( 'autocomplete.js' ) . '&v=' . $this->version . '"></script>';
	}
}