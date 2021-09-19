import { Ingredient } from "./ingredient";

export interface Recipe {
    id: number;
    name: string;
    description: string;
    instructions: string;
    imagePath: string;
    ingredients: Array<Ingredient>;
}