import { product } from "@/utils/product";

import  Container  from "@/app/components/Container"; // Replace "package-name" with the actual package name where the 'Container' component is defined.
import ProductDetails from "./ProductDetails";

interface IPrams {
    productid: string;
}

const Product = ({params} : {params: IPrams}) => {
     console.log("params", params);

    return (
        <div className="p-8">
            <Container>
                <ProductDetails />
            </Container>
        </div>
    )
}

export default Product;