import React, { useState } from "react";
import Properties from "./Properties";
import { Box, MenuItem, TextField } from "@mui/material";

const AllList = () => {
  const [looking, setLooking] = useState();
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();
  const [room, setRooms] = useState();

  const data = [looking, price, location, room];

  const lookingFor = [
    {
      value: "House",
      label: "House",
    },
    {
      value: "Condo",
      label: "Condo",
    },
    {
      value: "Cottage",
      label: "Cottage",
    },
    {
      value: "Villa",
      label: "Villa",
    },
  ];

  const prices = [
    {
      value: "100000",
      label: "Under $100000",
    },
    {
      value: "200000",
      label: "Under $200000",
    },
    {
      value: "500000",
      label: "Under $500000",
    },
    {
      value: "500001",
      label: "Over $500000",
    },
  ];
  const locations = [
    {
      value: "Newyork",
      label: "Newyork",
    },
    {
      value: "Austin",
      label: "Austin",
    },
    {
      value: "Lasvegas",
      label: "Las Vegas",
    },
    {
      value: "Sanfarancisco",
      label: "San Francisco",
    },
  ];
  const rooms = [
    {
      value: "3",
      label: "3 Rooms",
    },
    {
      value: "4",
      label: "4 Rooms",
    },
    {
      value: "5",
      label: "5 Rooms",
    },
    {
      value: "6",
      label: "More than 6",
    },
  ];
  return (
    <div className="flex flex-col md:gap-10">
      <div className="md:fixed md:h-full">
        <div className="md:max-w-[300px] hidden md:block md:py-10">
          <div className="flex justify-center">
            <div className="w-[90%] px-6 py-6 rounded-3xl z-40 h-auto bg-primary border  border-gray-400/70   text-secondary">
              <h2 className="text-2xl text-center mb-7 font-bold">
                Find the best place
              </h2>
              <div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">Looking for</h3>
                  <input
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="text"
                    placeholder="Enter type"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">Price $</h3>
                  <input
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="number"
                    placeholder="Price"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">Locations</h3>
                  <input
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="text"
                    placeholder="Location"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">
                    Number of rooms
                  </h3>
                  <input
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="text"
                    placeholder="Eg.2 Bed rooms"
                  />
                </div>
                <div className="mb-2">
                  <h3 className="text-sm mb-2 font-semibold">New Arrivals</h3>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm">
                      <input
                        type="radio"
                        className="size-3 mr-2"
                        name="myRadio"
                        value="all"
                      />
                      All
                    </label>
                    <label className="text-sm">
                      <input
                        type="radio"
                        className="size-3 mr-2"
                        name="myRadio"
                        value="7 days"
                      />
                      Last 7 days
                    </label>
                    <label className="text-sm">
                      <input
                        type="radio"
                        className="size-3 mr-2"
                        name="myRadio"
                        value="15 days"
                      />
                      Last 15 days
                    </label>
                    <label className="text-sm">
                      <input
                        type="radio"
                        className="size-3 mr-2"
                        name="myRadio"
                        value="30 days"
                      />
                      Last 30 days
                    </label>
                  </div>
                </div>
                <button className="bg-secondary text-primary px-5 py-3 rounded-3xl mt-4 text-[13px] cursor-pointer w-full">
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>
        <Box
          className="grid md:hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          component="form"
          sx={{
            "& .MuiTextField-root": {
              mt: 2,
              ml: 2,
              width: "14ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Looking for"
              onChange={(e) => setLooking(e.target.value)}
              defaultValue="EUR"
              size="small"
              sx={{
                height: 1,
                fontSize: 15,
              }}
            >
              {lookingFor.map((option) => (
                <MenuItem
                  sx={{
                    height: 2,
                    fontSize: 13,
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              onChange={(e) => setPrice(e.target.value)}
              label="Price$"
              size="small"
              defaultValue="EUR"
            >
              {prices.map((option) => (
                <MenuItem
                  sx={{
                    height: 2,
                    fontSize: 13,
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              onChange={(e) => setLocation(e.target.value)}
              label="Location"
              defaultValue="EUR"
              size="small"
              sx={{
                height: 1,
              }}
            >
              {locations.map((option) => (
                <MenuItem
                  sx={{
                    height: 2,
                    fontSize: 13,
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              onChange={(e) => setRooms(e.target.value)}
              label="Number of rooms"
              defaultValue="EUR"
              size="small"
              sx={{
                height: 1,
              }}
            >
              {rooms.map((option) => (
                <MenuItem
                  sx={{
                    height: 2,
                    fontSize: 13,
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <ul className="text-secondary mt-4">
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Box>
      </div>
      <div className="pt-4 md:pt-10 md:ml-[300px]">
        <Properties />
      </div>
    </div>
  );
};

export default AllList;
