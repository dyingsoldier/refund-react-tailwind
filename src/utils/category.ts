import Food from "../assets/icons/food.svg"
import Others from "../assets/icons/others.svg"
import Services from "../assets/icons/services.svg"
import Transport from "../assets/icons/transport.svg"
import Accommodation from "../assets/icons/accommodation.svg"

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: Food,
  },
  others: {
    name: "Outros",
    icon: Others,
  },
  services: {
    name: "Serviços",
    icon: Services,
  },
  transport: {
    name: "Transporte",
    icon: Transport,
  },
  accommodation: {
    name: "Acomodação",
    icon: Accommodation,
  },
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>
