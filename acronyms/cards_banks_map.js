// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let cards_banks_map = [
  {
    'regex': '\\b(CSR).?\\b', //added wildcard to allow for plurals
    'options': 'g',
    'replacement': 'CSR (Chase Sapphire Reserve or Customer Service Rep)'
  },
  {
    'regex': '\\b(CSP)\\b',
    'options': 'g',
    'replacement': 'CSP (Chase Sapphire Preferred)'
  },
  {
    'regex': '\\b(CU)\\b',
    'options': 'g',
    'replacement': 'CU (Credit Union)'
  },
  {
    'regex': '\\b(IHG)\\b',
    'options': 'g',
    'replacement': 'IHG (Chase IHG Rewards Select)'
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
    'regex': '\\b(BCE)\\b',
    'options': 'g',
    'replacement': 'BCE (Amex Blue Cash Everyday)'
  },
   {
    'regex': '\\b(BCP)\\b',
    'options': 'g',
    'replacement': 'BCP (Amex Blue Cash Preferred)'
  },
  {
    'regex': '\\b(BBP)\\b',
    'options': 'g',
    'replacement': 'BBP (Amex Blue Business Plus)'
  },
  {
    'regex': '\\b(MB)\\b',
    'options': 'g',
    'replacement': 'MB (Amex Mercedes Benz Platinum)'
  },
  {
    'regex': '\\b(MPE)\\b',
    'options': 'g',
    'replacement': 'MPE (Mileage Plus Explorer)'
  },
  {
    'regex': '\\b(BP)\\b',
    'options': 'g',
    'replacement': 'BP (American Express BlueBird Prepaid)'
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
    'regex': '\\b(USB)\\b',
    'options': 'g',
    'replacement': 'USB (US Bank)'
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
  },
  {
    'regex': '\\b(VGC)\\b',
    'options': 'g',
    'replacement': 'VGC (Visa Gift Card)'
  }
];
