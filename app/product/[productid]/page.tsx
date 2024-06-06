interface IPrams {
    productid: string;

}

const Product = ({params} : {params: IPrams}) => {
    return (
        <div>
            Product page
        </div>
    )
}

export default Product;