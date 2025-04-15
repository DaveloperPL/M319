import random
import time

deck = []
hand = []
cards = []
drawAmount = []
originalDealer = []

def Deck():
    deck.clear()
    for i in range(0,4):
        for x in range(1, 14):
            if x > 10:
                deck.append(10)
            else:
                deck.append(x)
Deck()
def Scenario1():
    bust = 0
    notBust = 0
    Deck()
    print("How many cards do you want?")
    x = int(input())
    for i in range(0, x):
        print("Card value?")
        x = int(input())
        cards.append(x)
    for _ in range(10000):
        Deck()
        for h in range(0, len(cards)):
            for o in range(0, len(deck)):
                if cards[h] == deck[o]:
                    deck.pop(o)
                    break
        sum = 0
        hand.clear()
        for q in cards:
            hand.append(q)
        for z in hand:
            sum = sum + z
        y = random.randint(1, len(deck)-1)
        sum = sum + deck[y]
        if sum > 21:
            bust += 1
        else:
            notBust += 1
    print((bust/(bust+notBust))*100)

def Scenario2():
    for _ in range(0, 1000000):
        Deck()
        busted = False
        sum = 0
        num = 0
        while not busted:
            num += 1
            y = random.randint(0, len(deck)-1)
            sum += deck[y]
            deck.pop(y)
            if sum > 21:
                busted = True
                drawAmount.append(num)
    number = 0
    for q in drawAmount:
        number = number + q
    print("Average draw amount: ", number/len(drawAmount))

dealer = []

def Scenario3():
    Deck()
    bust = 0
    NotBust = 0
    win = 0
    print("How many cards do you want?")
    x = int(input())
    for i in range(0, x):
        print("Card value?")
        x = int(input())
        cards.append(x)
    for _ in range(100000):
        dealer.clear()
        Deck()
        for h in range(0, len(cards)):
            for o in range(0, len(deck)):
                if cards[h] == deck[o]:
                    deck.pop(o)
                    break
        sumP = 0
        for o in cards:
            sumP += o
        while True:
            sum = 0
            x = random.randint(0, len(deck)-1)
            dealer.append(deck[x])
            deck.pop(x)
            for z in dealer:
                sum += z
            if 16 < sum < 22:
                if sum < sumP:
                    win += 1
                else:
                    NotBust += 1
                break
            elif sum > 21:
                bust += 1
                break
    print("Win percentage: ", ((win+bust)/(bust+NotBust+win))*100)

def Scenario4():
    Deck()
    bust = 0
    NotBust = 0
    win = 0
    print("How many cards do you want?")
    x = int(input())
    for i in range(0, x):
        print("Card value?")
        x = int(input())
        cards.append(x)
    for _ in range(100000):
        dealer.clear()
        Deck()
        for h in range(0, len(cards)):
            for o in range(0, len(deck)):
                if cards[h] == deck[o]:
                    deck.pop(o)
                    break
        sumP = 0
        for o in cards:
            sumP += o
        if sumP > 21:
            for i in range(0, len(cards)):
                if cards[i] == 11:
                    cards[i] = 1
                    break
            sumP = 0
            for u in cards:
                sumP += u
        if sumP + 10 < 22:
            for i in range(0, len(cards)):
                if cards[i] == 1:
                    cards[i] = 11
                    break
            sumP = 0
            for l in cards:
                sumP += l
        while True:
            sum = 0
            if sum > 21:
                for i in range(0, len(dealer)):
                    if dealer[i] == 11:
                        dealer[i] = 1
                        break
                sum = 0
                for y in dealer:
                    sum += y

            if 16 < sum < 22:
                if sum < sumP:
                    win += 1
                else:
                    NotBust += 1
                break
            elif sum > 21:
                bust += 1
                break
            x = random.randint(0, len(deck) - 1)
            dealer.append(deck[x])
            deck.pop(x)
            for z in dealer:
                sum += z
    print("Win percentage: ", ((win + bust) / (bust + NotBust + win)) * 100)

def Scenario5():
    win = 0
    lose = 0
    Hit = [0,0]
    winWhenHit = [0,0,0,0]
    hit = True
    Deck()
    x = random.randint(0, len(deck)-1)
    dealer.append(deck[x])
    x = random.randint(0, len(deck) - 1)
    dealer.append(deck[x])
    print("How many cards do you want?")
    x = int(input())
    for i in range(0, x):
        print("Card value?")
        x = int(input())
        hand.append(x)
    for h in range(0, len(hand)):
        for o in range(0, len(deck)):
            if hand[h] == deck[o]:
                deck.pop(o)
                break
    print("What value of dealer card??")
    x = int(input())
    dealer[0] = x
    print(hand)
    print("Dealer : ???, ", dealer[0])
    originalDealer.append(dealer[0])
    originalDealer.append(dealer[1])
    for _ in range(100000):
        win +=1
        Deck()
        dealer.clear()
        dealer.append(originalDealer[0])
        dealer.append(originalDealer[1])
        x = random.randint(0, len(deck)-1)
        dealer.pop(1)
        dealer.append(deck[x])
        deck.pop(x)
        cards.clear()
        for i in range(0, len(hand)):
            cards.append(hand[i])
        for h in range(0, len(cards)):
            for o in range(0, len(deck)):
                if cards[h] == deck[o]:
                    deck.pop(o)
                    break
        sumP = 0
        for o in cards:
            sumP += o
        if sumP > 21:
            for i in range(0, len(cards)):
                if cards[i] == 11:
                    cards[i] = 1
                    break
            sumP = 0
            for u in cards:
                sumP += u
        if sumP + 10 < 22:
            for i in range(0, len(cards)):
                if cards[i] == 1:
                    cards[i] = 11
                    break
            sumP = 0
            for l in cards:
                sumP += l
        uu = random.randint(0, 2)
        if uu == 1:
            y = random.randint(0, len(deck) - 1)
            cards.append(deck[y])
            deck.pop(y)
            Hit[0] += 1
            hit = True
        else:
            Hit[1] += 1
            hit = False
        sumP = 0
        for o in cards:
            sumP += o
        while True:
            sum = 0
            for z in dealer:
                sum += z
            if sum > 21:
                for i in range(0, len(dealer)):
                    if dealer[i] == 11:
                        dealer[i] = 1
                        break
                sum = 0
                for y in dealer:
                    sum += y
            if sum > 21:
                if hit == True:
                    winWhenHit[0] += 1
                else:
                    winWhenHit[2] += 1
                break
            if sumP > 21:
                if hit == True:
                    winWhenHit[1] += 1
                else:
                    winWhenHit[3] += 1
                break
            while not 16 < sum < 22:
                g = random.randint(0, len(deck) - 1)
                dealer.append(deck[g])
                deck.pop(g)
                for z in dealer:
                    sum += z
                if sum > 21:
                    break
            if 16 < sum < 22:
                if sum < sumP:
                    if hit == True:
                        winWhenHit[0] += 1
                    else:
                        winWhenHit[2] += 1
                    break
                elif sumP <= sum:
                    if hit == True:
                        winWhenHit[1] += 1
                    else:
                        winWhenHit[3] += 1
                    break
    print(Hit)
    print(winWhenHit)
    num1 = winWhenHit[0] / (winWhenHit[0] + winWhenHit[1] + winWhenHit[2] + winWhenHit[3])
    num2 = winWhenHit[2] / (winWhenHit[0] + winWhenHit[1] + winWhenHit[2] + winWhenHit[3])
    num1 = num1*100
    num2 = num2*100
    print("Percent chance of win when hit ", num1)
    print("Percent chance of win when not hit ", num2)

player1 = []
player2 = []
battle = []

def shuffle():
    for _ in range(0, 100):
        for i in range(0, len(battle)):
            x = random.randint(0, len(battle) - 1)
            temp = battle[i]
            battle[i] = battle[x]
            battle[x] = temp

def Scenario6():
    global player1, player2
    Deck()
    for _ in range(0, 10000):
        for i in range(0, len(deck)):
            x = random.randint(0, len(deck)-1)
            temp = deck[i]
            deck[i] = deck[x]
            deck[x] = temp
    while len(deck) != 0:
        player1.append(deck[0])
        deck.pop(0)
        player2.append(deck[0])
        deck.pop(0)
    for i in range(0, 26):
        if player1[i] == 1:
            player1[i] = 11
        if player2[i] == 1:
            player2[i] = 11
    done = False
    rounds = 0
    while not done:
        if len(player1) == 0:
            break
        if len(player2) == 0:
            break
        location = 0
        rounds += 1
        battle.append(player1[0])
        battle.append(player2[0])
        player1.pop(0)
        player2.pop(0)
        while battle[location] == battle[location+1]:
            if battle[location] == battle[location + 1] and (len(player2) < 2 or len(player1) < 2):
                done = True
                break
            #Flipped cards
            battle.append(player1[0])
            player1.pop(0)
            battle.append(player2[0])
            player2.pop(0)
            #Visible Cards
            battle.append(player1[0])
            player1.pop(0)
            battle.append(player2[0])
            player2.pop(0)
            location += 2
        if done:
            break
        if battle[location] > battle[location+1]:
            shuffle()
            player1 += battle
        elif battle[location] < battle[location+1]:
            shuffle()
            player2 += battle
        battle.clear()
    print("Number of rounds: ", rounds)
Scenario6()