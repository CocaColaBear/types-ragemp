/// <reference path="enums/clothes.d.ts" />
/// <reference path="enums/colshape.d.ts" />
/// <reference path="enums/entity.d.ts" />
/// <reference path="enums/event.d.ts" />
/// <reference path="enums/ped.d.ts" />
/// <reference path="enums/vehicle.d.ts" />

declare namespace RageEnums {
	const enum Marker {
		UPSIDE_DOWN_CONE = 0,
    VERTICAL_CYLINDER = 1,
    THICK_CEVRON_UP = 2,
    THIN_CEVRON_UP = 3,
    CHECKERED_FLAG_RECT = 4,
    CHECKERED_FLAG_CIRCLE = 5,
    VERTICAL_CIRCLE = 6,
    PLANE_MODEL = 7,
    LOST_MC_DARK = 8,
    LOST_MC_LIGHT = 9,
    NUMBER_0 = 10,
    NUMBER_1 = 11,
    NUMBER_2 = 12,
    NUMBER_3 = 13,
    NUMBER_4 = 14,
    NUMBER_5 = 15,
    NUMBER_6 = 16,
    NUMBER_7 = 17,
    NUMBER_8 = 18,
    NUMBER_9 = 19,
    CHEVRON_UP_1 = 20,
    CHEVRON_UP_2 = 21,
    CHEVRON_UP_3 = 22,
    HORIZONTAL_CIRCLE_FLAT = 23,
    REPLAY_ICON = 24,
    HORIZONTAL_CIRCLE_SKINNY = 25,
    HORIZONTAL_CIRCLE_ARROW = 26,
    HORIZONTAL_SPLIT_ARROW_CIRCLE = 27,
    DEBUG_SPHERE = 28,
    DOLLOR_SIGN = 29,
    HORIZONTAL_BARS = 30,
    WOLF_HEAD = 31
	}

	const enum PlayerProp {
		HELMET = 0,
		GLASSES = 1,
		EAR_ACCESSORY = 2
	}

	const enum VehicleSeat {
		DRIVER,
		PASSENGER_1,
		PASSENGER_2,
		PASSENGER_3,
		PASSENGER_4,
		PASSENGER_5,
		PASSENGER_6,
		PASSENGER_7,
		PASSENGER_8,
		PASSENGER_9,
		PASSENGER_10,
		PASSENGER_11,
		PASSENGER_12,
		PASSENGER_13,
		PASSENGER_14,
		PASSENGER_15,
		PASSENGER_16,
	}

	const enum Weather {
		BLIZZARD = "BLIZZARD",
		CLEAR = "CLEAR",
		CLEARING = "CLEARING",
		CLOUDS = "CLOUDS",
		EXTRA_SUNNY = "EXTRASUNNY",
		FOGGY = "FOGGY",
		OVERCAST = "OVERCAST",
		RAIN = "RAIN",
		SMOG = "SMOG",
		SNOW_LIGHT = "SNOWLIGHT",
		THUNDER = "THUNDER",
		XMAS = "XMAS"
	}
}
