"use client";

interface ProductDetailsProps {
    product: any;
}

const ProductDetails:React.FC<ProductDetailsProps> = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>Images</div>
           <div>Details</div>
        </div>
    )
}

export default ProductDetails;