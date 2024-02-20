import "./App.css";
import * as React from "react";
import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const A318 = {
  a: "0.000031",
  b: "2.588",
  c: "1212.084",
  cf: "0.26",
  plf: "0.796",
  s: "165",
};
const A320 = {
  a: "0.000032",
  b: "2.588",
  c: "1212.084",
  cf: "0.26",
  plf: "0.796",
  s: "165",
};
const A321 = {
  a: "0.000033",
  b: "2.588",
  c: "1212.084",
  cf: "0.26",
  plf: "0.796",
  s: "165",
};
const A330 = {
  a: "0.000034",
  b: "4.384",
  c: "2457.737",
  cf: "0.06",
  plf: "0.82",
  s: "287",
};

const B737 = {
  a: "0.00016",
  b: "1.454",
  c: "1531.722",
  cf: "0.23",
  plf: "0.796",
  s: "148",
};
const B777 = {
  a: "0.00034",
  b: "6.112",
  c: "3403.041",
  cf: "0.45",
  plf: "0.82",
  s: "370",
};
const S1500 = {
  a: "0.000007",
  b: "2.775",
  c: "1260.608",
  cf: "0.26",
  plf: "0.796",
  s: "157.86",
};
const L2500 = {
  a: "0.00029",
  b: "3.475",
  c: "3259.691",
  cf: "0.26",
  plf: "0.82",
  s: "302.58",
};

function App() {
  const [distance, setDistance] = useState("");
  const [passengers, setPassengers] = useState("");
  const [result, setResult] = useState("");
  const [trip, setTrip] = useState("");
  const [clas, setClas] = useState("");
  const [aircraft, setAircraft] = useState({});

  async function math() {
    const aircraftInfo = JSON.parse(aircraft);
    setTimeout(
      () =>
        setResult(
          ((parseFloat(aircraftInfo.a) * parseFloat(distance) ** 2 +
            parseFloat(aircraftInfo.b) * parseFloat(distance) +
            parseFloat(aircraftInfo.c)) /
            (parseFloat(aircraftInfo.s) * parseFloat(aircraftInfo.plf))) *
            ((1 - parseFloat(aircraftInfo.cf)) *
              parseFloat(clas) *
              (3.16 * 3 + 0.538) +
              (0.00034 * parseFloat(distance) + 11.68)) *
            parseFloat(trip)
        ),
      500
    );
    console.log(distance);
  }

  return (
    <div className="">
      <div className="flex justify-center ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#64FFDA] to-[#0A192E] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <Card className="w-[600px]">
          <CardHeader>
            <CardTitle>Calculate your flight emissions!</CardTitle>
            <CardDescription>
              Calculate the carbon footprint of your flight in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Distance(km)</Label>
                  <Input
                    onChange={(event) => {
                      if (event.target.value <= 550) {
                        setDistance(parseFloat(event.target.value) + 50);
                      } else if (
                        event.target.value > 550 &&
                        event.target.value <= 5500
                      ) {
                        setDistance(parseFloat(event.target.value) + 100);
                      } else if (event.target.value > 5500) {
                        setDistance(parseFloat(event.target.value) + 125);
                      } else {
                        setDistance(event.target.value);
                      }
                    }}
                    id="name"
                    placeholder="Distance in kilometers" //
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Passengers</Label>
                  <Input
                    onChange={(event) => setPassengers(event.target.value)}
                    id="name"
                    placeholder="Number of passengers"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Aircraft type</Label>
                  <Select onValueChange={setAircraft}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a aircraft" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Aircraft types</SelectLabel>
                        <SelectItem value={JSON.stringify(A318)}>
                          A 318
                        </SelectItem>
                        <SelectItem value={JSON.stringify(A320)}>
                          A 320
                        </SelectItem>
                        <SelectItem value={JSON.stringify(A321)}>
                          A 321
                        </SelectItem>
                        <SelectItem value={JSON.stringify(A330)}>
                          A 330
                        </SelectItem>
                        <SelectItem value={JSON.stringify(B737)}>
                          Boeing 737
                        </SelectItem>
                        <SelectItem value={JSON.stringify(B777)}>
                          Boeing 777
                        </SelectItem>
                        <SelectItem value={JSON.stringify(S1500)}>
                          Short distance to 1500km
                        </SelectItem>
                        <SelectItem value={JSON.stringify(L2500)}>
                          Long distance from 2500km
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Trip type</Label>
                  <Select onValueChange={setTrip}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Trip Types</SelectLabel>
                        <SelectItem value="1">One way</SelectItem>
                        <SelectItem value="2">Round trip</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Class</Label>
                  <Select onValueChange={setClas}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a class  " />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Classes</SelectLabel>
                        <SelectItem value="1">Economic</SelectItem>
                        <SelectItem value="1.5">Premium</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={math}>Calculate</Button>
          </CardFooter>
        </Card>
      </div>
      <Card className="mt-10 h-20 flex justify-center  ">
        <Alert className="">
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>CO2 amount per passenger:</AlertTitle>
          <AlertDescription className="text-xl text-emerald-800">
            {result} [kg]
          </AlertDescription>
        </Alert>
      </Card>
    </div>
  );
}

export default App;
