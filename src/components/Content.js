import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
    // iff is not empty, show items
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            // else show list empty message
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty</p>
            )}
        </>
    )
}

export default Content