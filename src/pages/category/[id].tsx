interface ICategory{
    _id: string,
   name: string,
   code: number
}

interface IContext{
    params:{
        id: string
    }
}

export async function getStaticProps(context: IContext){
    
    const { params } = context
    const data = await fetch(`http://localhost:3000/product/${params.id}`);
    const products = await data.json()

    return {
        props: {
            products
        }
    }
    
}

export async function getStaticPaths(){
    const data = await fetch(`http://localhost:3000/category/`)
    const categories = await data.json()

    const paths = categories.map((category:ICategory)=>{
        return {
            params:{
                id: `${category._id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default function Category(){
    return(
        <>
            <h1>Categore</h1>
        </>
    )
}