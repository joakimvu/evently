export const headerLinks = [
  {
    label: "Hjem",
    route: "/",
  },
  {
    label: "Ny Event",
    route: "/events/ny",
  },
  {
    label: "Min Profil",
    route: "/profil",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
