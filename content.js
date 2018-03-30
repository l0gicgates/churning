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

acronym_maps = [].concat.apply([], [
    airlines_map,
    airports_map,
    blogs_map,
    cards_banks_map,
    credit_agencies_map,
    general_terms_map,
    rewards_programs_map,
])

// Loop through each replacement item and convert the string to a regex. If you invert this loop, you'll have to
// call regex constructors n^2 number of times. This way you only have to parse the regex n times.
acronym_maps.map(r => elements.map(e => $(e).html($(e).html().replace(new RegExp(r.regex, r.options), r.replacement))));
