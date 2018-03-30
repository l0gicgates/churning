// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let general_terms_map = [
  {
    'regex': '\\b(MS)\\b',
    'options': 'g',
    'replacement': 'MS (Manufacturing Spending)'
  },
  {
    'regex': '\\b(MSRs?)\\b',
    'options': 'g',
    'replacement': '$1 (Minimum Spending Requirement)'
  },
  {
    'regex': '\\b(DPs?)\\b',
    'options': 'g',
    'replacement': '$1 (Data Point)'
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
    'regex': '\\b(CLs?)\\b',
    'options': 'g',
    'replacement': '$1 (Credit Limit)'
  },
  {
    'regex': '\\b(CLIs?)\\b',
    'options': 'g',
    'replacement': '$1 (Credit Limit Increase)'
  },
  {
    'regex': '\\b(CRs?)\\b',
    'options': 'g',
    'replacement': '$1 (Credit Report)'
  },
  {
    'regex': '\\b(AFs?)\\b',
    'options': 'g',
    'replacement': '$1 (Annual Fee)'
  },
  {
    'regex': '\\b(Recon)\\b',
    'options': 'g',
    'replacement': 'Recon (Reconsideration)'
  },
  {
    'regex': '\\b(DDs?)\\b',
    'options': 'g',
    'replacement': '$1 (Direct Deposit)'
  },
  {
    'regex': '\\b(MOs?)\\b',
    'options': 'g',
    'replacement': '$1 (Money Order)'
  },
  {
    'regex': '\\b(PC)\\b',
    'options': 'g',
    'replacement': 'PC (Product Change)'
  },
  {
    'regex': '\\b(SMs?)\\b',
    'options': 'g',
    'replacement': '$1 (Secure Message)'
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
  },
  {
    'regex': '\\b(2/30)\\b',
    'options': 'g',
    'replacement': '2/30 (2 applications in 30 days)'
  },
  {
    'regex': '\\b(PPDG)\\b',
    'options': 'g',
    'replacement': 'PPDG (PayPal Digital Gifts)'
  },
  {
    'regex': '\\b(FTF)\\b',
    'options': 'g',
    'replacement': 'FTF (Foreign Transaction Fee)'
  },
  {
    'regex': '\\b(HPs?)\\b',
    'options': 'g',
    'replacement': '$1 (Hard Pull)'
  }
];
