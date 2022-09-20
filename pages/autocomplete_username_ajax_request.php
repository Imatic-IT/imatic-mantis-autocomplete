<?php

require_api('access_api.php');
require_api('database_api.php');
require_api('user_api.php');
require_api('authentication_api.php');
require_api('helper_api.php');
require_api('project_api.php');

access_ensure_project_level(config_get('view_bug_threshold'));

function imatic_autocomplete_send_json($status, $data) {
	header('Content-Type: application/json');
	http_response_code($status);
	echo json_encode($data);
}

/**
 * Taken from `print_assign_to_option_list`
 */
function imatic_autocomplete_users() {
	$t_current_user = auth_get_current_user_id();
	$p_access = config_get('handle_bug_threshold');

	if (isset($_POST['project_id'])) {
		$p_project_id = $_POST['project_id'] ;
		helper_set_current_project( $p_project_id );
	}
	
	if( $p_project_id === ALL_PROJECTS ) {
		$t_projects = user_get_accessible_projects( $t_current_user );

		# Get list of users having access level for all accessible projects
		$t_users = array();
		foreach( $t_projects as $t_project_id ) {
			$t_project_users_list = project_get_all_user_rows( $t_project_id, $p_access );
			# Do a 'smart' merge of the project's user list, into an
			# associative array (to remove duplicates)
			foreach( $t_project_users_list as $t_id => $t_user ) {
				$t_users[$t_id] = $t_user;
			}
			# Clear the array to release memory
			unset( $t_project_users_list );
		}
		unset( $t_projects );
	} else {
		$t_users = project_get_all_user_rows( $p_project_id, $p_access );
	}

	return $t_users;
}

function imatic_autocomplete_string_starts_with(string $s, string $substr) {
	return substr($s, 0, strlen($substr)) === $substr;
}

function imatic_autocomplete_search_usernames($s): array {
	$term = strtolower($s);

	return array_values(
		array_filter(
			array_column(imatic_autocomplete_users(), 'username'),
			function (string $username) use ($term) {
				return imatic_autocomplete_string_starts_with(strtolower($username), $term);
			}
		)
	);
}

function imatic_autocomplete_app() {
	$t_search = gpc_get_string('search');

	$t_usernames = imatic_autocomplete_search_usernames($t_search);

	imatic_autocomplete_send_json(200, $t_usernames);
}

imatic_autocomplete_app();
