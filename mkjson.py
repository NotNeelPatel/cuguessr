buildings = [
    "AA",
    "AB",
    "AC",
    "AH",
    "AP",
    "AT",
    "CB",
    "CC",
    "CO",
    "DH",
    "DT",
    "FH",
    "FR",
    "GH",
    "GR",
    "GY",
    "HC",
    "HP",
    "HS",
    "IH",
    "LA",
    "LE",
    "LH",
    "LX",
    "MB",
    "MC",
    "ME",
    "ML",
    "NB",
    "NI",
    "NW",
    "PA",
    "PG",
    "PH",
    "RB",
    "RH",
    "RO",
    "RU",
    "SA",
    "SC",
    "SH",
    "SP",
    "SR",
    "TB",
    "TC",
    "TT",
    "UC",
    "VS",
]

names = [
    "Architecture Building",
    "ARISE Building",
    "Athletics",
    "Alumni Hall",
    "Azrieli Pavillion",
    "Azrieli Theatre",
    "Canal Building",
    "Colonel By Child Care Centre",
    "Residence Commons",
    "Dundas House",
    "Dunton Tower",
    "Fieldhouse",
    "Frontenac House",
    "Glengarry House",
    "Grenville House",
    "Gymnasium",
    "Human Computer Interaction Building",
    "Herzberg Laboratories",
    "Health Sciences Building",
    "Ice House",
    "Loeb Building",
    "Leeds House",
    "Lanark House",
    "Lennox and Addington House",
    "Maintenance Building",
    "Minto Centre",
    "Mackenzie Building",
    "MacOdrum Library",
    "Nesbitt Biology Building",
    "Nicol Building",
    "National Wildlife Research Centre",
    "Paterson Hall",
    "Parking Garages",
    "Prescott House",
    "Richcraft Hall",
    "Renfrew House",
    "Robertson Hall",
    "Russell House",
    "Southam Hall",
    "Steacie Building",
    "Stormont House",
    "St. Patrick's Building",
    "Social Sciences Research Building",
    "Tory Building",
    "Tennis Centre",
    "Carleton Technology and Training Centre",
    "University Centre",
    "Visualization and Simulation Building"
]


print("[\n")
for i in range(len(buildings)):
    print('\t{\n\t\t"building": "'+names[i] +
          '",\n\t\t"acronym": "'+buildings[i]+'"\n\t},')
print("\n]")
