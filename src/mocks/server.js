import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Creando un servidor
export const server = setupServer(...handlers)
