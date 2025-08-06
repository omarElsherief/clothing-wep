const BASE_URL = 'https://dummyjson.com/products'

async function getCategories() {
    try {
        const res = await fetch(`${BASE_URL}/category-list`);
        const categories = res.json();
        console.log(categories);
    } catch (error) {
        console.log(error);
    }
}

export async function getByCategory(category) {
    try {
        const res = await fetch(`${BASE_URL}/category/${category}`);
        const data = await res.json();
        return data.products;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMensProducts() {
    const mensShoes = await getByCategory('mens-shoes');
    const mensShirts = await getByCategory('mens-shirts');
    const mensWatches = await getByCategory('mens-watches');
    return [...mensShoes, ...mensShirts, ...mensWatches];
}
export async function getWomensProducts() {
    const womensShoes = await getByCategory('womens-shoes');
    const womensDresses = await getByCategory('womens-dresses');
    const womensWatches = await getByCategory('womens-watches');
    const womensBags = await getByCategory('womens-bags');
    return [...womensShoes, ...womensDresses, ...womensWatches , ...womensBags];
}
export async function getAllProducts() {
    const mensProducts = await getMensProducts();
    const womensProducts = await getWomensProducts();
    return [...mensProducts, ...womensProducts];
}

export async function getProductById(id) {
    try {
        const res = await fetch(`${BASE_URL}/${id}`);
        if (!res.ok) {
            throw Error;
        }
        const product = await res.json();
        return product;
    } catch (error) {
        return "error";
    }
}