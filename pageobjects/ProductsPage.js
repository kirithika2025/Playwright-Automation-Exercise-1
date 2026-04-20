 export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.selectors = {
            allProducts: page.getByText('All Products'),
            category: page.getByText('Category'),
            ad: page.locator('iframe[name="aswift_3"]').contentFrame().getByRole('button', { name: 'Close ad' }),
            firstProduct: page.getByRole('link',{name:'View Product'}),
            searchBox: page.getByPlaceholder('Search Product')
        }
 }

 async closead() {
   
    await this.selectors.ad.click();
 }

 async clickfirstProduct() {
    await this.selectors.firstProduct.first().click();
 }

 async clickAndTypeSearch(searchText) {
   await this.selectors.searchBox.click();
   await this.selectors.searchBox.fill(searchText);
   
 }
 
}

 