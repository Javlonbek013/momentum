import { weather } from "./scripts/weather.js";

import { greeting } from "./scripts/greeting.js";

import { input } from "./scripts/input.js";
import{ time } from "./scripts/time.js";
import { slideBg } from "./scripts/slider.js";
weather();
input();
greeting();
slideBg();
setInterval(time, 1000);