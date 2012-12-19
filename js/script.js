( function( $ ) {
	$( function() {
		var loading = $( '.loading' ),
			list = $( '#presentation-list' );

		// AJAX request
		$.getJSON( './files/public.json', function( data ) {
			var items = [];
			var oldDate = null;


			// Content check
			if ( $.isEmptyObject( data.presentations ) )
				loading.html( '<span class="error">ERROR #1: Please try to load the page again.</span>' );

			// Go through each item
			$.each( data.presentations, function( path, val ) {
				var authors = '';
				var dateString = '';
				var currentDate;
				var dateRegExp = new RegExp( "^(\\d+)-(\\d+)-(\\d+)" );

				// Any authors?
				if ( ! $.isEmptyObject( val.authors ) )
					authors = ' (' + val.authors.join(', ') + ')';

				// Get the date
				var matches = dateRegExp.exec( path );
				if ( matches ) {
					dateString = matches[3] + '.' + matches[2] + '.' + matches[1];
					currentDate = new Date( matches[1], matches[2], matches[3] );

					if ( null === oldDate ) {
						items.push( '<li class="date-section first">' + dateString + ':</li>' );
						oldDate = currentDate;
					} else {
						if ( oldDate < currentDate ) {
							items.push( '<li class="date-section">' + dateString + ':</li>' );
							oldDate = currentDate;
						}
					}
				}

				items.push( '<li class="presentation"><a href="files/' + path + '" target="_blank">' + val.title + authors + '</li>' );
			} );

			// Add to list
			list.html( items );

		} ).error( function( a, b, c ) {
			// A bit error handling
			if ( 'unexpected_token' == c.type )
				loading.html( '<span class="error">ERROR #3: Wrong syntax. A comma too much?</span>' );
			else
				loading.html( '<span class="error">ERROR #2: Please try to load the page again.</span>' );
		} );
	} );
}( jQuery ) );
