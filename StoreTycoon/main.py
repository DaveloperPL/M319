
import random
import time

from prettytable import PrettyTable

unlocked = [True, False, False, False, False]
foodTypes = ["Snacks", "Meats", "Vegetables", "Fruits", "Grains"]

snacksTable = 0
meatTable = 0
veggieTable = 0
fruitTable = 0
grainTable = 0
customerLimit = 5

FirstName = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
LastName = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"]

money = 5000

customers = []

#Items
snacks = []
meat = []
veggies = []
fruit = []
grain = []

allItems = [snacks, meat, veggies, fruit, grain]

class Customers:
    def __init__(self, age, rating, returnAmount, wealth):
        name = random.choice(FirstName) + " " + random.choice(LastName)
        self.name = name
        self.age = age
        self.rating = rating
        self.returnAmount = returnAmount
        self.wealth = wealth
    def getName(self):
        return self.name
    def getRating(self):
        return self.rating
    def getReturnAmount(self):
        return self.returnAmount
    def getWealth(self):
        return self.wealth
    def increaseRating(self):
        self.rating += 0.1
    def decreaseRating(self):
        self.rating -= 0.1

class FoodItem:
    def __init__(self, name, amount, price, cost, appeal):
        self.name = name
        self.amount = amount
        self.price = price
        self.cost = cost
    def getName(self):
        return self.name
    def getCost(self):
        return self.cost
    def getAmount(self):
        return self.amount
    def getPrice(self):
        return  self.price

def init():
    #Make snacks
    snacks.append(FoodItem("Doritos", 5, 2, (random.randint(50, 100))/100, 2))
    snacks.append(FoodItem("Takis", 5, 3, (random.randint(100, 200)) / 100, 3))
    snacks.append(FoodItem("Combos", 5, 2.50, (random.randint(75, 150)) / 100, 3))
    snacks.append(FoodItem("Nut Bar", 0, 1.50, (random.randint(50, 100)) / 100, 1))
    snacks.append(FoodItem("Gum", 0, 1, (random.randint(25, 75)) / 100, 1))

def main():
    print("Welcome to Store Tycoon! Your goal as a owner of a store is to make sure that you are as profitable as possible while still keeping your employees and customers happy!")
    while True:
        print("/--------------------------------------/")
        print(" 1. Hire Employees \n 2. Stock Management \n 3. Loans \n 4. Customers \n 5. Customer Cycle")
        print("/--------------------------------------/")
        x = int(input())
        if x == 1:
            employeeManagement()
        elif x == 2:
            stockManagement()
        elif x == 3:
            print()
        elif x == 4:
            print()
        elif x == 5:
            customerCycle()

def tableUpdater():
    print("/--------------------------------------/")
    for i in range(5):
        if unlocked[i] == True:
            if i == 0:
                snacksTable = PrettyTable(["Snack Name", "Cost", "Amount Available"])
                for x in snacks:
                    snacksTable.add_row([x.getName(), x.getCost(), x.getAmount()])
                print(snacksTable)
            elif i == 1:
                meatTable = PrettyTable(["Meat Type", "Cost", "Amount Available"])
                for x in meat:
                    meatTable.add_row([x.getName(), x.getCost(), x.getAmount()])
                print(meatTable)
            elif i == 2:
                veggieTable = PrettyTable(["Vegetable Name", "Cost", "Amount Available"])
                for x in veggieTable:
                    veggieTable.add_row([x.getName(), x.getCost(), x.getAmount()])
                print(veggieTable)
            elif i == 3:
                fruitTable = PrettyTable(["Fruit Name", "Cost", "Amount Available"])
                for x in fruit:
                    fruitTable.add_row([x.getName(), x.getCost(), x.getAmount()])
                print(fruitTable)
            elif i == 4:
                grainTable = PrettyTable(["Grain Name", "Cost", "Amount Available"])
                for x in grain:
                    grainTable.add_row([x.getName(), x.getCost(), x.getAmount()])
                print(grainTable)
        else:
            print(foodTypes[i], "have not been unlocked yet!")
    print("/--------------------------------------/")
def employeeManagement():
    print("")

def stockManagement():
    global money
    location = 0
    loc2 = 0
    tableUpdater()
    print("What type of food would you like to manage the stock of? \n 1. Snacks \n 2. Meats \n 3. Vegetables \n 4. Fruits \n 5. Grains \n 6. Main Menu")
    x = input()
    if x == 1:
        print(snacksTable)
        location = 0
    elif x == 2:
        print(meatTable)
        location = 1
    elif x == 3:
        print(veggieTable)
        location = 2
    elif x == 4:
        print(fruitTable)
        location = 3
    elif x == 5:
        print(grainTable)
        location = 4
    elif x == 6:
        return
    print("Which of the following would you like to manage the stock of? \n 1. ", allItems[location][0].getName(), " \n 2. ", allItems[location][1].getName(), " \n 3. ", allItems[location][2].getName(), " \n 4. ", allItems[location][3].getName(), " \n 5. ", allItems[location][4].getName())
    x = int(input())
    if x == 1:
        loc2 = 0
    elif x == 2:
        loc2 = 1
    elif x == 3:
        loc2 = 2
    elif x == 4:
        loc2 = 3
    elif x == 5:
        loc2 = 4
    while True:
        print(allItems[location][loc2].getName(), "Stats:")
        print("Cost To Buy Price:", allItems[location][loc2].getCost())
        print("Current Price:", allItems[location][loc2].getPrice())
        print("Amount:", allItems[location][loc2].getAmount())
        print("What would you like to do? \n 1. Change Selling Price \n 2. Buy More")
        x = int(input())
        if x == 1:
            print("Set New Price:")
            allItems[location][loc2].price = float(input())
        elif x == 2:
            print("Amount Of Product: ")
            x = int(input())
            y = x
            print("Total Cost: ", x*allItems[location][loc2].cost)
            print(money)
            if x*allItems[location][loc2].cost > money:
                print("Sorry, You cant afford this!")
                print("1. Return")
                x = int(input())
                return
            print("Are you sure you want to buy this? 1. Yes 2. No")
            x = int(input())
            if x == 1:
                money = money - y*allItems[location][loc2].cost
                allItems[location][loc2].amount += y
                print("Money: ", money)
                print(allItems[location][loc2].name, "Amount: ", allItems[location][loc2].amount)
            else:
                print("Canceled")
                print("1. Return")
                x = input()
                return
        print("Are you done? 1. Yes 2. No")
        x = int(input())
        if x == 1:
            return

def customerCycle():
    while len(customers) > customerLimit:
        customers.pop(len(customers)-1)
    while len(customers) < customerLimit:
        customers.append(Customers(random.randint(10, 90), 2.5, random.randint(1, 7), random.randint(4,10)))
    for i in range(len(customers)-1):
        g = int(customers[i].rating * 10)
        if g < 1:
            g = 2
        x = random.randint(1, g)
        if x == 1:
            customers.pop(i)
    for i in range(len(customers)):
        x = 0
        y = random.randint(0, 4)
        z = random.randint(1, 2*customers[i].getWealth())
        total = 0
        while total != z:
            if len(allItems[x]) == 0:
                customers[i].decreaseRating()
            else:
                if allItems[x][y].amount > 0:
                    amountWillingToPay = customers[i].getWealth()/2
                    if x == 1 and customers[i].getAge() < 25:
                        amountWillingToPay += 2
                    if amountWillingToPay >= allItems[x][y].getPrice():
                        customers[i].increaseRating()
                        total += 1
                    else:
                        customers[i].decreaseRating()
                else:
                    customers[i].decreaseRating()
            x = 0
            y = random.randint(0, 4)
    for i in range(0, len(customers)-1):
        if customers[i].rating < 1:
            customers[i].rating = 1
    print("DONE")
if __name__ == '__main__':
    init()
    main()