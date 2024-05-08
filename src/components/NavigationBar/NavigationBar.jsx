import React from "react";
import { useState } from "react";
import { fetchModel } from "@/redux/slice/Model";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddModel from "@/redux/slice/AddModel";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const addModel = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addModel(user));
  };
  const isLoading = useSelector((state) => state.model.isLoading);
  return (
    <nav className="flex z-50 px-6 h-16 sticky top-0 border-b items-center justify-between   bg-white">
      <Button
        className="p-4 w-32 dark drop-shadow shadow-md font-normal"
        onClick={() => dispatch(fetchModel())}
      >
        {isLoading ? <LoaderCircle /> : "Load"}
      </Button>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="p-4 w-32 dark drop-shadow shadow-md font-normal "
            onSubmit={handleSubmit}
          >
            Add Model
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px] h-[400px]">
          <DialogHeader>
            <DialogTitle>Add Model</DialogTitle>
            <DialogDescription>You can make a new model here</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                ID
              </Label>
              <Input
                id="id"
                type="number"
                onChange={addModel}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                type="text"
                onChange={addModel}
                className="col-span-3 h-[65px]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default NavigationBar;
