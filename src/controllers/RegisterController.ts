import { Request, Response } from "express";
import { RegisterService } from "../services/RegisterService";
import { AppDataSource } from "../database";
import { Register } from "../entities/Register";

export class RegisterController {
    registerService: RegisterService

    constructor(
        registerService = new RegisterService(AppDataSource.manager)
    ){
        this.registerService = registerService;
    }

    createRegister = async (req: Request, res: Response) => {
        const register: Register = req.body;
        const findRegister = await this.registerService.getRegisterByNumber(register.number)

        if(findRegister) {
            return res.status(400).json({message: 'Bad Request - O chamado já existe'})
        }

        this.registerService.createRegister(register)
    }

    getAllRegisters = async (req: Request, res: Response) => {
        const registers = await this.registerService.getAllRegisters()

        return res.status(200).json({registers})
    }
}