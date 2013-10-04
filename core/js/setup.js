var dbtypes;
$(document).ready(function() {
	dbtypes={
		sqlite:!!$('#hasSQLite').val(),
		mysql:!!$('#hasMySQL').val(),
		postgresql:!!$('#hasPostgreSQL').val(),
		oracle:!!$('#hasOracle').val(),
		mssql:!!$('#hasMSSQL').val()
	};
	
	$('#selectDbType').buttonset();
	$('#datadirContent').hide(250);
	$('#databaseField').hide(250);
	if($('#hasSQLite').val()){
		$('#use_other_db').hide();
		$('#use_oracle_db').hide();
	}
	$('#adminlogin').change(function(){
		$('#adminlogin').val($.trim($('#adminlogin').val()));
	});
	$('#sqlite').click(function() {
		$('#use_other_db').slideUp(250);
		$('#use_oracle_db').slideUp(250);
	});

	$('#mysql').click(function() {
		$('#use_other_db').slideDown(250);
		$('#use_oracle_db').slideUp(250);
	});

	$('#pgsql').click(function() {
		$('#use_other_db').slideDown(250);
		$('#use_oracle_db').slideUp(250);
	});

	$('#oci').click(function() {
		$('#use_other_db').slideDown(250);
		$('#use_oracle_db').show(250);
	});

	$('#mssql').click(function() {
		$('#use_other_db').slideDown(250);
		$('#use_oracle_db').slideUp(250);
	});

	$('input[checked]').trigger('click');

	$('#showAdvanced').click(function() {
		$('#datadirContent').slideToggle(250);
		$('#databaseField').slideToggle(250);
	});
	$("form").submit(function(){
		// Save form parameters
		var post = $(this).serializeArray();

		// Disable inputs
		$(':submit', this).attr('disabled','disabled').val($(':submit', this).data('finishing'));
		$('input', this).addClass('ui-state-disabled').attr('disabled','disabled');
		$('#selectDbType').buttonset('disable');

		// Create the form
		var form = $('<form>');
		form.attr('action', $(this).attr('action'));
		form.attr('method', 'POST');

		for(var i=0; i<post.length; i++){
			var input = $('<input type="hidden">');
			input.attr(post[i]);
			form.append(input);
		}

		// Submit the form
		form.appendTo(document.body);
		form.submit();
		return false;
	});

	if(!dbtypes.sqlite){
		$('#showAdvanced').click();
		$('input[type="radio"]').first().click();
	}
});
