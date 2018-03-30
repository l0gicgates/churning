// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let credit_agencies_map = [
  {
    'regex': '\\b(EQ)\\b',
    'options': 'g',
    'replacement': 'EQ (Eqifax)'
  },
  {
    'regex': '\\b(EX)\\b',
    'options': 'g',
    'replacement': 'EX (Experian)'
  },
  {
    'regex': '\\b(TU)\\b',
    'options': 'g',
    'replacement': 'TU (TransUnion)'
  },
  {
    'regex': '\\b(CRA)\\b',
    'options': 'g',
    'replacement': 'CRA (Credit Reporting Agency)'
  },
  {
    'regex': '\\b(CRB)\\b',
    'options': 'g',
    'replacement': 'CRB (Credit Reporting Bureau)'
  }
];
