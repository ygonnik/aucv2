const lots = [];

module.exports= class Lot{

    constructor(owner, end_at, body_style, brand, model, engine_volume, power, mileage, fuel, drivetrain, transmission, color, steering_wheel, description, start_price, current_price, redemption_price, city){
        this.owner = owner;
        this.end_at = end_at;
        this.body_style = body_style;
        this.brand = brand;
        this.model = model;
        this.engine_volume = engine_volume;
        this.power = power;
        this.mileage = mileage;
        this.fuel = fuel;
        this.drivetrain = drivetrain;
        this.transmission = transmission;
        this.color = color;
        this.steering_wheel = steering_wheel;
        this.description = description;
        this.start_price = start_price;
        this.current_price = current_price;
        this.redemption_price = redemption_price;
        this.city = city;
    }
    save(){
        lots.push(this);
    }
    static getAll(){
        return lots;
    }
}