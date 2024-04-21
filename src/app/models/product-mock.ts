import { Product } from "./product";

export const products: Product[] = [
    {
        description: 'First Product',
        count: 4,
        couponCodes: [],
        discountEligible: false,
        picture: 'www.ravenstonegifts.com/cdn/shop/products/ravenstone-earrings-the-big-f-ing-golden-bee-earrings-30877453844645_1600x.jpg?v=1628337047',
        price: 99.42,
        category: ''
    },
    {
        description: 'Second Product',
        count: 5,
        couponCodes: ['ACS-2015'],
        discountEligible: true,
        picture: 'www.ravenstonegifts.com/cdn/shop/products/ravenstone-earrings-the-big-f-ing-golden-bee-earrings-30877453844645_1600x.jpg?v=1628337047',
        price: 99.42,
        category: ''
    }
]