import React from "react";
import { fetchModel } from "@/redux/slice/Model";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.model.isLoading);
  return (
    <nav className="flex z-50 px-6 h-16 sticky top-0 border-b items-center justify-between   bg-white">
      <Button
        className="p-4 w-32 dark drop-shadow shadow-md font-normal"
        onClick={() => dispatch(fetchModel())}
      >
        {isLoading ? <LoaderCircle /> : "Load"}
      </Button>

      <Button
        className="p-4 w-32 dark drop-shadow shadow-md font-normal "
        onClick={() => navigate()}
      >
        Add Model
      </Button>
    </nav>
  );
};

export default NavigationBar;
