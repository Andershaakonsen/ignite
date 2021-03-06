//Base URL
const base_url = `https://api.rawg.io/api/`;

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Key things
const key = "36e85e0ed12946dbb75f108cf5f12264"; // YOUR KEY GOES HERE
const key_url = `key=${key}`;

// Popular games
const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`; // I got 12 because I wanted 12, change it if you want less / more
export const popularGamesURL = () => `${base_url}${popular_games}`;
