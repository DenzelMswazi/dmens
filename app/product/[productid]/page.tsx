import { product } from "@/utils/product";

interface IPrams {
    productid: string;

}

const Product = ({params} : {params: IPrams}) => {
     console.log("params", params);
    product 

    return (
        <div>
            Product page
        </div>
    )
}

export default Product;