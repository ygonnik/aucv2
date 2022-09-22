CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "admin" bit,
  "first_name" varchar,
  "second_name" varchar,
  "email" varchar,
  "hash" varchar,
  PRIMARY KEY ("id", "email")
);

CREATE TABLE "message" (
  "user1_id" int,
  "user2_id" int,
  "send_at" timestamp,
  "content" varchar
);

CREATE TABLE "lot" (
  "id" SERIAL PRIMARY KEY,
  "owner" int,
  "end_at" timestamp,
  "body_style" varchar,
  "brand" varchar,
  "model" varchar,
  "engine_volume" int,
  "power" int,
  "mileage" int,
  "fuel" varchar,
  "drivetrain" varchar,
  "transmission" varchar,
  "color" varchar,
  "steering_wheel" varchar,
  "description" varchar,
  "start_price" int,
  "current_price" int,
  "redemption_price" int,
  "city" varchar
);

ALTER TABLE "message" ADD FOREIGN KEY ("user1_id") REFERENCES "user" ("id");

ALTER TABLE "message" ADD FOREIGN KEY ("user2_id") REFERENCES "user" ("id");

ALTER TABLE "lot" ADD FOREIGN KEY ("owner") REFERENCES "user" ("id");
