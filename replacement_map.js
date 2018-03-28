// Instead of having to access the local file system to read a JSON file via XHR,
// we can just abstract our replacers here.

let replacement_map = [
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
    'regex': '\\b(CSR)\\b',
    'options': 'g',
    'replacement': 'CSR (Chase Sapphire Reserve or Customer Service Rep)'
  },
  {
    'regex': '\\b(CSP)\\b',
    'options': 'g',
    'replacement': 'CSP (Chase Sapphire Preffered)'
  },
  {
    'regex': '\\b(CIP)\\b',
    'options': 'g',
    'replacement': 'CIP (Chase Ink Preffered)'
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
    'regex': '\\b(SW)\\b',
    'options': 'g',
    'replacement': 'SW (Southwest Airlines)'
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
  },
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
  },
  {
    'regex': '\\b(FT)\\b',
    'options': 'g',
    'replacement': 'FT (Flyer Talk Blog)'
  },
  {
    'regex': '\\bDoC\b',
    'options': 'g',
    'replacement': 'DoC (Doctor of Credit Blog)'
  }
];
