import './filter.css';
import { useState } from "react"

function FilterPrice(){
    const [minPrice, setMinPrice] = useState(0);
    const handlePriceChange = (event) => {
        setMinPrice(event.target.value);
    }
    const handleCategoryChange = (event) => {

    }

    return(
        <section className="filters">
            <div>
                <label htmlFor="price">Precio: </label>
                <input
                    id="price"
                    type="range"
                    min="0"
                    max="1000"
                    value={minPrice}
                    onChange={handlePriceChange}
                />
                <span> ${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categorias:</label>
                <select id="category" onChange={handleCategoryChange}>
                    <option value="all">Todo</option>
                    <option value="beauty">Belleza</option>
                    <option value="fragrances">Fragrancias</option>
                    <option value="furniture">Muebleria</option>
                    <option value="groceries">Abarrotes</option>
                </select>
            </div>

      </section>
    )
}

export default FilterPrice;