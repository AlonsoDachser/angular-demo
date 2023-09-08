export * from './bookController.service';
import { BookControllerService } from './bookController.service';
export * from './customerController.service';
import { CustomerControllerService } from './customerController.service';
export * from './rentalController.service';
import { RentalControllerService } from './rentalController.service';
export const APIS = [BookControllerService, CustomerControllerService, RentalControllerService];
