# How many hours are in a year
# How many minutes are in a decade?
# How to convert an age given in years seconds

def playing_with_numbers(hours_in_year, minutes_in_decade, age)
  age_in_seconds = age * 365 * 24 * 60 * 60
  hours_in_year = 24 * 365
  minutes_in_decade = hours_in_year * 10 * 60

  return hours_in_year, minutes_in_decade, age_in_seconds 
end

