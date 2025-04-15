#import things
import colorama
from colorama import Fore, Back, Style
colorama.init(autoreset=True)

import time
import keyboard
import random
import math

#Variables
firstTime = True
planeCrashed = False
seatChoice = 0
cockpitItems = ["Locked cabinet", "Cockpit door", "Cabinet", "Combination"]
cargobayItems = [Fore.LIGHTRED_EX + "Flare", Fore.LIGHTRED_EX + "Crowbar", Fore.LIGHTRED_EX + "Nothing"]
memory = []
inventory = []
numOfFlipsRequired = random.randint(1,3)
numOfFlips = 0
progressBar = "⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛"
progress = 0
cargobox = False
correctBox = random.randint(0,2)
cargobayCabinet = False
cockpitPrintLines = [Fore.YELLOW + "This must need a combination of some kind", Fore.RED + "If i can find the key to the cockpit then i could escape...", Fore.LIGHTGREEN_EX + "Seems unlocked... it must have some kind of loot in it.", Fore.YELLOW + "This must unlock a cabinet..."]
choicesCockpit = ["2. ??????", "3. ??????", "4. ??????"]
cabinetLooted = False
cockpitDoorUnlocked = False
escapedPlane = False
foundPerson = False
currentRoom = ["cargobay"]
forestItems = ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "a person", "climbing gear", "wood", "wood", "wood", "wood", "wood", "wood", "wood", "wood", "wood", "wood", "wood"]
#the array above contains alot of duplucates in order to create a higher chance of getting a certain thing
start = time.time()
h = 0
e = 0
wood = False
woodAmount = 0
climbingGear = False
flare = False

def theEnd():
    global start
    print("Congratulations, you survived my plane crash escape room!")
    hours = 0
    minutes = 0
    end = time.time()
    Times = end - start
    math.trunc(Times)
    seconds = Times
    if Times / 3600 > 1:
        x = Times / 3600
        hours = math.trunc(x)
        remainder = x - hours
        Times = remainder * 3600
    if Times/60 > 1:
        y = Times/60
        minutes = math.trunc(y)
        remainder = y - minutes
        seconds = remainder * 60
    hours = str(math.trunc(hours))
    minutes = str(math.trunc(minutes))
    seconds = str(math.trunc(seconds))
    print("It took you " + hours + " hours " + minutes + " minutes " + seconds + " seconds to complete this room")

def mountain():
    global flare
    if climbingGear == True:
        print("You scale the mountain")
        for i in range(0, len(inventory)):
            if inventory[i] == Fore.LIGHTRED_EX + "Flare":
                flare = True
        if flare == True:
            print("You shoot a flare into the sky.")
            time.sleep(1)
            print("A plane flys by and the rescue team finds you.")
            currentRoom[0] = "done"
        else:
            print("You see a helicopter but you dont have a flare to catch their attention.")
            time.sleep(2)
            print("You climb down to the beach")
            currentRoom[0] = "beach"
    else:
        print("You cannot climb up the mountain because you do not have climbing gear")
        currentRoom[0] = "beach"

def forest():
    global h, e, wood, woodAmount, climbingGear
    print("You are in the forest. Press E to search or press 1 to leave.")
    x = input()
    wood = False
    location = 0
    if x == "e":
        print("You scavenge the forest")
        time.sleep(1)
        y = random.randint(0, len(forestItems)-1)
        print("You found " + forestItems[y])
        for i in range(0, len(forestItems)):
            if forestItems[i] == "a person":
                e = i
            if forestItems[i] == "climbing gear":
                h = i
            if forestItems[i] == "wood" and wood == False:
                wood = True
                location = i
        if y == e:
            print(Fore.RED + "You: Hey!!! Over here!!!")
            time.sleep(2)
            print(Fore.GREEN + "Person: ???")
            time.sleep(2)
            print(Fore.GREEN + "Person: What are you doing so deep in the forest?")
            time.sleep(2)
            print(Fore.LIGHTBLUE_EX + "You: There was a plane crash on the beach, please help me.")
            time.sleep(2)
            print(Fore.GREEN + "Person: Oh, Oh my...")
            time.sleep(2)
            print(Fore.GREEN + "Person: Here lets get you to the city...")
            currentRoom[0] = "done"
            theEnd()
            e = 0
        if y == h:
            print("I could use this on that mountain and then shoot a flare in order to " + Fore.RED + "Escape...")
            inventory.append("climbing gear")
            forestItems[h] = "nothing"
            h = 0
            climbingGear = True
        if y > location:
            inventory.append("wood")
            woodAmount = woodAmount + 1
    elif x == "1":
        print("you return to the beach")
        currentRoom[0] = "beach"

def eastBeach():
    global woodAmount
    print("There seems to be a washed up boat...")
    time.sleep(1)
    if woodAmount > 1:
        print("I think I have enough wood to repair this...")
        time.sleep(2)
        print(Fore.WHITE + Back.BLUE + "12 hours later...")
        time.sleep(1)
        print("You hop into the boat and sail away into the sunset.")
        currentRoom[0] = "done"
    else:
        print("If I had 2 pieces of wood I could fix it... There must be some in the forest")
        print("Press 1 to leave")
        x = input()
        if x == "1":
            currentRoom[0] = "beach"

def beach():
    print("Where would you like to go? 1. Forest 2. East Beach 3. Mountain (requires a flare in order to escape)")
    x = input()
    if  x == "1":
        currentRoom[0] = "forest"
    elif x == "2":
        currentRoom[0] = "eastBeach"
    elif x == "3":
        currentRoom[0] = "mountain"

def beachintro():
    print("The beach has a forest that probably contains some scavenging items.")
    time.sleep(0.6)
    print("Seems like the beach stretches further.")
    time.sleep(0.6)
    print("There also is a large mountain")
    time.sleep(0.6)

def lockedCabinet():
    print("You arrive at the Locked Cabinet")
    time.sleep(1)
    for i in range(len(memory)):
        if memory[i] == "Combination":
            print("Hmm...")
            time.sleep(0.5)
            print("Seems like i need to use the combination i found...")
            time.sleep(0.5)
            print("The combination reads 110011, 000001, 100000")
            time.sleep(1)
            print("This seems to be binary... While the lock is in decimal... Ill have to convert this and input it into the lock")
            time.sleep(0.5)
            print("What is the combination Format: Number, Number, Number")
            x = input()
            while True:
                if x == "51, 1, 32":
                    print(Fore.RED + "Click")
                    time.sleep(1)
                    print("You found the " + Fore.RED + " Key!")
                    inventory.append("Key")
                    return
                else:
                    print("The lock didn't click...")
                    time.sleep(1)
                    print("The combination reads 110011, 000001, 100000")
                    time.sleep(0.5)
                    print("What is the combination Format: Number, Number, Number")
                    x = input()

def cabinet():
    global cabinetLooted
    print("You open the cabinet.")
    time.sleep(1)
    if cabinetLooted == True:
        print("Hmm... Seems empty.")
    else:
        print("You found a Med-kit!")
        inventory.append("Med-kit")
        cabinetLooted = True
        return

def cockpitDoor():
    global cockpitDoorUnlocked, escapedPlane
    if cockpitDoorUnlocked == False:
        for i in range(len(memory)):
            if inventory[i] == "Key":
                print("The door unlocks")
                cockpitDoorUnlocked = True
                break
        else:
            print("I need a " + Fore.GREEN + "Key " + "to unlock this door...")
    if cockpitDoorUnlocked == True:
        print("You enter the pilots area.")
        time.sleep(0.5)
        print("There is a huge hole in the front of the plane. But there seems there to be nothing else of use here")
        time.sleep(1)
        print("Would you like to escape the plane or return?")
        time.sleep(0.5)
        print("1. Stay 2. Leave")
        x = input()
        if x == "1":
            return
        elif x == "2":
            print("You jump down to the sandy beach.")
            time.sleep(1)
            escapedPlane = True
            beachintro()
            currentRoom[0] = "beach"

def cockpit():
    for i in range(len(memory)):
        for y in range(3):
            if memory[i] == cockpitItems[y]:
                choicesCockpit[y] = str(y+2) + ". " + cockpitItems[y]
    print("You head up to the cockpit, you cannot see very well, press E to search or go to 1. Cargobay " + choicesCockpit[0] + " " + choicesCockpit[1] + " " + choicesCockpit[2])
    x = str(input())
    if x == "e":
        x = ""
        x = random.randint(0, 3)
        print(Fore.GREEN + "Searching...")
        time.sleep(0.5)
        print(Fore.YELLOW + "Searching...")
        time.sleep(0.5)
        print(Fore.RED + "Searching...")
        time.sleep(0.5)
        print("You found a " + Fore.BLUE + cockpitItems[x])
        memory.append(cockpitItems[x])
        print(cockpitPrintLines[x])
        time.sleep(0.5)
        print(Fore.LIGHTBLUE_EX + "You return to the cockpit")
    if x == "1":
        x = ""
        print("Heading to the Cargobay...")
        time.sleep(1)
        currentRoom[0] = "cargobay"
    for i in range(len(memory)):
        for y in range(3):
            if memory[i] == cockpitItems[y] and x == "2":
                x = ""
                lockedCabinet()
            elif memory[i] == cockpitItems[y] and x == "3":
                print("you see a note on the door. The riddle reads: What can travel all around the world without leaving its corner?")
                f = str(input().lower())
                if f == "stamp" or f == "a stamp":
                    x = ""
                    cockpitDoor()
            elif memory[i] == cockpitItems[y] and x == "4":
                x = ""
                cabinet()

def plane():
    print("Do you want to head to the 1. Cockpit or 2. Cargobay")
    x = int(input())
    if x == 1:
        currentRoom[0] = "cockpit"
    elif x == 2:
        currentRoom[0] = "cargobay"
def cargobay():
    global cargobayCabinet, escapedPlane
    print("You arrive at the cargobay, it is much clearer here. You make your way to the back past 3 cargo boxes and find the lever to the escape has broken off it must have fell below one of the cargo boxes. You also see a cabinet.")
    time.sleep(0.5)
    print("Where do you want to go? 1. Cabinet 2. Cargoboxes 3. Switch")
    x = int(input())
    if x == 1 and cargobayCabinet == False:
        print("You see a note on the cabinet. It reads: What gets wet while drying? (Answer the riddle)")
        d = str(input()).lower()
        if d == "a towel" or d == "towel":
            y = random.randint(0,2)
            print("you head to the cabinet and it is unlocked. inside you find " + cargobayItems[y])
            inventory.append(cargobayItems[y])
            cargobayCabinet = True
            time.sleep(0.5)
        else:
            print("Incorrect")
            time.sleep(0.5)
    elif x == 1 and cargobayCabinet == True:
        print("The cabinet is already empty. You must have already searched it.")
        time.sleep(0.5)
    elif x == 2 and cargobox == False:
        print("You head to the cargoboxes, the key must be underneath one of these...")
        time.sleep(0.5)
        time.sleep(1)
        print("You see a note on one of the boxes. It reads: What can you catch, but not throw? (Answer the riddle)")
        f = str(input()).lower()
        if f == "cold" or f == "a cold":
            print("What do you want to do? 1. Flip a box 2. Leave")
            z = int(input())
            if z == 1:
                currentRoom[0] = "cargoboxes"
                return
        else:
            print("Incorrect")
    elif x == 2 and cargobox == True:
        print("You already have gone through the cargoboxes!")
        time.sleep(0.5)
    elif x == 3:
        print("The switch seems to need a lever and it should work")
        time.sleep(0.5)
        for i in range(len(inventory)):
            if inventory[i] == "lever":
                print("Would you like to insert the lever and escape? You will not be able to return later. 1. Yes 2. No")
                h = int(input())
                if h == 1:
                    print("You leave the cargobay, you find yourself on a beach.")
                    escapedPlane = True
                    beachintro()
                    currentRoom[0] = "beach"
                else:
                    return
def cargoBoxes():
    global numOfFlips, progressBar, progress, numOfFlipsRequired, cargobox, correctBox
    print("In order to flip the box you must hold down e")
    b = ""
    for i in range(150):
        keyboard.block_key(i)
    while True:
        while True:
            if keyboard.is_pressed("e"):
                for i in range(len(progressBar)):
                    if i != progress:
                        b = b + progressBar[i]
                    elif i == progress:
                        b += "⬜"
                progressBar = b
                b = ""
                progress = progress + 1
                break
        print(progressBar)
        time.sleep(0.1)
        if progressBar == "⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜":
            numOfFlips += 1
            if numOfFlips == numOfFlipsRequired:
                print("You found the lever!")
                time.sleep(1)
                for i in range(150):
                    keyboard.unblock_key(i)
                inventory.append("lever")
                cargobox = True
                print("You return to the cargobay")
                time.sleep(1)
                currentRoom[0] = "cargobay"
                return
            else:
                print("Hmm... Nothing in there. Do you want to keep looking? 1. yes 2. no")
                time.sleep(1)
                for i in range(150):
                    keyboard.unblock_key(i)
                g = int(input())
                if g == 1:
                    progressBar = "⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛"
                    progress = 0
                    return
                elif g == 2:
                    cargobay()
                    break


def main():
    global planeCrashed
    while firstTime == True:
        intro()
    while planeCrashed == False:
        print(Fore.LIGHTBLUE_EX + Style.BRIGHT + "Welcome to Generic Airline we will be taking off in 10 minutes...")
        print(Fore.GREEN + "Choose your seat: 1. Aisle Seat 2. Window Seat")
        x = int(input())
        if x == 1:
            seatChoice = 1
            print(Fore.LIGHTBLUE_EX + "You take the aisle seat. You don't get a nice view, but atleast you a1re closer to the " + Fore.RED + Style.BRIGHT + "emergency exit.")
            time.sleep(5)
            print("You doze off just to awaken to the plane in chaos, both engines have been lost and the plane is seconds away from crashing. You dart for the emergency exit and jump.")
            time.sleep(5)
            print("Luckly the trees broke your fall. You only have a few scratches and bruises. You see beach and walk towards it. You see the plane you where just on.")
            beach()
        elif x == 2:
            seatChoice = 2
            print(Fore.LIGHTBLUE_EX + "You take the window seat. You get the beautiful view of the outside world, but you are further from the " + Fore.RED + Style.BRIGHT + "emergency exit.")
            time.sleep(5)
            print("You doze off just to awaken to the plane in chaos, both engines have been lost and the plane is seconds away from crashing. You are not going to make it to the emergency exit. You brace for impact.")
            time.sleep(5)
            print("You awaken with a sharp pain in your head. You get up to find the emergency exits sealed off by a bunch of shrapnel.")
            time.sleep(1)
            currentRoom[0] = "cockpit"
        planeCrashed = True

def intro():
    global firstTime
    print(Fore.GREEN+"Welcome to the escape room! Press E to begin!")
    x = input().lower()
    if x == "e":
        firstTime = False

while True:
    if currentRoom[0] == "main":
        main()
    elif currentRoom[0] == "cargobay":
        cargobay()
    elif currentRoom[0] == "cockpit":
        cockpit()
    elif currentRoom[0] == "beach":
        beach()
    elif currentRoom[0] == "cargoboxes":
        cargoBoxes()
    elif currentRoom[0] == "forest":
        forest()
    elif currentRoom[0] == "eastBeach":
        eastBeach()
    elif currentRoom[0] == "mountain":
        mountain()
    elif currentRoom[0] == "done":
        theEnd()
        break