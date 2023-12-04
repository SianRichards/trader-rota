export const dummyData = [
  {
    date: "2023-11-10",
    dow: "Friday",
    shift: "AM",
    desk_1: "Maddie",
    desk_2: "Ben",
    desk_3: "",
  },
  {
    date: "2023-11-10",
    dow: "Friday",
    shift: "PM",
    desk_1: "Jack",
    desk_2: "Jonathon",
    desk_3: "Vlad",
  },
  {
    date: "2023-11-11",
    dow: "Saturday",
    shift: "AM",
    desk_1: "Girts",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "2023-11-11",
    dow: "Saturday",
    shift: "PM",
    desk_1: "Vlad",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "2023-11-12",
    dow: "Sunday",
    shift: "AM",
    desk_1: "Jack",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "2023-11-12",
    dow: "Sunday",
    shift: "PM",
    desk_1: "Jonathon",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "2023-11-13",
    dow: "Monday",
    shift: "AM",
    desk_1: "Maddie",
    desk_2: "Jack",
    desk_3: "",
  },
  {
    date: "2023-11-13",
    dow: "Monday",
    shift: "PM",
    desk_1: "Jonathon",
    desk_2: "Vlad",
    desk_3: "Jack",
  },
  {
    date: "2023-11-14",
    dow: "Tuesday",
    shift: "AM",
    desk_1: "Maddie",
    desk_2: "Girts",
    desk_3: "Ben",
  },
];

export const arrayOfTraderObjects = [
  {
    name: "Maddie",
    shifts: [
      {
        date: "10/11/2023",
        shiftType: "AM",
        day: "Friday",
      },
      {
        date: "13/11/2023",
        shiftType: "AM",
        day: "Monday",
      },
      {
        date: "14/11/2023",
        shiftType: "AM",
        day: "Tuesday",
      },
    ],
  },
  {
    name: "Ben",
    shifts: [
      {
        date: "10/11/2023",
        shiftType: "AM",
        day: "Friday",
      },
      {
        date: "14/11/2023",
        shiftType: "AM",
        day: "Tuesday",
      },
    ],
  },
  {
    name: "Jack",
    shifts: [
      {
        date: "10/11/2023",
        shiftType: "PM",
        day: "Friday",
      },
      {
        date: "12/11/2023",
        shiftType: "AM",
        day: "Sunday",
      },
      {
        date: "13/11/2023",
        shiftType: "AM",
        day: "Monday",
      },
      {
        date: "13/11/2023",
        shiftType: "PM",
        day: "Monday",
      },
    ],
  },
  {
    name: "Jonathon",
    shifts: [
      {
        date: "10/11/2023",
        shiftType: "PM",
        day: "Friday",
      },
      {
        date: "12/11/2023",
        shiftType: "PM",
        day: "Sunday",
      },
      {
        date: "13/11/2023",
        shiftType: "PM",
        day: "Monday",
      },
    ],
  },
  {
    name: "Vlad",
    shifts: [
      {
        date: "10/11/2023",
        shiftType: "PM",
        day: "Friday",
      },
      {
        date: "11/11/2023",
        shiftType: "PM",
        day: "Saturday",
      },
      {
        date: "13/11/2023",
        shiftType: "PM",
        day: "Monday",
      },
    ],
  },
  {
    name: "Girts",
    shifts: [
      {
        date: "11/11/2023",
        shiftType: "AM",
        day: "Saturday",
      },
      {
        date: "14/11/2023",
        shiftType: "AM",
        day: "Tuesday",
      },
    ],
  },
];

export const exampleTraderObject = {
  name: "Jack",
  shifts: [
    {
      date: "10/11/2023",
      shiftType: "PM",
      day: "Friday",
    },
    {
      date: "12/11/2023",
      shiftType: "AM",
      day: "Sunday",
    },
    {
      date: "13/11/2023",
      shiftType: "PM",
      day: "Monday",
    },
  ],
};
