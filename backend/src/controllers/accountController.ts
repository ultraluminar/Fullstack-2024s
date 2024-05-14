import { Account } from '../models/accountModel.js';
import { requestHandler } from '../lib/customRequestHandler.js';

import { Request, Response } from 'express';

export const AccountController = {
    async getAll(request: Request, response: Response) {
        await requestHandler(
            request, response,
            Account.getAll,
            200, 500,
            { status: "error", message: "Unable to get all Users" }
        );
    },

    async get(request: Request, response: Response) {
        await requestHandler(
            request, response,
            Account.getById,
            200, 500,
            { status: "error", message: "Unable to get all Users" }
        );
    },

    async create(request: Request, response: Response) {
        await requestHandler(
            request, response,
        );
    },

    async remove(request: Request, response: Response) {
        await requestHandler(
            request, response,
        );
    },

    async update(request: Request, response: Response) {
        await requestHandler(
            request, response,
        );
    }
};

