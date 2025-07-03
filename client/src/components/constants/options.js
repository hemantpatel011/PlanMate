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

export const AI_PROMPT = `Generate Travel Plan for Location :{location}, for {totalDays} days for {traveler} with a {budget} budget, Give me a Hotels options list with hotelName, hotelAddress, price(in ₹ in location is in india or $ for other), hotel image url, geo coordinates, rating (out of 5), descriptions( min 15- max 20 words) and suggest itinerary with placeName, placeDetails, placeImage url, geoCoordinates, ticketPricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format. 
Here is example what Data Format i want in response:-

{
  "location": "Pachmarhi, Madhya Pradesh",
  "travelers": "Couple",
  "duration": "2 days",
  "budget": "Moderate",
  "hotels": [
    {
      "hotelName": "Hotel Pachmarhi",
      "hotelAddress": "Near Bus Stand, Pachmarhi, Madhya Pradesh 461881",
      "price": "₹2500 - ₹3500",
      "hotelImageURL": "https://example.com/hotel_pachmarhi.jpg",
      "geoCoordinates": {
        "latitude": 22.4697,
        "longitude": 78.4357
      },
      "rating": 3.8,
      "description": "Hotel Pachmarhi offers comfortable accommodation with basic amenities, conveniently located near the bus stand."
    },
    {
      "hotelName": "MPT Satpura Retreat, Pachmarhi",
      "hotelAddress": "Near Collectorate, Pachmarhi, Madhya Pradesh 461881",
      "price": "₹4000 - ₹5500",
      "hotelImageURL": "https://example.com/mpt_satpura_retreat.jpg",
      "geoCoordinates": {
        "latitude": 22.4665,
        "longitude": 78.4345
      },
      "rating": 4.3,
      "description": "MPT Satpura Retreat, run by Madhya Pradesh Tourism, offers comfortable and well-maintained rooms with excellent service."
    }
  ],
  "itinerary": [
    {
      "day": Day 1,
      "plan": [
        {
          "placeName": "Bee Fall (Jamuna Prapat)",
          "placeDetails": "One of the most popular waterfalls in Pachmarhi, known for its pristine waters and natural beauty. Visitors can enjoy a refreshing dip in the natural pools.",
          "placeImageURL": "https://example.com/bee_fall.jpg",
          "geoCoordinates": {
            "latitude": 22.4620,
            "longitude": 78.4480
          },
          "ticketPricing": "₹100 per person",
          "rating": 4.5,
          "timeToTravel": "2.5 hours",
          "bestTimeToVisit": "9:00 AM - 11:30 AM"
        },
        {
          "placeName": "Handi Khoh (Deep Valley)",
          "placeDetails": "A dramatic deep valley with steep cliffs, offering breathtaking panoramic views of the surrounding hills and forests.",
          "placeImageURL": "https://example.com/handi_khoh.jpg",
          "geoCoordinates": {
            "latitude": 22.4770,
            "longitude": 78.4280
          },
          "ticketPricing": "Free",
          "rating": 4.3,
          "timeToTravel": "1 hour",
          "bestTimeToVisit": "11:30 AM - 12:30 PM"
        },
        {
          "placeName": "Priyadarshini Point (Forsyth Point)",
          "placeDetails": "Offers a stunning sunrise view over the Satpura ranges and is believed to be the spot where Captain Forsyth first discovered Pachmarhi.",
          "placeImageURL": "https://example.com/priyadarshini_point.jpg",
          "geoCoordinates": {
            "latitude": 22.4735,
            "longitude": 78.4190
          },
          "ticketPricing": "Free",
          "rating": 4.6,
          "timeToTravel": "1 hour",
          "bestTimeToVisit": "Evening or early morning"
        },
        {
          "placeName": "Mahadeo Caves",
          "placeDetails": "Ancient caves dedicated to Lord Shiva, known for their religious significance and unique rock formations.",
          "placeImageURL": "https://example.com/mahadeo_caves.jpg",
          "geoCoordinates": {
            "latitude": 22.4900,
            "longitude": 78.4400
          },
          "ticketPricing": "Free",
          "rating": 4.2,
          "timeToTravel": "1.5 hours",
          "bestTimeToVisit": "3:00 PM - 4:30 PM"
        }
      ]
    },
    {
      "day": Day 2,
      "plan": [
        {
          "placeName": "Dhoopgarh (Sunrise Point)",
          "placeDetails": "The highest point in Pachmarhi, offering panoramic views of the entire Satpura range, especially stunning during sunrise. ",
          "placeImageURL": "https://example.com/dhoopgarh.jpg",
          "geoCoordinates": {
            "latitude": 22.4450,
            "longitude": 78.4720
          },
          "ticketPricing": "Vehicle charge (approx. ₹50-₹100)",
          "rating": 4.7,
          "timeToTravel": "2 hours",
          "bestTimeToVisit": "5:00 AM - 7:00 AM"
        },
        {
          "placeName": "Jata Shankar Caves",
          "placeDetails": "Natural caves believed to be the abode of Lord Shiva, featuring unique stalagmites and stalactites. ",
          "placeImageURL": "https://example.com/jata_shankar_caves.jpg",
          "geoCoordinates": {
            "latitude": 22.4630,
            "longitude": 78.4390
          },
          "ticketPricing": "Free",
          "rating": 4.1,
          "timeToTravel": "1 hour",
          "bestTimeToVisit": "9:00 AM - 10:00 AM"
        },
        {
          "placeName": "Duchess Fall",
          "placeDetails": "A magnificent three-tiered waterfall, requiring a moderate trek to reach. Ideal for adventurous couples.",
          "placeImageURL": "https://example.com/duchess_fall.jpg",
          "geoCoordinates": {
            "latitude": 22.4600,
            "longitude": 78.4100
          },
          "ticketPricing": "Free",
          "rating": 4.4,
          "timeToTravel": "2.5 hours (including trek)",
          "bestTimeToVisit": "10:30 AM - 1:00 PM"
        },
        {
          "placeName": "Pachmarhi Bazaar",
          "placeDetails": "Explore the local market for souvenirs, handicrafts, and local delicacies. A great place to experience the local culture and pick up some mementos.",
          "placeImageURL": "https://example.com/pachmarhi_bazaar.jpg",
          "geoCoordinates": {
            "latitude": 22.4690,
            "longitude": 78.4360
          },
          "ticketPricing": "Free ",
          "rating": 3.9,
          "timeToTravel": "1.5 hours",
          "bestTimeToVisit": "4:00 PM - 5:30 PM "
        }
      ]
    }
  ]
}
`;

