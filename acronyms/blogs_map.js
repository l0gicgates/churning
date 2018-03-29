// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let blogs_map = [
  {
    'regex': '\\b(FT)\\b',
    'options': 'g',
    'replacement': 'FT (Flyer Talk Forums)'
  },
  {
    'regex': '\\bDoC\b',
    'options': 'g',
    'replacement': 'DoC (Doctor of Credit Blog)'
  }
];
