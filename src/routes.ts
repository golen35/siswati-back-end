import { Router} from "express";
import { PostNodemailer } from "./controllers/ControlerNodemailer";

export const routes = (router: Router) => {

    router.post('/api/user',PostNodemailer)

  }

