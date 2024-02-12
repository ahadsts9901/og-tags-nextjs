import Navbar from "./components/Navbar";
import Card from "./components/Card";
import axios from "axios";

const Home = async () => {

  const resp = await axios.get("https://fakestoreapi.com/products/")
  const products = await resp.data;

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {
          products.length < 1 ?
            <div className='w-full h-[100vh] overflow-y-hidden flex justify-center items-center'>
              <span className="loader"></span>
            </div>
            :
            products.map((product: any, index: Number) => (
              <Card key={index} id={product.id} image={product.image} description={product.description} price={product.price} title={product.category} />
            ))
        }
      </div>

    </>
  );
}

export default Home;

export async function generateMetadata() {

  return {
    title: "Next Store",
    description: "Next store by Abdul ahad",
    openGraph: {
      title: "Next Store",
      description: "Next store by Abdul ahad",
      images: [
        {
          url: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3BwaW5nfGVufDB8fDB8fHww",
          width: 800,
          height: 600,
          alt: "image",
          type: 'image/jpeg',
        }
      ]
    }
  }

}
