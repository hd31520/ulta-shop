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

      </main>

    </div>
  );
}
