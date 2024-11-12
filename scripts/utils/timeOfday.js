export function timeOfDay() { 
    const currentDate = new Date();
    const hour = currentDate.getHours();
    if (hour >= 6 && hour < 12) {
        return " morning";
    } else if (hour >= 12 && hour < 18) {
        return "afternoon";
    } else if(hour >= 18 && hour < 24) {
        return "evening";
    } else {
        return "night";
    }
 }