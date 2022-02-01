export default function Search({ setSearch }) {
    return (
        <>

            <input
                className="searchbar"
                type='text'
                placeholder='enter your search here'
                onChange={e => {
                    setSearch(e.target.value)
                }}
            />
        </>
    )
}