// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let cards_banks_map = [
  {
    'regex': '\\b(CSRs?)\\b',
    'options': 'g',
    'replacement': '$1 (Chase Sapphire Reserve or Customer Service Rep)'
  },
  {
    'regex': '\\b(CSPs?)\\b',
    'options': 'g',
    'replacement': '$1 (Chase Sapphire Preferred)'
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
    'regex': '\\b(CICs?)\\b',
    'options': 'g',
    'replacement': '$1 (Chase Ink Cash)'
  },
  {
    'regex': '\\b(CPC)\\b',
    'options': 'g',
    'replacement': 'CPC (Chase Private Client)'
  },
  {
    'regex': '\\b(CFs?)\\b',
    'options': 'g',
    'replacement': '$1 (Chase Freedom)'
  },
  {
    'regex': '\\b(CFUs?)\\b',
    'options': 'g',
    'replacement': '$1 (Chase Freedom Unlimited)'
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
    'regex': '\\b(MB( Plati.*)?)\\b',
    'options': 'g',
    'replacement': '$1 (Amex Mercedes Benz Platinum)'
  },
  {
    'regex': '\\b(MPE)\\b',
    'options': 'g',
    'replacement': 'MPE (Mileage Plus Explorer)'
  },
  {
    'regex': '\\b(BB)\\b',
    'options': 'g',
    'replacement': 'BB (American Express BlueBird Prepaid)'
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
    'regex': '\\b(BMO)\\b',
    'options': 'g',
    'replacement': 'BMO (BMO Harris Bank)'
  },
  {
    'regex': '\\b(USB)\\b',
    'options': 'g',
    'replacement': 'USB (US Bank)'
  },
  {
    'regex': '\\b(MCGCs?)\\b',
    'options': 'g',
    'replacement': '$1 (MasterCard Gift Card)'
  },
  {
    'regex': '\\b(PP)\\b',
    'options': 'g',
    'replacement': 'PP (Priority Pass)'
  },
  {
    'regex': '\\b(GoC)\\b',
    'options': 'g',
    'replacement': 'GoC (Gift of College gift card)'
  },
  {
    'regex': '\\b(VGCs?)\\b',
    'options': 'g',
    'replacement': '$1 (Visa Gift Card)'
  }
];
