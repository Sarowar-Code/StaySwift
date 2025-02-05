import { hotelModel } from "../../models/hotel-model";
import { replaceMongoIdInArray } from "../../utils/index";

export async function getAllHotels() {
    const hotels = await hotelModel.find();
    return replaceMongoIdInArray(hotels);
}
