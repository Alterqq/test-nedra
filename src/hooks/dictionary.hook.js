export const useDictionary = () => {
  const dictionary = {
    fuel: {
      disel: 'дизельный',
      petrol: 'бензиновый',
      electric: 'электрический',
      hybrid: 'гибридный'
    },

    bodyType: {
      hatchback: 'хэтчбек',
      estate: 'универсал',
      suv: 'внедорожник',
      sedan: 'седан',
      mpv: 'MPV',
      pickup: 'пикап',
      cabrio: 'кабриолет'
    },
    transmission: {
      authomatic: "автоматическая",
      manual: 'ручная'
    }
  }

  return function (type, value) {
    return dictionary[type][value.toLowerCase()]
  }

}
