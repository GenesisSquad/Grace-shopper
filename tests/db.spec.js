const {client,rebuildDB} = require('../db');

describe('Database',()=>{

    beforeAll(async()=>{
        await client.connect();
        await rebuildDB();
    })
    afterAll(async() => {
        await client.end();
    })
    describe('Products', () => {
        let testProduct, allProducts, product, productId;
        describe("createProduct()",() => {
            beforeAll(async()=>{
                testProduct = await createProduct({
                    name:'the best coffee',
                    description:'the darkest roast around',
                    price:12.99,
                    imageURL:'https://someImage.com/images.theImage.png',
                    inStock:true,
                    category:'coffee'
                })
                productId = testProduct.id;
            })
            it('returns an object', async () => {
                expect(typeof testProduct).toBe('object');
            })
        })
        // describe("getProductById()",() => {
        // })
        // describe("getAllProducts()",() => {
            
        // })
    })
})