import { images, icons, COLORS, FONTS, SIZES } from '../../constants/Index';

const confirmStatus = "C"
const pendingStatus = "P"

export const categoriesData = [
    {
        id: 1,
        name: "Education",
        icon: icons.education,
        color: COLORS.yellow,
        expenses: [
            {
                id: 1,
                title: "Tuition Fee",
                description: "Tuition fee",
                location: "Colombo - 04",
                total: 1000.00,
                status: pendingStatus
            },
            {
                id: 3,
                title: "Javascript Books",
                description: "Javascript books",
                location: "Colombo - 03",
                total: 2000.00,
                status: confirmStatus
            },
        ],
    },
    {
        id: 2,
        name: "Nutrition",
        icon: icons.food,
        color: COLORS.blue,
        expenses: [
            {
                id: 5,
                title: "Vitamins",
                description: "Vitamin",
                location: "Colombo - 04 Pharmacy",
                total: 2500.00,
                status: pendingStatus,
            },

            {
                id: 6,
                title: "Protein powder",
                description: "Protein",
                location: "Colombo - 04' Pharmacy",
                total: 5000.00,
                status: confirmStatus,
            },

        ],
    },
    {
        id: 3,
        name: "Child",
        icon: icons.baby_car,
        color: COLORS.darkgreen1,
        expenses: [
            {
                id: 7,
                title: "Toys",
                description: "toys",
                location: "Colombo - 04' Toy Store",
                total: 2525.00,
                status: confirmStatus,
            },
            {
                id: 8,
                title: "Baby Car Seat",
                description: "Baby Car Seat",
                location: "Colombo - 04' Baby Care Store",
                total: 1000.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 4,
        name: "Beauty & Care",
        icon: icons.healthcare,
        color: COLORS.peach,
        expenses: [
            {
                id: 11,
                title: "Skin Care product",
                description: "skin care",
                location: "Colombo - 04' Pharmacy",
                total: 1500.00,
                status: pendingStatus,
            },
            {
                id: 12,
                title: "Lotion",
                description: "Lotion",
                location: "Colombo - 04' Pharmacy",
                total: 2750.00,
                status: confirmStatus,
            },
        ],
    },
    {
        id: 5,
        name: "Sports",
        icon: icons.sports_icon,
        color: COLORS.purple,
        expenses: [
            {
                id: 15,
                title: "Gym Membership",
                description: "Monthly Fee",
                location: "Colombo - 04' Gym",
                total: 5000.00,
                status: pendingStatus,
            },
            {
                id: 16,
                title: "Gloves",
                description: "Gym Equipment",
                location: "Colombo - 04' Gym",
                total: 1000.00,
                status: confirmStatus,
            },
        ],
    },
    {
        id: 6,
        name: "Clothing",
        icon: icons.cloth_icon,
        color: COLORS.red,
        expenses: [
            {
                id: 17,
                title: "T-Shirt",
                description: "Plain Color T-Shirt",
                location: "Colombo - 04' Mall",
                total: 2500.00,
                status: pendingStatus,
            },
            {
                id: 18,
                title: "Jeans",
                description: "Blue Jeans",
                location: "Colombo - 04' Mall",
                total: 3500.00,
                status: confirmStatus,
            },
        ],
    },
    {
        id: 7,
        name: "Flight Tickets",
        icon: icons.flight_tickets,
        color: COLORS.darkGreen,
        expenses: [
            {
                id: 19,
                title: "India",
                description: "Fly",
                // location: "Colombo - 04' Mall",
                total: 2500.00,
                status: pendingStatus,
            },
            {
                id: 20,
                title: "China",
                description: "Fly",
                // location: "Colombo - 04' Mall",
                total: 3500.00,
                status: confirmStatus,
            },
        ],
     },
    {
        id: 8,
        name: "Game",
        icon: icons.game,
        color: COLORS.blue,
        expenses: [
            {
                id: 21,
                title: "India",
                description: "Fly",
                // location: "Colombo - 04' Mall",
                total: 25000.00,
                status: pendingStatus,
            },
            {
                id: 22,
                title: "India",
                description: "Fly",
                // location: "Colombo - 04' Mall",
                total: 3500.00,
                status: confirmStatus,
            },
        ],
     },
     {
        id: 9,
        name: "Reload",
        icon: icons.reload,
        color: COLORS.peach,
        expenses: [
            {
                id: 23,
                title: "India",
                description: "Fly",
                // location: "Colombo - 04' Mall",
                total: 25000.00,
                status: pendingStatus,
            },
            {
                id: 24,
                title: "India",
                description: "Fly",
                // location: "Colombo - 04' Mall",
                total: 3500.00,
                status: confirmStatus,
            },
        ],
     },
     {
        id: 10,
        name: "Bill",
        icon: icons.bill,
        color: COLORS.emerald,
        expenses: [
            {
                id: 25,
                title: "Electricity",
                description: "Electricity",
                // location: "Colombo - 04' Mall",
                total: 25000.00,
                status: pendingStatus,
            },
            {
                id: 26,
                title: "Water Bill",
                description: "Bill",
                // location: "Colombo - 04' Mall",
                total: 3500.00,
                status: confirmStatus,
            },
        ],
     },
     {
        id: 11,
        name: "Transfers",
        icon: icons.send,
        color: COLORS.purple,
        expenses: [
            {
                id: 27,
                title: "Send Money",
                description: "To Frien",
                // location: "Colombo - 04' Mall",
                total: 25000.00,
                status: pendingStatus,
            },
            {
                id: 28,
                title: "Send Money",
                description: "To Church",
                // location: "Colombo - 04' Mall",
                total: 3500.00,
                status: confirmStatus,
            },
        ],
     },


]