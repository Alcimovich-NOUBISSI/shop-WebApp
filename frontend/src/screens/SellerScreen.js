

const SellerScreen = ()=> {
    return(
        <div style={{marginTop: "200px"}}>
            <form action="api/products/sell" method="post" >
                <input name="prodName" type="text" placeholder= "enter the product's name" />
                <input name="prodDescription" type="text" placeholder= "enter the product's description" />
                <input name="prodPrice" placeholder= "enter the product's price" />
                <input name="prodCount" placeholder= "enter the product's count in stock" />
                <input name="prodImage" placeholder= "enter the product's count in stock" type="file" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default SellerScreen;