// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let general_terms_map = [
  {
    'regex': '\\b(MS)\\b',
    'options': 'g',
    'replacement': 'MS (Manufacturing Spending)'
  },
  {
    'regex': '\\b(MSR)\\b',
    'options': 'g',
    'replacement': 'MSR (Minimum Spending Requirement)'
  },
  {
    'regex': '\\b(DP)\\b',
    'options': 'g',
    'replacement': 'DP (Data Point)'
  },
  {
    'regex': '\\b(DPs)\\b',
    'options': 'g',
    'replacement': 'DPs (Data Points)'
  },
  {
    'regex': '\\b(HUCA)\\b',
    'options': 'g',
    'replacement': 'HUCA (Hang Up and Call Again)'
  },
  {
    'regex': '\\b(BE)\\b',
    'options': 'g',
    'replacement': 'BE (Basic Economy)'
  },
  {
    'regex': '\\b(CC)\\b',
    'options': 'g',
    'replacement': 'CC (Credit Card)'
  },
  {
    'regex': '\\b(CL)\\b',
    'options': 'g',
    'replacement': 'CL (Credit Limit)'
  },
  {
    'regex': '\\b(CR)\\b',
    'options': 'g',
    'replacement': 'CR (Credit Report)'
  },
  {
    'regex': '\\b(AF)\\b',
    'options': 'g',
    'replacement': 'AF (Annual Fee)'
  },
  {
    'regex': '\\b(Recon)\\b',
    'options': 'g',
    'replacement': 'Recon (Reconsideration)'
  },
  {
    'regex': '\\b(DD)\\b',
    'options': 'g',
    'replacement': 'DD (Direct Deposit)'
  },
  {
    'regex': '\\b(MO)\\b',
    'options': 'g',
    'replacement': 'MO (Money Order)'
  },
  {
    'regex': '\\b(PC)\\b',
    'options': 'g',
    'replacement': 'PC (Product Change)'
  },
  {
    'regex': '\\b(SM)\\b',
    'options': 'g',
    'replacement': 'SM (Secure Message)'
  },
  {
    'regex': '\\b(GE)\\b',
    'options': 'g',
    'replacement': 'GE (Global Entry)'
  },
  {
    'regex': '\\b(CPP)\\b',
    'options': 'g',
    'replacement': 'CPP (Cents per Point)'
  },
  {
    'regex': '\\b(SO)\\b',
    'options': 'g',
    'replacement': 'SO (Significant Other)'
  },
  {
    'regex': '\\b(5/24)\\b',
    'options': 'g',
    'replacement': '5/24 (5 credit cards in 24 months)'
  }

  
];
