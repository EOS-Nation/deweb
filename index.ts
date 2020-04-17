import Long from "long";

/**
 * String to Id
 *
 * @param {string} str string account name
 * @returns {number} uint64 account id
 * @example
 *
 * import { string_to_id } from "deweb"
 *
 * const id = stringToHash("deniscarrier@deweb.eosnation.io");
 * //=> "8945370747656800747"
 */
export function stringToHash(str: string): string {
    let hash = Long.fromInt( 5381 );

    for ( const char of str.split("")) {
        hash = hash.shiftLeft( 5 ).add( hash ).add( char.charCodeAt(0) );
    }
    return hash.toString();
}
