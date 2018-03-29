// Hand select the elements we want to format - this avoids accidentally replacing elements in the DOM that
// we do not want to touch. Also, this reduces the amount of objects we have to iterate through.
// Since we are targeting specific elements, we also avoid an n^2 runtime that we had before looping through
// child elements.
var elements = [];
var listings = $('[data-context="listing"] a[class*="title"]');
var postTitle = $('[data-context="comments"] a[class*="title"]');
var postBody = $('[data-context="comments"] [class*="usertext-body"] p');
var commentBodies = $('[data-type="comment"] [class*="usertext-body"] p');

elements = elements.concat(listings.get());
elements = elements.concat(postTitle.get());
elements = elements.concat(postBody.get());
elements = elements.concat(commentBodies.get());

// Loop through each replacement item and convert the string to a regex. If you invert this loop, you'll have to
// call regex constructors n^2 number of times. This way you only have to parse the regex n times.
airlines_map.map(r => elements.map(e => $(e).text($(e).text().replace(new RegExp(r.regex, r.options), r.replacement))));
blogs_map.map(r => elements.map(e => $(e).text($(e).text().replace(new RegExp(r.regex, r.options), r.replacement))));
cards_banks_map.map(r => elements.map(e => $(e).text($(e).text().replace(new RegExp(r.regex, r.options), r.replacement))));
credit_agencies_map.map(r => elements.map(e => $(e).text($(e).text().replace(new RegExp(r.regex, r.options), r.replacement))));
general_terms_map.map(r => elements.map(e => $(e).text($(e).text().replace(new RegExp(r.regex, r.options), r.replacement))));
rewards_programs_map.map(r => elements.map(e => $(e).text($(e).text().replace(new RegExp(r.regex, r.options), r.replacement))));
