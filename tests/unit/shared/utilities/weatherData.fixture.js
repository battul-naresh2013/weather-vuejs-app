const weatherMockData = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1583236800,
      main: {
        temp: 282.58,
        feels_like: 276.85,
        temp_min: 281.09,
        temp_max: 282.58,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 998,
        humidity: 68,
        temp_kf: 1.49,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 6.25,
        deg: 241,
      },
      rain: {
        '3h': 0.56,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-03-03 12:00:00',
    },
    {
      dt: 1583247600,
      main: {
        temp: 282.14,
        feels_like: 277.05,
        temp_min: 281.02,
        temp_max: 282.14,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 999,
        humidity: 64,
        temp_kf: 1.12,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 5.01,
        deg: 267,
      },
      rain: {
        '3h': 0.81,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-03-03 15:00:00',
    },
    {
      dt: 1583258400,
      main: {
        temp: 278.17,
        feels_like: 275.03,
        temp_min: 277.43,
        temp_max: 278.17,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 1002,
        humidity: 83,
        temp_kf: 0.74,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 2.19,
        deg: 267,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-03-03 18:00:00',
    },
    {
      dt: 1583269200,
      main: {
        temp: 276.29,
        feels_like: 272.43,
        temp_min: 275.92,
        temp_max: 276.29,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1003,
        humidity: 93,
        temp_kf: 0.37,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.15,
        deg: 238,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-03-03 21:00:00',
    },
    {
      dt: 1583280000,
      main: {
        temp: 275.12,
        feels_like: 271.37,
        temp_min: 275.12,
        temp_max: 275.12,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 2.83,
        deg: 221,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-03-04 00:00:00',
    },
    {
      dt: 1583290800,
      main: {
        temp: 274.73,
        feels_like: 270.64,
        temp_min: 274.73,
        temp_max: 274.73,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 3.16,
        deg: 227,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-03-04 03:00:00',
    },
    {
      dt: 1583301600,
      main: {
        temp: 275.37,
        feels_like: 271.46,
        temp_min: 275.37,
        temp_max: 275.37,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 3.11,
        deg: 225,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-03-04 06:00:00',
    },
    {
      dt: 1583312400,
      main: {
        temp: 279.32,
        feels_like: 275.96,
        temp_min: 279.32,
        temp_max: 279.32,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 23,
      },
      wind: {
        speed: 2.61,
        deg: 249,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2020-03-04 09:00:00',
    },
  ],
  city: {
    id: 2751834,
    name: 'Leek',
    coord: {
      lat: 53.1625,
      lon: 6.3764,
    },
    country: 'NL',
    timezone: 3600,
    sunrise: 1583216203,
    sunset: 1583255780,
  },
};

export default weatherMockData;
