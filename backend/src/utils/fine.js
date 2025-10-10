export function calculateFine({ 
    bookPrice, 
    dueDate, 
    returnDate, 
    damageLevel 
}) {

    const now = returnDate || new Date()
    const isLate = now >new Date(dueDate)
    const lateDays = isLate? Math.ceil((now - new Date(dueDate)) / (1000 * 60 * 60 * 24)): 0

    const isMissing = isLate

    let damageFine = 0
    if (damageLevel === "SMALL") damageFine = 0.10 * bookPrice;
    if (damageLevel === "LARGE") damageFine = 0.50 * bookPrice;

    const lateFine = lateDays * 50;
    const missingFine = isMissing ? bookPrice * 2 : 0

    const totalAmount = missingFine + lateFine + damageFine

    return {
        missingBook: isMissing,
        lateDays,
        damageLevel: damageLevel || null,
        totalAmount: parseFloat(totalAmount) 
    }
}