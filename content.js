var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            // Rewards Programs
            var replacedText = text.replace(/ UR /g, ' UR (Chase Ultimate Rewards) ');
            replacedText = replacedText.replace(/ MR /g, ' MR (Amex Membership Rewards) ');
            replacedText = replacedText.replace(/ RR /g, ' RR (Southwest Rapid Rewards) ');
            replacedText = replacedText.replace(/ PGR /g, ' PGR (Premier Gold Rewards) ');
            replacedText = replacedText.replace(/ TYP /g, ' TYP (Citi Thank You Points) ');
            replacedText = replacedText.replace(/ FF /g, ' FF (Frequent Flyer Miles) ');

            // general terms
             replacedText = replacedText.replace(/ MS /g, ' MS (Manufacturing Spending) ');
             replacedText = replacedText.replace(/ MSR /g, ' MSR (Minimum Spending Requirement) ');
             replacedText = replacedText.replace(/ DP /g, ' DP (Data Point) ');
             replacedText = replacedText.replace(/ DPs /g, ' DPs (Data Points) ');
             replacedText = replacedText.replace(/ BE /g, ' BE (Basic Economy) ');
             replacedText = replacedText.replace(/ CC /g, ' CC (Credit Card) ');
             replacedText = replacedText.replace(/ CL /g, ' CL (Credit Limit) ');
             replacedText = replacedText.replace(/ CR /g, ' CR (Credit Report) ');
             replacedText = replacedText.replace(/ AF /g, ' AF (Annual Fee) ');
             replacedText = replacedText.replace(/ Recon /g, ' Recon (Reconsideration) ');
             replacedText = replacedText.replace(/ DD /g, ' DD (Direct Deposit) ');
             replacedText = replacedText.replace(/ MO /g, ' MO (Money Order) ');
             replacedText = replacedText.replace(/ PC /g, ' PC (Product Change) ');
             replacedText = replacedText.replace(/ SM /g, ' SM (Secure Message) ');
             replacedText = replacedText.replace(/ GE /g, ' GE (Global Entry) ');
             replacedText = replacedText.replace(/ CPP /g, ' CPP (Cents per Point) ');
             replacedText = replacedText.replace(/ SO /g, ' SO (Significant Other) ');

            // credit agencies
             replacedText = replacedText.replace(/ EQ /g, ' EQ (Eqifax) ');
             replacedText = replacedText.replace(/ EX /g, ' EX (Experian) ');
             replacedText = replacedText.replace(/ TU /g, ' TU (TransUnion) ');

             // cards / banks
             replacedText = replacedText.replace(/ CSR /g, ' CSR (Chase Sapphire Reserve or Customer Service Rep) ');
             replacedText = replacedText.replace(/ CSP /g, ' CSP (Chase Sapphire Preffered) ');
             replacedText = replacedText.replace(/ CIP /g, ' CIP (Chase Ink Preffered) ');
             replacedText = replacedText.replace(/ CIC /g, ' CIC (Chase Ink Cash) ');
             replacedText = replacedText.replace(/ CPC /g, ' CPC (Chase Private Client) ');
             replacedText = replacedText.replace(/ CF /g, ' CF (Chase Freedom) ');
             replacedText = replacedText.replace(/ CFU /g, ' CFU (Chase Freedom Unlimited) ');
             replacedText = replacedText.replace(/ MPE /g, ' MPE (Mileage Plus Explorer) ');
             replacedText = replacedText.replace(/ RB /g, ' RB (Redbird Target Prepaid) ');
             replacedText = replacedText.replace(/ AMEX /g, ' AMEX (American Express) ');
             replacedText = replacedText.replace(/ MCGC /g, ' MCGC (MasterCard Gift Card) ');
             replacedText = replacedText.replace(/ PP /g, ' PP (Priority Pass) ');
             
             // airlines
             replacedText = replacedText.replace(/ AA /g, ' AA (American Airlines) ');
             replacedText = replacedText.replace(/ BA /g, ' BA (British Airways) ');
             replacedText = replacedText.replace(/ SW /g, ' SW (Southwest Airlines) ');
             replacedText = replacedText.replace(/ DL /g, ' DL (Delta Airlines) ');
             replacedText = replacedText.replace(/ UA /g, ' UA (United Airlines) ');
             replacedText = replacedText.replace(/ F /g, ' F (First Class) ');
             replacedText = replacedText.replace(/ J /g, ' J (Business Class) ');
             replacedText = replacedText.replace(/ Y /g, ' Y (Economy Class) ');
             replacedText = replacedText.replace(/ YQ /g, ' YQ (Fuel Surcharge) ');
             replacedText = replacedText.replace(/ RT /g, ' RT (Round Trip) ');

            // blogs
            replacedText = replacedText.replace(/ FT /g, ' FT (Flyer Talk Blog) ');
            replacedText = replacedText.replace(/ DoC /g, ' DoC (Doctor of Credit Blog) ');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}