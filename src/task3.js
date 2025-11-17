export function formatPhones(phones) {
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        
        const cleanPhone = phone.replace(/[^\d+]/g, '');
        
        const plusIndex = cleanPhone.indexOf('+');
        const digits = cleanPhone.slice(plusIndex + 1);
        
        let codeLength = 1;
        if (digits.startsWith('375')) codeLength = 3;
        else if (digits.startsWith('57') || digits.startsWith('37')) codeLength = 2;
        
        const countryCode = '+' + digits.slice(0, codeLength);
        const numberPart = digits.slice(codeLength);
        
        const group1 = numberPart.slice(0, 3);
        const group2 = numberPart.slice(3, 6);
        const group3 = numberPart.slice(6, 8);
        const group4 = numberPart.slice(8, 10);
        
        phones[i] = `${countryCode} (${group1}) ${group2}-${group3}-${group4}`;
    }
}
