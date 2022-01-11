import LineItems from "./LineItems"

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        // for each li in ul, create checkbox, label, and delete button
        <ul>
            {items.map((item) => (
                <LineItems
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList