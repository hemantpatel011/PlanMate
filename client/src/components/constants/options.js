export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveler on a journey",
    icon: "🧍",
    people: "only 1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two explorers sharing a path",
    icon: "🧑‍🤝‍🧑",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "A fun-loving family adventure",
    icon: "👨‍👩‍👧‍👦",
    people: "A family of 3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A group chasing thrills together",
    icon: "🏖️",
    people: "5 to 10 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay concious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT = `Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget. Give hotel options list with HotelName, Hotel address, Price,Hotel image URL, coordinates, rating, description. Also suggest itinerary (day-wise) with placeName, details, genetate place image by ai and provide its  URL, coordinates, ticket Pricing (INR), best time to visit .Respond with a strict JSON string only. Use double quotes for all keys and values.`;
