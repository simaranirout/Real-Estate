const properties = [
  {
    "id": 1,
    "title": "Cozy Family House",
    "location": "Bhubaneshwar",
    "zip": "94102",
    "price": 1200000,
    "type": "house",
    "bedrooms": 3,
    "bathrooms": 2,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 37.7749,
    "lng": -122.4194,
    "description": "A cozy family house in downtown San Francisco."
  },
  {
    "id": 2,
    "title": "Modern Apartment",
    "location": "Keonjhar",
    "zip": "10001",
    "price": 850000,
    "type": "apartment",
    "bedrooms": 2,
    "bathrooms": 1,
    "images": [
      "/images/imag1.jpg"
    ],
    "lat": 40.7128,
    "lng": -74.006,
    "description": "A stylish modern apartment in NYC."
  },
  {
    "id": 3,
    "title": "Plot of Land",
    "location": "Bhadrak",
    "zip": "73301",
    "price": 800000,
    "type": "plot",
    "bedrooms": 0,
    "bathrooms": 0,
    "images": [
      "/images/imag2.jpg"
    ],
    "lat": 30.2672,
    "lng": -97.7431,
    "description": "A beautiful plot of land ready for building."
  },
  {
    "id": 4,
    "title": "Suburban House",
    "location": "Cuttack",
    "zip": "98101",
    "price": 980000,
    "type": "house",
    "bedrooms": 4,
    "bathrooms": 3,
    "images": [
      "/images/imag3.jpg"
    ],
    "lat": 47.6062,
    "lng": -122.3321,
    "description": "Spacious suburban home with a backyard."
  },
  {
    "id": 5,
    "title": "Downtown Loft",
    "location": "Goa",
    "zip": "60601",
    "price": 720000,
    "type": "apartment",
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "/images/imag4.jpg"
    ],
    "lat": 41.8781,
    "lng": -87.6298,
    "description": "Industrial-chic loft in the heart of the city."
  },
  {
    "id": 6,
    "title": "Cozy #6",
    "location": "Bhubaneshwar",
    "zip": "94102",
    "price": 1260000,
    "type": "house",
    "bedrooms": 3,
    "bathrooms": 2,
    "images": [
      "/images/imag5.jpg"
    ],
    "lat": 37.7749,
    "lng": -122.4194,
    "description": "A cozy family house in downtown San Francisco."
  },
  {
    "id": 7,
    "title": "Modern #7",
    "location": "Keonjhar",
    "zip": "10001",
    "price": 920000,
    "type": "apartment",
    "bedrooms": 2,
    "bathrooms": 1,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 40.7128,
    "lng": -74.006,
    "description": "A stylish modern apartment in NYC."
  },
  {
    "id": 8,
    "title": "Plot #8",
    "location": "Bhadrak",
    "zip": "73301",
    "price": 880000,
    "type": "plot",
    "bedrooms": 0,
    "bathrooms": 0,
    "images": [
      "/images/imag1.jpg"
    ],
    "lat": 30.2672,
    "lng": -97.7431,
    "description": "A beautiful plot of land ready for building."
  },
  {
    "id": 9,
    "title": "Suburban #9",
    "location": "Cuttack",
    "zip": "98101",
    "price": 1070000,
    "type": "house",
    "bedrooms": 4,
    "bathrooms": 3,
    "images": [
      "/images/imag3.jpg"
    ],
    "lat": 47.6062,
    "lng": -122.3321,
    "description": "Spacious suburban home with a backyard."
  },
  {
    "id": 10,
    "title": "Downtown #10",
    "location": "Goa",
    "zip": "60601",
    "price": 820000,
    "type": "apartment",
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "/images/imag4.jpg"
    ],
    "lat": 41.8781,
    "lng": -87.6298,
    "description": "Industrial-chic loft in the heart of the city."
  },
  {
    "id": 11,
    "title": "Cozy #11",
    "location": "Bhubaneshwar",
    "zip": "94102",
    "price": 1310000,
    "type": "house",
    "bedrooms": 3,
    "bathrooms": 2,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 37.7749,
    "lng": -122.4194,
    "description": "A cozy family house in downtown San Francisco."
  },
  {
    "id": 12,
    "title": "Modern #12",
    "location": "Keonjhar",
    "zip": "10001",
    "price": 970000,
    "type": "apartment",
    "bedrooms": 2,
    "bathrooms": 1,
    "images": [
      "/images/imag5.jpg"
    ],
    "lat": 40.7128,
    "lng": -74.006,
    "description": "A stylish modern apartment in NYC."
  },
  {
    "id": 13,
    "title": "Plot #13",
    "location": "Bhadrak",
    "zip": "73301",
    "price": 930000,
    "type": "plot",
    "bedrooms": 0,
    "bathrooms": 0,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 30.2672,
    "lng": -97.7431,
    "description": "A beautiful plot of land ready for building."
  },
  {
    "id": 14,
    "title": "Suburban #14",
    "location": "Cuttack",
    "zip": "98101",
    "price": 1120000,
    "type": "house",
    "bedrooms": 4,
    "bathrooms": 3,
    "images": [
      "/images/imag2.jpg"
    ],
    "lat": 47.6062,
    "lng": -122.3321,
    "description": "Spacious suburban home with a backyard."
  },
  {
    "id": 15,
    "title": "Downtown #15",
    "location": "Goa",
    "zip": "60601",
    "price": 870000,
    "type": "apartment",
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 41.8781,
    "lng": -87.6298,
    "description": "Industrial-chic loft in the heart of the city."
  },
  {
    "id": 16,
    "title": "Cozy #16",
    "location": "Bhubaneshwar",
    "zip": "94102",
    "price": 1360000,
    "type": "house",
    "bedrooms": 3,
    "bathrooms": 2,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 37.7749,
    "lng": -122.4194,
    "description": "A cozy family house in downtown San Francisco."
  },
  {
    "id": 17,
    "title": "Modern #17",
    "location": "Keonjhar",
    "zip": "10001",
    "price": 1020000,
    "type": "apartment",
    "bedrooms": 2,
    "bathrooms": 1,
    "images": [
      "/images/imag3.jpg"
    ],
    "lat": 40.7128,
    "lng": -74.006,
    "description": "A stylish modern apartment in NYC."
  },
  {
    "id": 18,
    "title": "Plot #18",
    "location": "Bhadrak",
    "zip": "73301",
    "price": 980000,
    "type": "plot",
    "bedrooms": 0,
    "bathrooms": 0,
    "images": [
      "/images/imag4.jpg"
    ],
    "lat": 30.2672,
    "lng": -97.7431,
    "description": "A beautiful plot of land ready for building."
  },
  {
    "id": 19,
    "title": "Suburban #19",
    "location": "Cuttack",
    "zip": "98101",
    "price": 1170000,
    "type": "house",
    "bedrooms": 4,
    "bathrooms": 3,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 47.6062,
    "lng": -122.3321,
    "description": "Spacious suburban home with a backyard."
  },
  {
    "id": 20,
    "title": "Downtown #20",
    "location": "Goa",
    "zip": "60601",
    "price": 920000,
    "type": "apartment",
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 41.8781,
    "lng": -87.6298,
    "description": "Industrial-chic loft in the heart of the city."
  },
  {
    "id": 21,
    "title": "Cozy #21",
    "location": "Bhubaneshwar",
    "zip": "94102",
    "price": 1410000,
    "type": "house",
    "bedrooms": 3,
    "bathrooms": 2,
    "images": [
      "/images/imag3.jpg"
    ],
    "lat": 37.7749,
    "lng": -122.4194,
    "description": "A cozy family house in downtown San Francisco."
  },
  {
    "id": 22,
    "title": "Modern #22",
    "location": "Keonjhar",
    "zip": "10001",
    "price": 1070000,
    "type": "apartment",
    "bedrooms": 2,
    "bathrooms": 1,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 40.7128,
    "lng": -74.006,
    "description": "A stylish modern apartment in NYC."
  },
  {
    "id": 23,
    "title": "Plot #23",
    "location": "Bhadrak",
    "zip": "73301",
    "price": 1030000,
    "type": "plot",
    "bedrooms": 0,
    "bathrooms": 0,
    "images": [
      "/images/imag1.jpg"
    ],
    "lat": 30.2672,
    "lng": -97.7431,
    "description": "A beautiful plot of land ready for building."
  },
  {
    "id": 24,
    "title": "Suburban #24",
    "location": "Cuttack",
    "zip": "98101",
    "price": 1220000,
    "type": "house",
    "bedrooms": 4,
    "bathrooms": 3,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 47.6062,
    "lng": -122.3321,
    "description": "Spacious suburban home with a backyard."
  },
  {
    "id": 25,
    "title": "Downtown #25",
    "location": "Goa",
    "zip": "60601",
    "price": 970000,
    "type": "apartment",
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 41.8781,
    "lng": -87.6298,
    "description": "Industrial-chic loft in the heart of the city."
  },
  {
    "id": 26,
    "title": "Cozy #26",
    "location": "Bhubaneshwar",
    "zip": "94102",
    "price": 1460000,
    "type": "house",
    "bedrooms": 3,
    "bathrooms": 2,
    "images": [
      "/images/imag1.jpg"
    ],
    "lat": 37.7749,
    "lng": -122.4194,
    "description": "A cozy family house in downtown San Francisco."
  },
  {
    "id": 27,
    "title": "Modern #27",
    "location": "Keonjhar",
    "zip": "10001",
    "price": 1120000,
    "type": "apartment",
    "bedrooms": 2,
    "bathrooms": 1,
    "images": [
      "/images/imag2.jpg"
    ],
    "lat": 40.7128,
    "lng": -74.006,
    "description": "A stylish modern apartment in NYC."
  },
  {
    "id": 28,
    "title": "Plot #28",
    "location": "Bhadrak",
    "zip": "73301",
    "price": 1080000,
    "type": "plot",
    "bedrooms": 0,
    "bathrooms": 0,
    "images": [
      "/images/imag4.jpg"
    ],
    "lat": 30.2672,
    "lng": -97.7431,
    "description": "A beautiful plot of land ready for building."
  },
  {
    "id": 29,
    "title": "Suburban #29",
    "location": "Cuttack",
    "zip": "98101",
    "price": 1270000,
    "type": "house",
    "bedrooms": 4,
    "bathrooms": 3,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 47.6062,
    "lng": -122.3321,
    "description": "Spacious suburban home with a backyard."
  },
  {
    "id": 30,
    "title": "Downtown #30",
    "location": "Goa",
    "zip": "60601",
    "price": 720000,
    "type": "apartment",
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "/images/imag.jpg"
    ],
    "lat": 41.8781,
    "lng": -87.6298,
    "description": "Industrial-chic loft in the heart of the city."
  }
];

export default properties;