import CategoryItem from '../category-item/category-item.component';

import './category-container.style.scss';

const CategoryContainer = ({categories}) => {
    return (
        <div className="categories-container">
            {
                categories.map((category) => {
                    return(
                        <CategoryItem id={category.id} category={category} />
                    )
                })
            }
        </div>
    )    

}

export default CategoryContainer;