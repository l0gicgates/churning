// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let airports_map = [
  {
    'regex': '\\b(ORD)\\b',
    'options': 'g',
    'replacement': 'ORD (Chicago, IL Airport)'
  },
  {
    'regex': '\\b(BNA)\\b',
    'options': 'g',
    'replacement': 'BNA (Nashville, TN Airport)'
  },
  {
    'regex': '\\b(JFK)\\b',
    'options': 'g',
    'replacement': 'JFK (Queens, NY Airport)'
  },
  {
    'regex': '\\b(IAD)\\b',
    'options': 'g',
    'replacement': 'IAD (Washington, D.C. Airport)'
  },
  {
    'regex': '\\b(LAX)\\b',
    'options': 'g',
    'replacement': 'LAX (Los Angeles, CA Airport)'
  }
];
