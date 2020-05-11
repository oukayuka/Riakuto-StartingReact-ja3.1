class Person:
  def __init__(self, name):
    self.name = name

def greet(this):
  print("Hi, I'm " + this.name)

Person.greet = greet
minky = Person("Momo")
greet(minky)
minky.greet()
