import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
  return (
    <div className="p-5 border-red-500 rounded-xl">
      <h1 className="text-red-500">Products Page</h1>
      <Button>FSW Donalds</Button>
      <Input placeholder="Bora fechar esse projeto"></Input>
    </div>
  );
};

export default ProductsPage;
