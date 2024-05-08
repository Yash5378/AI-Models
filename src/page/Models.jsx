import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { addFeatured, removeFeatured } from "@/redux/slice/Model";
import { Skeleton } from "@/components/ui/skeleton";

function Models() {
  const loadState = 100;

  const model = useSelector((state) => state.model);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <main>
          {/* Featured Card Section */}
          {model.featured.length > 0 && (
            <>
              <div className="bg-zinc-100">
                <h1 className="flex gap-3 text-xl px-12 h-12 items-center w-[30%] border-b">
                  <Star /> Featured
                </h1>
                <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-8 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8 pb-8 border-b shadow-md">
                  {model.featured?.map((item) => {
                    return (
                      <Card key={item.id}>
                        <CardHeader>
                          <CardTitle>{item.id}</CardTitle>
                          <CardDescription>{item.title}</CardDescription>
                        </CardHeader>
                        {/* <CardContent></CardContent> */}
                        <CardFooter className="flex justify-end">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="h-10 w-20  bottom-0 left-0 ">
                                read more
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle> About Model</DialogTitle>
                                <DialogDescription>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Dicta deleniti fugit, quo
                                  eveniet placeat amet repellat error voluptatum
                                  exercitationem. Earum incidunt aperiam nemo
                                  reprehenderit quos autem ducimus quis, culpa
                                  saepe? Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Facere laudantium soluta
                                  iste dolorem quas natus quisquam, enim
                                  possimus sequi dicta aut perspiciatis adipisci
                                  ullam tempore amet suscipit voluptate ipsum
                                  tempora. Lorem ipsum dolor sit amet
                                  consectetur adipisicing elit. Consequatur
                                  suscipit veniam quis? Nam repudiandae
                                  praesentium nisi ipsam hic ratione dolorem
                                  earum. Necessitatibus quo earum quis aliquid.
                                  Vitae deserunt laboriosam distinctio.
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => dispatch(removeFeatured(item.id))}
                          >
                            <Star className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Main Card Section */}
          <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {model.isLoading
              ? new Array(loadState).fill(0).map((_, index) => {
                  return <Skeleton className="w-[100%] h-36 rounded-xl" />;
                })
              : model.data?.map((item) => {
                  return (
                    <Card key={item.id}>
                      <CardHeader>
                        <CardTitle>{item.id}</CardTitle>
                        <CardDescription>{item.title}</CardDescription>
                      </CardHeader>
                      {/* <CardContent></CardContent> */}
                      <CardFooter className="flex justify-end">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="h-10 w-20  bottom-0 left-0 ">
                              read more
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle> About Model</DialogTitle>
                              <DialogDescription>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Dicta deleniti fugit, quo
                                eveniet placeat amet repellat error voluptatum
                                exercitationem. Earum incidunt aperiam nemo
                                reprehenderit quos autem ducimus quis, culpa
                                saepe? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facere laudantium soluta iste
                                dolorem quas natus quisquam, enim possimus sequi
                                dicta aut perspiciatis adipisci ullam tempore
                                amet suscipit voluptate ipsum tempora. Lorem
                                ipsum dolor sit amet consectetur adipisicing
                                elit. Consequatur suscipit veniam quis? Nam
                                repudiandae praesentium nisi ipsam hic ratione
                                dolorem earum. Necessitatibus quo earum quis
                                aliquid. Vitae deserunt laboriosam distinctio.
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => dispatch(addFeatured(item.id))}
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
          </div>
        </main>
      </div>
    </>
  );
}

export default Models;
