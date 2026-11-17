function ShoppingList({ DataForShop }) {
    return (
        <>
            {DataForShop.length === 0
                ? (<p>List is empty</p>)
                : (<ul>
                    {DataForShop.map((el) => {
                        return (
                            <li>
                                <p>{el}</p>
                            </li>
                        )
                    })}
                </ul>)
            }
        </>

    );

}
export default ShoppingList;