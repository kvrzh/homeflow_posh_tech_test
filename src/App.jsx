import {useState, useEffect, useCallback} from 'react';
import Header from './Header';
import PropertyCard from './PropertyCard';

function App() {
    const [properties, setProperties] = useState();
    const [search, setSearch] = useState('');

    // use this state to keep track of the user's saved/bookmarked properties (no needed)
    // const [savedProperties, setSavedProperties] = useState([]);

    const handleSearch = useCallback((e) => {
        setSearch(e.target.value);
    }, [])

    useEffect(() => {
        const fetchPropertyData = async () => {
            const response = await fetch('/property-data.json');
            const json = await response.json();

            setProperties(json.result.properties.elements.map((el) => {
                return {
                    ...el,
                    isActive: false,
                }
            }));
        };

        fetchPropertyData();
    }, []);

    const handleChangeActive = useCallback((id) => {
        setProperties((prevState) => {
            return prevState.map((prop) => {
                if (prop.property_id === id) {
                    return {
                        ...prop,
                        isActive: !prop.isActive
                    }
                }
                return prop;
            })
        })
    }, [])

    return (
        <div className="container mx-auto my-5">
            <Header search={search} handleSearch={handleSearch}/>

            <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {!!properties && properties.filter((prop) => prop.short_description.toLowerCase().includes(search.toLowerCase())).map((property) =>
                    <PropertyCard key={property.property_id} property={property}
                                  handleChangeActive={handleChangeActive}/>)}
            </div>
        </div>
    );
}

export default App;
