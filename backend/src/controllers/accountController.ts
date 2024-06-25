import { Account } from '../models/accountModel.js';

import { Request, Response } from 'express';
import { AccountType } from '../../db/schema/account.js';


export const AccountController = {
    async getAll(request: Request, response: Response) {
        try {
            const accounts: AccountType[] = await Account.getAll();
            response.status(200).json({ status: "success", data: accounts });
        } catch (error) {
            console.log("Unable to get all Accounts:\n", error);
            response.status(500).json({ status: "error", message: "Unable to get all Accounts" })
        }
    },

    async get(request: Request, response: Response) {
        try {
            const id = Number(request.params.id);
            const account = await Account.getById(id);
            if (account) {
                response.status(200).json({ status: "success", data: account });
            } else {
                response.status(404).json({ status: "fail", message: `Account where id=${id} not Found` });
            }
        } catch (error) {
            console.log("Unable to get Account\n", error);
            response.status(500).json({
                status: "error", message: "Unable to get Account"
            })
        }
    },

    async create(request: Request, response: Response) {
        try {
            // TODO: validation
            const account_json = request.body;
            const account = await Account.create(account_json);
            response.status(201).json({ status: "success", data: account });
        } catch (error) {
            console.log("Unable to create Account:\n", error);
            response.status(500).json({ status: "error", message: "Unable to create Account" });
        }
    },

    async remove(request: Request, response: Response) {
        try {
            const id = Number(request.params.id);
            let account = await Account.getById(id);
            if (account) {
                account = await Account.remove(id);
                response.status(200).json({ status: "success", data: account });
            } else {
                response.status(404).json({ status: "error", message: `Account where id=${id} not found` })
            }
        } catch (error) {
            console.log("Unable to delete Account:\n", error);
            response.status(500).json({ status: "error", message: "Unable to delete User" });
        }
    },

    async update(request: Request, response: Response) {
        try {
            const id = Number(request.params.id);
            let account = await Account.getById(id);
            if (account) {
                const account_json = request.body;
                account = await Account.update(id, account_json);
                response.status(200).json({ status: "success", data: account });
            } else {
                response.status(404).json({ status: "error", message: `Account where id=${id} not found` })
            }
        } catch (error) {
            console.log("Unable to update Account:\n", error);
            response.status(500).json({ status: "error", message: "Unable to update User" });
        }
    }
};
