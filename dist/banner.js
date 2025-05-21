"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printBanner = printBanner;
// src/banner.ts
const chalk_1 = __importDefault(require("chalk"));
function printBanner() {
    const banner = `
███████╗ █████╗ ██████╗ ██╗███████╗     ██████╗ ██████╗ ██╗   ██╗██████╗ ██╗███████╗██████╗ 
██╔════╝██╔══██╗██╔══██╗██║██╔════╝    ██╔════╝██╔═══██╗██║   ██║██╔══██╗██║██╔════╝██╔══██╗
███████╗███████║██████╔╝██║█████╗      ██║     ██║   ██║██║   ██║██████╔╝██║█████╗  ██████╔╝
╚════██║██╔══██║██╔══██╗██║██╔══╝      ██║     ██║   ██║██║   ██║██╔══██╗██║╚═╝  ██╔══██╗
███████║██║  ██║██║  ██║██║██║         ╚██████╗╚██████╔╝╚██████╔╝██║  ██║██║███████╗██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝          ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝                                                 
  `;
    console.log(chalk_1.default.blue(banner) + '\n' + chalk_1.default.red('SARIFCourier 🛡️  By Abdullah Schahin') + '\n\n' + chalk_1.default.white(''));
}
