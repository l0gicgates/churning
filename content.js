var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            // Rewards Programs
            var replacedText = text.replace(/\b(UR)\b/g, ' UR (Chase Ultimate Rewards) ');
            replacedText = replacedText.replace(/\b(MR)\b/g, ' MR (Amex Membership Rewards) ');
            replacedText = replacedText.replace(/\b(RR)\b/g, ' RR (Southwest Rapid Rewards) ');
            replacedText = replacedText.replace(/\b(PGR)\b/g, ' PGR (Premier Gold Rewards) ');
            replacedText = replacedText.replace(/\b(TYP)\b/g, ' TYP (Citi Thank You Points) ');
            replacedText = replacedText.replace(/\b(FF)\b/g, ' FF (Frequent Flyer Miles) ');

             // General Terms
             replacedText = replacedText.replace(/\b(MS)\b/g, ' MS (Manufacturing Spending) ');
             replacedText = replacedText.replace(/\b(MSR)\b/g, ' MSR (Minimum Spending Requirement) ');
             replacedText = replacedText.replace(/\b(DP)\b/g, ' DP (Data Point) ');
             replacedText = replacedText.replace(/\b(DPs)\b/g, ' DPs (Data Points) ');
             replacedText = replacedText.replace(/\b(BE)\b/g, ' BE (Basic Economy) ');
             replacedText = replacedText.replace(/\b(CC)\b/g, ' CC (Credit Card) ');
             replacedText = replacedText.replace(/\b(CL)\b/g, ' CL (Credit Limit) ');
             replacedText = replacedText.replace(/\b(CR)\b/g, ' CR (Credit Report) ');
             replacedText = replacedText.replace(/\b(AF)\b/g, ' AF (Annual Fee) ');
             replacedText = replacedText.replace(/\b(Recon)\b/g, ' Recon (Reconsideration) ');
             replacedText = replacedText.replace(/\b(DD)\b/g, ' DD (Direct Deposit) ');
             replacedText = replacedText.replace(/\b(MO)\b/g, ' MO (Money Order) ');
             replacedText = replacedText.replace(/\b(PC)\b/g, ' PC (Product Change) ');
             replacedText = replacedText.replace(/\b(SM)\b/g, ' SM (Secure Message) ');
             replacedText = replacedText.replace(/\b(GE)\b/g, ' GE (Global Entry) ');
             replacedText = replacedText.replace(/\b(CPP)\b/g, ' CPP (Cents per Point) ');
             replacedText = replacedText.replace(/\b(SO)\b/g, ' SO (Significant Other) ');

             //Credit Agencies
             replacedText = replacedText.replace(/\b(EQ)\b/g, ' EQ (Eqifax) ');
             replacedText = replacedText.replace(/\b(EX)\b/g, ' EX (Experian) ');
             replacedText = replacedText.replace(/\b(TU)\b/g, ' TU (TransUnion) ');

             // Cards and Banks
             replacedText = replacedText.replace(/\b(CSR)\b/g, ' CSR (Chase Sapphire Reserve or Customer Service Rep) ');
             replacedText = replacedText.replace(/\b(CSP)\b/g, ' CSP (Chase Sapphire Preffered) ');
             replacedText = replacedText.replace(/\b(CIP)\b/g, ' CIP (Chase Ink Preffered) ');
             replacedText = replacedText.replace(/\b(CIC)\b/g, ' CIC (Chase Ink Cash) ');
             replacedText = replacedText.replace(/\b(CPC)\b/g, ' CPC (Chase Private Client) ');
             replacedText = replacedText.replace(/\b(CF)\b/g, ' CF (Chase Freedom) ');
             replacedText = replacedText.replace(/\b(CFU)\b/g, ' CFU (Chase Freedom Unlimited) ');
             replacedText = replacedText.replace(/\b(MPE)\b/g, ' MPE (Mileage Plus Explorer) ');
             replacedText = replacedText.replace(/\b(RB)\b/g, ' RB (Redbird Target Prepaid) ');
             replacedText = replacedText.replace(/\b(AMEX)\b/g, ' AMEX (American Express) ');
             replacedText = replacedText.replace(/\b(MCGC)\b/g, ' MCGC (MasterCard Gift Card) ');
             replacedText = replacedText.replace(/\b(PP)\b/g, ' PP (Priority Pass) ');

             // Airlines
             replacedText = replacedText.replace(/\b(AA)\b/g, ' AA (American Airlines) ');
             replacedText = replacedText.replace(/\b(BA)\b/g, ' BA (British Airways) ');
             replacedText = replacedText.replace(/\b(SW)\b/g, ' SW (Southwest Airlines) ');
             replacedText = replacedText.replace(/\b(DL)\b/g, ' DL (Delta Airlines) ');
             replacedText = replacedText.replace(/\b(UA)\b/g, ' UA (United Airlines) ');
             replacedText = replacedText.replace(/\b(ETH)\b/g, ' ETH (Etihad Airways) ');
             replacedText = replacedText.replace(/\b(F)\b/g, ' F (First Class) ');
             replacedText = replacedText.replace(/\b(J)\b/g, ' J (Business Class) ');
             replacedText = replacedText.replace(/\b(Y)\b/g, ' Y (Economy Class) ');
             replacedText = replacedText.replace(/\b(YQ)\b/g, ' YQ (Fuel Surcharge) ');
             replacedText = replacedText.replace(/\b(RT)\b/g, ' RT (Round Trip) ');

            // Airport Codes
            replacedText = replacedText.replace(/\b(ORD)\b/g, ' ORD (Chicago, IL Airport) ');
            replacedText = replacedText.replace(/\b(BNA)\b/g, ' BNA (Nashville, TN Airport) ');
            replacedText = replacedText.replace(/\b(JFK)\b/g, ' JFK (Queens, NY Airport) ');
            replacedText = replacedText.replace(/\b(IAD)\b/g, ' IAD (Washington, D.C. Airport) ');
            replacedText = replacedText.replace(/\b(LAX)\b/g, ' LAX (Los Angeles, CA Airport) ');

            // Blogs
            replacedText = replacedText.replace(/\b(FT)\b/g, ' FT (Flyer Talk Blog) ');
            replacedText = replacedText.replace(/\b(DoC)\b/g, ' DoC (Doctor of Credit Blog) ');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
