////www.ravenstonegifts.com/cdn/shop/products/ravenstone-earrings-the-big-f-ing-golden-bee-earrings-30877453844645_1600x.jpg?v=1628337047

export interface Product {
    description: string;
    picture: string;
    price: number;
    discountEligible: boolean;
    count: number;
    couponCodes: string[];
    category: string;
}