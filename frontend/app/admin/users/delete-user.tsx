import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import axios from "axios";

export default function DeleteProduct(props) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const deleteProduct = async (id) => {
    const {data} = await axios.delete('https://fakestoreapi.com/products/'+id)
  }


  const handleSubmit = async () => {
    debugger;
    deleteProduct(props.item.id);
    toast.success("Product created successfully!");
  };

  return (
    <Dialog>
      <form >
        <DialogTrigger asChild>
          <Button variant="outline">Delete</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Product</DialogTitle>
            <DialogDescription>
             Are you sure you want to delete?
            </DialogDescription>
          </DialogHeader>
   
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSubmit} type="submit">Delete Product</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}