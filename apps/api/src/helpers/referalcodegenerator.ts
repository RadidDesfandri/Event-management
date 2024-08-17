export const referalCodeGenerator = () => {
    const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let referralcode="";
    for (let i=0; i<10;i++){
        referralcode +=characters.charAt(Math.random()*characters.length);
    }
    return `EW-${referralcode}`;
}