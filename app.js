
//import data from './data.json' assert {type: 'json'};

const messages = [
    "The maximum Level you can reach is 16.",
    "Ingress is an augmented reality massively multiplayer online role-playing location-based game created by Niantic Labs.",
    "Motto: 'The world around you is not what it seems.'",
    "The initial step a player takes to begin playing Ingress is to choose a faction to align themselves with, either the Enlightened or the Resistance.",
    "Two factions face each other: the Enlightened, who approve the influence of the XM and the action of Shapers, and the Resistance, who are against.",
    "To score points, measured in Mind Units (MUs), for their faction a player must create Control Fields by linking three Portals together in a triangle.",
    "Glyph Hacking, also known as glyphing or glacking, is an extended version of hacking accessible through a Portal's info card. Agents must successfully trace out certain Glyphs in the given amount of time to acquire additional items and earn bonus AP for each Hack.",
    "Power Cubes were developed by Dr. Oliver Lynton-Wolfe working for the Niantic Project as devices that store Exotic Matter (XM) in a way that was previously unavailable.",
    "Resonators are the central item of Ingress, enabling Agents to capture Portals and use them to form Control Fields Δ.",
    "XMP Bursters are the primary weapons used to attack enemy Portals."
]

$("#button").click(getRandomMessage);

function getRandomMessage(){
    let number = Math.floor(Math.random() * messages.length);
    return $("#message").empty().append(`<p> ${messages[number]} </p>`);
}
