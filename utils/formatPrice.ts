export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat (
        'en-US', {
            style: 'currency',
            currency: 'Ksh'
        }).format(amount)
}