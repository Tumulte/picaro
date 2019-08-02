import { Request } from 'express';
export type RequestWithForm = Request & { form: any };
// use it with : 	 * @param {import("./Typings/global").RequestWithForm} req
