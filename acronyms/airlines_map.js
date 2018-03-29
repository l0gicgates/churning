// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let airlines_map = [
  {
    'regex': '\\b(AS)\\b',
    'options': 'g',
    'replacement': 'AS (Alaska Airlines)'
  },
  {
    'regex': '\\b(AA)\\b',
    'options': 'g',
    'replacement': 'AA (American Airlines)'
  },
  {
    'regex': '\\b(BA)\\b',
    'options': 'g',
    'replacement': 'BA (British Airways)'
  },
  {
    'regex': '\\b(B6)\\b',
    'options': 'g',
    'replacement': 'B6 (JetBlue)'
  },
  {
    'regex': '\\b(CX)\\b',
    'options': 'g',
    'replacement': 'CX (Cathay Airlines)'
  },
  {
    'regex': '\\b(EI)\\b',
    'options': 'g',
    'replacement': 'EI (Aer Lingus Airlines)'
  },
  {
    'regex': '\\b(EK)\\b',
    'options': 'g',
    'replacement': 'EK (Emirates)'
  },
  {
    'regex': '\\b(SW)\\b',
    'options': 'g',
    'replacement': 'SW (Southwest Airlines)'
  },
  {
    'regex': '\\b(WN)\\b',
    'options': 'g',
    'replacement': 'WN (Southwest Airlines)'
  },
  {
    'regex': '\\b(DL)\\b',
    'options': 'g',
    'replacement': 'DL (Delta Airlines)'
  },
  {
    'regex': '\\b(UA)\\b',
    'options': 'g',
    'replacement': 'UA (United Airlines)'
  },
  {
    'regex': '\\b(ETH)\\b',
    'options': 'g',
    'replacement': 'ETH (Etihad Airways)'
  },
  {
    'regex': '\\b(F)\\b',
    'options': 'g',
    'replacement': 'F (First Class)'
  },
  {
    'regex': '\\b(J)\\b',
    'options': 'g',
    'replacement': 'J (Business Class)'
  },
  {
    'regex': '\\b(Y)\\b',
    'options': 'g',
    'replacement': 'Y (Economy Class)'
  },
  {
    'regex': '\\b(YQ)\\b',
    'options': 'g',
    'replacement': 'YQ (Fuel Surcharge)'
  },
  {
    'regex': '\\b(RT)\\b',
    'options': 'g',
    'replacement': 'RT (Round Trip)'
  }
];
