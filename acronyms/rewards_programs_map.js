// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let rewards_programs_map = [
  {
    'regex': '\\b(UR)\\b',
    'options': 'g',
    'replacement': 'UR (Chase Ultimate Rewards)'
  },
  {
    'regex': '\\b(MR)\\b',
    'options': 'g',
    'replacement': 'MR (Amex Membership Rewards)'
  },
  {
    'regex': '\\b(RR)\\b',
    'options': 'g',
    'replacement': 'RR (Southwest Rapid Rewards)'
  },
  {
    'regex': '\\b(CP)\\b',
    'options': 'g',
    'replacement': 'CP (Southwest Companion Pass )'
  },
  {
    'regex': '\\b(PGR)\\b',
    'options': 'g',
    'replacement': 'PGR (Premier Gold Rewards)'
  },
  {
    'regex': '\\b(TYP)\\b',
    'options': 'g',
    'replacement': 'TYP (Citi Thank You Points)'
  },
  {
    'regex': '\\b(FF)\\b',
    'options': 'g',
    'replacement': 'FF (Frequent Flyer Miles)'
  },
  {
    'regex': '\\b(FFM)\\b',
    'options': 'g',
    'replacement': 'FFM (Frequent Flyer Miles)'
  }
];
