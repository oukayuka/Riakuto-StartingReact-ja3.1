class Person:
  def __init__(self, name):
    self.name = name

  def greet(self):
    def doIt():
      print("Hi, I'm " + self.name)

    doIt()

minky = Person("Momo")
minky.greet()
