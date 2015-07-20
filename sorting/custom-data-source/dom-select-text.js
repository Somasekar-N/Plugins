/**
 * Read information from a column of select (drop down) menus selected texts and return an
 * array to use as a basis for sorting.
 *
 *  @summary Sort based on the selected text of the `dt-tag select` options in a column
 *  @name Select menu data source
 *  @requires DataTables 1.10+
 *  @author [Somasekar N](somasekar.cse@gmail.com)
 */

$.fn.dataTable.ext.order['dom-select-text'] = function  ( settings, col )
{
	return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		return $('select :selected', td).val();
	} );
};
