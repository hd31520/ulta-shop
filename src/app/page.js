import Catagories from "@/components/Catagories";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import Slider from "@/components/sliders";


export default function Home() {
  return (
    <div className="">
      <main className="">

        <Slider></Slider>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h1 className="text-2xl ">Featured Product</h1>
          <ProductList></ProductList>
        </div>
        <div className="mt-24 ">
          {/* <h1 className="text-2xl ">Featured Product</h1> */}
           <h1 className=' m-8 tracking-wide text-2xl font-semibold '>Category</h1>
          <Catagories></Catagories>
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h1 className="text-2xl ">Featured Product</h1>
          <ProductList></ProductList>
        </div>

      </main>
      <Footer></Footer>

    </div>
  );
}
