<?php

class ImaticAutocompletePlugin extends MantisPlugin {
	
	public function register(): void
	{
		$this->name = 'Imatic autocomplete';
		$this->description = 'Autocomplete';
		$this->page = 'config';
		$this->version = '0.0.3';
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
			'EVENT_UPDATE_BUG_STATUS_FORM' => 'add_issue_id',
			'EVENT_VIEW_BUG_DETAILS' => 'add_issue_id',
		];
	}

	public function add_issue_id(){
		$f_bug_id = gpc_get_int( 'id' );
		$bug = bug_get_row($f_bug_id);
		$p_project_id = $bug['project_id'] ;
		echo '<input  style="display:none" id="project_id" value='.$p_project_id.' />';
	}

	public function layout_body_end_hook()
	{
		return '<link rel="stylesheet" type="text/css" href="' . plugin_file('styles.css') . '&v=' . $this->version . '" />'
			.'<script data-imatic-autocomplete-url="' . htmlspecialchars(plugin_page('autocomplete_username_ajax_request')) . '" src="' . plugin_file( 'autocomplete.js' ) . '&v=' . $this->version . '"></script>';
	}
}
