import { rest } from "msw";

export const handlers = [
  rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (req, res, ctx) => {

    const character = req.url.searchParams.get("character");

    const citaAleatoria = [
      {
        quote: "My eyes! The goggles do nothing!",
        character: "Rainier Wolfcastle",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRainierWolfcastle.png?1497567511035",
        characterDirection: "Right"
      }
    ]

    const citaHomero = [
      {
        quote : "For once maybe someone will call me sir without adding, Youre making a scene.",
        character: "Homer Simpson",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        characterDirection: "Right"
      },
    ]

    if(character?.length === 0)
      return res(ctx.json(citaAleatoria));

    switch(character){

      case ("Homer"): {
        return res(ctx.json(citaHomero))
      }

      case (null): {
        return res(ctx.json(citaAleatoria));
      }

      default: {
        return res(ctx.json([]))
      }
    }

  })
];
