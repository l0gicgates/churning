// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let cards_banks_map = [
  {
    'regex': '\\b(CSR)\\b',
    'options': 'g',
    'replacement': 'CSR (Chase Sapphire Reserve or Customer Service Rep)'
  },
  {
    'regex': '\\b(CSP)\\b',
    'options': 'g',
    'replacement': 'CSP (Chase Sapphire Preferred)'
  },
  {
    'regex': '\\b(CIP)\\b',
    'options': 'g',
    'replacement': 'CIP (Chase Ink Preferred)'
  },
  {
    'regex': '\\b(CIC)\\b',
    'options': 'g',
    'replacement': 'CIC (Chase Ink Cash)'
  },
  {
    'regex': '\\b(CPC)\\b',
    'options': 'g',
    'replacement': 'CPC (Chase Private Client)'
  },
  {
    'regex': '\\b(CF)\\b',
    'options': 'g',
    'replacement': 'CF (Chase Freedom)'
  },
  {
    'regex': '\\b(CFU)\\b',
    'options': 'g',
    'replacement': 'CFU (Chase Freedom Unlimited)'
  },
  {
    'regex': '\\b(MPE)\\b',
    'options': 'g',
    'replacement': 'MPE (Mileage Plus Explorer)'
  },
  {
    'regex': '\\b(RB)\\b',
    'options': 'g',
    'replacement': 'RB (Redbird Target Prepaid)'
  },
  {
    'regex': '\\b(AMEX)\\b',
    'options': 'g',
    'replacement': 'AMEX (American Express)'
  },
  {
    'regex': '\\b(Cap1)\\b',
    'options': 'g',
    'replacement': 'Cap1 (Capital One)'
  },
  {
    'regex': '\\b(MCGC)\\b',
    'options': 'g',
    'replacement': 'MCGC (MasterCard Gift Card)'
  },
  {
    'regex': '\\b(PP)\\b',
    'options': 'g',
    'replacement': 'PP (Priority Pass)'
  }
];
